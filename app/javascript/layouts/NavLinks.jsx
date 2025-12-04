import { Link } from "@inertiajs/react";

function NavLinks() {
  return (
    <nav
      aria-label="side bar"
      className="flex flex-col gap-6 py-24 px-8 text-lg font-semibold text-slate-700"
    >
      <Link href="/">ホーム</Link>
      <Link href="/foods">食品一覧</Link>
      <Link href="/foods/new">食品追加</Link>
      <Link href="/meal-logs">食事ログ</Link>
      <Link href="/graph">グラフ</Link>
      <Link href="/calendar">カレンダー</Link>
    </nav>
  );
}

export default NavLinks;
