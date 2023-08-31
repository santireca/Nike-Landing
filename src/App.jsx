import Nav from "./components/Nav";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import CustomerReviews from "./sections/CustomerReview";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Subscribe from "./sections/Subscribe";
import SpecialOffers from "./sections/SpecialOffers";
import Services from "./sections/Services";

const App = () => (
  <main
    className=" relative"
  >
    <Nav />
    <section
      className=" xl:padding-l
      wide:padding-r
      padding-b"
    >
      <Hero />
    </section>
    <section
      className="padding"
    >
      <PopularProducts />
    </section>
    <section
      className="padding"
    >
      <SuperQuality />
    </section>
    <section
      className="padding-x
      py-10"
    >
      <Services />
    </section>
    <section
      className="padding"
    >
      <SpecialOffers />
    </section>
    <section
      className="padding bg-pale-blue"
    >
      <CustomerReviews />
    </section>
    <section
      className="padding-x
      sm:py-32 py-16 w-full"
    >
      <Subscribe />
    </section>
    <section
      className="bg-black padding-x padding-t pb-8"
    >
      <Footer />
    </section>
  </main>
)

export default App;