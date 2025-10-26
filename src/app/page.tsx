import Image from "next/image";
import Container from "@/components/container";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="layout">
      <Container>
      <Navbar/>
      </Container> 
    </div>
  );
}
