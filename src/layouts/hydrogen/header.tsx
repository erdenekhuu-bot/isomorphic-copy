import Logo from "../../components/logo";
import { Link } from "react-router-dom";
import HamburgerButton from "../hamburger-button";
import SearchWidget from "../../components/search/search";
import Sidebar from "./sidebar";
import StickyHeader from "../sticky-header";

export default function Header() {
  return (
    <StickyHeader className="z-[990] 2xl:py-5 3xl:px-8  4xl:px-10">
      <div className="flex w-full max-w-2xl items-center">
        <HamburgerButton
          view={<Sidebar className="static w-full 2xl:w-full" />}
        />
        <a
          href={"/"}
          aria-label="Site Logo"
          className="me-4 w-9 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden"
        >
          <Logo iconOnly={true} />
        </a>

        <SearchWidget />
      </div>

      {/* <HeaderMenuRight /> */}
    </StickyHeader>
  );
}
