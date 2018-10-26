<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 20/10/2018
 * Time: 17:37
 * INSERT INTO 'db_ecomoney'.'tb_company' ('id_company', 'company_name', 'company_mail', 'cnpj', 'user_phone', 'password', 'api_key') VALUES (NULL, NULL, NULL, NULL, NULL, NULL, NULL);
 */

namespace App\Models;


class EcoCompany
{
    protected $table = 'tb_company';
    protected $primariKey = 'id_company';

    protected $fillable = [
        'id_company',
        'company_name',
        'company_mail',
        'cnpj',
        'user_phone',
        'password',
        'api_key'
    ];
    protected $casts = [
        'dataInicio' => 'Timestamp',
        'dataFim' => 'Timestamp'
    ];

    public $timestamps = false;
}