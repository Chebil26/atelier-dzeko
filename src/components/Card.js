import Link from "next/link";

export default function Card(item) {
  const { id, itemName, imageLink, price } = item.item;

  return (
    <Link href={`product/${id}`}>
      <div className="p-2 max-w-sm mx-auto overflow-hidden shadow-sm">
        <img
          className="w-full h-full object-cover"
          src={imageLink}
          alt={itemName}
        />
        <div className="px-6 py-2">
          <div className="font-bold text-xl ">{itemName}</div>
          <p className="font-bold text-lg text-base text-right">{price} DA</p>
        </div>
      </div>
    </Link>
  );
}
