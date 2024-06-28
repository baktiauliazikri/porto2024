import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaGithub, FaEye } from "react-icons/fa";
import "./styles.scss";

const portofolioData = [
  {
    id: 1,
    name: "Website Profile Bukittinggi",
    tech: "HTML, CSS, JavaScript",
    link: "https://effervescent-pony-ad5e10.netlify.app/",
    github: "https://github.com/baktiauliazikri/web-submission.git",
    desc: "Submission untuk kelulusan di kelas Pemrograman Web di Platform Dicoding. Tugasnya adalah membuat sebuah website profil dengan tema yang bebas, menggunakan HTML, CSS, dan JavaScript.",
  },
  {
    id: 1,
    name: "Bookshelf App",
    tech: "HTML, CSS, JavaScript",
    link: "https://clever-mochi-8a18b0.netlify.app/",
    github: "https://github.com/baktiauliazikri/bookshelf-apps.git",
    desc: "Submission akhir untuk Program DBS Foundation Coding Camp bersama Platform Dicoding. Proyek ini melibatkan pembuatan website perpustakaan dengan fitur local storage dan penggunaan DOM.",
  },
  {
    id: 1,
    name: "Backend Bookshelf API",
    tech: "JavaScript, Node.js",
    link: "#",
    github: "https://github.com/baktiauliazikri/Submission-backend.git",
    desc: "Proyek ini merupakan submission untuk kelas Pemrograman Web di Dicoding. Aplikasi ini menggunakan JavaScript dan Node.js untuk membangun API backend yang mengelola data buku pada sebuah perpustakaan digital. Proyek ini mencakup fitur CRUD (Create, Read, Update, Delete) untuk buku, serta penerapan best practices dalam pengembangan API.",
  },
  {
    id: 2,
    name: "React Native Note App",
    tech: "JavaScript, React Native",
    link: "#",
    github: "https://github.com/baktiauliazikri/progate-note.git",
    desc: "Proyek aplikasi catatan menggunakan React Native. Aplikasi ini dibangun dengan menggunakan JavaScript dan React Native untuk memungkinkan pengguna membuat, menyimpan, dan mengelola catatan dengan mudah melalui perangkat mobile.",
  },
  {
    id: 2,
    name: "React Native Weather App",
    tech: "API, Axios, React Native",
    link: "#",
    github: "https://github.com/baktiauliazikri/ProgateWeatherApp.git",
    desc: "Proyek aplikasi cuaca menggunakan React Native. Aplikasi ini menggunakan openweather API dan Axios untuk mengambil data cuaca dari layanan eksternal dan menampilkannya dengan antarmuka yang ramah pengguna menggunakan React Native.",
  },
  {
    id: 2,
    name: "React Native Movie App",
    tech: "TypeScript, Axios, React Native",
    link: "#",
    github: "https://github.com/baktiauliazikri/ProgateMovieApp.git",
    desc: "Proyek aplikasi film menggunakan React Native. Aplikasi ini dikembangkan dengan menggunakan TypeScript untuk meningkatkan keamanan dan struktur kode, serta memanfaatkan Axios untuk mengakses dan menampilkan data film dari API eksternal dengan antarmuka pengguna yang intuitif.",
  },
  {
    id: 3,
    name: "CRUD PRODUCT",
    tech: "PHP, MySQL, HTML, CSS",
    link: "https://inventorybaktiauliazikri.000webhostapp.com/inventory/",
    github: "#",
    desc: "Proyek CRUD untuk mengelola produk dalam sistem inventaris. Menggunakan PHP dan MySQL untuk menyimpan data produk, serta HTML dan CSS untuk antarmuka pengguna.",
  },
  {
    id: 3,
    name: "Booking Layanan Barbershop",
    tech: "PHP, Laravel, Livewire, MySQL, JavaScript, HTML, Bootstrap",
    link: "#",
    github: "https://github.com/baktiauliazikri/groovebooking.git",
    desc: "Proyek sistem booking untuk layanan barbershop yang dibangun menggunakan Laravel. Menggunakan teknologi seperti PHP untuk backend, Laravel sebagai framework utama, Livewire untuk komponen interaktif, MySQL untuk basis data, dan JavaScript serta Bootstrap untuk tampilan frontend.",
  },
  {
    id: 3,
    name: "Admin Product - CRUD",
    tech: "C#, ASP.NET",
    link: "#",
    github: "https://github.com/baktiauliazikri/AdminProduct-CRUD.git",
    desc: "Proyek CRUD untuk mengelola produk dari sisi admin, menggunakan C# dan ASP.NET. Aplikasi ini memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus data produk secara efisien melalui antarmuka yang dibangun dengan teknologi ASP.NET.",
  },
  {
    id: 4,
    name: "Website Pokemon",
    tech: "React JS, Tailwind CSS, REST API, Axios",
    link: "https://earnest-liger-033f0c.netlify.app/",
    github: "https://github.com/baktiauliazikri/pokedex-app.git",
    desc: "Website Pokedex yang dibangun menggunakan React JS dan Tailwind CSS. Menggunakan REST API dan Axios untuk mengambil data Pokemon dari sumber eksternal dan menampilkannya dengan tampilan yang modern dan responsif.",
  },
  {
    id: 4,
    name: "Pokemon Backend Rest API",
    tech: "Node.js, Express.js, MySQL, REST API, Postman",
    link: "#",
    github: "https://github.com/baktiauliazikri/pokedex-express.git",
    desc: "Backend REST API untuk mendukung aplikasi Pokemon. Dibangun menggunakan Node.js dan Express.js untuk menyediakan layanan API yang dapat diakses oleh aplikasi klien. Menggunakan MySQL untuk penyimpanan data dan Postman untuk pengujian dan dokumentasi API.",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "Dicoding",
  },
  {
    filterId: 2,
    label: "FGA DTS - Kominfo",
  },
  {
    filterId: 3,
    label: "Politeknik Negeri Padang",
  },
  {
    filterId: 4,
    label: "Meteor Inovasi Digital",
  },
];

const Portofolio = () => {
  const [selectedFilter, setSelectedFilter] = useState(1);

  const filteredPortofolioData = portofolioData.filter(
    (item) => item.id === selectedFilter
  );

  return (
    <section id="portofolio" className="portofolio">
      <PageHeaderContent
        headerText="My Portofolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="filter-container">
        {filterData.map((filter) => (
          <button
            key={filter.filterId}
            className={`filter-button ${
              filter.filterId === selectedFilter ? "active" : ""
            }`}
            onClick={() => setSelectedFilter(filter.filterId)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="portofolio-grid">
        {filteredPortofolioData.map((item) => (
          <div key={item.name} className="portofolio-item">
            <h3>{item.name}</h3>
            <h4>{item.tech}</h4>
            <p>{item.desc}</p>
            <div className="portofolio-links">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <FaEye size={20} />
              </a>
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portofolio;
