import { Button } from "@/components/ui/button.jsx";
import { Link } from "@inertiajs/react";
import userIcon from "../assets/user.svg";
import { router } from "@inertiajs/react";

function NavLinks() {
  return (
    <nav
      aria-label="side bar"
      className="flex flex-col gap-6 py-24 px-8 text-lg font-semibold text-slate-700"
    >
      <div className="flex justify-center">
        <div className="rounded-xl bg-white p-4 shadow">
          <img
            src={userIcon}
            alt="ユーザープロフィール"
            className="h-24 w-24"
          />
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => router.delete("/logout")}
      >
        ログアウト
      </Button>
      <Link href="/">ホーム</Link>
      <Link href="/mypage">マイページ</Link>
      <Link href="/foods">食品一覧</Link>
    </nav>
  );
}

export default NavLinks;
