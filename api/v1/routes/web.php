<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
//Recupera todos os materiais ou apenas um material pelo seu ID

$router->get('/api/materials', 'MaterialsController@searchAllMaterials');
$router->get('/api/material/{id}', 'MaterialsController@searchMaterial');

/**
 * URI de Pesquisa de materiais
 */

$router->post('/api/material', 'MaterialsController@createMaterial');
/**
 * URI de EDIÇÃO de materiais
 */
$router->put('/api/material/{id}', 'MaterialsController@edtiMaterial');
/**
 * URI de REMOÇÃO de materiais
 */
$router->delete('/api/material/{id}', 'MaterialsController@deleteMaterial');
