import { Button } from "@/components/ui/button.jsx";
import { Head, Link } from "@inertiajs/react";

import userIcon from "../../assets/user.svg";
import UserShow from "./UserShow.jsx";

export default function MyPage({ user, flash }) {
  return (
    <>
      <Head title={"マイページ"} />

      <div className="w-full px-12 py-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}

        <div className="flex justify-between mb-6">
          {/* Header */}
          <h1 className="font-bold text-3xl">マイページ</h1>
          <div className=" flex gap-2">
            <Button asChild className=" bg-slate-600 text-white font-medium">
              <Link href="/mypage/edit">編集</Link>
            </Button>
          </div>
        </div>

        <div className="md:flex md:items-center">
          {/* 左：画像エリア */}
          <div className="md:w-1/2 flex flex-col items-center p-8">
            <div className="aspect-square max-w-[420px] max-h-[420px] w-full bg-gray-50 shadow-md rounded-md ">
              <img
                src={userIcon}
                alt="profile_image"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* 右：詳細 */}
          <div className="md:w-1/2 h-auto">
            <UserShow user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
