import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Link2,
  MapPin,
  Menu,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  ZoomIn,
} from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  label: string;
  tag: string;
  description: string;
}

const gallery: GalleryItem[] = [
  {
    src: "/images/IMG-20260912-WA0009.jpg",
    alt: "Pemandangan jalan madrasah memperlihatkan plang Boarding School Darul Adzkiya MAN 2 Kudus dan gedung 4 lantai berbalut perancah serta jaring pengaman",
    title: "Akses Utama & Fasad Gedung Boarding",
    label: "01 / Perspektif Kawasan",
    tag: "Fasad & Jalan",
    description:
      "Tampak menyeluruh dari akses jalan madrasah memperlihatkan plang resmi Kementerian Agama MAN 2 Kudus dan Boarding School Darul Adzkiya. Struktur gedung empat lantai berdiri kokoh berbalut perancah dan jaring pengaman hitam, berdampingan secara aman dengan aktivitas harian para siswa dan pengguna jalan.",
  },
  {
    src: "/images/IMG-20260912-WA0010.jpg",
    alt: "Bidang depan gedung madrasah tertutup rapi oleh perancah bambu serta jaring pengaman kassa hitam di bawah sinar matahari",
    title: "Selubung Jaring Pengaman & Rangka Perancah",
    label: "02 / Keselamatan Kerja",
    tag: "Perancah & K3",
    description:
      "Bidang luas fasad depan gedung ditutup penuh perancah (scaffolding) kombinasi bambu dan besi serta jaring kassa hitam penahan debu dan serpihan material. Sistem pengaman ini melindungi area jalan di bawahnya sekaligus memfasilitasi tukang menyelesaikan dinding luar secara aman.",
  },
  {
    src: "/images/IMG-20260912-WA0008.jpg",
    alt: "Fasad lantai dasar berornamen lengkung khas Islami, unit pendingin udara AC, dan papan informasi resmi MAN 2 Kudus di balik pagar sekolah",
    title: "Aksen Lengkung Islami & Identitas Madrasah",
    label: "03 / Detail Arsitektur",
    tag: "Ornamen Fasad",
    description:
      "Detail fasad lantai dasar menampilkan aksen bukaan melengkung bernuansa arsitektur Islami modern serta instalasi unit outdoor pendingin udara (AC) yang telah terpasang rapi. Di depannya berdiri papan nama resmi Kementerian Agama MAN 2 Kudus yang mencantumkan legalitas Boarding School Darul Adzkiya.",
  },
  {
    src: "/images/IMG-20260912-WA0013.jpg",
    alt: "Tumpukan bata ringan hebel putih dan timbunan pasir pasang tersusun di pinggir jalan depan proyek boarding school MAN 2 Kudus",
    title: "Logistik Pasokan Bata Hebel & Pasir",
    label: "04 / Logistik Lapangan",
    tag: "Material Proyek",
    description:
      "Bahu jalan madrasah dimanfaatkan secara tertib untuk penataan material konstruksi, termasuk ratusan blok bata ringan (hebel) dan timbunan pasir pasang. Material ini disiapkan bertahap untuk penyusunan dinding partisi kamar tidur dan fasilitas asrama santri.",
  },
  {
    src: "/images/IMG-20260912-WA0011.jpg",
    alt: "Gardu trafo listrik PLN berdampingan dengan perancah bambu di sudut samping bangunan boarding school MAN 2 Kudus",
    title: "Gardu Trafo Listrik & Sisi Samping Gedung",
    label: "05 / Penataan Utilitas",
    tag: "Infrastruktur Daya",
    description:
      "Fasilitas penunjang kelistrikan berupa gardu trafo tiang PLN terpasang berdampingan dengan perancah bambu di sudut samping gedung baru. Integrasi utilitas daya besar ini disiapkan guna menjamin stabilitas suplai listrik saat gedung asrama mulai beroperasi penuh.",
  },
  {
    src: "/images/IMG-20260912-WA0014.jpg",
    alt: "Konstruksi perancah bertingkat dengan tangga akses kerja dan terpal pelindung material di lantai dasar gedung",
    title: "Menara Tangga Perancah & Proteksi Proyek",
    label: "06 / Aksesibilitas Pekerja",
    tag: "Akses Perancah",
    description:
      "Struktur perancah dilengkapi modul tangga kerja vertikal untuk mobilitas tukang mengangkut perlengkapan ke lantai atas. Di bagian dasar, terpal pelindung difungsikan mengamankan adukan semen dan material kerja dari sengatan panas maupun hujan.",
  },
  {
    src: "/images/IMG-20260912-WA0000.jpg",
    alt: "Sudut gedung boarding MAN 2 Kudus empat lantai menjulang tinggi terbungkus jaring pengaman hitam berlatar langit biru cerah",
    title: "Sudut Struktur Menjulang Empat Lantai",
    label: "07 / Elevasi Bangunan",
    tag: "Ketinggian Gedung",
    description:
      "Sudut pandang bawah menangkap ketinggian struktur bangunan empat lantai yang menjulang berlatar langit biru Kudus. Jaring pengaman hitam membungkus rapat seluruh elevasi dari lantai bawah hingga atap demi memenuhi standar keselamatan kerja di kawasan pendidikan.",
  },
  {
    src: "/images/IMG-20260912-WA0012.jpg",
    alt: "Rangka balok dan kolom beton lantai atas terlihat di balik jaring pengaman dengan bukaan ventilasi kamar asrama",
    title: "Rangka Kolom Beton & Bukaan Lantai Atas",
    label: "08 / Struktur Rangka",
    tag: "Beton Bertulang",
    description:
      "Dari balik jaring pengaman tampak jelas kekokohan balok dan kolom cor beton bertulang pada lantai tiga dan empat. Bukaan jendela berdimensi lapang disiapkan untuk memastikan sirkulasi udara alami dan pencahayaan optimal di setiap kamar asrama santri.",
  },
];

const paragraphs = [
  "Pembangunan gedung asrama baru 'Boarding School Darul Adzkiya' di lingkungan MAN 2 Kudus terus menunjukkan kemajuan signifikan. Proyek fasilitas terpadu yang digarap bertahap ini dirancang berdiri megah setinggi empat lantai untuk menjawab kebutuhan hunian santri serta siswa program riset unggulan madrasah.",
  "Berdasarkan pantauan langsung di lokasi pada September 2026, kerangka struktur utama empat lantai telah berdiri kokoh dari konstruksi beton bertulang. Fasad luar gedung diselubungi perancah (scaffolding) kombinasi bambu dan besi serta jaring pengaman hitam (safety netting) rapat, menjaga standar keselamatan kerja (K3) sekaligus melindungi aktivitas para siswa dan pengguna jalan di sekitarnya.",
  "Pada area lantai dasar, sentuhan arsitektur bernuansa Islami modern mulai terlihat jelas lewat deretan ornamen dinding dan bukaan berbentuk lengkungan (arch). Beberapa unit outdoor pendingin udara (AC) juga telah mulai diposisikan pada dinding luar, menandai persiapan instalasi kenyamanan ruangan santri yang terencana rapi.",
  "Aktivitas logistik material berlangsung tertib di sepanjang akses jalan madrasah. Tumpukan bata ringan (hebel), timbunan pasir pasang, dan adukan semen tersusun di bahu jalan depan pagar hijau madrasah, siap didistribusikan ke lantai atas untuk penyelesaian sekat kamar santri dan aula asrama.",
  "Di sudut samping bangunan, infrastruktur pendukung seperti instalasi gardu tiang trafo listrik PLN telah terpasang sejajar dengan struktur perancah gedung. Kesiapan jaringan daya ini dipersiapkan secara matang guna memastikan keandalan pasokan energi listrik bagi seluruh kegiatan asrama, ruang studi, dan sarana ibadah.",
  "Dengan kelanjutan pembangunan gedung Boarding School Darul Adzkiya ini, MAN 2 Kudus semakin memperkuat komitmennya sebagai salah satu madrasah aliyah riset terbaik di Jawa Tengah—menyediakan ruang tumbuh yang modern, aman, dan kondusif bagi santri generasi masa depan.",
];

function BrandIcon({
  size = 16,
  strokeWidth = 1.8,
  children,
}: {
  size?: number;
  strokeWidth?: number;
  children: React.ReactNode;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function InstagramIcon(props: { size?: number; strokeWidth?: number }) {
  return (
    <BrandIcon {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </BrandIcon>
  );
}

function YoutubeIcon(props: { size?: number; strokeWidth?: number }) {
  return (
    <BrandIcon {...props}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </BrandIcon>
  );
}

function FacebookIcon(props: { size?: number; strokeWidth?: number }) {
  return (
    <BrandIcon {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </BrandIcon>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-2" aria-label="Media sosial">
      <a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
        <InstagramIcon size={16} strokeWidth={1.8} />
      </a>
      <a className="social-link" href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
        <YoutubeIcon size={16} strokeWidth={1.8} />
      </a>
      <a className="social-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
        <FacebookIcon size={16} strokeWidth={1.8} />
      </a>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shared, setShared] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (selectedImage === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") setSelectedImage((prev) => (prev !== null ? (prev + 1) % gallery.length : null));
      if (e.key === "ArrowLeft") setSelectedImage((prev) => (prev !== null ? (prev - 1 + gallery.length) % gallery.length : null));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const handleShare = async () => {
    const shareData = {
      title: "Pembangunan Gedung Boarding Baru MAN 2 Kudus Masih Berlangsung",
      text: "Pantauan pembangunan gedung Boarding School Darul Adzkiya MAN 2 Kudus pada September 2026.",
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(shareData).catch(() => undefined);
    } else {
      await navigator.clipboard?.writeText(window.location.href);
      setShared(true);
      window.setTimeout(() => setShared(false), 2200);
    }
  };

  const activePhoto = selectedImage !== null ? gallery[selectedImage] : null;

  return (
    <div className="site-shell relative min-h-screen overflow-x-hidden text-[#18352a]">
      <header className="site-header absolute top-0 inset-x-0 z-40 bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="#atas" className="group flex items-center gap-3" aria-label="Kembali ke atas">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#2f6b4f] text-white shadow-[5px_5px_12px_rgba(30,74,52,0.18),-4px_-4px_10px_rgba(255,255,255,0.8)] transition-transform duration-200 group-hover:-translate-y-0.5">
              <BookOpen size={19} strokeWidth={1.7} />
            </span>
            <span>
              <span className="block font-display text-sm font-bold tracking-[0.18em] text-[#2f6b4f]">MAN 2 KUDUS</span>
              <span className="block text-[11px] font-medium tracking-[0.08em] text-[#73907c]">WARTA PEMBANGUNAN</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#486b56] md:flex" aria-label="Navigasi utama">
            <a href="#artikel" className="nav-link">Laporan</a>
            <a href="#pantauan" className="nav-link">Ringkasan</a>
            <a href="#galeri" className="nav-link">Galeri Foto (8)</a>
            <a href="#tentang" className="nav-link">Tentang</a>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <SocialLinks />
            <button onClick={handleShare} className="share-button cursor-pointer" type="button" aria-label="Bagikan laporan">
              <Share2 size={15} /> {shared ? "Tersalin!" : "Bagikan"}
            </button>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-2xl bg-[#eef3e9] text-[#2f6b4f] shadow-[4px_4px_10px_rgba(59,85,63,0.13),-4px_-4px_10px_rgba(255,255,255,0.88)] md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Buka menu navigasi"
            type="button"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mx-auto max-w-7xl px-5 pb-4 pt-1 md:hidden">
            <div className="rounded-2xl border border-white/50 bg-[#f5f7f0]/95 p-4 shadow-xl backdrop-blur-xl">
              <nav className="flex flex-col gap-3 text-sm font-semibold text-[#577363]" aria-label="Navigasi mobile">
                {[["Artikel & Laporan", "#artikel"], ["Ringkasan Pantauan", "#pantauan"], ["Galeri Dokumentasi (8 Foto)", "#galeri"], ["Tentang Madrasah", "#tentang"]].map(([label, href]) => (
                  <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-1">{label}</a>
                ))}
              </nav>
              <div className="mt-3 flex items-center justify-between border-t border-[#d9e5d8] pt-3">
                <SocialLinks />
                <button onClick={handleShare} className="share-button" type="button">
                  <Share2 size={15} /> {shared ? "Tersalin!" : "Bagikan"}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="atas">
        <section className="hero-stage relative mx-auto max-w-8xl px-5 pb-16 pt-28 lg:px-8 lg:pb-24 lg:pt-46">
          <div className="pointer-events-none absolute -right-20 top-2 h-72 w-72 rounded-full bg-[#dcebdc]/70 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 top-40 h-64 w-64 rounded-full bg-[#edf0d7]/70 blur-3xl" />
          <div className="relative grid items-end gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#e5efe4] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#3d7656] shadow-[inset_2px_2px_5px_rgba(74,105,78,0.08),inset_-2px_-2px_5px_rgba(255,255,255,0.85)]">
                <span className="h-2 w-2 rounded-full bg-[#79aa76] shadow-[0_0_0_4px_rgba(121,170,118,0.14)]" />
                Laporan Khusus · September 2026
              </div>
              <p className="mb-5 flex items-center gap-2 text-sm font-semibold text-[#64806e]">
                <MapPin size={16} /> Kampus MAN 2 Kudus, Jawa Tengah
              </p>
              <h1 className="font-display text-[clamp(2.8rem,5.6vw,5.55rem)] font-bold leading-[0.98] tracking-[-0.065em] text-[#173d2b]">
                Pembangunan Gedung <span className="text-[#5e956b]">Boarding Baru</span> MAN 2 Kudus Masih Berlangsung
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#5e7569]">
                Struktur utama empat lantai telah berdiri kokoh di lingkungan madrasah. Berbalut jaring pengaman dan perancah, pengerjaan fasad serta interior terus dipacu demi menghadirkan asrama santri modern Darul Adzkiya.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#artikel" className="primary-button">Baca laporan lengkap <ArrowUpRight size={17} /></a>
                <a href="#galeri" className="ghost-button">Telusuri 8 foto dokumentasi <ChevronDown size={16} /></a>
              </div>
            </div>

            <div className="relative lg:pb-2">
              <div className="hero-photo overflow-hidden rounded-[2rem] bg-white/20 p-2.5 backdrop-blur-[2px]">
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-[1.45rem]"
                  onClick={() => setSelectedImage(0)}
                  title="Klik untuk memperbesar foto utama"
                >
                  <img
                    src={gallery[0].src}
                    alt={gallery[0].alt}
                    className="aspect-[16/10] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#102b20]/85 via-[#102b20]/30 to-transparent p-5 pt-16 text-white">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#d9f0da]">
                          Foto Utama · Akses & Fasad
                        </p>
                        <p className="mt-1 font-display text-xl font-semibold">
                          Boarding School Darul Adzkiya MAN 2 Kudus
                        </p>
                      </div>
                      <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-semibold backdrop-blur-md transition-colors group-hover:bg-white/35">
                        <ZoomIn size={13} /> 01 / 08
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl bg-[#f1f5eb] px-4 py-3 shadow-[6px_7px_18px_rgba(54,80,58,0.16),-5px_-5px_13px_rgba(255,255,255,0.88)] sm:left-5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#dcebd9] text-[#397055]">
                  <CheckCircle2 size={18} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#7a9382]">Status Proyek</p>
                  <p className="text-sm font-bold text-[#315b46]">Struktur Berdiri · Fasad Berproses</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="artikel" className="scroll-mt-24 bg-[#edf2e9] py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1700px] gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20 lg:px-8">
            <article className="max-w-4xl">
              <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-[#6d8575]">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={16} className="text-[#639469]" /> September 2026
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={16} className="text-[#639469]" /> 4 menit membaca
                </span>
                <span className="inline-flex items-center gap-2">
                  <BookOpen size={16} className="text-[#639469]" /> Laporan Khusus Boarding
                </span>
              </div>
              <div className="mb-9 h-px w-full bg-gradient-to-r from-[#c9ddc8] via-[#dbe7d7] to-transparent" />
              <div className="prose-custom">
                <p className="lead">{paragraphs[0]}</p>
                {paragraphs.slice(1).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-12 w-full rounded-[1.65rem] border border-[#d8e6d6] bg-[#f7faf3] p-6 shadow-[8px_8px_22px_rgba(59,85,63,0.08),-6px_-6px_16px_rgba(255,255,255,0.9)] sm:p-8">
                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#65926c]">
                  <Sparkles size={15} /> Komitmen Fasilitas Madrasah
                </div>
                <p className="font-display text-xl font-semibold leading-8 text-[#2c5b40]">
                  “Gedung Boarding School Darul Adzkiya ini disiapkan menjadi ekosistem pembinaan akademik dan religius terpadu bagi para santri berprestasi MAN 2 Kudus.”
                </p>
              </div>
            </article>

            <aside id="pantauan" className="scroll-mt-24">
              <div className="neo-card sticky top-24 rounded-[1.6rem] bg-[#f1f5eb] p-6">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6e9276]">Ringkasan Pantauan</p>
                <h2 className="font-display text-2xl font-bold tracking-[-0.035em] text-[#214b36]">Kondisi Riil di Lokasi</h2>
                <div className="mt-6 space-y-3">
                  <div className="summary-row">
                    <span className="summary-icon"><BuildingIcon /></span>
                    <div>
                      <p className="summary-label">Struktur Utama</p>
                      <p className="summary-value">4 Lantai Beton Bertulang</p>
                    </div>
                  </div>
                  <div className="summary-row">
                    <span className="summary-icon"><BookOpen size={17} /></span>
                    <div>
                      <p className="summary-label">Nama Fasilitas</p>
                      <p className="summary-value">Boarding School Darul Adzkiya</p>
                    </div>
                  </div>
                  <div className="summary-row">
                    <span className="summary-icon"><ShieldCheck size={17} /></span>
                    <div>
                      <p className="summary-label">Standar K3</p>
                      <p className="summary-value">Perancah & Safety Net Hitam</p>
                    </div>
                  </div>
                  <div className="summary-row">
                    <span className="summary-icon"><Users size={17} /></span>
                    <div>
                      <p className="summary-label">Pekerjaan Berjalan</p>
                      <p className="summary-value">Fasad, Bata Hebel & Utilitas</p>
                    </div>
                  </div>
                  <div className="summary-row">
                    <span className="summary-icon"><Sparkles size={17} /></span>
                    <div>
                      <p className="summary-label">Ciri Arsitektur</p>
                      <p className="summary-value">Aksen Lengkung Islami & AC</p>
                    </div>
                  </div>
                  <div className="summary-row">
                    <span className="summary-icon"><MapPin size={17} /></span>
                    <div>
                      <p className="summary-label">Lokasi</p>
                      <p className="summary-value">Kampus MAN 2 Kudus</p>
                    </div>
                  </div>
                </div>
                <div className="mt-7 rounded-2xl bg-[#dfeedd] p-4 text-sm leading-6 text-[#557260]">
                  Pembangunan terpadu berlangsung aktif untuk memenuhi kebutuhan asrama santri riset unggulan.
                </div>
                <a href="#galeri" className="mt-6 flex items-center justify-between text-sm font-bold text-[#3d7953] transition-colors hover:text-[#1e4e34]">
                  Lihat detail 8 foto lapangan <ArrowUpRight size={17} />
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section id="galeri" className="scroll-mt-24 mx-auto max-w-8xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="section-kicker">Dokumentasi Visual Lapangan</p>
              <h2 className="mt-3 max-w-xl font-display text-4xl font-bold leading-tight tracking-[-0.055em] text-[#1b4631] sm:text-5xl">
                Delapan Potret dari Proyek Pembangunan
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#6a8272] sm:text-right">
              Klik foto mana pun untuk memperbesar dan membaca catatan detail pengamatan lapangan.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item, index) => {
              const isWide = index === 0 || index === 1 || index === 6 || index === 7;
              return (
                <figure
                  key={item.src}
                  onClick={() => setSelectedImage(index)}
                  className={`gallery-card group cursor-pointer ${
                    isWide ? "lg:col-span-2" : "lg:col-span-1"
                  }`}
                >
                  <div
                    className={`${
                      isWide ? "aspect-[16/10]" : "aspect-[3/4]"
                    } relative overflow-hidden rounded-[1.35rem] bg-[#e1eae0]`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading={index < 2 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e271c]/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    
                    <span className="absolute left-3 top-3 rounded-full bg-[#183a29]/85 px-2.5 py-1 text-[10px] font-bold tracking-wider text-[#d4ebd6] uppercase backdrop-blur-md">
                      {item.tag}
                    </span>

                    <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#1f4a34] opacity-0 shadow-lg backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100">
                      <ZoomIn size={13} /> Perbesar
                    </span>
                  </div>

                  <figcaption className="px-1 pt-3.5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#73917b]">
                          {item.label}
                        </p>
                        <h3 className="mt-1 text-base font-bold leading-snug text-[#2b563e] transition-colors group-hover:text-[#193e2b]">
                          {item.title}
                        </h3>
                      </div>
                      <span className="mt-1 grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg bg-[#e2eee0] text-[#4d7d5d] transition-all duration-200 group-hover:bg-[#2f6b4f] group-hover:text-white">
                        <ArrowUpRight size={15} />
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[#5e7769] line-clamp-2">
                      {item.description}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </section>

        <section id="tentang" className="scroll-mt-24 border-t border-[#dce8d9] bg-[#e6efe2] py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div className="max-w-2xl">
              <p className="section-kicker">MAN 2 KUDUS</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.045em] text-[#214b36]">
                Merekam Proses, Menyambut Fasilitas Masa Depan
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#5f7969]">
                Dokumentasi visual perkembangan proyek pembangunan Boarding School Darul Adzkiya MAN 2 Kudus guna memberikan informasi yang transparan dan akurat bagi seluruh warga madrasah dan wali santri.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-[#edf5e9] px-5 py-4 shadow-[5px_5px_13px_rgba(57,89,60,0.1),-4px_-4px_12px_rgba(255,255,255,0.8)]">
              <Link2 size={17} className="text-[#5f956b]" />
              <span className="text-sm font-semibold text-[#557260]">Ikuti saluran resmi:</span>
              <SocialLinks />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#173d2b] px-5 py-8 text-[#d8ebd7] lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MAN 2 Kudus · Warta Pembangunan Boarding School Darul Adzkiya</p>
          <p className="text-[#9fc3a0]">Madrasah Mandiri Berprestasi, Menuju Generasi Unggul.</p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {selectedImage !== null && activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-[#f5f8f3] shadow-2xl md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur-md transition hover:bg-black/80"
              aria-label="Tutup jendela foto"
              type="button"
            >
              <X size={20} />
            </button>

            {/* Photo Container */}
            <div className="relative flex min-h-[300px] flex-1 items-center justify-center bg-[#132219] sm:min-h-[440px]">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[60vh] md:max-h-[85vh] w-full object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev !== null ? (prev - 1 + gallery.length) % gallery.length : 0));
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-black/55 text-white backdrop-blur-md transition hover:bg-black/85"
                aria-label="Foto sebelumnya"
                type="button"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev !== null ? (prev + 1) % gallery.length : 0));
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-black/55 text-white backdrop-blur-md transition hover:bg-black/85"
                aria-label="Foto berikutnya"
                type="button"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Detail Panel */}
            <div className="flex w-full flex-col justify-between p-6 md:w-[360px] md:p-8 bg-[#f5f8f3]">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#dbe8d8] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#31694b]">
                    {activePhoto.label}
                  </span>
                  <span className="text-xs font-semibold text-[#71907d]">
                    {selectedImage + 1} / {gallery.length}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold leading-snug text-[#1a432f]">
                  {activePhoto.title}
                </h3>

                <div className="mt-4 h-px w-full bg-[#d6e3d4]" />

                <div className="mt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#698a75]">
                    Deskripsi Dokumentasi
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[#41604f]">
                    {activePhoto.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 border-t border-[#d6e3d4] pt-4">
                <div className="flex items-center justify-between text-xs text-[#6e8a79]">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-[#45805c]" /> MAN 2 Kudus
                  </span>
                  <span>September 2026</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedImage((prev) => (prev !== null ? (prev - 1 + gallery.length) % gallery.length : 0))}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2e6446] hover:underline"
                    type="button"
                  >
                    <ChevronLeft size={16} /> Sebelumnya
                  </button>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev !== null ? (prev + 1) % gallery.length : 0))}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2e6446] hover:underline"
                    type="button"
                  >
                    Berikutnya <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function BuildingIcon() {
  return (
    <span className="relative block h-[17px] w-[17px]">
      <span className="absolute bottom-0 left-[3px] h-[12px] w-[11px] rounded-[2px] border-2 border-current" />
      <span className="absolute left-[6px] top-0 h-[5px] w-[5px] rotate-45 border-l-2 border-t-2 border-current" />
      <span className="absolute bottom-[3px] left-[6px] h-[4px] w-[2px] bg-current" />
    </span>
  );
}

export default Home;
