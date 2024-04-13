import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Navbar from "./Navbar";

export function SideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <span className="material-symbols-rounded">more_horiz</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetDescription>
            <Navbar isCol />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
