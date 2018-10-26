<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','EcoMoneyController@home');

Route::prefix('dashboard')->group(function ()
{
    Route::get('home' , 'EcoMoneyController@home');

    Route::get('profile' , 'EcoMoneyController@profile');
    Route::put('profile' , 'EcoMoneyController@profileEdit');

    Route::get('mensages' , 'EcoMoneyController@mensages');
    Route::delete('mensages' , 'EcoMoneyController@mensageDelete');

    Route::get('virtual-acount' , 'EcoMoneyController@virtualacount');
    Route::put('virtual-acount' , 'EcoMoneyController@virtualacountEdit');

    Route::get('notices' , 'EcoMoneyController@notices');
    Route::get('ecopoints' , 'EcoMoneyController@ecopoints');

    Route::get('redeem-ecopoints' , 'EcoMoneyController@redeem');
    Route::post('redeem-ecopoints' , 'EcoMoneyController@redeem');
});