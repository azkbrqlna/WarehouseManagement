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
        Schema::create('logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->cascadeOnDelete();
            $table->foreignId('item_id')->nullable()->constrained('items')->cascadeOnDelete();
            $table->string('reason')->nullable();
            $table->integer('amount_rental')->nullable();
            $table->integer('amount_pickup')->nullable();
            $table->dateTime('rent_date')->nullable();
            $table->dateTime('pickup_date')->nullable();
            $table->date('return_date')->nullable();
            $table->dateTime('pickup_date_received')->nullable();
            $table->dateTime('actual_return_date')->nullable();
            $table->string('photo')->nullable();
            $table->string('type')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('logs');
    }
};
