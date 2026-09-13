import { Head, Link } from "@inertiajs/react";
import Layout from "@/Components/Layout";
import { GraduationCap, FlaskConical, Target, Award, Sparkles, ChevronRight } from "lucide-react";

const PRODI_LIST = [
  {
    title: "Teknik Informatika S1",
    subtitle: "Sarjana Reguler",
    badge: "S1",
    desc: "Program sarjana berfokus pada fondasi kuat ilmu komputer, keahlian software engineering, kecerdasan buatan, dan jaringan komputer.",
    rotate: "-1deg",
  },
  {
    title: "Teknik Informatika (IUP)",
    subtitle: "International Undergraduate Program",
    badge: "IUP",
    desc: "Kelas internasional berpembantar bahasa Inggris dengan kurikulum global dan peluang double degree / student exchange ke mitra luar negeri.",
    rotate: "1deg",
  },
  {
    title: "Rekayasa Kecerdasan Artifisial",
    subtitle: "Sarjana AI (S1)",
    badge: "S1 AI",
    desc: "Program studi inovatif yang berfokus pada kecerdasan buatan, machine learning, data science, dan sistem otonom cerdas.",
    rotate: "-0.5deg",
  },
  {
    title: "Rekayasa Perangkat Lunak",
    subtitle: "Sarjana Software Engineering (S1)",
    badge: "S1 RPL",
    desc: "Program spesialisasi rekayasa perangkat lunak modern, arsitektur cloud, pengujian sistem, dan metodologi agile.",
    rotate: "1.5deg",
  },
  {
    title: "Teknik Informatika S2",
    subtitle: "Magister Informatika",
    badge: "S2",
    desc: "Program magister pascasarjana untuk pendalaman riset informatika tingkat lanjut, sains data, dan komputasi awan.",
    rotate: "-1deg",
  },
  {
    title: "Ilmu Komputer S3",
    subtitle: "Doktor Ilmu Komputer",
    badge: "S3",
    desc: "Jenjang tertinggi doktoral untuk menghasilkan peneliti independen dan pakar dalam penemuan teori maupun inovasi teknologi informatika.",
    rotate: "0.5deg",
  },
];

const LAB_LIST = [
  {
    name: "Lab Rekayasa Perangkat Lunak",
    code: "RPL",
    desc: "Pengembangan metodologi, arsitektur, dan pengujian sistem perangkat lunak.",
  },
  {
    name: "Lab Komputasi Cerdas & Visi",
    code: "KCV",
    desc: "Riset seputar kecerdasan buatan, machine learning, dan pengolahan citra digital.",
  },
  {
    name: "Lab Grafika, Interaksi, Gim, & Analitik",
    code: "ALPRO / GIGA",
    desc: "Pengembangan teknologi grafika komputer, UI/UX, game dev, dan data analytics.",
  },
  {
    name: "Lab Algoritma & Pemrograman",
    code: "AP",
    desc: "Pendalaman struktur data, kompleksitas algoritma, dan pemrograman kompetitif.",
  },
  {
    name: "Lab Manajemen Cerdas Informasi",
    code: "MCI",
    desc: "Riset pengolahan basis data skala besar, pengenalan pola data, dan sistem informasi.",
  },
  {
    name: "Lab Pemodelan & Komputasi Terapan",
    code: "PKT",
    desc: "Simulasi sistem kompleks, komputasi terdistribusi, dan pemodelan matematis.",
  },
];

const MISI_LIST = [
  "Menyelenggarakan proses pembelajaran yang berkualitas, dan memenuhi standar nasional maupun internasional",
  "Melaksanakan penelitian yang inovatif, bermutu, dan bermanfaat",
  "Meningkatkan pemanfaatan teknologi informasi dan komunikasi untuk masyarakat",
  "Menjalin kemitraan dengan berbagai lembaga, baik di dalam maupun di luar negeri",
];

export default function About() {
  return (
    <Layout>
      <Head title="About — DTIF ITS & FTEIC" />

      {/* Header / Hero Section */}
      <section className="t10-hero">
        <div
          className="t10-blob"
          style={{
            width: 380,
            height: 380,
            top: -100,
            right: -60,
            background: "radial-gradient(circle, rgba(240,180,41,0.30), transparent 70%)",
          }}
        />

        <div className="t10-wrap">
          <div className="t10-about-banner">
            <span className="t10-tag">
              <Sparkles size={14} /> Kelompok 10 DTIF ITS • FTEIC ITS • Agentic AI Sub-Theme
            </span>

            <h1 className="t10-headline" style={{ maxWidth: "22ch" }}>
              Departemen Teknik Informatika <span className="accented">ITS</span>
            </h1>

            <p className="t10-hero-sub" style={{ maxWidth: "60ch" }}>
              Fakultas Teknologi Elektro dan Informatika Cerdas (FTEIC) — Institut Teknologi Sepuluh Nopember Surabaya.
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section */}
      <section className="t10-section" style={{ paddingTop: 20 }}>
        <div className="t10-wrap">
          <div className="t10-section-head">
            <div>
              <span className="t10-tag" style={{ background: "var(--coral)", color: "#fff" }}>
                <Target size={14} /> Visi & Misi
              </span>
              <h2 className="t10-section-title">Arah & Komitmen Departemen.</h2>
            </div>
            <p className="t10-section-desc">
              Menjadi pionir pendidikan dan riset informatika yang berorientasi pada masa depan kecerdasan buatan dan industri global.
            </p>
          </div>

          <div className="t10-visi-misi-grid">
            {/* Box VISI */}
            <div className="t10-card-box t10-visi-box">
              <div className="t10-box-header">
                <span className="t10-box-badge">VISI</span>
                <h3>Visi Departemen Informatika</h3>
              </div>
              <p className="t10-box-text">
                Sejalan dengan visi ITS yaitu menjadi perguruan tinggi dengan reputasi internasional dalam ilmu pengetahuan, teknologi, dan seni, terutama yang menunjang industri dan kelautan yang berwawasan lingkungan, maka visi Departemen Informatika adalah menjadi inovator bidang informatika yang unggul di tingkat nasional dengan reputasi internasional, serta berperan aktif dalam upaya memajukan dan mensejahterakan bangsa.
              </p>

              <div className="t10-divider-line" />

              <h4 style={{ fontFamily: "Fraunces, serif", fontSize: 18, margin: "16px 0 8px" }}>
                Visi Departemen Teknik Informatika (DTIF)
              </h4>
              <p className="t10-box-text">
                Visi Departemen Teknik Informatika (DTIF) berfokus untuk menjadi lembaga pendidikan yang unggul dan inovatif-inventif dalam informatika cerdas, mendukung transformasi digital dan berkontribusi kepada masyarakat dengan reputasi internasional.
              </p>
            </div>

            {/* Box MISI */}
            <div className="t10-card-box t10-misi-box">
              <div className="t10-box-header">
                <span className="t10-box-badge" style={{ background: "var(--indigo)" }}>MISI</span>
                <h3>Misi Departemen Informatika</h3>
              </div>
              <ul className="t10-misi-list">
                {MISI_LIST.map((misi, i) => (
                  <li key={i}>
                    <div className="t10-misi-num">{i + 1}</div>
                    <span>{misi}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Studi Section */}
      <section className="t10-section" style={{ background: "var(--panel-2)", borderRadius: 32, margin: "20px 0" }}>
        <div className="t10-wrap">
          <div className="t10-section-head">
            <div>
              <span className="t10-tag">
                <GraduationCap size={14} /> 6 Jenjang Program Studi
              </span>
              <h2 className="t10-section-title">Program Studi DTIF FTEIC ITS.</h2>
            </div>
            <p className="t10-section-desc">
              Departemen Teknik Informatika FTEIC ITS menyelenggarakan 6 jenjang program studi dari tingkat Sarjana hingga Doktoral:
            </p>
          </div>

          <div className="t10-prodi-grid">
            {PRODI_LIST.map((p, i) => (
              <div
                key={i}
                className="t10-prodi-card"
                style={{ transform: `rotate(${p.rotate})` }}
              >
                <div className="t10-prodi-top">
                  <span className="t10-prodi-badge">{p.badge}</span>
                  <span className="t10-prodi-sub">{p.subtitle}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratorium Section */}
      <section className="t10-section">
        <div className="t10-wrap">
          <div className="t10-section-head">
            <div>
              <span className="t10-tag" style={{ background: "var(--indigo)", color: "#fff" }}>
                <FlaskConical size={14} /> 6 Laboratorium Riset
              </span>
              <h2 className="t10-section-title">Laboratorium Bidang Minat.</h2>
            </div>
            <p className="t10-section-desc">
              Terdapat 6 laboratorium utama pendukung riset, inovasi, dan kegiatan pembelajaran di DTIF ITS:
            </p>
          </div>

          <div className="t10-lab-grid">
            {LAB_LIST.map((lab, i) => (
              <div key={i} className="t10-lab-card">
                <div className="t10-lab-code">{lab.code}</div>
                <h3>{lab.name}</h3>
                <p>{lab.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team 10 Banner Footer */}
      <section className="t10-wrap" style={{ marginBottom: 80 }}>
        <div className="t10-team-cta-box">
          <div>
            <span className="t10-eyebrow" style={{ margin: 0 }}>
              <span className="dot" /> Kelompok 10 PBKK
            </span>
            <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 28, margin: "14px 0 6px" }}>
              Ingin mengenal anggota tim kami?
            </h3>
            <p style={{ color: "var(--muted)", margin: 0 }}>
              Lihat profil 6 mahasiswa pengembang proyek Team 10 PBKK.
            </p>
          </div>
          <Link href="/team" className="t10-btn t10-btn-primary">
            Lihat Anggota Tim <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
