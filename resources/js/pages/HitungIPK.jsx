import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { GraduationCap, Sparkles, ExternalLink } from "lucide-react";
import Layout from "@/Components/Layout";

const PREDIKAT_COLOR = {
  "Cum Laude":         "var(--coral)",
  "Sangat Memuaskan":  "var(--indigo)",
  "Memuaskan":         "var(--mustard)",
  "Cukup":             "var(--muted)",
  "Kurang":            "#c0392b",
};

export default function HitungIPK({ ip1, ip2, rata, predikat }) {
  const [inputIp1, setInputIp1] = useState(ip1 !== undefined ? String(ip1) : "3.50");
  const [inputIp2, setInputIp2] = useState(ip2 !== undefined ? String(ip2) : "3.25");

  const hasResult = ip1 !== undefined && ip2 !== undefined;

  return (
    <Layout>
      <Head title="Kalkulator IPK" />

      <section className="t10-hero" style={{ paddingBottom: 30 }}>
        <div
          className="t10-blob"
          style={{
            width: 360,
            height: 360,
            top: -80,
            right: -60,
            background: "radial-gradient(circle, rgba(232,84,60,0.22), transparent 70%)",
          }}
        />
        <div className="t10-wrap">
          <span className="t10-eyebrow">
            <span className="dot" /> Tugas Mandiri PBKK
          </span>

          <h1 className="t10-headline" style={{ maxWidth: "20ch" }}>
            Kalkulator <span className="accented">IPK</span>
          </h1>

          <p className="t10-hero-sub" style={{ maxWidth: "56ch" }}>
            Hitung rata-rata IP dua semester dan lihat predikat kelulusan ITS secara otomatis.
          </p>

          {hasResult && (
            <div
              style={{
                marginTop: 28,
                background: "var(--panel)",
                border: `2px solid ${PREDIKAT_COLOR[predikat] ?? "var(--coral)"}`,
                borderRadius: 22,
                padding: "24px 28px",
                display: "flex",
                alignItems: "center",
                gap: 18,
                boxShadow: "0 10px 25px rgba(232,84,60,0.10)",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  background: PREDIKAT_COLOR[predikat] ?? "var(--coral)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Sparkles size={22} />
              </div>
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)" }}>
                  HASIL PERHITUNGAN
                </span>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 600, margin: "4px 0 2px", color: "var(--ink)" }}>
                  IPK {rata} — {predikat}
                </h2>
                <p style={{ fontSize: 14, color: "var(--muted)", margin: 0 }}>
                  IP Semester 1: {ip1} &nbsp;|&nbsp; IP Semester 2: {ip2} &nbsp;|&nbsp; Rata-rata: {rata}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="t10-section" style={{ paddingTop: 20, paddingBottom: 80 }}>
        <div className="t10-wrap" style={{ maxWidth: 680 }}>
          <div className="t10-history-box" style={{ background: "var(--panel)", padding: "36px 32px", borderRadius: 28 }}>
            <div className="t10-history-head" style={{ marginBottom: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: "rgba(232,84,60,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <GraduationCap size={22} style={{ color: "var(--coral)" }} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 22, margin: 0 }}>
                  Input IP per Semester
                </h3>
                <p style={{ fontSize: 13.5, color: "var(--muted)", margin: "2px 0 0" }}>
                  Masukkan IP Semester 1 dan 2 (skala 0–4).
                </p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", display: "block", marginBottom: 6 }}>
                  IP SEMESTER 1
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="4"
                  value={inputIp1}
                  onChange={(e) => setInputIp1(e.target.value)}
                  className="t10-gpa-input"
                  style={{ padding: "10px 14px", width: "100%", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: "var(--muted)", display: "block", marginBottom: 6 }}>
                  IP SEMESTER 2
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="4"
                  value={inputIp2}
                  onChange={(e) => setInputIp2(e.target.value)}
                  className="t10-gpa-input"
                  style={{ padding: "10px 14px", width: "100%", boxSizing: "border-box" }}
                />
              </div>
            </div>

            <Link
              href={`/hitung-ipk/${inputIp1 || 0}/${inputIp2 || 0}`}
              className="t10-btn t10-btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: 15 }}
            >
              Hitung IPK <ExternalLink size={16} />
            </Link>

            <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--hairline)" }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)" }}>CONTOH CEPAT:</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 }}>
                {[["3.75", "3.50"], ["3.25", "3.00"], ["2.80", "2.60"], ["4.00", "4.00"]].map(([a, b]) => (
                  <Link
                    key={`${a}-${b}`}
                    href={`/hitung-ipk/${a}/${b}`}
                    className="t10-chip"
                    style={{ textDecoration: "none", padding: "8px 16px", fontSize: 14 }}
                  >
                    {a} + {b}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Tabel predikat ITS */}
          <div style={{ marginTop: 28, background: "var(--panel)", borderRadius: 20, padding: "24px 28px", border: "1px solid var(--hairline)" }}>
            <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: 16, marginBottom: 14 }}>Predikat Kelulusan ITS</h4>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--hairline)" }}>
                  <th style={{ textAlign: "left", padding: "6px 0", color: "var(--muted)", fontWeight: 600 }}>Rentang IPK</th>
                  <th style={{ textAlign: "left", padding: "6px 0", color: "var(--muted)", fontWeight: 600 }}>Predikat</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["3.51 – 4.00", "Cum Laude"],
                  ["3.01 – 3.50", "Sangat Memuaskan"],
                  ["2.76 – 3.00", "Memuaskan"],
                  ["2.00 – 2.75", "Cukup"],
                  ["< 2.00",      "Kurang"],
                ].map(([range, label]) => (
                  <tr key={label} style={{ borderBottom: "1px solid var(--hairline)" }}>
                    <td style={{ padding: "8px 0", fontFamily: "monospace", fontSize: 13 }}>{range}</td>
                    <td style={{ padding: "8px 0", fontWeight: 600, color: PREDIKAT_COLOR[label] ?? "var(--ink)" }}>{label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}
