<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 11/10/2018
 * Time: 22:14
 */

namespace App\Repositories;

use App\Models\Materials;
use App\Repositories\MaterialsRepositoryinterface;
use Illuminate\Http\Request;

class MaterialRepositoryEloquent implements MaterialsRepositoryinterface
{
    private $material;
    protected $prymaryKey = 'id_materialtypes';

    public function __construct(Materials $material)
    {
        $this->material = $material;
    }

    public function searchAllMaterials()
    {
        // TODO: Implement seacrhAllMaterials() method.
        return $this->material
            ->select(
                'id_materialtypes',
                'desc_material',
                'price',
                'point_values'
            )->get();
    }
    public function searchMaterial(int $id)
    {
        // TODO: Implement seacrhMaterials() method.
        return $this->material
            ->select(
                'id_materialtypes',
                'desc_material',
                'price',
                'point_values'
            )
            ->where('id_materialtypes',$id)
            ->get();
    }
    public function createMaterial(Request $request)
    {
        // TODO: Implement createMaterial() method.
        return $this->material->create($request->all());
    }
    public function edtiMaterial(int $id, Request $request)
    {
        // TODO: Implement edtiMaterial() method.
        return $this->material
            ->where('id_materialtypes', $id)
            ->update($request->all());
    }
    public function deleteMaterial(int $id)
    {
        // TODO: Implement deleteMaterial() method.

        $material = $this->material->find($id);
        return $material->delete();
    }
}