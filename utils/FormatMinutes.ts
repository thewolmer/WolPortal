const convertMinutesToDHMS = (totalMinutes: number) => {
	const days = Math.floor(totalMinutes / 1440); // 1440 minutes in a day
	const hours = Math.floor((totalMinutes % 1440) / 60);
	const minutes = totalMinutes % 60;

	return { days, hours, minutes };
};

// Format the result in a human-readable string
const formatDHMS = ({ days, hours, minutes }: { days: number; hours: number; minutes: number }) => {
	const dayText = days > 0 ? `${days} dy${days > 1 ? 's' : ''}` : '';
	const hourText = hours > 0 ? `${hours} hr${hours > 1 ? 's' : ''}` : '';
	const minuteText = minutes > 0 ? `${minutes} min${minutes > 1 ? 's' : ''}` : '';

	return [dayText, hourText, minuteText].filter(Boolean).join(' ');
};

export const formatMinutes = (totalMinutes: number) => {
	const { days, hours, minutes } = convertMinutesToDHMS(totalMinutes);
	return formatDHMS({ days, hours, minutes });
};
