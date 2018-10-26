<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 20/10/2018
 * Time: 21:50
 */

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Services\UserService;

class EcoUserController extends Controller
{
    private $userService;
    public function __construct(UserService $userService)
    {
        //
        $this->userService = $userService;
    }
    public function createUser(Request $request)
    {
        $user = new User($request);
        $user->save();
        return $request->all();
    }
    public function searchAllUsers()
    {
        return $this->userService->searchAllUsers();
    }
}