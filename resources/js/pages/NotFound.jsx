import { Head, Link } from "@inertiajs/react";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "@/Components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <Head title="404 — Halaman Tidak Ditemukan" />

      <section className="t10-section" style={{ paddingTop: 100, paddingBottom: 100, textAlign: "center" }}>
        <div className="t10-wrap" style={{ maxWidth: 540 }}>
          <div
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(80px, 16vw, 140px)",
              fontWeight: 600,
              lineHeight: 1,
              color: "var(--coral)",
              marginBottom: 8,
              opacity: 0.85,
            }}
          >
            404
          </div>

          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(22px, 4vw, 32px)", margin: "0 0 16px" }}>
            Halaman tidak ditemukan.
          </h1>

          <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.6, marginBottom: 36 }}>
            URL yang kamu akses tidak tersedia di aplikasi ini. Mungkin sudah dipindah,
            dihapus, atau kamu salah ketik.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="t10-btn t10-btn-primary">
              <Home size={17} /> Kembali ke Beranda
            </Link>
            <button
              onClick={() => window.history.back()}
              className="t10-btn t10-btn-ghost"
              style={{ cursor: "pointer" }}
            >
              <ArrowLeft size={17} /> Kembali
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
