import CommonButton from "../CommonComponent/CommonButton";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Tools", href: "#tool" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Shop", href: "#shop" },
  { label: "Success Stories", href: "#success-stories" },
];

const Navbar = () => {
  return (
    <nav className="w-full border-b border-amber-400/25 bg-[#090201]/95 text-amber-50 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-6 px-4 py-2 md:px-8">
        <div id="logo" className="flex items-center gap-3">
          <img
            src="https://i.pinimg.com/736x/f0/5e/5d/f05e5d655bdab07e852630920209afe7.jpg"
            className="h-14 w-14 cursor-pointer rounded-full border border-amber-400/50 object-cover shadow-[0_0_18px_rgba(251,191,36,0.25)]"
            alt="logo"
          />
          <span className="font-serif text-2xl font-semibold text-amber-300">
            AstroNest
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-3 py-2 text-sm text-amber-50/90 transition hover:bg-amber-400/10 hover:text-amber-300 md:text-base"
            >
              {item.label}
            </a>
          ))}
        </div>

        <CommonButton text="Book Consultation" />
      </div>
    </nav>
  );
};

export default Navbar;
