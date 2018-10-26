<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 11/10/2018
 * Time: 22:14
 */

namespace App\Repositories;

use App\Models\UserEcoMoney;
use App\Repositories\UserRepositoryinterface;
use Illuminate\Http\Request;

class UserRepositoryEloquent implements UserRepositoryinterface
{
    private $user;
    protected $prymaryKey = 'id_user';

    public function __construct(UserEcoMoney $user)
    {
        $this->user = $user;
    }

    public function searchAllUsers()
    {
        // TODO: Implement searchAllUsers() method.
        return $this->user
            ->select(
                'user_name',
                'user_mail',
                'user_datebirth',
                'cpf',
                'user_phone'
            )->get();
    }

    public function searchUser(int $id)
    {
        // TODO: Implement searchUserl() method.
        return $this->user
            ->select(
                'user_name',
                'user_mail',
                'user_datebirth',
                'cpf',
                'user_phone'
            )
            ->where('id_user',$id)
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
            ->where('id_user', $id)
            ->update($request->all());
    }

    public function deleteUser(int $id)
    {
        // TODO: Implement deleteUser() method.
        $material = $this->user->find($id);
        return $material->delete();
    }
}