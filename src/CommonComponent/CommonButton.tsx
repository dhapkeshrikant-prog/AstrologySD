type CommonButtonProps = {
  text?: string;
  className?: string;
};

const CommonButton = ({ text = "-", className = "" }: CommonButtonProps) => {
  return (
    <button className={`bg-amber-500 text-1xl  cursor-pointer hover:scale-110 rounded-2xl p-2 m-2 ${className}`}>
      {text}
    </button>
  );
};
export default CommonButton;

