import { TooltipContent, TooltipProvider, TooltipTrigger, Tooltip as UiToolKit } from '@/components/ui/tooltip';
import clsx from 'clsx';

interface TooltipProps extends React.ComponentProps<typeof TooltipContent> {
	content: string;
	side?: 'top' | 'right' | 'bottom' | 'left';
	children: React.ReactNode;
	delayDuration?: number;
}
export const Tooltip = ({ content, side = 'top', delayDuration = 200, children, className }: TooltipProps) => (
	<TooltipProvider>
		<UiToolKit delayDuration={delayDuration}>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent align="center" sideOffset={3} side={side} className={clsx('bg-accent', className)}>
				{content}
			</TooltipContent>
		</UiToolKit>
	</TooltipProvider>
);
