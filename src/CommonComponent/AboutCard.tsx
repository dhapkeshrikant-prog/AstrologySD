type AboutCardProps = {
  img?: string;
  heading?: string;
  subheading?: string;
};

const AboutCard = ({
  img = "-",
  heading = "-",
  subheading = "-",
}: AboutCardProps) => {
  return (
    <div className="flex">
      <div className="mx-24 flex min-h-20 w-[420px] items-center gap-3 rounded-md border border-amber-300/30 bg-amber-950/70 px-3 py-2 text-white shadow-xl">
        <img
          src={img}
          alt="Card img"
          className="h-16 w-16 shrink-0 rounded-md object-cover"
        />
        <div className="p-1">
          <h2 className="text-xl font-medium text-amber-100">{heading}</h2>
          <p className="text-sm text-white/80">{subheading}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
