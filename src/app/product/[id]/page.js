/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4whsSKhrOWk
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Component() {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid md:grid-cols-5 gap-3 items-start">
        <div className="md:col-span-4">
          <img
            alt="Product Image"
            className="aspect-[2/3] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height={900}
            src="/placeholder.svg"
            width={600}
          />
        </div>
        <div className="hidden md:flex flex-col gap-3 items-start">
          <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
            <img
              alt="Preview thumbnail"
              className="aspect-[5/6] object-cover"
              height={120}
              src="/placeholder.svg"
              width={100}
            />
            <span className="sr-only">View Image 1</span>
          </button>
          <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
            <img
              alt="Preview thumbnail"
              className="aspect-[5/6] object-cover"
              height={120}
              src="/placeholder.svg"
              width={100}
            />
            <span className="sr-only">View Image 2</span>
          </button>
          <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
            <img
              alt="Preview thumbnail"
              className="aspect-[5/6] object-cover"
              height={120}
              src="/placeholder.svg"
              width={100}
            />
            <span className="sr-only">View Image 3</span>
          </button>
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Acme Circles T-Shirt
          </h1>
          <div className="text-4xl font-bold ml-auto">$99</div>
          <div>
            <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
          </div>
        </div>
        {/* <Accordion collapsible type="single">
          <AccordionItem value="specs">
            <AccordionTrigger>Specifications</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5">
                <li>Material: 60% combed ringspun cotton/40% polyester</li>
                <li>Fit: Regular</li>
                <li>Wash care: Machine wash</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shipping">
            <AccordionTrigger>Shipping Information</AccordionTrigger>
            <AccordionContent>
              <p>Ships in 2-3 business days.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="return">
            <AccordionTrigger>Return Policy</AccordionTrigger>
            <AccordionContent>
              <p>Returns accepted within 30 days of purchase.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion> */}
        <button size="lg">Add to cart</button>
      </div>
    </div>
  );
}
