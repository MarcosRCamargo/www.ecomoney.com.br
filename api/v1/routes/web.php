<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|Todas as rotas URI - ou Serviços que serão consumidos são Definidas neste
|código.
|
*/


/**
 * Rotas relativas aos materiais recicláveis
 */
$router->group(['prefix' => '/api'], function()use ($router){
    $router->get('/users', 'EcoUserController@searchAllUsers');
    });

$router->post('/api/user', 'EcoUserController@createUser');
$router->get('/api/materials', 'MaterialsController@searchAllMaterials');//URI de Pesquisa de TODOS os materiais

$router->get('/api/material/{id}', 'MaterialsController@searchMaterial');//URI de Pesquisa de um ÚNICO materiaiL

$router->post('/api/material', 'MaterialsController@createMaterial'); // URI de EDIÇÃO de materiais

$router->put('/api/material/{id}', 'MaterialsController@edtiMaterial');//URI de ATUALIZAÇÃO de materiais

$router->delete('/api/material/{id}', 'MaterialsController@deleteMaterial');//URI de REMOÇÃO de materiais

/**
 * Rotas relativas aos Usuários do sistema
 *
 */
$router->post('/api/user', 'EcoUserController@createUser'); //URI de Criação de Usuário