import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const PPDB = () => {
  return (
    <div id="wrapper">
      <Header />

      <section className="section single-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-justify">
              <div className="page-wrapper">
                <div className="blog-title-area text-center">
                  <h3>Penerimaan Peserta Didik Baru SD Muhammadiyah 2 Bangkalan</h3>

                  <div className="blog-meta big-meta">
                    <small>6 Juli 2023</small>
                    <small>by SD Mudaba Socah</small>
                  </div>
                </div>

                <div className="single-post-media">
                  <img src="assets/images/mudaba/banner-ppdb.png" alt="banner-ppdb" />
                </div>

                <div className="blog-content">
                  <strong>A. Latar Belakang</strong>
                  <p style={{ textIndent: '0.5in' }}>
                    Penerimaan Peserta Didik Baru (PPDB) diatur dalam Permendikbud Nomor 1 Tahun 2021?
                    <br />
                    Peraturan tersebut telah mengatur beberapa hal, seperti persyaratan usia masuk jenjang SD, jalur pendaftaran, dan tahapan
                    pelaksanaan PPDB.
                  </p>

                  <p>
                    <strong>PPDB dilaksanakan secara:</strong>
                    <br />
                    1. Objektif
                    <br />
                    2. Transapran
                    <br />
                    3. Akuntabel
                  </p>

                  <p>
                    Dilakukan tanpa diskriminasi kecuali bagi sekolah yang secara khusus dirancang untuk melayani peserta didik dari kelompok gender
                    atau agama tertentu
                  </p>

                  <strong>B. Tujuan, Prinsip, dan Asas</strong>
                  <ol>
                    <li>
                      PPDB bertujuan memberikan layanan bagi anak usia sekolah/lulusan untuk memasuki satuan pendidikan yang lebih tinggi secara
                      tertib, terarah, dan berkualitas.
                    </li>

                    <li>Pelaksanaan PPDB memiliki prinsip :</li>
                    <ul className="check">
                      <li>Kesempatan yang sama bagi semua anak usia sekolah untuk memperoleh pendidikan pada satuan pendidikan yang lebih tinggi;</li>
                      <li>
                        Penolakan PPDB tidak boleh terjadi bagi calon peserta didik yang memenuhi syarat, kecuali jika daya tampung di sekolah yang
                        bersangkutan tidak mencukupi dan ketentuan waktu proses PPDB telah berakhir;
                      </li>
                      <li>Kebebasan menentukan pilihan pendaftaran bagi calon peserta didik ke sekolah.</li>
                    </ul>

                    <li>Azas Pelaksanaan PPDB:</li>
                    <ul className="check">
                      <li>Objektif, artinya PPDB baik peserta didik baru maupun pindahan harus memenuhi ketentuan umum yang telah ditetapkan;</li>
                      <li>
                        Transparan, artinya PPDB bersifat terbuka dan dapat diketahui oleh masyarakat termasuk orang tua peserta didik, untuk
                        menghindari penyimpanganpenyimpangan yang mungkin terjadi;
                      </li>
                      <li>Akuntabel, artinya PPDB dapat dipertanggungjawabkan kepada masyarakat baik prosedur maupun hasilnya;</li>
                      <li>Tidak diskriminatif</li>
                      <li>
                        Kompetitif, artinya PPDB dilakukan melalui seleksi berdasarkan kompetensi yang disyaratkan oleh satuan pendidikan tertentu.
                      </li>
                      <li>
                        Proporsional, artinya penerimaan peserta didik baru mempertimbangkan calon peserta didik baru berasal dari berbagai macam
                        latar belakang masyarakat.
                      </li>
                    </ul>
                  </ol>

                  <strong>C. Informasi Pendaftaran</strong>
                  <div className="row mt-3">
                    <div className="col-lg-6">
                      <div className="single-post-media">
                        <img src="assets/images/mudaba/ppdb/ppdb-brosur-1.png" alt="banner-ppdb" />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="single-post-media">
                        <img src="assets/images/mudaba/ppdb/ppdb-brosur-2.png" alt="banner-ppdb" />
                      </div>
                    </div>
                  </div>

                  <strong>D. Jadwal Kegiatan</strong>
                  <div className="row mt-3">
                    <div className="col-lg-6">
                      <div className="single-post-media">
                        <img src="assets/images/mudaba/ppdb/ppdb-jadwal-kegiatan.png" alt="banner-ppdb" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <div className="dmtop">Scroll to Top</div>
    </div>
  );
};

export default PPDB;
