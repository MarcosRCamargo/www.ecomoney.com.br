<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 20/10/2018
 * Time: 16:21
 * INSERT INTO 'db_ecomoney'.'tb_user' ('id_user', 'user_name', 'user_mail', 'user_datebirth', 'cpf', 'user_phone', 'password', 'api_key', 'tb_profile_user_id_profile_type', 'tb_company_id_company') VALUES (NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
 */

namespace App\Models;


class UserEcoMoney
{
    protected $table = 'tb_user';
    protected $primaryKey = 'id_user';

    protected $fillable = [
        'user_name',
        'user_mail',
        'user_datebirth',
        'cpf',
        'user_phone',
        'password',
        'api_key',
        'tb_profile_user_id_profile_type',
        'tb_company_id_company'
    ];
    protected $casts = [
        'dataInicio' => 'Timestamp',
        'dataFim' => 'Timestamp'
    ];

    public $timestamps = false;
}