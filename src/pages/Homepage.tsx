import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Globe, BookOpen, Atom, Calculator, Map, Users } from 'lucide-react';
import manukDadaliBanner from '@/assets/manuk-dadali-banner.jpg';
import culturalDiversity from '@/assets/cultural-diversity.jpg';

const Homepage = () => {
  const navigationCards = [
    {
      to: '/galeri-seni',
      title: 'Galeri Seni',
      description: 'Tari Manuk Dadali dan kebudayaan Sunda',
      icon: <Palette className="w-6 h-6" />,
      color: 'bg-primary/10 border-primary/30',
    },
    {
      to: '/english-corner',
      title: 'English Corner',
      description: 'Cultural description in English',
      icon: <Globe className="w-6 h-6" />,
      color: 'bg-secondary/10 border-secondary/30',
    },
    {
      to: '/mimbar-agama',
      title: 'Mimbar Agama',
      description: 'Nilai spiritual dan lingkungan',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'bg-accent/10 border-accent/30',
    },
    {
      to: '/science-in-art',
      title: 'Science in Art',
      description: 'Fisika dalam gerakan tari',
      icon: <Atom className="w-6 h-6" />,
      color: 'bg-primary/15 border-primary/40',
    },
    {
      to: '/tarian-angka',
      title: 'Tarian Angka',
      description: 'Matematika dalam ritme tari',
      icon: <Calculator className="w-6 h-6" />,
      color: 'bg-secondary/15 border-secondary/40',
    },
    {
      to: '/lembur-kuring',
      title: 'Lembur Kuring',
      description: 'Deskripsi dalam Bahasa Sunda',
      icon: <Map className="w-6 h-6" />,
      color: 'bg-accent/15 border-accent/40',
    },
    {
      to: '/tim-kreator',
      title: 'Tim Kreator & Proses Kami',
      description: 'Perjalanan pembuatan proyek',
      icon: <Users className="w-6 h-6" />,
      color: 'bg-primary/20 border-primary/50',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 fade-in">
      {/* Hero Section */}
      <section className="glass-content text-center">
        <div className="mb-8">
          <img 
            src={manukDadaliBanner} 
            alt="Tari Manuk Dadali - Kebudayaan Indonesia"
            className="w-full h-64 md:h-80 object-cover rounded-xl mb-6"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Selamat Datang di Situs
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-primary">
          Projek Kokurikuler IX H - Kelompok 1
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
          Mari kita rayakan keragaman masyarakat Indonesia melalui seni, budaya, sains, agama, dan bahasa. 
          Proyek kolaboratif lintas mata pelajaran ini menghadirkan kekayaan tradisi dalam perspektif modern.
        </p>
        
        <div className="glass-card p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-primary">Tujuan Situs</h3>
          <p className="text-muted-foreground">
            Website ini dibuat untuk mendokumentasikan dan membagikan hasil kerja proyek kolaboratif 
            lintas mata pelajaran siswa kelas 9, menggabungkan pembelajaran dengan pelestarian budaya Indonesia.
          </p>
        </div>
      </section>

      {/* Cultural Diversity Image */}
      <section className="glass-content">
        <img 
          src={culturalDiversity} 
          alt="Keragaman Budaya Indonesia"
          className="w-full h-48 md:h-64 object-cover rounded-xl"
        />
      </section>

      {/* Navigation Grid */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Jelajahi Konten Kami
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationCards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className={`glass-card p-6 group hover:scale-105 transition-all duration-300 ${card.color}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 rounded-lg bg-white/10">
                  {card.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {card.description}
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Kunjungi
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Content */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="glass-content">
          <h3 className="text-2xl font-bold mb-4 text-primary">Tentang Proyek</h3>
          <p className="text-muted-foreground leading-relaxed">
            Proyek ini menggabungkan berbagai mata pelajaran untuk mengeksplorasi Tari Manuk Dadali 
            dari berbagai perspektif - seni, bahasa, matematika, fisika, dan nilai spiritual. 
            Setiap halaman menyajikan sudut pandang unik yang memperkaya pemahaman kita 
            tentang kekayaan budaya Indonesia.
          </p>
        </div>
        
        <div className="glass-content">
          <h3 className="text-2xl font-bold mb-4 text-primary">Mata Pelajaran Terlibat</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="bg-primary/5 p-2 rounded-lg">Informatika</div>
            <div className="bg-secondary/5 p-2 rounded-lg">PKN</div>
            <div className="bg-primary/10 p-2 rounded-lg">Seni Budaya</div>
            <div className="bg-secondary/10 p-2 rounded-lg">PJOK</div>
            <div className="bg-accent/5 p-2 rounded-lg">Bahasa Indonesia</div>
            <div className="bg-accent/10 p-2 rounded-lg">IPS</div>
            <div className="bg-primary/15 p-2 rounded-lg">Bahasa Inggris</div>
            <div className="bg-secondary/15 p-2 rounded-lg">PAI</div>
            <div className="bg-accent/15 p-2 rounded-lg">IPA</div>
            <div className="bg-primary/20 p-2 rounded-lg">Matematika</div>
            <div className="bg-secondary/20 p-2 rounded-lg">Bahasa Sunda</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;