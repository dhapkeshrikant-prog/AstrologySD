const CommonButton = ({ text = "-" }) => {
  return (
    <button className="bg-amber-300 text-xl  cursor-pointer hover:scale-110 rounded-3xl p-2 m-2">
      {text}
    </button>
  );
};
export default CommonButton;
