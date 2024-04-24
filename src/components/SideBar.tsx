import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Navbar from "./Navbar";

interface SideBarProps {
  className?: string;
}

export function SideBar({ className }: SideBarProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className={`${className} bg-transparent border-borderPrimary hover:bg-white/50 dark:hover:bg-white/10`}
          size={"icon"}
        >
          <span className="material-symbols-rounded">more_horiz</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <Navbar isCol />
      </SheetContent>
    </Sheet>
  );
}
