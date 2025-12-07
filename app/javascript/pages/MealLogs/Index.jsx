import React, { useState } from "react";
import MealForm from "./ModalComponents/MealForm.jsx";
import MealModal from "./ModalComponents/MealModal.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Head, Link } from "@inertiajs/react";
import TimelineContainer from "./TimelineComponents/TimelineContainer.jsx";
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
import { AlertDialogDescription } from "@/components/ui/alert-dialog.jsx";

function Index({ scroll_target_hour, meal_logs, flash }) {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editingLog, setEditingLog] = useState(null);
  console.log(scroll_target_hour);
  const handleSelectMeal = (log) => {
    setEditingLog(log);
    setOpenEditModal(true);
  };

  return (
    <>
      <Head title="食事ログ" />

      <div className="w-full pt-8 px-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-3xl">食品一覧</h1>
          <Button asChild className="bg-slate-600 text-white font-medium">
            <Link href="/foods">食事を記録する</Link>
          </Button>
        </div>
        {/* ===========================
          Timeline
      ============================ */}
        <TimelineContainer
          mealLogs={meal_logs}
          onSelectMeal={handleSelectMeal}
          scrollToHour={scroll_target_hour}
        />

        {/* ===========================
          編集モーダル
      ============================ */}
        <MealModal
          open={openEditModal}
          setOpen={setOpenEditModal}
          modalTriggerComponent={null}
          component={
            editingLog && (
              <MealForm
                meal_log={editingLog}
                food={editingLog.food}
                method="patch"
                action={`/meal-logs/${editingLog.id}`}
                onSuccess={() => setOpenEditModal(false)}
              />
            )
          }
          footerComponent={
            editingLog && (
              <div className="flex gap-3 mt-4">
                <Button
                  className="bg-slate-600 text-white font-medium"
                  form="meal_form"
                >
                  保存
                </Button>

                <Button asChild>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="bg-red-400 text-white font-medium">
                        削除
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          ログを削除しますか？
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          この操作は取り消せません。
                        </AlertDialogDescription>
                      </AlertDialogHeader>

                      <AlertDialogFooter>
                        <AlertDialogCancel>キャンセル</AlertDialogCancel>
                        <AlertDialogAction asChild>
                          <Link
                            href={`/meal-logs/${editingLog.id}`}
                            method="delete"
                            className="bg-red-400 text-white font-medium"
                            onClick={() => setOpenEditModal(false)}
                          >
                            削除
                          </Link>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </Button>
              </div>
            )
          }
        />
      </div>
    </>
  );
}

export default Index;
