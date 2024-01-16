/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8F1PtgTn3YO
 */
import Link from "next/link";
import jsonData from "../../../../public/data.json";
export default function Product(params) {
  const item = jsonData.filter((item) => item.id == params.params.id);
  return (
    <main className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start order-2 md:order-1">
        <div className="hidden md:flex items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl">{item[0].itemName}</h1>
            <div className="grid gap-4 text-sm leading-loose">
              <p>{item[0].description}</p>
            </div>
            <div className="text-4xl font-bold">{item[0].price} DZD</div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={`/order`}>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
                  Commandez !
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:gap-3 items-start order-1">
        <div className="grid gap-4">
          <img
            alt="Product Image"
            className="aspect-square object-cover w-full rounded-sm overflow-hidden"
            height={600}
            src={item[0].imageLink}
            width={600}
          />
        </div>
      </div>
    </main>
  );
}
