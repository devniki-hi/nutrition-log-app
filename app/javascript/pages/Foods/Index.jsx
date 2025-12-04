import { Head, Link } from "@inertiajs/react";
import FoodCard from "./FoodCard.jsx";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import MealModal from "../MealLogs/ModalComponents/MealModal.jsx";
import MealForm from "../MealLogs/ModalComponents/MealForm.jsx";

export default function Index({ foods, flash }) {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [mealFood, setMealFood] = useState(null);

  return (
    <>
      <Head title="Foods" />

      <div className="w-full pt-8 px-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-3xl">食品一覧</h1>
        </div>

        {/* タイルグリッド：画面ごとに列数を変更 */}
        {/*
          sm: 1列（スマホ） → 1×16
          md: 2列
          lg: 4列（中画面） → 4×4
        */}
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
        "
        >
          {foods.map((food) => (
            <div key={food.id}>
              <FoodCard
                food={food}
                footerComponent={
                  <>
                    <Button
                      className=" bg-slate-600 text-white font-medium"
                      onClick={() => {
                        setOpenAddModal(true);
                        setMealFood(food);
                      }}
                    >
                      食事追加
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="bg-whitefont-medium"
                    >
                      <Link href={`/foods/${food.id}`}>詳細</Link>
                    </Button>
                  </>
                }
              />
            </div>
          ))}
        </div>
      </div>
      {/* ===========================
          追加モーダル（1個だけ）
      ============================ */}
      <MealModal
        open={openAddModal}
        setOpen={setOpenAddModal}
        modalTriggerComponent={null}
        component={
          mealFood && (
            <MealForm
              food={mealFood}
              method="post"
              action="/meal-logs"
              onSuccess={() => setOpenAddModal(false)}
            />
          )
        }
        footerComponent={
          <div className="flex gap-3 mt-4">
            <Button
              className=" bg-slate-600 text-white font-medium"
              form="meal_form"
            >
              追加
            </Button>
          </div>
        }
      />
    </>
  );
}
