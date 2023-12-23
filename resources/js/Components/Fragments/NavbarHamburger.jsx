import ListHamburger from "../List/ListHamburger";

const NavbarHamburger = ( props ) => {
  const { isOpen } = props
  return (
    <>
      <nav
        className={`absolute z-50 py-5 bg-zinc-400 shadow-xl px-2 rounded-lg w-52 -right-5 top-20 font-bold ${
          isOpen ? "scale-100" : "scale-0"
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-3">
          <ListHamburger href="#">Profile</ListHamburger>
          <ListHamburger href="#">Home</ListHamburger>
          <ListHamburger href="#">Peminjaman</ListHamburger>
          <ListHamburger href="#">Pengembalian</ListHamburger>
        </ul>
      </nav>
    </>
  );
};

export default NavbarHamburger;
