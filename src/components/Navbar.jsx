import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import useDarkMode from "../hooks/useDarkMode";
import Logo from "./Logo";

const Navbar = () => {
    const [isDark, setIsDark ] = useDarkMode();

  return (
    <header className="flex items-center justify-between bg-Neutral0 p-2 rounded-lg shadow-sm dark:bg-Dark">
        <Logo/>
        <button className="bg-Neutral200 dark:bg-Neutral700 p-2 rounded-lg cursor-pointer dark:hover:bg-Neutral600 hover:bg-Neutral300" onClick={() => setIsDark(!isDark)}>
            {!isDark ? <HiOutlineMoon size={30} className="text-Neutral900"/> : <HiOutlineSun size={30} className="text-Neutral0"/>}
        </button>
    </header>
  )
}

export default Navbar