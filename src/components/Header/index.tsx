import HeaderIcons from "./HeaderIcons";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="shadow-sm sticky top-0 border-b bg-white z-30">
      <div className="mx-4 xl:mx-auto flex items-center justify-between max-w-6xl py-2 lg:py-0">
        {/* LOGO */}
        <Logo />
        {/* SEARCH BAR */}
        <SearchBar />
        {/* Icons */}
        <HeaderIcons />
      </div>
    </header>
  );
}

export default Header;
