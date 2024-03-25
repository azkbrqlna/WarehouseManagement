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
    "Lalu klik “Submit” untuk meminjam barang",
];

const formatDateMonthYear = (inputFormat) => {
    let date = new Date(inputFormat);
    let day = date.toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "2-digit",
    });
    return day;
};

const formatDateMonth = (inputDate) => {
    const date = new Date(inputDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffInDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));

    if (diffInDays === 1) {
        const formattedTime = date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
        return `Yesterday, ${formattedTime}`;
    } else if (diffInDays > 1) {
        const formattedDate = date.toLocaleDateString([], {
            day: "2-digit",
            month: "short",
        });
        const month = formattedDate.split(" ")[1];
        const day = formattedDate.split(" ")[0];
        const formattedTime = date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        });
        return `${month}-${day}, ${formattedTime}`;
    } else {
        return date.toLocaleDateString([], {
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });
    }
};

const formatTimeDateMonth = (inputDate) => {
    const date = new Date(inputDate);

    // Mendapatkan bulan dalam format teks penuh
    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
                        "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const month = monthNames[date.getMonth()];

    // Mendapatkan tanggal dalam format dua digit
    const day = ("0" + date.getDate()).slice(-2);

    // Mendapatkan tahun dalam format empat digit
    const year = date.getFullYear();

    // Mendapatkan jam dalam format dua digit
    const hour = ("0" + date.getHours()).slice(-2);

    // Mendapatkan menit dalam format dua digit
    const minute = ("0" + date.getMinutes()).slice(-2);

    // Menggabungkan semua komponen menjadi format yang diinginkan
    const formattedDateTime = `${hour}.${minute}, ${day} ${month} ${year}`;

    return formattedDateTime;
};


export { Rules, Misi, Tutor, formatDateMonthYear, formatDateMonth, formatTimeDateMonth };
