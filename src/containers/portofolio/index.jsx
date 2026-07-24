import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { MdFolderSpecial } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Animate, AnimateGroup } from "react-simple-animate";
import "./styles.scss";

const portofolioData = [
  {
    id: 1,
    name: "Website Profile Bukittinggi",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://effervescent-pony-ad5e10.netlify.app/",
    github: "https://github.com/baktiauliazikri/web-submission.git",
    desc: "Submission untuk kelulusan di kelas Pemrograman Web Platform Dicoding. Website profil pariwisata & budaya kota Bukittinggi yang responsive dengan HTML, CSS, dan DOM JavaScript.",
  },
  {
    id: 1,
    name: "Bookshelf App",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    link: "https://clever-mochi-8a18b0.netlify.app/",
    github: "https://github.com/baktiauliazikri/bookshelf-apps.git",
    desc: "Aplikasi manajemen buku digital interaktif dengan fitur penyimpanan Local Storage, pencarian buku, filter status bacaan, dan manipulasi DOM.",
  },
  {
    id: 1,
    name: "Backend Bookshelf API",
    tech: ["Node.js", "Express.js", "REST API"],
    link: "",
    github: "https://github.com/baktiauliazikri/Submission-backend.git",
    desc: "Layanan RESTful API backend menggunakan Node.js dan Express.js untuk pengelolaan data buku dengan fitur CRUD lengkap dan validasi data.",
  },
  {
    id: 2,
    name: "React Native Note App",
    tech: ["React Native", "JavaScript", "Mobile"],
    link: "",
    github: "https://github.com/baktiauliazikri/progate-note.git",
    desc: "Aplikasi catatan mobile berbasis React Native untuk mencatat, menyimpan, dan mengelola aktivitas harian secara praktis.",
  },
  {
    id: 2,
    name: "React Native Weather App",
    tech: ["React Native", "OpenWeather API", "Axios"],
    link: "",
    github: "https://github.com/baktiauliazikri/ProgateWeatherApp.git",
    desc: "Aplikasi prakiraan cuaca mobile yang mengintegrasikan OpenWeather REST API menggunakan Axios untuk menampilkan temperatur dan kondisi cuaca realtime.",
  },
  {
    id: 2,
    name: "React Native Movie App",
    tech: ["React Native", "TypeScript", "TMDB API"],
    link: "",
    github: "https://github.com/baktiauliazikri/ProgateMovieApp.git",
    desc: "Aplikasi penjelajah film populer berbasis TypeScript & React Native dengan integrasi API eksternal dan UI card modern.",
  },
  {
    id: 3,
    name: "CRUD Product Inventory",
    tech: ["PHP", "MySQL", "Bootstrap"],
    link: "",
    github: "",
    desc: "Sistem inventarisasi produk berbasis web dengan fitur manajemen stok, kategori barang, dan laporan inventaris sederhana.",
  },
  {
    id: 3,
    name: "Booking Layanan Barbershop",
    tech: ["Laravel", "Livewire", "MySQL", "Bootstrap"],
    link: "",
    github: "https://github.com/baktiauliazikri/groovebooking.git",
    desc: "Sistem pemesanan (booking) jadwal layanan barbershop berbasis Laravel & Livewire dengan manajemen antrean dan antarmuka interaktif.",
  },
  {
    id: 3,
    name: "Admin Product - CRUD ASP.NET",
    tech: ["C#", "ASP.NET", "SQL Server"],
    link: "",
    github: "https://github.com/baktiauliazikri/AdminProduct-CRUD.git",
    desc: "Aplikasi manajemen data produk bagi Administrator menggunakan C# dan framework ASP.NET dengan arsitektur MVC.",
  },
  {
    id: 4,
    name: "Pokedex App (Pokemon)",
    tech: ["React JS", "Tailwind CSS", "PokéAPI"],
    link: "https://earnest-liger-033f0c.netlify.app/",
    github: "https://github.com/baktiauliazikri/pokedex-app.git",
    desc: "Website Pokedex modern berbasis React JS & Tailwind CSS yang menampilkan statistik, tipe, dan kemampuan Pokemon menggunakan PokéAPI.",
  },
  {
    id: 4,
    name: "Pokemon Express REST API",
    tech: ["Node.js", "Express.js", "MySQL"],
    link: "",
    github: "https://github.com/baktiauliazikri/pokedex-express.git",
    desc: "Backend API khusus Pokedex menggunakan Express.js & MySQL database yang teruji dengan Postman untuk kebutuhan data klien.",
  },
];

const filterData = [
  { filterId: 0, label: "All Projects" },
  { filterId: 1, label: "Dicoding" },
  { filterId: 2, label: "FGA DTS Kominfo" },
  { filterId: 3, label: "Politeknik Negeri Padang" },
  { filterId: 4, label: "Meteor Inovasi Digital" },
];

const Portofolio = () => {
  const [selectedFilter, setSelectedFilter] = useState(0);

  const filteredPortofolioData =
    selectedFilter === 0
      ? portofolioData
      : portofolioData.filter((item) => item.id === selectedFilter);

  return (
    <section id="portofolio" className="portofolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<MdFolderSpecial size={32} />}
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
        <AnimateGroup play>
          {filteredPortofolioData.map((item, index) => (
            <Animate
              key={`${item.name}-${index}`}
              play
              duration={0.6}
              delay={index * 0.1}
              start={{ opacity: 0, transform: "scale(0.95)" }}
              end={{ opacity: 1, transform: "scale(1)" }}
            >
              <div className="portofolio-item">
                <div className="portofolio-item__header">
                  <h3 className="portofolio-item__title">{item.name}</h3>
                </div>

                <div className="portofolio-item__tech-pills">
                  {item.tech.map((t, idx) => (
                    <span key={idx} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="portofolio-item__desc">{item.desc}</p>

                <div className="portofolio-links">
                  {item.link && item.link !== "#" ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn link-demo"
                    >
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </a>
                  ) : null}

                  {item.github && item.github !== "#" ? (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-btn link-github"
                    >
                      <FaGithub size={16} /> GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </Animate>
          ))}
        </AnimateGroup>
      </div>
    </section>
  );
};

export default Portofolio;
