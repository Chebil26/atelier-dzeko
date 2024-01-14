/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sCHKKCBptGW
 */
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed top-0 w-full bg-white m-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <Link className="flex items-center gap-2" href="/">
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Atelier Dzekooooo</span>
          </Link>
          <div className="flex gap-4">
            <Link className="text-sm font-medium hover:underline" href="#">
              À propos
            </Link>
            <Link className="text-sm font-medium hover:underline" href="#">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
