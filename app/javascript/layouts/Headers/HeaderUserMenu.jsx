import { Link, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar.jsx";
import userIcon from "../../assets/user.svg";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu.jsx";

function HeaderUserMenu() {
  return (
    <DropdownMenu>
      {/* Avatar がトリガー（押すと開く） */}
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={userIcon} alt="user-alt" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      {/* 表示されるメニュー本体 */}
      <DropdownMenuContent align="end" className="items-center w-40 bg-white">
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
            ログアウト
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default HeaderUserMenu;
