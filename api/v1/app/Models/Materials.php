<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 11/10/2018
 * Time: 21:25
 */
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Materials extends Model
{
    protected $table = 'tb_materialtypes';
    protected $primaryKey = 'id_materialtypes';

    protected $fillable = [
        'id_materialtypes', 'desc_material', 'price', 'point_values'
    ];

    protected $casts = [
        'dataInicio' => 'Timestamp',
        'dataFim' => 'Timestamp'
    ];

    public $timestamps = false;


}