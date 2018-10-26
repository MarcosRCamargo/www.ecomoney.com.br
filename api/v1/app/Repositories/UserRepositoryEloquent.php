<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 11/10/2018
 * Time: 22:14
 */

namespace App\Repositories;

use App\Models\UserEcoMoney;
use App\Repositories\UsersRepositoryinterface;
use Illuminate\Http\Request;

class UserRepositoryEloquent implements UsersRepositoryinterface
{
    private $user;
    protected $prymaryKey = 'id_user';

    public function __construct(UserEcoMoney $user)
    {
        $this->User = $user;
    }

    public function searchAllUsers()
    {
        // TODO: Implement seacrhAllUsers() method.
        return $this->user
            ->select(
                'id_Usertypes',
                'desc_User',
                'price',
                'point_values'
            )->get();
    }
    public function searchUser(int $id)
    {
        // TODO: Implement seacrhUsers() method.
        return $this->user
            ->select(
                'id_Usertypes',
                'desc_User',
                'price',
                'point_values'
            )
            ->where('id_Usertypes',$id)
            ->get();
    }
    public function createUser(Request $request)
    {
        // TODO: Implement createUser() method.
        return $this->user->create($request->all());
    }
    public function edtiUser(int $id, Request $request)
    {
        // TODO: Implement edtiUser() method.
        return $this->user
            ->where('id_Usertypes', $id)
            ->update($request->all());
    }
    public function deleteUser(int $id)
    {
        // TODO: Implement deleteUser() method.

        $User = $this->user->find($id);
        return $User->delete();
    }

    public function searchMUser(int $id)
    {
        // TODO: Implement searchMUser() method.
    }

    public function createUaser(Request $request)
    {
        // TODO: Implement createUaser() method.
    }

    public function edtiUaser(int $id, Request $request)
    {
        // TODO: Implement edtiUaser() method.
    }

    public function deleteUaser(int $id)
    {
        // TODO: Implement deleteUaser() method.
    }
}