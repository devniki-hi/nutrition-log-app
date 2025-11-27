import { Link, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar.jsx";
import userIcon from "../assets/user.svg";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu.jsx";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

function Header({ auth }) {
  return (
    <header className="flex items-center justify-between h-16 px-8 border border-slate-100 bg-white">
      {/* ▼ 小画面：ハンバーガーメニュー（lg未満で表示） */}
      <div className="block md:hidden p-4">
        <Sheet>
          <SheetTrigger>
            <Menu className="w-7 h-7 text-slate-700" />
          </SheetTrigger>

          <SheetContent side="left" className="w-64">
            <nav
              aria-label="サイドバー"
              className="flex flex-col gap-6 py-24 px-8 text-lg font-semibold text-slate-700"
            >
              <Link href="/">ホーム</Link>
              <Link href="/meal-log">食事ログ</Link>
              <Link href="/graph">グラフ</Link>
              <Link href="/calendar">カレンダー</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <h1 className="text-2xl font-bold text-slate-800">食事ログ</h1>

      <div className="flex items-center gap-4">
        {auth ? (
          <DropdownMenu>
            {/* Avatar がトリガー（押すと開く） */}
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={userIcon} alt="user-alt" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            {/* 表示されるメニュー本体 */}
            <DropdownMenuContent
              align="end"
              className="items-center w-40 bg-white"
            >
              <DropdownMenuItem asChild>
                <Link href="/mypage">マイページ</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-black" />
              <DropdownMenuItem asChild>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => router.delete("/logout")}
                >
                  Log Out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button asChild variant="outline" size="sm">
            <Link href="/login">Log In</Link>
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
