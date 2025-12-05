import React, { useState } from "react";
import MealForm from "./ModalComponents/MealForm.jsx";
import MealModal from "./ModalComponents/MealModal.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "@inertiajs/react";
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

function Index({ date, meal_logs }) {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editingLog, setEditingLog] = useState(null);

  const handleSelectMeal = (log) => {
    setEditingLog(log);
    setOpenEditModal(true);
  };

  return (
    <>
      {/* ===========================
          Timeline
      ============================ */}
      <TimelineContainer mealLogs={meal_logs} onSelectMeal={handleSelectMeal} />

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
                      <AlertDialogTitle>ログを削除しますか？</AlertDialogTitle>
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
    </>
  );
}

export default Index;
