interface GoldDividerProps {
  className?: string;
  withDiamond?: boolean;
}

export default function GoldDivider({ className = "", withDiamond = false }: GoldDividerProps) {
  return (
    <div className={`flex items-center justify-center my-6 ${className}`}>
      <div className="h-[1px] w-16 md:w-28 bg-gradient-to-r from-transparent to-[#c8a97e]/40" />
      {withDiamond ? (
        <div className="mx-3 rotate-45 w-1.5 h-1.5 border border-[#c8a97e]/60 bg-[#c8a97e]/20" />
      ) : (
        <div className="mx-2 w-1 h-1 rounded-full bg-[#c8a97e]/50" />
      )}
      <div className="h-[1px] w-16 md:w-28 bg-gradient-to-l from-transparent to-[#c8a97e]/40" />
    </div>
  );
}
