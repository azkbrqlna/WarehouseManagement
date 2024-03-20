import List from "../ListNavbar/List";

const NavbarGeneral = () => {
    return (
      <>
        <ul className="flex gap-4">
          <List href="/home">Home</List>
          <List href="/peminjaman">Peminjaman</List>
          <List href="/pengambilan">Pengambilan</List>
          <List href="/pengembalian">Pengembalian</List>
          <List href="/about">About</List>
        </ul>
      </>
    );
  };
  
  export default NavbarGeneral;