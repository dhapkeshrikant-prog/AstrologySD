type CommonButtonProps = {
  text?: string;
  className?: string;
  tone?: "primary" | "outline";
  href?: string;
  target?: string;
};

const CommonButton = ({
  text = "-",
  className = "",
  tone = "primary",
  href,
  target,
}: CommonButtonProps) => {
  const toneClass =
    tone === "outline"
      ? "border border-amber-400/40 bg-black/40 text-amber-50 hover:bg-amber-400/15"
      : "border border-transparent bg-amber-500 text-zinc-950 hover:bg-amber-600";

  const buttonClass = `m-2 inline-flex items-center justify-center rounded-full px-5 py-2 text-base font-medium shadow-lg transition hover:scale-105 ${toneClass} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={buttonClass}>
        {text}
      </a>
    );
  }

  return <button className={buttonClass}>{text}</button>;
};

export default CommonButton;
