<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('items', function (Blueprint $table) {
            $table->string('cover')->nullable()->after('name');
            $table->string('status')->default('available')->after('cover');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('items', function (Blueprint $table) {
            if (Schema::hasColumn('items', 'cover')) {
                $table->dropColumn('cover');
            }
            if (Schema::hasColumn('items', 'status')) {
                $table->dropColumn('status');
            }
        });
    }
};
