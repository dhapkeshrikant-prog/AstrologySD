import CommonButton from "../CommonComponent/CommonButton";

type CardProps = {
  heading?: string;
  img?: string;
  context?: string;
};

const Card = ({ heading = "-", img = "", context = "-" }: CardProps) => {
  return (
    <div className="mx-6 w-80 overflow-hidden rounded-md bg-amber-50/95 shadow-2xl">
      <img
        className="h-60 w-full bg-cyan-600 object-cover"
        src={img}
        alt="Card Img"
      />

      <div className="flex flex-col gap-1 p-4">
        <h2 className="text-center text-xl font-semibold text-zinc-900">
          {heading}
        </h2>
        <p className="text-base text-zinc-700">{context}</p>
      </div>

      <div className="flex justify-center pb-4">
        <CommonButton text="Try-Now >" />
      </div>
    </div>
  );
};

export default Card;
