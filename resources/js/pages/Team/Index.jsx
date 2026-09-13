import { Head } from "@inertiajs/react";
import Layout from "@/Components/Layout";
import MemberCard from "@/Components/MemberCard";

export default function TeamIndex({ members }) {
  return (
    <Layout>
      <Head title="Anggota Tim" />

      <section className="t10-section" style={{ paddingTop: 64 }}>
        <div className="t10-wrap">
          <div className="t10-section-head">
            <div>
              <span className="t10-tag" style={{ background: "var(--indigo)", color: "var(--bg)" }}>
                Anggota tim
              </span>
              <h2 className="t10-section-title">Enam orang di baliknya.</h2>
            </div>
            <p className="t10-section-desc">
              Profil 6 mahasiswa pengembang proyek Team 10 Pemrograman Berbasis Kerangka Kerja DTIF ITS.
            </p>
          </div>

          <ul className="t10-team-grid">
            {members.map((member, i) => (
              <li key={member.id}>
                <MemberCard member={member} index={i} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
