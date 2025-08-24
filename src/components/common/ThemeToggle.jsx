import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="px-4 mb-5">
      <div className="flex ml-1 items-center p-2 gap-3 rounded-lg ">
        <button
          onClick={toggleTheme}
          className="w-10 h-5 flex cursor-pointer items-center rounded-full p-1  bg-surface-tertiary border border-default"
        >
          <div
            className={`w-4 h-4 rounded-full shadow-md transition-transform duration-500 bg-primary ${
              theme === "light" ? "translate-x-5" : "translate-x-0"
            }`}
          />
          
        </button>
        
        <span 
        onClick={toggleTheme}
        className="text-sm font-bold text-default cursor-pointer select-none">
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </span>
      </div>
    </div>
  );
};
export default ThemeToggle;