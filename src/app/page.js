import Card from "@/components/Card";
import jsonData from "../../public/data.json";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {jsonData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
        <HeroSection/>
    </div>
  );
}
