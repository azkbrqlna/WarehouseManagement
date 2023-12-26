import List from "../ListNavbar/List";

const Navbar = () => {
    return (
      <>
        <ul className="flex gap-4">
          <List href="/home">Home</List>
          <List href="#">Peminjaman</List>
          <List href="#">Pengembalian</List>
          <List href="#visimisi">About</List>
        </ul>
      </>
    );
  };
  
  export default Navbar;