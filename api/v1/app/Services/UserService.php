<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 18/10/2018
 * Time: 23:51
 */

namespace App\Services;
use App\Repositories\UsersRepositoryinterface;
use Illuminate\Http\Request;
use App\Repositories\MaterialsRepositoryinterface;

class UserService
{
    private $userRepository;

    public function __construct(UsersRepositoryinterface $userRepository)
    {
        $this->userRepository = $userRepository;

    }

    /**
     * Função de busca de TODOS os materiais
     */
    public function searchAllUsers()
    {
        $user = $this->userRepository->searchAllUsers();

        if(count($user)>0){
            return $user;
        }else{
            return array();
        }
    }
    /**
     * Função de busca de material por ID
     */
    public function searchUser($id)
    {
        return $this->userRepository->searchUser($id);
    }
    /**
     * Função de CADASTRO de materiais
     */
    public function createUser(Request $request)
    {
        return $this->userRepository->createUser($request);
    }
    /**
     * Função de EDIÇÃO de materiais
     */
    public function edtiUser($id, Request $request)
    {
        return $this->userRepository->edtiUser($id, $request);
    }
    /**
     * Função de EXCLUSÃO de materiais
     */
    public function deleteUser($id)
    {
        return $this->userRepository->deleteUser($id);
    }
}