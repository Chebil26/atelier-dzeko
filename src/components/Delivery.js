import Icon from "@mdi/react";
import { mdiCheckBold } from "@mdi/js";

export default function Delivery() {
  return (
    <div className="flex">
      <div className="border-2 border-green-500 bg-white text-green-600 p-4 rounded-lg shadow-sm mr-4">
        <p className="text-md font-semibold flex items-center">
          <Icon path={mdiCheckBold} size={1} />
          <div className="mr-2"></div>
          Livraison gratuite
        </p>
      </div>

      <div className="border-2 border-green-500 bg-white text-green-600 p-4 rounded-lg shadow-sm">
        <p className="text-md font-semibold flex items-center">
          <Icon path={mdiCheckBold} size={1} />
          <div className="mr-2"></div>
          Montage gratuit
        </p>
      </div>
    </div>
  );
}
