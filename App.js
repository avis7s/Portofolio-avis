import React from "react";

export default function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans">
      <header className="bg-cyan-700 p-6 shadow-md">
        <h1 className="text-3xl font-bold text-white">Avis Sugianto</h1>
        <p className="text-cyan-100">IT Graduate | Python | SQL | Linux</p>
      </header>

      <main className="p-6 space-y-10">
        <section>
          <h2 className="text-2xl font-semibold text-cyan-300">Tentang Saya</h2>
          <p className="text-slate-200 mt-2">
            Saya lulusan D3 Teknologi Informasi dan S1 Teknik Informatika dari Universitas Brawijaya.
            Memiliki pengalaman magang di Telkom Malang dan PT PLN PJB. Keahlian saya meliputi algoritma enkripsi,
            manajemen database SQL, serta administrasi sistem Linux menggunakan Python.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-cyan-300">Keahlian</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-slate-100 mt-4">
            <li>Python</li>
            <li>SQL Database</li>
            <li>Linux (Ubuntu)</li>
            <li>Algoritma Enkripsi</li>
            <li>Microsoft Excel</li>
            <li>Word & Dokumentasi</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-cyan-300">Pengalaman</h2>
          <div className="mt-4 space-y-3">
            <div>
              <h3 className="text-xl font-bold">Magang – Telkom Malang</h3>
              <p className="text-slate-300">Maintenance IT Infrastructure | 8 bulan</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Magang – PT PLN PJB</h3>
              <p className="text-slate-300">Manajemen jaringan & dukungan teknis | 2 bulan</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-cyan-300">Kontak</h2>
          <ul className="mt-2 text-slate-200 space-y-1">
            <li>Email: avis7sugianto@gmail.com</li>
            <li>Telepon: 0895-3961-02619</li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/avis-sugianto" className="text-cyan-400 hover:underline">avis-sugianto</a></li>
            <li>GitHub: <a href="https://github.com/[USERNAME_KAMU]" className="text-cyan-400 hover:underline">github.com/[USERNAME_KAMU]</a></li>
          </ul>
        </section>
      </main>

      <footer className="bg-slate-800 p-4 text-center text-slate-400 mt-10">
        &copy; {new Date().getFullYear()} Avis Sugianto
      </footer>
    </div>
  );
}