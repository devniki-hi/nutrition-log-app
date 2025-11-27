import { Link } from "@inertiajs/react";

export default function SideBar() {
  return (
    <>
      {/* ▼ 大画面：固定サイドバー（lg以上で表示） */}
      <aside className="hidden md:block w-48 bg-sky-100 border border-slate-200">
        <nav
          aria-label="サイドバー"
          className="flex flex-col gap-6 py-24 px-8 text-lg font-semibold text-slate-700"
        >
          <Link href="/">ホーム</Link>
          <Link href="/meal-log">食事ログ</Link>
          <Link href="/graph">グラフ</Link>
          <Link href="/calendar">カレンダー</Link>
        </nav>
      </aside>
    </>
  );
}
