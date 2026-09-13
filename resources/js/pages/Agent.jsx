import { Head, Link } from "@inertiajs/react";
import { Cpu, Sparkles, ArrowRight } from "lucide-react";
import Layout from "@/Components/Layout";

const TEMA_SUGGESTIONS = [
  { label: "Career", slug: "career", desc: "Job discovery & lamaran otomatis" },
  { label: "Health", slug: "health", desc: "Monitoring kesehatan personal" },
  { label: "Education", slug: "education", desc: "Tutor AI adaptif" },
  { label: "Finance", slug: "finance", desc: "Manajemen keuangan cerdas" },
];

export default function Agent({ tema, deskripsi, isDefault }) {
  return (
    <Layout>
      <Head title={`Agent: ${tema}`} />

      <section className="t10-hero" style={{ paddingBottom: 30 }}>
        <div
          className="t10-blob"
          style={{
            width: 400,
            height: 400,
            top: -120,
            right: -80,
            background: "radial-gradient(circle, rgba(61,53,87,0.22), transparent 70%)",
          }}
        />
        <div className="t10-wrap">
          <span className="t10-tag" style={{ background: "var(--indigo)", color: "#fff", marginBottom: 20 }}>
            <Cpu size={14} /> Platform Agentic AI
          </span>

          <h1 className="t10-headline" style={{ maxWidth: "28ch" }}>
            {isDefault ? (
              <>
                Selamat datang di <span className="accented">Agentic AI</span>
              </>
            ) : (
              <>
                Tema: <span className="accented">{tema}</span>
              </>
            )}
          </h1>

          <p className="t10-hero-sub" style={{ maxWidth: "60ch", marginTop: 20 }}>
            {deskripsi}
          </p>

          {isDefault && (
            <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 12 }}>
              Parameter tema tidak diisi — menampilkan fallback default:{" "}
              <code style={{ background: "var(--panel)", padding: "2px 8px", borderRadius: 6 }}>
                General Assistant Agent
              </code>
            </p>
          )}
        </div>
      </section>

      <section className="t10-section" style={{ paddingTop: 10, paddingBottom: 80 }}>
        <div className="t10-wrap">
          <div style={{ marginBottom: 24 }}>
            <span className="t10-eyebrow">
              <span className="dot" /> Coba tema lain
            </span>
            <h2 className="t10-section-title" style={{ marginTop: 8 }}>
              Pilih Platform AI.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {TEMA_SUGGESTIONS.map((t) => (
              <Link
                key={t.slug}
                href={`/agent/${t.slug}`}
                className="t10-card-box"
                style={{
                  background: tema?.toLowerCase() === t.slug ? "var(--indigo)" : "var(--panel)",
                  border: "1px solid var(--hairline)",
                  borderRadius: 20,
                  padding: "24px 20px",
                  textDecoration: "none",
                  color: tema?.toLowerCase() === t.slug ? "#fff" : "var(--ink)",
                  display: "block",
                  transition: "opacity 0.15s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <Sparkles size={18} />
                  <strong style={{ fontFamily: "'Fraunces', serif", fontSize: 18 }}>{t.label}</strong>
                </div>
                <p style={{ fontSize: 13.5, margin: 0, opacity: 0.8 }}>{t.desc}</p>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <Link href="/agent" className="t10-btn t10-btn-ghost">
              Reset ke Default <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
