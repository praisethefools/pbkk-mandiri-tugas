import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import Layout from "@/Components/Layout";
import { Calculator as CalcIcon, Sparkles, ExternalLink } from "lucide-react";

export default function Kalkulator({ angka1, angka2, operasi, hasil, teksHasil }) {
  // Dynamic Route Tester State
  const [inputNum1, setInputNum1] = useState(angka1 || "10");
  const [inputNum2, setInputNum2] = useState(angka2 || "5");
  const [inputOp, setInputOp] = useState(operasi || "kali");

  return (
    <Layout>
      <Head title="Kalkulator" />

      {/* Hero Section */}
      <section className="t10-hero" style={{ paddingBottom: 30 }}>
        <div
          className="t10-blob"
          style={{
            width: 360,
            height: 360,
            top: -80,
            right: -60,
            background: "radial-gradient(circle, rgba(240,180,41,0.28), transparent 70%)",
          }}
        />

        <div className="t10-wrap">
          <span className="t10-eyebrow">
            <span className="dot" /> Fitur Kalkulator PBKK
          </span>

          <h1 className="t10-headline" style={{ maxWidth: "20ch" }}>
            Kalkulator <span className="accented">Aplikasi</span>
          </h1>

          <p className="t10-hero-sub" style={{ maxWidth: "58ch" }}>
            Fitur kalkulator serbaguna dengan pengujian kalkulasi matematika.
          </p>

          {/* Dynamic Result Banner if accessed via GET /hitung/{angka1}/{angka2}/{operasi} */}
          {teksHasil && (
            <div
              style={{
                marginTop: 28,
                background: "var(--panel)",
                border: "2px solid var(--coral)",
                borderRadius: 22,
                padding: "24px 28px",
                display: "flex",
                alignItems: "center",
                gap: 18,
                boxShadow: "0 10px 25px rgba(232,84,60,0.12)",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  background: "var(--coral)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Sparkles size={24} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--coral)",
                  }}
                >
                  HASIL KALKULASI
                </span>
                <h2
                  style={{
                    fontFamily: "Fraunces, serif",
                    fontSize: 26,
                    fontWeight: 600,
                    margin: "4px 0 0",
                    color: "var(--ink)",
                  }}
                >
                  {teksHasil}
                </h2>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="t10-section" style={{ paddingTop: 20, paddingBottom: 80 }}>
        <div className="t10-wrap" style={{ maxWidth: 720 }}>
          {/* Uji Perhitungan Card */}
          <div className="t10-history-box" style={{ background: "var(--panel)", padding: "36px 32px", borderRadius: 28 }}>
            <div className="t10-history-head" style={{ marginBottom: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(232,84,60,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CalcIcon size={22} className="text-coral" />
              </div>
              <div>
                <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 22, margin: 0 }}>
                  Uji Perhitungan Matematika
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--muted)", margin: "2px 0 0" }}>
                  Pilih angka dan operasi matematika untuk melakukan kalkulasi.
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, marginBottom: 20 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", display: "block", marginBottom: 6 }}>ANGKA 1</label>
                <input
                  type="number"
                  value={inputNum1}
                  onChange={(e) => setInputNum1(e.target.value)}
                  className="t10-gpa-input"
                  style={{ padding: "10px 14px" }}
                />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", display: "block", marginBottom: 6 }}>OPERASI</label>
                <select
                  value={inputOp}
                  onChange={(e) => setInputOp(e.target.value)}
                  className="t10-gpa-select"
                  style={{ width: "100%", padding: "10px 14px" }}
                >
                  <option value="tambah">tambah (+)</option>
                  <option value="kurang">kurang (-)</option>
                  <option value="kali">kali (×)</option>
                  <option value="bagi">bagi (÷)</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", display: "block", marginBottom: 6 }}>ANGKA 2</label>
                <input
                  type="number"
                  value={inputNum2}
                  onChange={(e) => setInputNum2(e.target.value)}
                  className="t10-gpa-input"
                  style={{ padding: "10px 14px" }}
                />
              </div>
            </div>

            <Link
              href={`/hitung/${inputNum1 || 0}/${inputNum2 || 0}/${inputOp}`}
              className="t10-btn t10-btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: 15 }}
            >
              Hitung Nilai <ExternalLink size={16} />
            </Link>

            <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--hairline)" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)" }}>CONTOH PENGUJIAN INSTAN:</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 }}>
                <Link href="/hitung/10/5/kali" className="t10-chip" style={{ textDecoration: "none", padding: "8px 16px", fontSize: 14 }}>
                  10 × 5
                </Link>
                <Link href="/hitung/100/25/tambah" className="t10-chip" style={{ textDecoration: "none", padding: "8px 16px", fontSize: 14 }}>
                  100 + 25
                </Link>
                <Link href="/hitung/50/10/kurang" className="t10-chip" style={{ textDecoration: "none", padding: "8px 16px", fontSize: 14 }}>
                  50 - 10
                </Link>
                <Link href="/hitung/20/4/bagi" className="t10-chip" style={{ textDecoration: "none", padding: "8px 16px", fontSize: 14 }}>
                  20 ÷ 4
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
