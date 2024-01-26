import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-white">
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
              Beau, compact et fonctionnel ! Vivez le meuble autrement
            </h1>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              <div className="flex items-center text-lg text-gray-800 -px-3">
                <svg
                  className="w-5 h-5 mx-3  text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="mx-3">Livraison gratuite</span>
              </div>

              <div className="flex items-center text-lg text-gray-800 -px-3">
                <svg
                  className="w-5 h-5 mx-3 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="mx-3">Montage gratuit</span>
              </div>
              <Link href="/order">
                <div className=" w-96 mt-6 inline-block px-6 py-6 text-xl font-semibold rounded-md text-white bg-orange-400  hover:bg-orange-500">
                  Commander dès maintenant !
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full  rounded-md"
            src="/adzeko-hero.jpg"
            alt="atelier dzeko hero"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
