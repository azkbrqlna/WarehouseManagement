<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            RoleSeeder::class,
        ]);

        User::create([
                'username' => 'admin',
                'kelas' => 'admin',
                'nis' => '1234567890',
                'password' => 'ap4_c0n4',
                'role_id' => 1,
        ]);

    }
}
