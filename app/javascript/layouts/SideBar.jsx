import NavLinks from "./NavLinks.jsx";

export default function SideBar() {
  return (
    <>
      {/* ▼ 大画面：固定サイドバー（lg以上で表示） */}
      <aside className="hidden md:block w-48 bg-sky-100 border border-slate-200">
        <div className="flex flex-col gap-1.5 p-4">
          <h2 className="text-lg font-semibold">メニュー</h2>
          <p className="text-sm text-gray-400">ここから移動できます</p>
        </div>
        <NavLinks />
      </aside>
    </>
  );
}
