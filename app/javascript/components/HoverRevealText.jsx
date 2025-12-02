export default function HoverRevealText({
  children,
  className = "",
  textClassName = "",
  tooltipClassName = "",
  ...props
}) {
  return (
    <div className={`group relative ${className}`}>
      {/* 省略表示 */}
      <span className={`line-clamp-1 cursor-pointer ${textClassName}`}>
        {children}
      </span>

      {/* ホバー時に上に出る Tooltip */}
      <div
        className={`
          absolute
          bottom-full
          mb-2
          px-3 py-1
          text-sm
          bg-white
          border
          rounded-lg
          shadow-md
          whitespace-nowrap
          opacity-0
          pointer-events-none
          group-hover:opacity-100
          transition-opacity
          z-50
          ${tooltipClassName}
          `}
      >
        {children}

        {/* ▼吹き出し三角 */}
        <div
          className="
            absolute left-1/2 -translate-x-1/2
            top-full
            w-0 h-0 mt-0.3
            border-l-6 border-l-transparent
            border-r-6 border-r-transparent
            border-t-6 border-t-gray-700
        "
        />
      </div>
    </div>
  );
}
