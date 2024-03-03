import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/*<div className="uppercase w-full max-w-screen-xl p-4 md:flex md:items-center">*/}
        <ul className="flex flex-wrap items-center justify-center uppercase p-4 mt-3 text-xs font-light text-gray-500 dark:text-gray-400">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Resume</a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Mellowtech.org</a>
          </li>
          <li>
            <a href="#" className="hover:underline">About</a>
          </li>
        </ul>
      {/*</div>*/}
    </footer>
  )
}