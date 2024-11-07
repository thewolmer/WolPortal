import { formatDate } from 'date-fns';
import { useEffect, useState } from 'react';

export const useLanyard = (userId: string) => {
	const [presence, setPresence] = useState<unknown | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [ws, setWs] = useState<WebSocket | null>(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const handleVisibilityChange = () => {
			if (!document.hidden && ws) {
				console.log(`🔵 - [${formatDate(new Date(), 'pppp')}] lanyard: reconnecting due to page inactivity.`);
				ws.close();
			}
		};

		document.addEventListener('visibilitychange', handleVisibilityChange);

		const connectWebSocket = () => {
			const newWs = new WebSocket('wss://api.lanyard.rest/socket');
			let heartbeatInterval: NodeJS.Timeout;

			const handleOpen = () => {
				console.log(`🟩 - [${formatDate(new Date(), 'pppp')}] lanyard ws connection established.`);

				newWs.send(
					JSON.stringify({
						op: 2,
						d: {
							subscribe_to_id: userId,
						},
					}),
				);
			};

			const handleMessage = (messageEvent: MessageEvent) => {
				const message = JSON.parse(messageEvent.data);
				switch (message.op) {
					case 1: {
						const { heartbeat_interval } = message.d;
						if (heartbeat_interval) {
							heartbeatInterval = setInterval(() => {
								newWs.send(JSON.stringify({ op: 3 }));
								console.log(`🟢 - [${formatDate(new Date(), 'pppp')}] lanyard: heartbeat sent.`);
							}, heartbeat_interval);
						}
						break;
					}
					case 0:
						if (message.t === 'INIT_STATE' || message.t === 'PRESENCE_UPDATE') {
							console.log(`🔵 - [${formatDate(new Date(), 'pppp')}] lanyard: ws ${message.t.toLowerCase()}.`);
							setPresence(message.d);
						}
						break;
					default:
						console.log(`🔴 - [${formatDate(new Date(), 'pppp')}] lanyard: Unhandled opcode:`, message.op);
				}
			};

			const handleError = (errorEvent: Event) => {
				console.log(`🔴 - [${formatDate(new Date(), 'pppp')}] lanyard: ws connection failed..`);
				setError('An error occurred while connecting to the WebSocket');
			};

			const handleClose = () => {
				console.log(`🔴 - [${formatDate(new Date(), 'pppp')}] lanyard: ws connection closed.`);
				clearInterval(heartbeatInterval);
			};

			newWs.addEventListener('open', handleOpen);
			newWs.addEventListener('message', handleMessage);
			newWs.addEventListener('error', handleError);
			newWs.addEventListener('close', handleClose);

			setWs(newWs); // Save the WebSocket reference to state

			return newWs;
		};

		const wsInstance = connectWebSocket();

		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
			if (wsInstance) {
				wsInstance.close();
			}
		};
	}, [userId]);

	return { presence, error };
};
