import { List } from "../ListStyle/List";

export const ListStyle = ({ items }) => {
    return (
        <ul className="text-xl text-azka">
            {items.map((items, index) => (
                <List key={index}>{items}</List>
            ))}
        </ul>
    );
};

const Rules = [
    "Peminjaman harus melalui laman warehouse.",
    "Peminjaman barang harus melakukan checkout pada laman peminjaman.",
    "Barang harus melakukan checkout pada laman peminjaman.",
    "Pengembalian dilakukan maksimal 7 hari setelah peminjaman.",
    "Terdapat denda yang akan diberikan kepada siswa jika melebihi batas pengembalian.",
    "Ketika pengembalian, kondisi barang harus seperti saat peminjaman.",
];

const Misi = [
    "Memberikan akses yang mudah untuk meminjam barang.",
    "Memberikan informasi yang jelas mengenai barang-barang yang tersedia.",
    "Menjamin keamanan pribadi pengguna serta data transaksi peminjaman.",
    "Menjamin barang-barang yang dipinjam dalam kondisi baik dan terawat.",
    "Melakukan inovasi dalam platform, baik dari segi fitur maupun tampilan untuk memberikan pengalaman yang lebih baik bagi pengguna.",
];

const Tutor = [
    "Kunjungi website Warehouse SMKN 7 Semarang",
    "Baca peraturan yang tertera di website Warehouse SMKN 7 Semarang",
    "Login ke akun anda",
    "Cari barang yang akan anda pinjam",
    "Masukkan alasan peminjaman barang",
    "Lalu klick “Submit” untuk meminjam barang",
];

export { Rules, Misi, Tutor };
