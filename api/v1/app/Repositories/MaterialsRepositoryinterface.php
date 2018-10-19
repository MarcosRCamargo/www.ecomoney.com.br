<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 11/10/2018
 * Time: 21:59
 */

namespace App\Repositories;

use Illuminate\Http\Request;

interface MaterialsRepositoryinterface
{
    public function searchAllMaterials();
    public function searchMaterial(int $id);
    public function createMaterial(Request $request);
    public function edtiMaterial(int $id, Request $request);
    public function deleteMaterial(int $id);
}