/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BMuxh3bSV1d
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button } from "./ui/button";

export default function Component() {
  return (
    <div className="relative bg-white min-h-96 min-w-80">
      <img
        alt="Furniture Banner"
        className="w-full h-auto min-h-96 "
        height="400"
        src="/bg_banner.png"
        style={{
          aspectRatio: "1494/450",
          objectFit: "cover",
          opacity: 0.8,
        }}
        width="1494"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 p-4 md:p-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex-1 space-y-4 md:space-y-6 ">
          {/* <h1 className="text-lg md:text-4xl lg:text-5xl font-bold text-gray-800">
            Adzeko
          </h1> */}
          <div className="pt-32 p-16">
            <p className="text-base md:text-lg lg:text-4xl font-bold text-gray-800">
              DES MEUBLES COMPLICES ...
              <br />
            </p>
            <p className="text-base md:text-lg lg:text-5xl font-bold text-amber-400">
              POUR UN INTÉRIEUR SUR MESURE !
            </p>
          </div>
          <div className="text-center absolute inset-x-0 bottom-0 pb-10">
            <p className="text-sm md:text-base lg:text-3xl font-medium text-gray-800 p-2">
              Craquez pour des meubles qui vous correspondent,
            </p>
            <Button>Decouverez notre gamme</Button>
          </div>
        </div>
        <div className="mt-4 md:mt-0 space-y-2 font-bold">
          <div className="flex items-center space-x-2">
            <PhoneIcon className="text-yellow-400 lg:text-xl" />
            <span className="text-xs md:text-sm lg:text-xl text-gray-600">
              +213-559-81-80-49
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
