import HoverRevealText from "@/components/HoverRevealText.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Head, Link } from "@inertiajs/react";
import food_image_path from "../../assets/noimage.png";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Show({ food, flash }) {
  return (
    <>
      <Head title={`Food Show`} />

      <div className="w-full px-12 py-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}

        <div className="flex justify-between mb-6">
          <HoverRevealText
            className="w-1/2"
            textClassName="font-bold md:text-3xl"
          >
            {food.name}
          </HoverRevealText>
          <div className=" flex gap-2">
            <Button asChild>
              <Link
                href={`/foods/${food.id}/edit`}
                className=" bg-slate-600 text-white font-medium"
              >
                編集
              </Link>
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className=" bg-red-400 text-white font-medium">
                  削除
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    食品を削除してもよろしいでしょうか？
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>キャンセル</AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <Link
                      href={`/foods/${food.id}`}
                      method="delete"
                      className=" bg-red-400 text-white font-medium"
                    >
                      削除
                    </Link>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <div className="md:flex md:items-center">
          {/* 左：画像エリア */}
          <div className="md:w-1/2 flex flex-col items-center p-8">
            <div className="aspect-square max-w-[420px] max-h-[420px] w-full bg-gray-50 shadow-md rounded-md ">
              <img
                src={food_image_path}
                alt="food"
                className="w-full h-full object-contain"
              />
            </div>

            <Button
              variant="outline"
              className="
                　bg-sky-100 font-bold
                    m-4 md:m-12 
                    w-9/12
                    text-base
                    md:text-xl
                "
            >
              食事に追加
            </Button>
          </div>

          {/* 右：Food詳細 */}
          <div className="md:w-1/2 bg-sky-50 shadow-md rounded-lg p-4 h-auto">
            <h2 className="text-lg font-semibold mb-4">栄養情報</h2>

            <div className="space-y-3">
              <InfoRow label="分量" value={`${food.portion_value} g`} />
              <InfoRow label="kcal" value={`${food.kcal} kcal`} />
              <InfoRow label="たんぱく質" value={`${food.protein} g`} />
              <InfoRow label="脂質" value={`${food.fat} g`} />
              <InfoRow label="炭水化物" value={`${food.carbs} g`} />
              <InfoRow label="糖質" value={`${food.sugar} g`} />
              <InfoRow label="食物繊維" value={`${food.fiber} g`} />
              <InfoRow label="Janコード" value={food.jan_code} />
              <InfoRow label="メモ" value={food.note} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between border border-gray-200 rounded-md px-3 py-2 bg-slate-50">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
