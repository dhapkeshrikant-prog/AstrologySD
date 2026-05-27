type CommonButtonProps = {
  text?: string;
  className?: string;
  tone?: "primary" | "outline";
};

const CommonButton = ({
  text = "-",
  className = "",
  tone = "primary",
}: CommonButtonProps) => {
  const toneClass =
    tone === "outline"
      ? "border border-amber-400/40 bg-black/40 text-amber-50 hover:bg-amber-400/15"
      : "border border-transparent bg-amber-500 text-zinc-950 hover:bg-amber-600";

  return (
    <button
      className={`m-2 rounded-full px-5 py-2 text-base font-medium shadow-lg transition hover:scale-105 ${toneClass} ${className}`}
    >
      {text}
    </button>
  );
};

export default CommonButton;
