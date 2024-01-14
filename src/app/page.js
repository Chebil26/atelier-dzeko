import Image from "next/image";
import Card from "@/components/Card";
import jsonData from "../../public/data.json";
export default function Home() {
  console.log(jsonData);

  return (
    <>
      {jsonData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </>
  );
}
