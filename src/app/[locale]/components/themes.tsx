'use client'
import React from 'react'
import { useTheme } from "next-themes";
import { Button } from "@/app/[locale]/components/ui/button";
import { Moon, Sun} from "lucide-react";
import { useState } from "react";

const Themes = () => {
    const [theme, setThemeAll] = useState("light");
    const { setTheme } = useTheme();
    const toggleTheme = () => {
      setThemeAll(theme === "light" ? "dark" : "light");
      setTheme(theme === "light" ? "dark" : "light");
    };
  return (
    <Button
    variant="menu"
    size="icon"
    onClick={toggleTheme}
    className="absolute right-4 top-4"
  >
    <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0  transition-all dark:rotate-0 dark:scale-100" />
    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0  scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  </Button>
  )
}

export default Themes