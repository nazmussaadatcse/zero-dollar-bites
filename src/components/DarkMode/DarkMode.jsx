import { useState } from "react";
import './dark-mode.css'
import { FaMoon, FaRegMoon } from "react-icons/fa";

const DarkModeToggleButton = () => {
    // Step 1: Add a state variable for dark mode
    const [darkMode, setDarkMode] = useState(false);

    // Step 2: Create a function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            // If dark mode is enabled, add a class to the body element
            document.body.classList.add("dark");
        } else {
            // If dark mode is disabled, remove the class from the body element
            document.body.classList.remove("dark");
        }
    };

    return (
        <div className="dark-mode-toggle">
            {/* Step 4: Add a button to toggle dark mode */}
            <button onClick={toggleDarkMode} className="btn btn-ghost btn-sm rounded-md text-green-700 hover:text-white hover:bg-purple-900">
                {darkMode ? <FaRegMoon></FaRegMoon> : <FaMoon></FaMoon>}
            </button>
        </div>
    );
};

export default DarkModeToggleButton;
