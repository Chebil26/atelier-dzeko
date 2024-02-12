import Card from "@/components/Card";
import jsonData from "../../public/data.json";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div>
      {/* <HeroSection /> */}

      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-3 p-6" id="products">
        {jsonData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
