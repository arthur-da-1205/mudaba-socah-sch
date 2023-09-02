import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Profile = () => {
  return (
    <div id="wrapper">
      <Header />

      <section className="section single-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-justify">
              <div className="page-wrapper">
                <div className="blog-title-area text-center">
                  <h3>Profil SD Muhammadiyah 2 Socah Bangkalan</h3>

                  <div className="blog-meta big-meta">
                    <small>6 Juli 2023</small>
                    <small>by SD Mudaba Socah</small>
                  </div>
                </div>

                <div className="single-post-media">
                  <img src="assets/images/mudaba/menu-profile-banner.jpg" alt="banner-profile" className="img-menu-profile" />
                </div>

                <div className="blog-content">
                  <p>
                    SD Muhammadiyah 2 Socah Bangkalan (MUDABA), sekolah Islam yang berdiri sejak tahun 2017. MUDABA merupakan sekolah Islam dengan
                    konsep Full Day School pertama di Kecamatan Socah. Berlokasi di Jl. Panglima Sudirman No. 79, Kecamatan Socah, Kabupaten
                    Bangkalan.
                  </p>

                  <p>
                    Dengan Motto Islamis dan Berprestasi Shape Character Be The Future. Siswa unggul dalam sikap perilaku yang islami, unggul dalam
                    prestasi serta memiliki karakter yang baik. Selain belajar di dalam kelas, MUDABA juga membawa siswa belajar di ruang terbuka
                    (outing class), serta melakukan praktek ibadah yang menyenangkan.
                  </p>

                  <p>
                    Dalam pembelajaran, MUDABA mengedepankan adab yang didasarkan pada norma dan agama. Kegiatan religius yang dilaksakan, diantaranya
                    talaqqi, tahfiz, tajwid, tarjim serta praktek ibadah yang dilakukan sehari-hari. Sebagai guru, layaknya orang tua, guru MUDABA
                    terus berusaha memberikan teladan dan mengajak siswa untuk selalu menjaga akhlakul karimah, karena pendidikan bukan hanya sekedar
                    transfer of knowladge tetapi transfer of character. Bukan hanya sekedar taklim tapi pendidikan adalah takdim. Sesuai dengan Visi
                    SD Muhammadiyah 2 Socah Bangkalan yaitu “Membentuk Generasi Muslim Yang Unggul Dalam Agama, Sains, dan Berakhlak Mulia”.
                  </p>

                  <ul>
                    <li>
                      <strong>VISI</strong>
                    </li>

                    <strong>Membentuk generasi muslim yang unggul dalam ilmu agama, sains, dan berakhlak mulia.</strong>
                  </ul>

                  <ul>
                    <li>
                      <strong>MISI</strong>
                    </li>

                    <ol>
                      <li>Membentuk generasi yang beriman dan bertaqwa sesuai dengan Al-Qur’an dan As-Sunnah.</li>
                      <li>Menanamkan rasa tanggung jawab sebagai makhluk Allah.</li>
                      <li>Menanamkan dan mengembangkan kecerdasan intelektual, emosional, dan spiritual.</li>
                      <li>Meningkatkan kemampuan dalam bidang teknologi informasi.</li>
                      <li>Meningkatkan kemampuan dalam bidang teknologi informasi.</li>
                      <li>Mengembangkan budaya disiplin dan etos kerja yang tinggi.</li>
                      <li>Mendidik, melatih, dan membimbing siswa agar selalu berakhlak mulia.</li>
                      <li>Mewujudkan peserta didik yang memiliki kepekaan terhadap situasi dan kondisi lingkungan sosialnya.</li>
                    </ol>
                  </ul>

                  <ul>
                    <li>
                      <strong>MOTO</strong>
                    </li>

                    <strong>Islamis dan Berprestasi</strong>
                  </ul>
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

export default Profile;
