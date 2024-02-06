/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4whsSKhrOWk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import jsonData from "../../../../public/data.json";

export default function Component(params) {
  const item = jsonData.filter((item) => item.id == params.params.id);

  const orderData = {
    id: item[0].id,
    price: item[0].price,
    name: item[0].itemName,
    description: item[0].description,
  };

  console.log(orderData);

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid md:grid-cols-5 gap-3 items-start">
        <div className="md:col-span-4">
          <img
            alt="Product Image"
            className="aspect-[4/5] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height={900}
            src="/adzeko-hero.jpg"
            width={600}
          />
          <div className=" md:flex gap-1">
            <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
              <img
                alt="Preview thumbnail"
                className="aspect-[5/6] object-cover"
                height={120}
                src="/adzeko-hero.jpg"
                width={100}
              />
              <span className="sr-only">View Image 1</span>
            </button>
            <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
              <img
                alt="Preview thumbnail"
                className="aspect-[5/6] object-cover"
                height={120}
                src="/adzeko-hero.jpg"
                width={100}
              />
              <span className="sr-only">View Image 2</span>
            </button>
            <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
              <img
                alt="Preview thumbnail"
                className="aspect-[5/6] object-cover"
                height={120}
                src="/adzeko-hero.jpg"
                width={100}
              />
              <span className="sr-only">View Image 3</span>
            </button>

            <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
              <img
                alt="Preview thumbnail"
                className="aspect-[5/6] object-cover"
                height={120}
                src="/adzeko-hero.jpg"
                width={100}
              />
              <span className="sr-only">View Image 3</span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">{orderData.name}</h1>
          <div className="text-4xl font-bold">{orderData.price} DA</div>
          <div>
            <p>{orderData.description}</p>
          </div>
        </div>
        <Button>Commandez !</Button>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Dimensions</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Caracterisqtique de l&apos;article
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
