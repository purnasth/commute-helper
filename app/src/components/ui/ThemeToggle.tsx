import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="transition-300 flex items-center justify-center rounded-full p-1 text-xl font-bold text-teal-500 group-hover:scale-100"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FiMoon className="text-teal-950" />
      ) : (
        <FiSun className="text-yellow-300" />
      )}
    </button>
  );
}
