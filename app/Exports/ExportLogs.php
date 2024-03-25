<?php

namespace App\Exports;

use App\Models\Log;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class ExportLogs implements FromQuery,WithMapping,WithHeadings
{
    use Exportable;
    public function query()
    {
        $currentMonth = date('m');
        $currentYear = date('Y');
        
        return Log::query()
            ->where(function($query) use ($currentMonth, $currentYear) {
                $query->whereMonth('rent_date', $currentMonth)
                      ->whereYear('rent_date', $currentYear);
            })
            ->orWhere(function($query) use ($currentMonth, $currentYear) {
                $query->whereMonth('pickup_date', $currentMonth)
                      ->whereYear('pickup_date', $currentYear);
            });
    }

    public function headings(): array
    {
        return [
            'ID',
            'Username',
            'Barang',
            'Alasan',
            'Tanggal Peminjaman',
            'Tanggal Pengembalian',
            'Tanggal Pengambilan',
            'Tipe',
        ];
    }
    //untuk menambah data ke rows dan memanggil relasi agar masuk di row, jangan lupa memasukan WithMapping
    public function map($log): array
    {
        return [
            $log->id,
            $log->user->username,
            $log->item->name,
            $log->reason,
            $log->rent_date,
            $log->actual_return_date,
            $log->pickup_date,
            $log->type,
        ];
    }

}
