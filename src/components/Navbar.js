/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sCHKKCBptGW
 */

export default function NavBar() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-amber-300">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between text-lg"
        aria-label="Global"
      >
        <a className="flex-none flex items-center m-6" href="/">
          <img
            src="/atelier-dzeko-logo.png"
            alt="Logo"
            className="h-20 w-auto"
          />
        </a>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5 p-4">
          <a
            className="font-medium text-gray-600 hover:text-gray-400 text-lg"
            href="/contact"
          >
            contact
          </a>
          <span className="font-bold font-medium text-amber-400">|</span>
          <a
            className="font-medium text-gray-600 hover:text-gray-400 text-lg"
            href="/about"
          >
            à propos
          </a>
        </div>
      </nav>
    </header>
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
