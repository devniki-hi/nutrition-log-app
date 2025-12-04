import React, { useState } from "react";
import MealForm from "./ModalComponents/MealForm.jsx";
import MealModal from "./ModalComponents/MealModal.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "@inertiajs/react";
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
  const grouped = meal_logs.reduce((acc, log) => {
    const hour = new Date(log.logged_at).getHours();
    const key = `${hour}:00`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(log);
    return acc;
  }, {});

  return (
    <>
      <h1>食事ログ</h1>
      <p>{date}</p>

      {/* ===========================
          食事ログ一覧
      ============================ */}
      {Object.entries(grouped).map(([time, logs]) => (
        <div key={time} className="flex">
          <h2>{time}</h2>

          {logs.map((log) => (
            <div
              key={log.id}
              className="cursor-pointer"
              onClick={() => {
                setEditingLog(log);
                setOpenEditModal(true);
              }}
            >
              <p>{log.food.name}</p>
              <p>{log.logged_at}</p>
              <p>{log.intake_kcal} kcal</p>
              <p>{log.intake_protein} g</p>
              <p>{log.intake_fat} g</p>
              <p>{log.intake_carbs} g</p>
            </div>
          ))}
        </div>
      ))}

      {/* ===========================
          編集モーダル（1個だけ）
      ============================ */}
      <MealModal
        open={openEditModal}
        setOpen={setOpenEditModal}
        modalTriggerComponent={null} // 外で開くので null
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
                className=" bg-slate-600 text-white font-medium"
                form="meal_form"
              >
                保存
              </Button>
              <Button asChild>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className=" bg-red-400 text-white font-medium">
                      削除
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        ログを削除してもよろしいでしょうか？
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        この操作は取り消せません。本当に削除しますか？
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogCancel>キャンセル</AlertDialogCancel>
                      <AlertDialogAction asChild>
                        <Link
                          href={`/meal-logs/${editingLog.id}`}
                          method="delete"
                          className=" bg-red-400 text-white font-medium"
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
