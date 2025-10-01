import manukDadaliBanner from '@/assets/manuk-dadali-banner.jpg';

const LemburKuring = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 fade-in">
      {/* Header */}
      <div className="glass-content text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Lembur Kuring
        </h1>
        <p className="text-xl text-muted-foreground">
          Pangajaran Bahasa Sunda - Kabudayaan Jawa Barat
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Sundanese Content */}
        <div className="space-y-6">
          <div className="glass-content">
            <h2 className="text-2xl font-bold mb-6 text-primary">Tari Manuk Dadali dina Basa Sunda</h2>
            
            <div className="bg-primary/5 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">Katerangan Lengkep</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-secondary">Manuk Dadali nyaéta lagu rahayat Jawa Barat anu kasohor pisan.</strong> 
                Lagu ieu ngagambarkeun kaéndahan jeung kareueus manuk Garuda, lambang nasional Indonésia. Dina lagu éta, 
                Garuda digambarkeun salaku manuk gagah, gaduh jangjang kuat, sarta ngapung luhur ka langit.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                Manuk Garuda di Manuk Dadali lain ngan saukur sato, tapi ogé mangrupa <em>lambang sumanget, kawani, jeung kabébasan.</em> 
                Lagu ieu sering dinyanyikeun kalayan wirahma anu riang sareng enerjik, ngajantenkeun saha waé anu ngadanguna ngarasa 
                reueus janten urang Sunda sareng Indonésia.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Saterusna, Manuk Dadali mindeng diajarkeun di sakola, ditembangkeun dina pagelaran seni, sarta dipigawé dina upacara adat. 
                Kalayan lirikna anu basajan tapi ngandung harti, ieu tembang geus nyunda dina sanubari masarakat sarta mangrupa lambang 
                jati diri budaya Jawa Barat.
              </p>
            </div>

            <div className="glass-content bg-secondary/5">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Ciri-ciri Tari Manuk Dadali</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Gerakan:</strong> Anggun, ngalayang, jeung bermartabat</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Musik:</strong> Diiringan ku gamelan Sunda jeung kendang</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Kostum:</strong> Kebaya warna-warni jeung aksesoris emas</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Suasana:</strong> Meriah, rame, jeung ngabagaharajikeun</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Visual Content */}
        <div className="space-y-6">
          <div className="glass-content">
            <img 
              src={manukDadaliBanner} 
              alt="Panampilan Tari Manuk Dadali"
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-primary">Panampilan Tari Manuk Dadali</h3>
            <p className="text-sm text-muted-foreground">
              Kaendahan jeung kagigihan para penari Sunda dina nampikeun warisan budaya leluhur.
            </p>
          </div>

          <div className="glass-content">
            <h3 className="text-xl font-bold mb-4 text-primary">Nilai-nilai Budaya Sunda</h3>
            
            <div className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">🤝 Gotong Royong</h4>
                <p className="text-sm text-muted-foreground">
                  Tari Manuk Dadali ngamumulé tradisi gotong royong jeung silih tulungan 
                  diantara masarakat Sunda.
                </p>
              </div>
              
              <div className="bg-secondary/5 p-4 rounded-xl">
                <h4 className="font-semibold text-secondary mb-2">🎨 Kasénan Tradisional</h4>
                <p className="text-sm text-muted-foreground">
                  Ngalestarikan seni tradisional pikeun generasi nu bakal datang, 
                  supaya teu leungit ku jaman.
                </p>
              </div>
              
              <div className="bg-accent/5 p-4 rounded-xl">
                <h4 className="font-semibold text-accent mb-2">💖 Kareueus Budaya</h4>
                <p className="text-sm text-muted-foreground">
                  Ngawujudkeun kareueus kana kabudayaan Sunda jeung Indonesia sacara umum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vocabulary Section */}
      <div className="glass-content">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">
          Kamus Basa Sunda - Indonesia
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-primary/5 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-primary">Gancang</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">Cepat</span>
            </div>
          </div>
          
          <div className="bg-secondary/5 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-secondary">Sumanget</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">Semangat</span>
            </div>
          </div>
          
          <div className="bg-accent/5 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-accent">Kareueus</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">Kebanggaan</span>
            </div>
          </div>
          
          <div className="bg-primary/5 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-primary">Kabagjaan</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">Kebahagiaan</span>
            </div>
          </div>
          
          <div className="bg-secondary/5 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-secondary">Rahayat</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">Rakyat</span>
            </div>
          </div>
          
          <div className="bg-accent/5 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-accent">Kasénan</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-muted-foreground">Kesenian</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Wisdom */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-content">
          <h3 className="text-2xl font-bold mb-6 text-primary">Paribasa Sunda</h3>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl">
              <h4 className="font-semibold text-primary mb-2">"Silih Asah, Silih Asih, Silih Asuh"</h4>
              <p className="text-sm text-muted-foreground mb-2 italic">
                Saling mengasah, saling mengasihi, saling mengasuh
              </p>
              <p className="text-xs text-muted-foreground">
                Filosofi hirup masarakat Sunda nu ngédukung gotong royong jeung silih tulungan.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-6 rounded-xl">
              <h4 className="font-semibold text-secondary mb-2">"Someah hade ka semah"</h4>
              <p className="text-sm text-muted-foreground mb-2 italic">
                Ramah tamah kepada tamu
              </p>
              <p className="text-xs text-muted-foreground">
                Tradisi masarakat Sunda nu hospitality jeung ramah ka tamu.
              </p>
            </div>
          </div>
        </div>
        
        <div className="glass-content">
          <h3 className="text-2xl font-bold mb-6 text-primary">Pembelajaran Basa Sunda</h3>
          
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-6 rounded-xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Diajar basa Sunda téh penting pikeun ngalestarikan budaya Jawa Barat. 
              Ngaliwatan tari Manuk Dadali, urang bisa diajar loba hal:
            </p>
            
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Kosakata basa Sunda nu aya hubunganana jeung seni
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Nilai-nilai budaya Sunda nu luhur
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Filosofi hirup masarakat Sunda
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Pentingna ngalestarikan tradisi leluhur
              </li>
            </ul>
            
            <div className="text-center mt-6">
              <p className="font-semibold text-lg text-primary">
                "Bahasa Sunda: Warisan Nu Kudu Dijaga"
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                (Bahasa Sunda: Warisan yang Harus Dijaga)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Elements */}
      <div className="glass-content">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">
          Unsur-unsur Tradisional Sunda
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🥁</span>
            </div>
            <h3 className="font-semibold mb-2 text-primary">Kendang</h3>
            <p className="text-sm text-muted-foreground">Alat musik tradisional Sunda nu jadi ciri khas</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎶</span>
            </div>
            <h3 className="font-semibold mb-2 text-secondary">Gamelan</h3>
            <p className="text-sm text-muted-foreground">Iringan musik nu ngabentuk harmoni indah</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👘</span>
            </div>
            <h3 className="font-semibold mb-2 text-accent">Kostum</h3>
            <p className="text-sm text-muted-foreground">Busana tradisional nu pinuh warna jeung makna</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💃</span>
            </div>
            <h3 className="font-semibold mb-2 text-primary">Gerakan</h3>
            <p className="text-sm text-muted-foreground">Tarian nu ngagambarkeun jiwa Sunda</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LemburKuring;
