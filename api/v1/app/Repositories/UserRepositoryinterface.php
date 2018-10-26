<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 11/10/2018
 * Time: 21:59
 */

namespace App\Repositories;

use Illuminate\Http\Request;

interface UsersRepositoryinterface
{
    public function searchAllUsers();
    public function searchMUser(int $id);
    public function createUaser(Request $request);
    public function edtiUaser(int $id, Request $request);
    public function deleteUaser(int $id);
}