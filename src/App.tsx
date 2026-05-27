import Navbar from "./Component/Navbar";
import HomeSection from "./Component/HomeSection";
import Tools from "./Component/Tools"
import About from "./Component/About"
const App = () => {
  return (
    <div>
      <title>AstroNest</title>
      {/* <header>Header</header> */}
      <div>
        <Navbar />
      </div>
      {/* Home Section */}
      <HomeSection />
      {/* Tools */}
      <div>
        <section id="tool" className="bg-amber-900 min-h-cover bg-center bg-fit font-bold h-screen text-2xl">
          <Tools />
        </section>
      </div>
      {/*About  */}
      <div>
        <About />
      </div>
      {/* Service */}
      <div>
        <section
          id="service"
          className="bg-cyan-900 font-bold h-screen text-2xl"
        >
          Service{" "}
        </section>
      </div>
      {/* Success Stories */}
      <div>
        <section
          id="success-stories"
          className="bg-amber-300 font-bold h-screen text-2xl"
        >
          Success Stories
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
