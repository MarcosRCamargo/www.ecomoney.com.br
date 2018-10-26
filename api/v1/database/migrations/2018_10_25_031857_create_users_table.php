<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email');
            $table->integer('cpf');
            $table->integer('phone');
            $table->string('password');
            $table->string('api_key')->nullable();
            $table->dateTime('api_key_expiration')->nullable();
            $table->integer('tb_profile_user_id_profile_type');
            $table->integer('tb_company_id_company');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
