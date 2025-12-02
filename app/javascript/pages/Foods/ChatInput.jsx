export default function ChatInputPlaceholder() {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 h-[600px] flex flex-col">
      <h2 className="text-xl font-bold mb-4">食品追加（Chat入力）</h2>

      <div className="flex-1 flex items-center justify-center text-slate-400">
        Chat入力は現在準備中です
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-200 rounded-md" />
          <div className="w-8 h-8 bg-slate-200 rounded-md" />
          <input
            className="flex-1 border rounded-lg h-10 px-3"
            placeholder="Chat入力はまだ使用できません"
            disabled
          />
        </div>
      </div>
    </div>
  );
}
