import ClientStrip from "./components/ClientStrip";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import ServicesContact from "./components/ServicesContact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientStrip />
        <Portfolio />
        <ServicesContact />
      </main>
      <Footer />
    </>
  );
}
