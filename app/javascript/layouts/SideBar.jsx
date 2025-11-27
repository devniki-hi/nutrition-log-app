import NavLinks from "./NavLinks.jsx";

export default function SideBar() {
  return (
    <>
      {/* ▼ 大画面：固定サイドバー（lg以上で表示） */}
      <aside className="hidden md:block w-48 bg-sky-100 border border-slate-200">
        <NavLinks />
      </aside>
    </>
  );
}
