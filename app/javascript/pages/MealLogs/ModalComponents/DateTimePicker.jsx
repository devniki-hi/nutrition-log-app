import React, { useState } from "react";
import { Label } from "@/components/ui/label.jsx";
import { Input } from "@/components/ui/input.jsx";
function formatForInput(value) {
  if (!value) return "";

  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return "";

  const pad = (n) => String(n).padStart(2, "0");

  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const mi = pad(d.getMinutes());
  // 秒も使いたければ ':ss' を足す
  return `${yyyy}-${mm}-${dd}T${hh}:${mi}`;
}

export function DateTimePicker({ form, errors }) {
  const inputValue = formatForInput(form.data.logged_at);
  return (
    <div className="flex flex-col">
      <p className="text-sm font-semibold text-slate-700 my-1">日付時間</p>
      <Input
        id="logged_at"
        type="datetime-local"
        value={inputValue}
        className={`bg-white ${errors.logged_at ? "border-red-500" : ""}`}
        onChange={(e) => form.setData("logged_at", e.target.value)}
      />
      {errors.logged_at?.map((msg, i) => (
        <p key={i} className="text-red-500 text-sm">
          ・{msg.slice(1)}
        </p>
      ))}
    </div>
  );
}
