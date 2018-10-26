<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 20/10/2018
 * Time: 17:03
 * INSERT INTO 'db_ecomoney'.'tb_adresses' ('id_adress', 'adressDesc', 'number', 'state', 'city', 'geo_lat', 'geo_lng', 'tb_user_id_user', 'tb_company_id_company') VALUES (NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
 */

namespace App\Models;


class Adress
{
    protected $table = 'tb_adresses';
    protected $primariKey = 'id_adress';

    protected $fillable = [
        'adressDesc',
        'number',
        'state',
        'city',
        'geo_lat',
        'geo_lng',
        'tb_user_id_user',
        'tb_company_id_company'
    ];
    protected $casts = [
        'dataInicio' => 'Timestamp',
        'dataFim' => 'Timestamp'
    ];

    public $timestamps = false;
}