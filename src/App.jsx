import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import EventProcess from "./components/EventProcess";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import WhatsAppButton from "./components/WhatsAppButton";
import BookingBanner from "./components/BookingBanner";
import LoadingScreen from "./components/LoadingScreen";

import { useEffect, useState } from "react";

import "./App.css";

function App() {

   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
   <>
  <Navbar />
  <Hero />
  <About />
  <VisionMission />
  <Services />
  <WhyChooseUs />
  <Stats/>
  <EventProcess />
  <Gallery />
  <Testimonials />
  <BookingBanner />
  <Contact />
  <Footer />
  <WhatsAppButton />
</>
  );
}

export default App;