import { Link, router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import HeaderHamburger from "./HeaderHamburger.jsx";
import HeaderUserMenu from "./HeaderUserMenu.jsx";
import HeaderTitle from "./HeaderTitle.jsx";

function Header({ auth }) {
  return (
    <header className="flex items-center justify-between h-16 px-8 border border-slate-100 bg-white">
      {/* ▼ 小画面：ハンバーガーメニュー（lg未満で表示） */}
      <div className="block md:hidden p-4">{auth && <HeaderHamburger />}</div>
      <HeaderTitle />
      {auth ? (
        <HeaderUserMenu />
      ) : (
        <Button asChild variant="outline" size="sm">
          <Link href="/login">Log In</Link>
        </Button>
      )}
    </header>
  );
}

export default Header;
