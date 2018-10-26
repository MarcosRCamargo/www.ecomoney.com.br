<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 11/10/2018
 * Time: 21:59
 */

namespace App\Repositories;

use Illuminate\Http\Request;

interface UserRepositoryinterface
{
    public function searchAllUsers();
    public function searchUser(int $id);
    public function createUser(Request $request);
    public function edtiUser(int $id, Request $request);
    public function deleteUser(int $id);
}