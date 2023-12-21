import List from "../List/List";

const Navbar = () => {
    return (
      <>
        <ul className="flex gap-4">
          <List href="#">Home</List>
          <List href="#">Peminjaman</List>
          <List href="#">Pengembalian</List>
          <List href="#">About</List>
        </ul>
      </>
    );
  };
  
  export default Navbar;