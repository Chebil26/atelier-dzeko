import Link from "next/link";

export default function Card(item) {
  const { id, itemName, imageLink, price, link } = item.item;

  return (
    <Link href={`product/${id}`}>
      <div className="max-w-sm mx-auto overflow-hidden shadow-lg">
        <img
          className="w-full h-full object-cover"
          src={imageLink}
          alt={itemName}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{itemName}</div>
          <p className="text-gray-700 text-base">Price: {price} DZD</p>
        </div>
      </div>
    </Link>
  );
}
