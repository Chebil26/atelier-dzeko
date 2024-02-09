import Icon from "@mdi/react";
import { mdiCheckBold } from "@mdi/js";

export default function Delivery() {
  return (
    <div className="flex">
      <div className="bg-green-600 text-white p-4 rounded-lg shadow-md mr-4">
        <p className="text-md font-semibold flex items-center">
          <Icon path={mdiCheckBold} size={1} /> Livraison gratuite
        </p>
      </div>

      <div className="bg-green-600 text-white p-4 rounded-lg shadow-md">
        <p className="text-md font-semibold flex items-center">
          <Icon path={mdiCheckBold} size={1} />
          Montage gratuit
        </p>
      </div>
    </div>
  );
}
