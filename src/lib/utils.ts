import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FormattedDate = {
  day: number;
  month: string;
  year: number;
  time: string;
};

export const formatDate = (dateString: string): FormattedDate => {
  const date = new Date(dateString);
  const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day: number = date.getDate();
  const monthIndex: number = date.getMonth();
  const year: number = date.getFullYear();

  let hours: number = date.getHours();
  const minutes: number = date.getMinutes();
  const ampm: string = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12;
  const formattedDate: FormattedDate = {
    day,
    month: months[monthIndex],
    year,
    time: `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`,
  };

  return formattedDate;
};
