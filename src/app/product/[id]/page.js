// export default function product(params) {
//   console.log(params.params.id);
//   return <h1>gg{params.params.id}</h1>;
// }

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8F1PtgTn3YO
 */
import Link from "next/link";
import jsonData from "../../../../public/data.json";
export default function Product(params) {
  const item = jsonData.filter((item) => item.id == params.params.id);
  console.log(item[0]);
  return (
    <main className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start order-2 md:order-1">
        <div className="hidden md:flex items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl">{item[0].itemName}</h1>
            <div className="grid gap-4 text-sm leading-loose">
              <p>
                Introducing our Modern Oak Dining Table, a perfect blend of
                style and functionality. Crafted with high-quality oak wood,
                this table is designed to last.
              </p>
              <p>
                With its spacious design and sleek finish, it's the perfect
                addition to your dining room. Whether you're hosting a dinner
                party or enjoying a meal with your family, this table provides
                ample space and a stylish setting.
              </p>
            </div>
            <div className="text-4xl font-bold">999 DZD</div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button size="lg">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="grid gap-4 text-sm leading-loose md:hidden">
          <p>
            Introducing our Modern Oak Dining Table, a perfect blend of style
            and functionality. Crafted with high-quality oak wood, this table is
            designed to last.
          </p>
          <p>
            With its spacious design and sleek finish, it's the perfect addition
            to your dining room. Whether you're hosting a dinner party or
            enjoying a meal with your family, this table provides ample space
            and a stylish setting.
          </p>
        </div>
      </div>
      <div className="grid gap-6 md:gap-3 items-start order-1">
        <div className="flex md:hidden items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-2xl sm:text-3xl">
              Modern Oak Dining Table
            </h1>
          </div>
        </div>
        <div className="grid gap-4">
          <img
            alt="Product Image"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height={600}
            src={item[0].imageLink}
            width={600}
          />
        </div>
      </div>
    </main>
  );
}
