<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 18/10/2018
 * Time: 23:51
 */

namespace App\Services;
use Illuminate\Http\Request;
use App\Repositories\MaterialsRepositoryinterface;

class MaterialsService
{
    private $materialRepository;

    public function __construct(MaterialsRepositoryinterface $materialRepository)
    {
        $this->materialRepository = $materialRepository;

    }

    /**
     * Função de busca de TODOS os materiais
     */
    public function searchAllMaterials()
    {
        $material = $this->materialRepository->searchAllMaterials();

        if(count($material)>0){
            return $material;
        }else{
            return array();
        }
    }
    /**
     * Função de busca de material por ID
     */
    public function searchMaterial($id)
    {
        return $this->materialRepository->searchMaterial($id);
    }
    /**
     * Função de CADASTRO de materiais
     */
    public function createMaterial(Request $request)
    {
        return $this->materialRepository->createMaterial($request);
    }
    /**
     * Função de EDIÇÃO de materiais
     */
    public function edtiMaterial($id, Request $request)
    {
        return $this->materialRepository->edtiMaterial($id, $request);
    }
    /**
     * Função de EXCLUSÃO de materiais
     */
    public function deleteMaterial($id)
    {
        return $this->materialRepository->deleteMaterial($id);
    }
}