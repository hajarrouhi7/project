<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InfoTerrainController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
//Route::get('/InfoView/{id}', [InfoTerrainController::class,'show']);
Route::resource('/InfoTerrain',InfoTerrainController::class);

// Route::get('/InfoView/{id}', 'InfoTerrainController@show');
Route::get('/', function () {
    return view('welcome');
});
