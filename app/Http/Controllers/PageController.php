<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PageController extends Controller
{
    protected function members(): array
    {
        $path = resource_path('data/team.json');
        if (! file_exists($path)) {
            return [];
        }

        return json_decode(file_get_contents($path), true) ?? [];
    }

    public function home()
    {
        $members = $this->members();

        return Inertia::render('Home', [
            'memberCount' => count($members),
        ]);
    }

    public function index()
    {
        return $this->home();
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function project()
    {
        return Inertia::render('Project');
    }

    public function kalkulator()
    {
        return Inertia::render('Kalkulator');
    }

    public function mahasiswa(string $nrp)
    {
        $members = $this->members();
        $member = collect($members)->firstWhere('nrp', $nrp);

        return Inertia::render('Mahasiswa', [
            'nrp'    => $nrp,
            'member' => $member ?? null,
        ]);
    }

    public function agent(?string $tema = null)
    {
        $tema = $tema ?? 'General Assistant Agent';

        $deskripsi = [
            'career'    => 'Agent yang membantu pencari kerja menemukan lowongan relevan dan menyesuaikan materi lamaran secara personal berbasis profil pengguna.',
            'health'    => 'Agent cerdas berbasis AI untuk monitoring kesehatan, pengingat obat, dan rekomendasi gaya hidup sehat yang dipersonalisasi.',
            'education' => 'Tutor AI adaptif yang menyesuaikan materi belajar, kecepatan, dan metode pengajaran berdasarkan gaya belajar tiap mahasiswa.',
            'finance'   => 'Agent manajemen keuangan pribadi yang menganalisis pola pengeluaran dan memberikan saran investasi berbasis data.',
        ];

        $temaKey = strtolower($tema);
        $desc = $deskripsi[$temaKey]
            ?? "Platform Agentic AI bertema \"{$tema}\" — agen cerdas yang mengotomatiskan tugas kompleks secara mandiri menggunakan model bahasa besar.";

        return Inertia::render('Agent', [
            'tema'       => $tema,
            'deskripsi'  => $desc,
            'isDefault'  => $tema === 'General Assistant Agent',
        ]);
    }

    public function hitungIpk($ip1, $ip2)
    {
        $v1 = is_numeric($ip1) ? (float) $ip1 : 0;
        $v2 = is_numeric($ip2) ? (float) $ip2 : 0;

        // Clamp ke rentang valid ITS (0–4)
        $v1 = min(max($v1, 0), 4);
        $v2 = min(max($v2, 0), 4);

        $rata = ($v1 + $v2) / 2;

        return Inertia::render('HitungIPK', [
            'ip1'      => $v1,
            'ip2'      => $v2,
            'rata'     => round($rata, 2),
            'predikat' => $this->predikat($rata),
        ]);
    }

    public function notFound()
    {
        return Inertia::render('NotFound')->toResponse(request())->setStatusCode(404);
    }

    private function predikat(float $ipk): string
    {
        if ($ipk >= 3.51) return 'Cum Laude';
        if ($ipk >= 3.01) return 'Sangat Memuaskan';
        if ($ipk >= 2.76) return 'Memuaskan';
        if ($ipk >= 2.00) return 'Cukup';
        return 'Kurang';
    }

    public function hitung($angka1, $angka2, $operasi)
    {
        $num1 = is_numeric($angka1) ? (float) $angka1 : 0;
        $num2 = is_numeric($angka2) ? (float) $angka2 : 0;
        $op = strtolower($operasi);

        $hasil = 0;
        $opText = $op;

        switch ($op) {
            case 'tambah':
            case 'add':
            case '+':
                $hasil = $num1 + $num2;
                $opText = 'tambah';
                break;
            case 'kurang':
            case 'sub':
            case '-':
                $hasil = $num1 - $num2;
                $opText = 'kurang';
                break;
            case 'kali':
            case 'mul':
            case '*':
            case 'x':
                $hasil = $num1 * $num2;
                $opText = 'kali';
                break;
            case 'bagi':
            case 'div':
            case '/':
                $opText = 'bagi';
                if ($num2 != 0) {
                    $hasil = $num1 / $num2;
                } else {
                    $hasil = 'tidak terdefinisi (pembagian dengan nol)';
                }
                break;
            default:
                $hasil = 'operasi tidak valid';
                break;
        }

        $teksHasil = is_numeric($hasil)
            ? "Hasil dari {$angka1} {$opText} {$angka2} adalah {$hasil}"
            : "Hasil dari {$angka1} {$opText} {$angka2} {$hasil}";

        return Inertia::render('Kalkulator', [
            'angka1' => $angka1,
            'angka2' => $angka2,
            'operasi' => $opText,
            'hasil' => $hasil,
            'teksHasil' => $teksHasil,
        ]);
    }
}
