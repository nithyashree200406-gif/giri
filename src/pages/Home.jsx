import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import VisionMission from "../components/VisionMission";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import EventProcess from "../components/EventProcess";
import Testimonials from "../components/Testimonials";
import BookingBanner from "../components/BookingBanner";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import HomeContent from "../components/HomeContent";

function Home() {
  return (
    <>
      <Navbar />
<Hero />
<HomeContent />
<WhyChooseUs />
<Stats />
<Testimonials />

<Footer />
    </>
  );
}

export default Home;