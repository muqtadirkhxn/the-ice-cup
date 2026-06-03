import Hero from "../components/Hero";
import CTASection from "../components/CTASection";
import Newsletter from "../components/Newsletter";
import Features from "../components/Features";
import Stats from "../components/Stats";
import SweetStory from "../components/SweetStory";
import Testimonials from "../components/Testimonials";
const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <SweetStory />
      <Testimonials />
      <CTASection />
      <Newsletter />
    </>
  );
};

export default Home;
