import { TooltipContent, TooltipProvider, TooltipTrigger, Tooltip as UiToolKit } from '@/components/ui/tooltip';

interface TooltipProps {
	content: string;
	side?: 'top' | 'right' | 'bottom' | 'left';
	children: React.ReactNode;
	delayDuration?: number;
}
export const Tooltip = ({ content, side = 'top', delayDuration = 350, children }: TooltipProps) => (
	<TooltipProvider>
		<UiToolKit delayDuration={delayDuration}>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent align="center" sideOffset={3} side={side} className="bg-accent">
				<p className="text-wrap">{content}</p>
			</TooltipContent>
		</UiToolKit>
	</TooltipProvider>
);
