import islamicEnvironment from '@/assets/islamic-environment.jpg';

const MimbarAgama = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 fade-in">
      {/* Header */}
      <div className="glass-content text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Mimbar Agama
        </h1>
        <p className="text-xl text-muted-foreground">
          Perintah Mendidik Anak dalam Islam
        </p>
      </div>

      {/* Featured Image */}
      <div className="glass-content">
        <img 
          src={islamicEnvironment} 
          alt="Islamic Environmental Values"
          className="w-full h-64 md:h-80 object-cover rounded-xl"
        />
      </div>

      {/* Quranic Verses */}
      <div className="grid lg:grid-cols-1 gap-8">
        {/* Q.S. At-Tahrim */}
        <div className="glass-content">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-primary mb-2">Q.S. At-Tahrim (66:6)</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
          
          <div className="bg-primary/5 p-6 rounded-xl mb-6 text-center">
            <p className="text-2xl mb-4 font-arabic leading-relaxed" dir="rtl">
              يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا وَقُودُهَا النَّاسُ وَالْحِجَارَةُ
            </p>
          </div>
          
          <div className="bg-accent/5 p-6 rounded-xl mb-4">
            <h3 className="font-semibold text-accent mb-3">Terjemahan:</h3>
            <p className="text-muted-foreground leading-relaxed">
              "Hai orang-orang yang beriman, peliharalah dirimu dan keluargamu dari api neraka 
              yang bahan bakarnya adalah manusia dan batu..."
            </p>
          </div>
          
          <div className="bg-secondary/5 p-4 rounded-xl">
            <h4 className="font-medium text-secondary mb-2">Pesan:</h4>
            <p className="text-sm text-muted-foreground">
              Ayat ini menekankan pentingnya mendidik anak dan keluarga dengan nilai-nilai Islam 
              sebagai bentuk perlindungan dari azab Allah.
            </p>
          </div>
        </div>
      </div>

      {/* Hadith Section */}
      <div className="glass-content">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Hadits tentang Kepemimpinan</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent via-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-xl">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="font-semibold text-primary">Hadits Rasulullah ﷺ</h3>
            </div>
            
            <blockquote className="text-center mb-4 italic text-muted-foreground">
              "كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ"
            </blockquote>
            
            <p className="text-muted-foreground text-center mb-4 leading-relaxed">
              "Setiap kalian adalah pemimpin dan setiap kalian akan dimintai pertanggung jawaban 
              atas kepemimpinannya. Seorang laki-laki adalah pemimpin bagi keluarganya dan ia akan 
              dimintai pertanggung jawaban atas kepemimpinannya."
            </p>
            
            <div className="bg-white/10 p-3 rounded-lg">
              <p className="text-sm text-center font-medium text-primary">
                (HR. Bukhari dan Muslim)
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-accent mb-4">Refleksi dan Pembelajaran</h3>
            
            <div className="bg-accent/5 p-4 rounded-xl">
              <h4 className="font-semibold text-accent mb-2">👑 Tanggung Jawab Kepemimpinan</h4>
              <p className="text-sm text-muted-foreground">
                Setiap orang memiliki tanggung jawab kepemimpinan, minimal terhadap diri sendiri 
                dan akan dimintai pertanggungjawaban di hadapan Allah.
              </p>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-xl">
              <h4 className="font-semibold text-primary mb-2">👨‍👩‍👧‍👦 Mendidik Keluarga</h4>
              <p className="text-sm text-muted-foreground">
                Orang tua memiliki kewajiban mendidik anak-anaknya dengan nilai-nilai Islam 
                agar terlindung dari murka Allah.
              </p>
            </div>
            
            <div className="bg-secondary/5 p-4 rounded-xl">
              <h4 className="font-semibold text-secondary mb-2">📚 Pentingnya Pendidikan</h4>
              <p className="text-sm text-muted-foreground">
                Pendidikan anak dalam Islam bukan hanya tanggung jawab sekolah, tetapi utamanya 
                adalah tanggung jawab orang tua di rumah.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Section */}
      <div className="glass-content">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">
          Cara Mendidik Anak dalam Islam
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="font-semibold mb-2 text-primary">Di Rumah</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Mengajarkan sholat sejak dini</li>
              <li>• Membaca Al-Quran bersama</li>
              <li>• Bercerita kisah nabi</li>
              <li>• Menanamkan akhlak mulia</li>
            </ul>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏫</span>
            </div>
            <h3 className="font-semibold mb-2 text-secondary">Di Sekolah</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Memilih sekolah Islami</li>
              <li>• Mengawasi pergaulan anak</li>
              <li>• Komunikasi dengan guru</li>
              <li>• Mendukung kegiatan keagamaan</li>
            </ul>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌆</span>
            </div>
            <h3 className="font-semibold mb-2 text-accent">Di Masyarakat</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Ikut kajian keluarga</li>
              <li>• Bergabung komunitas Islami</li>
              <li>• Mengajarkan toleransi</li>
              <li>• Berbuat baik kepada tetangga</li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="glass-content">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">Kaligrafi Tangan</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto"></div>
          <p className="text-muted-foreground mt-4">
        Karya kaligrafi tangan pribadi dengan pesan spiritual
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
        <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border-2 border-dashed border-primary/20 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
          src="/agama.jpeg"
          alt="Kaligrafi Tangan"
          className="w-full h-full object-cover rounded-xl border-2 border-dashed border-primary/20 cursor-pointer transition duration-300 hover:blur-sm"
          onClick={() => window.open('/agama.jpeg', '_blank')}
          style={{ display: 'block' }}
            />
            <span
          className="absolute inset-0 flex items-center justify-center text-center text-sm text-primary opacity-0 hover:opacity-100 transition-opacity bg-white/20 rounded-xl backdrop-blur-sm cursor-pointer"
          onClick={() => window.open('/agama.jpeg', '_blank')}
            >
          <b>Klik untuk melihat gambar.</b>
            </span>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MimbarAgama;