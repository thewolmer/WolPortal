'use client';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center m-3">
      {theme === 'dark' && <button className="" onClick={() => setTheme('light')}></button>}

      {theme === 'light' && <button className="link" onClick={() => setTheme('dark')}></button>}
    </div>
  );
};
