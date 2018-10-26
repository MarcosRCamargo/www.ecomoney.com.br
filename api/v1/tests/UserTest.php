<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testUrl()
    {
        $material = [
//            'id_materialtypes' =>'1',
            'desc_material' => 'Plastico',
            'price' => '6.00',
            'point_values' => '600'
        ];
        $this->post('/api/material' , $material);
        $this->assertResponseOk();

        $resposta = (array) json_decode($this->response->content());
        $this->assertArrayHasKey('desc_material', $resposta);
    }
    public function testCreateUser(){
        $user = [
            'id_user' => '1',
            'user_name' => 'Nome Teste',
            'user_mail' => 'email@example.com',
            'user_datebirth' => '10-10-2018',
            'cpf' => '12345678911',
            'user_phone' => '9999-9999',
            'password' => '123',
            'api_key' => $bytes = random_bytes(32),
            'tb_profile_user_id_profile_type' => '1',
            'tb_company_id_company ' => '1'
        ];
        $this->post('/api/user' , $user);
        $this->assertResponseOk();

        $resposta = (array) json_decode($this->response->content());
        $this->assertArrayHasKey('user_name', $resposta);
    }
}
