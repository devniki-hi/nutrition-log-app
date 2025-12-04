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
  const [openAddModal, setOpenAddModal] = useState(false);

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
              <p>{log.food.kcal}</p>
              <p>{log.logged_at}</p>
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
              <Button className="flex-1 rounded-full" form="meal_form">
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

      {/* ===========================
          追加モーダル（1個だけ）
      ============================ */}
      <MealModal
        open={openAddModal}
        setOpen={setOpenAddModal}
        modalTriggerComponent={
          <Button
            className="rounded-lg px-5 bg-blue-600 text-white block font-medium"
            onClick={() => setOpenAddModal(true)}
          >
            食事ログを追加
          </Button>
        }
        component={
          meal_logs.length > 0 && (
            <MealForm
              food={meal_logs[0].food}
              method="post"
              action="/meal-logs"
              onSuccess={() => setOpenAddModal(false)}
            />
          )
        }
        footerComponent={
          <div className="flex gap-3 mt-4">
            <Button className="flex-1 rounded-full" form="meal_form">
              追加
            </Button>
          </div>
        }
      />
    </>
  );
}

export default Index;
