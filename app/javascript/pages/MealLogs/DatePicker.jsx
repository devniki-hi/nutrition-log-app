import { useState } from "react";
import { router } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, addDays } from "date-fns";
import { ja } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

export default function DatePicker({ selectedDate }) {
  const [date, setDate] = useState(new Date(selectedDate));

  const moveDate = (targetDate) => {
    setDate(targetDate);
    router.get(
      "/meal-logs",
      { date: format(targetDate, "yyyy-MM-dd") },
      { preserveScroll: true }
    );
  };

  return (
    <div className="bg-sky-50 p-2 border border-slate-300 rounded-md flex items-center gap-4 flex-wrap">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex gap-2">
            <CalendarIcon />
            {format(date, "yyyy年MM月dd日", { locale: ja })}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(d) => d && moveDate(d)}
            locale={ja}
          />
        </PopoverContent>
      </Popover>

      <div className="flex gap-2 overflow-x-auto">
        {[...Array(7)].map((_, i) => {
          const d = addDays(new Date(date), i - 3);
          const isActive =
            format(d, "yyyy-MM-dd") === format(date, "yyyy-MM-dd");
          return (
            <button
              key={i}
              onClick={() => moveDate(d)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border
                ${
                  isActive
                    ? "bg-slate-700 text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
            >
              {format(d, "dd")}
            </button>
          );
        })}
      </div>
      {/* ✅ 今日ボタン */}
      <Button variant="outline" onClick={() => moveDate(new Date())}>
        今日
      </Button>
    </div>
  );
}
