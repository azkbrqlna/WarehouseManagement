import { List } from "../ListStyle/List";

export const ListStyle = (props) => {
    const { items } = props;
    return (
        <ul className="text-xl text-zinc-800">
            {items.map((items, index) => (
                <List key={index}>{items}</List>
            ))}
        </ul>
    );
};

const Rules = [
    "Peminjaman harus melalui laman warehoouse.",
    "Peminjaman barang harus melakukan checkout pada laman peminjaman.",
    "barang harus melakukan checkout pada laman peminjaman.",
    "Pengembalian dilakukan maksimal satu bulan setelah peminjaman.",
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

const request = [];
    for (let i = 0; i < 5; i++) {
        request.push({
            id: i,
            username: `Ahmad Chomsin S.`,
            nis: `2006817395`,
            kelas: `XIII SIJA 2`,
        });
    }

export { Rules, Misi, request };