import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function useResultantTheme() {
    const { theme, systemTheme } = useTheme();
    const [resultantTheme,setResultantTheme] = useState<string|undefined>("light");

    useEffect(() => {
        const result = theme === "system"? systemTheme : theme;
        setResultantTheme(result);
    }, [systemTheme, theme]);

    return resultantTheme;
   
}