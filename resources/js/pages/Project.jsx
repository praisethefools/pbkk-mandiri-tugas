import { Head, Link } from "@inertiajs/react";
import Layout from "@/Components/Layout";
import { Sparkles, Target, Cpu, CheckCircle2, FileText, Compass, Layers, ArrowRight } from "lucide-react";

const TUJUAN_LIST = [
  {
    icon: <Compass className="text-coral" size={24} />,
    text: "Mengurangi proses pencarian dan seleksi lowongan yang dilakukan secara manual.",
  },
  {
    icon: <Target size={24} style={{ color: "var(--indigo)" }} />,
    text: "Membantu pengguna menemukan pekerjaan yang paling relevan dengan profil dan tujuan kariernya.",
  },
  {
    icon: <FileText size={24} style={{ color: "var(--mustard)" }} />,
    text: "Membantu menyesuaikan CV dan materi lamaran berdasarkan karakteristik setiap pekerjaan.",
  },
  {
    icon: <Sparkles className="text-coral" size={24} />,
    text: "Memberikan rekomendasi yang lebih personal dibandingkan pencarian pekerjaan berbasis keyword biasa.",
  },
];

const FITUR_AGEN = [
  {
    title: "Profil & Preferensi Karier",
    desc: "Input latar belakang pendidikan, skill, proyek, pengalaman, dan preferensi karier pengguna.",
    step: "01",
  },
  {
    title: "Analisis & Matching Lowongan",
    desc: "Agent menganalisis berbagai lowongan pekerjaan & menentukan tingkat relevansi serta prioritas.",
    step: "02",
  },
  {
    title: "Penyesuaian Materi Lamaran",
    desc: "Mengidentifikasi kompetensi terbaik dan menyesuaikan CV & dokumen lamaran secara personal.",
    step: "03",
  },
  {
    title: "Rekomendasi & Keputusan",
    desc: "Memberikan panduan berbasis AI bagi pengguna untuk mengambil keputusan lamaran pekerjaan.",
    step: "04",
  },
];

export default function Project() {
  return (
    <Layout>
      <Head title="Project Agentic AI" />

      {/* Hero Section */}
      <section className="t10-hero">
        <div
          className="t10-blob"
          style={{
            width: 420,
            height: 420,
            top: -120,
            left: -80,
            background: "radial-gradient(circle, rgba(232,84,60,0.25), transparent 70%)",
          }}
        />

        <div className="t10-wrap">
          <span className="t10-tag" style={{ background: "var(--indigo)", color: "#fff", marginBottom: 20 }}>
            <Cpu size={14} /> Agentic AI Sub-Theme • Team 10 PBKK
          </span>

          <h1 className="t10-headline" style={{ maxWidth: "24ch", fontSize: "clamp(32px, 5vw, 54px)", lineHeight: 1.15 }}>
            Personalized Agentic AI for Intelligent Job Discovery and Application Preparation
          </h1>

          <p className="t10-hero-sub" style={{ maxWidth: "64ch", marginTop: 24, fontSize: 18 }}>
            Career Application Agent cerdas yang menganalisis profil pengguna, merekomendasikan peluang kerja paling relevan, dan menyesuaikan materi lamaran secara personal.
          </p>
        </div>
      </section>

      {/* Konsep Singkat Section */}
      <section className="t10-section" style={{ paddingTop: 10 }}>
        <div className="t10-wrap">
          <div className="t10-card-box" style={{ background: "var(--panel)", border: "1px solid var(--hairline)", borderRadius: 28, padding: "40px 36px" }}>
            <div className="t10-box-header" style={{ marginBottom: 20 }}>
              <span className="t10-box-badge" style={{ background: "var(--coral)", padding: "6px 14px" }}>
                KONSEP SINGKAT
              </span>
              <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 28, margin: 0, fontWeight: 500 }}>
                Bagaimana Agent Ini Bekerja?
              </h2>
            </div>

            <p style={{ color: "var(--ink)", fontSize: 16.5, lineHeight: 1.8, margin: 0 }}>
              Sistem ini merupakan <strong>AI agent</strong> yang membantu pencari kerja dalam menemukan dan menentukan peluang pekerjaan yang paling sesuai dengan profil mereka. Pengguna memberikan informasi mengenai latar belakang pendidikan, keterampilan, pengalaman, proyek, dan preferensi karier, kemudian agent menganalisis berbagai lowongan pekerjaan dan membandingkannya dengan profil pengguna untuk menentukan tingkat relevansi dan prioritas setiap peluang.
            </p>

            <p style={{ color: "var(--ink)", fontSize: 16.5, lineHeight: 1.8, marginTop: 18, marginBottom: 0 }}>
              Agent selanjutnya mengidentifikasi kompetensi dan pengalaman pengguna yang paling relevan terhadap pekerjaan yang dipilih serta menyesuaikan materi lamaran agar lebih sesuai dengan kebutuhan posisi tersebut. Dengan demikian, sistem tidak hanya berfungsi sebagai pencari lowongan atau pembuat CV, tetapi sebagai <strong>career application agent</strong> yang membantu pengguna mengambil keputusan mengenai pekerjaan yang perlu diprioritaskan sekaligus mempersiapkan lamaran yang sesuai secara personal.
            </p>
          </div>
        </div>
      </section>

      {/* Tujuan Section */}
      <section className="t10-section" style={{ background: "var(--panel-2)", borderRadius: 32, margin: "20px 0", padding: "80px 0" }}>
        <div className="t10-wrap">
          <div className="t10-section-head">
            <div>
              <span className="t10-tag">
                <Target size={14} /> Tujuan Utama Proyek
              </span>
              <h2 className="t10-section-title">Nilai & Manfaat Utama.</h2>
            </div>
            <p className="t10-section-desc">
              Berikut adalah 4 tujuan utama yang ingin dicapai melalui pengembangan Personalized Agentic AI ini:
            </p>
          </div>

          <div className="t10-tujuan-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {TUJUAN_LIST.map((item, i) => (
              <div key={i} className="t10-value-card" style={{ background: "var(--panel)", padding: "28px 24px", display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--panel-2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18, flexShrink: 0 }}>
                  {item.icon}
                </div>
                <p style={{ color: "var(--ink)", fontWeight: 500, fontSize: 15, margin: 0, lineHeight: 1.6 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow / Process Step Section */}
      <section className="t10-section">
        <div className="t10-wrap">
          <div className="t10-section-head">
            <div>
              <span className="t10-tag" style={{ background: "var(--indigo)", color: "#fff" }}>
                <Layers size={14} /> Alur Kerja Sistem
              </span>
              <h2 className="t10-section-title">Tahapan Alur Agentic AI.</h2>
            </div>
            <p className="t10-section-desc">
              Empat langkah cerdas dalam proses penemuan lowongan dan otomatisasi lamaran kerja:
            </p>
          </div>

          <div className="t10-tech-grid">
            {FITUR_AGEN.map((fitur, i) => (
              <div key={i} className="t10-tech-card" style={{ background: "var(--panel)", padding: "24px 20px" }}>
                <div className="t10-tech-top">
                  <span style={{ fontFamily: "Fraunces, serif", fontSize: 24, fontWeight: 600, color: "var(--coral)" }}>
                    {fitur.step}
                  </span>
                  <CheckCircle2 size={18} style={{ color: "var(--indigo)" }} />
                </div>
                <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 18, marginTop: 8, marginBottom: 8 }}>
                  {fitur.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--muted)", margin: 0, lineHeight: 1.55 }}>
                  {fitur.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="t10-wrap" style={{ marginBottom: 80 }}>
        <div className="t10-team-cta-box">
          <div>
            <span className="t10-eyebrow" style={{ margin: 0 }}>
              <span className="dot" /> Explore More Features
            </span>
            <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 26, margin: "14px 0 6px" }}>
              Coba Fitur Kalkulator Interaktif Tim 10
            </h3>
            <p style={{ color: "var(--muted)", margin: 0 }}>
              Simulasi kalkulasi matematika dan perhitungan IPK Matakuliah ITS.
            </p>
          </div>
          <Link href="/kalkulator" className="t10-btn t10-btn-primary">
            Buka Kalkulator <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
