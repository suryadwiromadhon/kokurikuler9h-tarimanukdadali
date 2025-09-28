const TimKreator = () => {
  const teamMembers = [
    {
      name: 'Surya Dwi Romadhon',
      role: 'Koordinator Projek, Dalil Agama, Prolog, Design Canva, Develop Website',
      subject: 'PKN, Agama, Informatika, IPS'
    },
    {
      name: 'Rakaan Ahya Fawaz',
      role: 'Teks Deskripsi Bahasa Indonesia, Design Canva',
      subject: 'Bahasa Indonesia, IPS'
    },
    {
      name: 'Willy Raisa Andani Putra',
      role: 'Pemimpin Praktek Tari, Translate Sunda, Kaligrafi Dalil, Hitung IPA & Matematika',
      subject: 'Seni Budaya, Bahasa Sunda, IPA, Matematika, Agama'
    },
    {
      name: 'Muhammad Arga Al-Fitrah',
      role: 'Design Canva Utama',
      subject: 'IPS'
    },
    {
      name: 'Muhammad Alfin',
      role: 'Infografis',
      subject: 'IPS'
    },
    {
      name: 'Daffa Rai Shaquille Putra',
      role: 'Infografis, Translate Inggris',
      subject: 'IPS, Bahasa Inggris'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-12 fade-in">
      {/* Header */}
      <div className="glass-content text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Tim Kreator & Proses Kami
        </h1>
        <p className="text-xl text-muted-foreground">
          Perjalanan Kolaboratif dalam Mewujudkan Proyek Budaya
        </p>
      </div>

      {/* Banner Tim */}
      <div className="glass-content text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Anggota Tim Proyek</h2>
        <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl mb-4">
          <img
        src="/tim.jpg"
        alt="Banner Tim Kreator"
        className="w-full h-full object-cover"
        style={{ objectPosition: 'center 10px' }} // Geser foto ke bawah
          />
        </div>
      </div>

      {/* Team Photos Grid */}
      <div className="glass-content">
        <div className="flex flex-col items-center">
          {/* Baris atas: 4 anggota */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {teamMembers.slice(0, 4).map((member, index) => (
          <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 flex flex-col items-center">
            <div className="relative w-24 h-24 mb-4">
          <img
            src={`/profile${index + 1}.jpg`}
            alt={`Profile ${member.name}`}
            className="w-24 h-24 object-cover rounded-full cursor-pointer transition duration-300 hover:blur-sm"
            onClick={() => window.open(`/profile${index + 1}.jpg`, '_blank')}
          />
          <span
            className="absolute inset-0 flex items-center justify-center text-center text-sm text-primary opacity-0 hover:opacity-100 transition-opacity bg-white/20 rounded-full backdrop-blur-sm cursor-pointer"
            onClick={() => window.open(`/profile${index + 1}.jpg`, '_blank')}
          >
            <b>Klik untuk melihat gambar.</b>
          </span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-primary">{member.name}</h3>
            <p className="text-sm text-secondary font-medium mb-1">{member.role}</p>
            <p className="text-xs text-muted-foreground bg-accent/10 px-2 py-1 rounded-full">
          {member.subject}
            </p>
          </div>
        ))}
          </div>
          {/* Baris bawah: 2 anggota, rata tengah */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.slice(4, 6).map((member, index) => (
          <div key={index + 4} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 flex flex-col items-center">
            <div className="relative w-24 h-24 mb-4">
          <img
            src={`/profile${index + 5}.jpg`}
            alt={`Profile ${member.name}`}
            className="w-24 h-24 object-cover rounded-full cursor-pointer transition duration-300 hover:blur-sm"
            onClick={() => window.open(`/profile${index + 5}.jpg`, '_blank')}
          />
          <span
            className="absolute inset-0 flex items-center justify-center text-center text-sm text-primary opacity-0 hover:opacity-100 transition-opacity bg-white/20 rounded-full backdrop-blur-sm cursor-pointer"
            onClick={() => window.open(`/profile${index + 5}.jpg`, '_blank')}
          >
            <b>Klik untuk melihat gambar.</b>
          </span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-primary">{member.name}</h3>
            <p className="text-sm text-secondary font-medium mb-1">{member.role}</p>
            <p className="text-xs text-muted-foreground bg-accent/10 px-2 py-1 rounded-full">
          {member.subject}
            </p>
          </div>
        ))}
          </div>
        </div>
      </div>

      {/* Project Process */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="glass-content">
          <h2 className="text-2xl font-bold mb-6 text-primary">Proses Pembuatan Proyek</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold text-primary mb-2">Fase 1: Perencanaan</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Tim melakukan brainstorming untuk menentukan tema dan konsep proyek. 
                Tari Jaipong dipilih sebagai fokus utama karena kekayaan nilai budayanya.
              </p>
              <div className="text-xs text-secondary">Durasi: 1 minggu</div>
            </div>
            
            <div className="border-l-4 border-secondary pl-6">
              <h3 className="font-semibold text-secondary mb-2">Fase 2: Penelitian</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Mengumpulkan informasi dari berbagai sumber tentang sejarah, filosofi, 
                dan aspek teknis Tari Jaipong dari perspektif multi-disiplin.
              </p>
              <div className="text-xs text-secondary">Durasi: 2 minggu</div>
            </div>
            
            <div className="border-l-4 border-accent pl-6">
              <h3 className="font-semibold text-accent mb-2">Fase 3: Produksi Konten</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Setiap anggota tim mengerjakan bagiannya sesuai keahlian: menulis artikel, 
                membuat video, menerjemahkan, dan menganalisis aspek sains.
              </p>
              <div className="text-xs text-accent">Durasi: 3 minggu</div>
            </div>
            
            <div className="border-l-4 border-primary pl-6">
              <h3 className="font-semibold text-primary mb-2">Fase 4: Integrasi & Review</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Menggabungkan semua konten ke dalam website, melakukan review kualitas, 
                dan memastikan konsistensi informasi di seluruh halaman.
              </p>
              <div className="text-xs text-primary">Durasi: 1 minggu</div>
            </div>
          </div>
        </div>

        <div className="glass-content">
          <h2 className="text-2xl font-bold mb-6 text-primary">Tantangan & Solusi</h2>
          
          <div className="space-y-4">
            <div className="bg-red-50/50 border border-red-200/30 p-4 rounded-xl">
              <h3 className="font-semibold text-red-700 mb-2">🚧 Tantangan</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Koordinasi jadwal antar anggota tim</li>
                <li>• Menyatukan perspektif dari berbagai mata pelajaran</li>
                <li>• Memastikan akurasi informasi budaya</li>
                <li>• Mengintegrasikan teknologi dengan konten tradisional</li>
              </ul>
            </div>
            
            <div className="bg-green-50/50 border border-green-200/30 p-4 rounded-xl">
              <h3 className="font-semibold text-green-700 mb-2">💡 Solusi</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Membuat jadwal kerja yang fleksibel dengan deadline jelas</li>
                <li>• Regular meeting untuk sinkronisasi dan koordinasi</li>
                <li>• Konsultasi dengan ahli budaya dan guru mata pelajaran</li>
                <li>• Menggunakan platform kolaborasi online untuk efisiensi</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Reflections */}
      <div className="glass-content">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">
          Refleksi Tim
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💖</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-primary">Nilai Berkesan</h3>
            <div className="bg-primary/5 p-6 rounded-xl">
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-primary">"Kerja sama adalah hal paling berkesan"</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Melalui proyek ini, kami belajar bahwa kolaborasi antar-disiplin ilmu dapat 
                menghasilkan karya yang lebih kaya dan bermakna. Setiap perspektif memberikan 
                warna tersendiri dalam memahami budaya Indonesia.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Tantangan Terbesar</h3>
            <div className="bg-secondary/5 p-6 rounded-xl">
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-secondary">"Kesulitan mengatur waktu"</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Tantangan utama adalah menyinkronkan jadwal sembilan anggota tim dengan 
                mata pelajaran berbeda. Solusinya adalah pembagian tugas yang jelas dan 
                komunikasi rutin melalui grup online.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-accent">Rencana Ke Depan</h3>
            <div className="bg-accent/5 p-6 rounded-xl">
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-accent">"Menerapkan nilai kerja sama"</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Kami berkomitmen untuk menerapkan nilai-nilai kerja sama yang dipelajari 
                dalam proyek ini ke dalam kehidupan keluarga, lingkungan sekolah, dan 
                masyarakat yang lebih luas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Outcomes */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-content">
          <h3 className="text-2xl font-bold mb-6 text-primary">Hasil Pembelajaran</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-primary">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">Pemahaman Multidisiplin</h4>
                <p className="text-sm text-muted-foreground">
                  Satu topik budaya dapat dieksplorasi dari berbagai sudut pandang ilmu.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-secondary">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">Keterampilan Kolaborasi</h4>
                <p className="text-sm text-muted-foreground">
                  Bekerja dalam tim dengan latar belakang keahlian yang beragam.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-accent">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-1">Apresiasi Budaya</h4>
                <p className="text-sm text-muted-foreground">
                  Menghargai kekayaan budaya Indonesia dari perspektif yang lebih dalam.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-content">
          <h3 className="text-2xl font-bold mb-6 text-primary">Pesan untuk Masa Depan</h3>
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-6 rounded-xl">
            <blockquote className="text-center text-lg italic text-muted-foreground mb-4">
              "Budaya adalah akar yang menguatkan identitas bangsa. Melalui pendekatan 
              sains dan teknologi, kita dapat melestarikan warisan leluhur untuk generasi mendatang."
            </blockquote>
            
            <div className="text-center">
              <p className="font-semibold text-primary mb-2">Tim Proyek Kokurikuler Kelas 9</p>
              <p className="text-sm text-muted-foreground">
                Dengan harapan proyek ini dapat menginspirasi siswa lain untuk 
                mencintai dan melestarikan budaya Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & Social */}
      <div className="glass-content text-center">
        <h2 className="text-2xl font-bold mb-4 text-primary">Terima Kasih</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Proyek ini tidak akan berhasil tanpa dukungan dari guru-guru pembimbing, 
          keluarga, dan teman-teman yang selalu memberikan semangat. Mari bersama-sama 
          melestarikan budaya Indonesia untuk masa depan yang lebih baik.
        </p>
        
        <div className="mt-8 flex justify-center space-x-4">
          <div className="bg-primary/10 px-6 py-3 rounded-full">
            <span className="text-primary font-medium">🎭 Seni Budaya</span>
          </div>
          <div className="bg-secondary/10 px-6 py-3 rounded-full">
            <span className="text-secondary font-medium">🔬 Sains</span>
          </div>
          <div className="bg-accent/10 px-6 py-3 rounded-full">
            <span className="text-accent font-medium">🌍 Budaya</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimKreator;