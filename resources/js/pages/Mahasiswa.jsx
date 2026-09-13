import { Head, Link } from "@inertiajs/react";
import { ArrowLeft, Mail, UserX } from "lucide-react";
import Layout from "@/Components/Layout";

const AVATAR_PALETTE = ["t10-avatar-coral", "t10-avatar-mustard", "t10-avatar-indigo"];

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Mahasiswa({ nrp, member }) {
  return (
    <Layout>
      <Head title={member ? `${member.name} — Profil Mahasiswa` : `NRP ${nrp} — Tidak Ditemukan`} />

      <section className="t10-section" style={{ paddingTop: 64 }}>
        <div className="t10-wrap">
          <Link href="/" className="t10-back-link">
            <ArrowLeft size={16} /> Kembali ke beranda
          </Link>

          {member ? (
            <>
              <div className="t10-detail-head" style={{ marginTop: 28 }}>
                <div className={`t10-avatar lg ${AVATAR_PALETTE[(member.id - 1) % AVATAR_PALETTE.length]}`}>
                  {initials(member.name)}
                </div>
                <div>
                  <h1 className="t10-detail-name">{member.name}</h1>
                  <span className="t10-tag" style={{ margin: 0 }}>
                    NRP {member.nrp}
                  </span>
                </div>
              </div>

              <div style={{ marginTop: 32 }}>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: 18, marginBottom: 14 }}>
                  Informasi Akademis
                </h3>
                <div className="t10-card-box" style={{ background: "var(--panel)", border: "1px solid var(--hairline)", borderRadius: 20, padding: "28px 32px" }}>
                  <div style={{ display: "grid", gap: 12 }}>
                    <div style={{ display: "flex", gap: 16 }}>
                      <span style={{ color: "var(--muted)", fontSize: 13, width: 140, flexShrink: 0 }}>Nama Lengkap</span>
                      <strong style={{ fontSize: 15 }}>{member.name}</strong>
                    </div>
                    <div style={{ display: "flex", gap: 16 }}>
                      <span style={{ color: "var(--muted)", fontSize: 13, width: 140, flexShrink: 0 }}>NRP</span>
                      <strong style={{ fontSize: 15, fontFamily: "monospace" }}>{member.nrp}</strong>
                    </div>
                    <div style={{ display: "flex", gap: 16 }}>
                      <span style={{ color: "var(--muted)", fontSize: 13, width: 140, flexShrink: 0 }}>Departemen</span>
                      <strong style={{ fontSize: 15 }}>Teknik Informatika — ITS</strong>
                    </div>
                    <div style={{ display: "flex", gap: 16 }}>
                      <span style={{ color: "var(--muted)", fontSize: 13, width: 140, flexShrink: 0 }}>Angkatan</span>
                      <strong style={{ fontSize: 15 }}>2024</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: 18, marginBottom: 14 }}>
                  Kontak
                </h3>
                <div className="t10-contact-row">
                  {member.contact?.email && (
                    <a className="t10-contact-pill" href={`mailto:${member.contact.email}`}>
                      <Mail size={16} /> {member.contact.email}
                    </a>
                  )}
                  {member.contact?.github && (
                    <a className="t10-contact-pill" href={member.contact.github} target="_blank" rel="noreferrer">
                      <img className="w-6 h-6" src="https://raw.githubusercontent.com/gilbarbara/logos/a5b65275e761a8347a99eded1101c6b130a06e52/logos/github-icon.svg" alt="GitHub" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div style={{ marginTop: 60, textAlign: "center" }}>
              <UserX size={56} style={{ color: "var(--muted)", marginBottom: 20 }} />
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 28 }}>NRP Tidak Ditemukan</h2>
              <p style={{ color: "var(--muted)", fontSize: 16, marginBottom: 28 }}>
                Tidak ada mahasiswa dengan NRP <code style={{ background: "var(--panel)", padding: "2px 8px", borderRadius: 6 }}>{nrp}</code> dalam sistem.
              </p>
              <Link href="/team" className="t10-btn t10-btn-primary">
                Lihat Semua Anggota Tim
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
