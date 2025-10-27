import Image from "next/image";
import Container from "@/components/container";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
export default function Home() {
  return (
    <div className="layout">
      <div className="layout-lines-cont">
        <div className="left-line"/>
        <div className="right-line"/>
      </div>
      <Container>
      <Navbar/>
      <Hero/>
      <div className="image-line"/>
      </Container> 
      
      <div className="hero-image-container">
        <div className="horizontal-line"/>
        <img src="/hero-ui-v5.webp" alt="" className="imag"/>
        </div>
    </div>
  );
}
