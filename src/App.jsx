import Navbar from "./Component/Navbar";
import HomeSection from "./Component/HomeSection";
const App = () => {
  return (
    <div>
      {/* <header>Header</header> */}
      <div>
        <Navbar />
      </div>
      {/* Home Section */}
      <HomeSection/>

     <div>
        <section id="about" className="bg-blue-100 font-bold h-screen text-2xl">
          About
        </section>
      </div>
      <div>
        <section
          id="service"
          className="bg-cyan-900 font-bold h-screen text-2xl"
        >
          Service{" "}
        </section>
      </div>
      <div>
        <section
          id="success-stories"
          className="bg-amber-300 font-bold h-screen text-2xl"
        >
          Success Stories{" "}
        </section>
      </div>
      <div>
        <section id="shop" className="bg-amber-800 font-bold h-screen text-2xl">
          Shop
        </section>
      </div>
    </div>
  );
};
export default App;
