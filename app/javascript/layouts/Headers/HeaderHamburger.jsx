import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { Link } from "@inertiajs/react";
import NavLinks from "../NavLinks.jsx";
import { SheetDescription } from "@/components/ui/sheet.jsx";
function HeaderHamburger() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-7 h-7 text-slate-700" />
      </SheetTrigger>

      <SheetContent side="left" className="w-48 bg-sky-100">
        {/* ▼ アクセシビリティ対応：見えないタイトル */}
        <SheetHeader>
          <SheetTitle>メニュー</SheetTitle>
          <SheetDescription>ここから移動できます</SheetDescription>
        </SheetHeader>
        <NavLinks />
      </SheetContent>
    </Sheet>
  );
}

export default HeaderHamburger;
