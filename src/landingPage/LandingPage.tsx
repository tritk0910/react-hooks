import Landing from "./Landing";
import HowItWorks from "./HowItWorks";
import WhyItsWorking from "./WhyItsWorking";
import Customize from "./Customize";
import NavBar from "./NavBar";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
import MessageForm from "./MessageForm";
import Footer from "./Footer";
import { FloatButton } from "antd";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Landing />
      <HowItWorks />
      <WhyItsWorking />
      <Customize />
      <Banner />
      <AboutUs />
      <MessageForm />
      <Footer />
      <FloatButton.BackTop />
    </>
  );
}
