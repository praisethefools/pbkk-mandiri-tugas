<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\TeamController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PageController::class, 'index'])->name('home');

Route::get('/about', [PageController::class, 'about'])->name('about');

Route::get('/project-idea', [PageController::class, 'project'])->name('project-idea');
Route::get('/project', [PageController::class, 'project'])->name('project');

Route::get('/kalkulator', [PageController::class, 'kalkulator'])->name('kalkulator');

Route::get('/hitung/{angka1}/{angka2}/{operasi}', [PageController::class, 'hitung'])->name('hitung');

Route::get('/team', [TeamController::class, 'index'])->name('team.index');

Route::get('/team/{id}', [TeamController::class, 'show'])
    ->whereNumber('id')
    ->name('team.show');

// ── Tugas Mandiri ────────────────────────────────────────────────────────────

// Rute 2: Detail profil by NRP (hanya 10 digit angka)
Route::get('/mahasiswa/{nrp}', [PageController::class, 'mahasiswa'])
    ->where('nrp', '^\d{10}$')
    ->name('mahasiswa.detail');

// Rute 3: Ide Platform Agentic AI (tema opsional)
Route::get('/agent/{tema?}', [PageController::class, 'agent'])
    ->name('agent.tema');

// Tantangan 2: Kalkulator IPK
Route::get('/hitung-ipk/{ip1}/{ip2}', [PageController::class, 'hitungIpk'])
    ->name('hitung-ipk');

// Tantangan 3: Dashboard prefix group
Route::prefix('dashboard')->name('dashboard.')->group(function () {
    Route::get('/mahasiswa/{nrp}', [PageController::class, 'mahasiswa'])
        ->where('nrp', '^\d{10}$')
        ->name('mahasiswa');

    Route::get('/agent/{tema?}', [PageController::class, 'agent'])
        ->name('agent');

    Route::get('/hitung-ipk/{ip1}/{ip2}', [PageController::class, 'hitungIpk'])
        ->name('hitung-ipk');
});

// Tantangan 3: Fallback route
Route::fallback([PageController::class, 'notFound'])->name('fallback');
