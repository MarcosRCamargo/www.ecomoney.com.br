<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 11/10/2018
 * Time: 21:05
 */

namespace App\Http\Controllers;

use App\Models\Materials;
use App\Services\MaterialsService;
use Illuminate\Http\Request;

class MaterialsController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    private $materialsService;

    public function __construct(MaterialsService $materialsService)
    {
        //Envia requisição para Classe MaterialService que acessa a controller de acesso ao Banco
        $this->materialsService = $materialsService;

    }
    public function searchAllMaterials()
    {
        return $this->materialsService->searchAllMaterials();
    }
    public function searchMaterial(int $id)
    {
        return $this->materialsService->searchMaterial($id);
    }
    public function createMaterial(Request $request)
    {
        return $this->materialsService->createMaterial($request);
    }
    public function edtiMaterial(int $id, Request $request)
    {
        return $this->materialsService->edtiMaterial($id,$request);
    }
    public function deleteMaterial(int $id)
    {
        return $this->materialsService->deleteMaterial($id);
    }
}