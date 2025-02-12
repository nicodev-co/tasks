<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    Route::group(['prefix' => 'v1'], function () {
        Route::apiResource('tasks', App\Http\Controllers\api\v1\TaskController::class);
    });
});

