import { useTheme } from "next-themes";

export default function useResultantTheme() {
    const { theme, systemTheme } = useTheme();
    return theme === "system"? systemTheme : theme;
}