<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InfoTerrainController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::resource('/InfoTerrain',InfoTerrainController::class);
//Route::get('/InfoView/{id}', [InfoTerrainController::class,'show']);
//Route::get('/InfoView/{id}', 'InfoTerrainController@show');
// Route::get('/InfoView/{id}', [InfoTerrainController::class,'show']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
