import { usePage } from "@inertiajs/react";
import SideBar from "./SideBar.jsx";
import Header from "./Headers/Header.jsx";

export default function Layout({ children }) {
  const page = usePage();
  const auth = page.props.auth;

  return (
    // 画面全体のラッパ
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* 上部のヘッダー */}
      <Header auth={auth} />

      {/* ヘッダーの下を左右２カラムに分割 */}
      <div className="flex flex-1">
        {/* 左側のサイドバー */}

        {auth && <SideBar />}

        {/* 右側のメインコンテンツ */}
        <main className="flex-1 bg-slate-50">{children}</main>
      </div>
    </div>
  );
}
