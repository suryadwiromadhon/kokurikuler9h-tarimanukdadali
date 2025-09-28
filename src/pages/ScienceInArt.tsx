import physicsImage from '@/assets/physics-dance.jpg';


const ScienceInArt = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 fade-in">
      {/* Header */}
      <div className="glass-content text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Science in Art
        </h1>
        <p className="text-xl text-muted-foreground">
          Fisika dalam Gerakan Tari - Sains Tersembunyi dalam Seni
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Theory */}
        <div className="space-y-6">
          <div className="glass-content">
            <h2 className="text-2xl font-bold mb-6 text-primary">Konsep Tekanan pada Zat Padat</h2>
            
            <div className="bg-primary/5 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">Rumus Dasar</h3>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <span className="text-2xl font-mono font-bold text-secondary">P = F / A</span>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p><strong>P</strong> = Tekanan (Pa)</p>
                <p><strong>F</strong> = Gaya (N)</p>
                <p><strong>A</strong> = Luas bidang sentuh (m²)</p>
              </div>
            </div>

            <div className="prose text-muted-foreground">
              <p className="leading-relaxed mb-4">
                Saat menari, berat badan penari memberikan gaya (tekanan) pada lantai. 
                Besarnya tekanan yang dihasilkan bergantung pada luas bidang sentuh antara 
                kaki penari dengan lantai.
              </p>
              
              <p className="leading-relaxed mb-4">
                <strong className="text-secondary">Semakin kecil luas bidang tumpuan</strong> 
                (misalnya saat menari dengan ujung kaki), <strong className="text-accent">semakin besar tekanannya</strong>. 
                Prinsip ini membuat penari harus menjaga keseimbangan dengan sangat baik agar tidak terjatuh.
              </p>
            </div>
          </div>

          <div className="glass-content">
            <h3 className="text-xl font-bold mb-4 text-primary">Aplikasi dalam Tari Manuk Dadali</h3>
            
            <div className="space-y-4">
              <div className="bg-secondary/5 p-4 rounded-xl">
                <h4 className="font-semibold text-secondary mb-2">🦶 Gerakan Kaki</h4>
                <p className="text-sm text-muted-foreground">
                  Saat penari berdiri di atas ujung kaki, luas bidang sentuh mengecil drastis, 
                  sehingga tekanan pada lantai meningkat hingga 10 kali lipat.
                </p>
              </div>
              
              <div className="bg-accent/5 p-4 rounded-xl">
                <h4 className="font-semibold text-accent mb-2">⚖️ Keseimbangan</h4>
                <p className="text-sm text-muted-foreground">
                  Penari harus mengatur pusat massa tubuh agar tetap berada di atas titik tumpuan 
                  untuk mempertahankan keseimbangan.
                </p>
              </div>
              
              <div className="bg-primary/5 p-4 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">🎯 Stabilitas</h4>
                <p className="text-sm text-muted-foreground">
                  Gerakan yang stabil memerlukan pengaturan gaya dan momen yang tepat, 
                  menerapkan prinsip-prinsip mekanika klasik.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="space-y-6">
          <div className="glass-content">
            <img 
              src={physicsImage} 
              alt="Physics in Dance - Pressure and Force"
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 text-primary">Ilustrasi Fisika Tari</h3>
            <p className="text-sm text-muted-foreground">
              Diagram yang menunjukkan konsep gaya, tekanan, dan keseimbangan dalam gerakan tari tradisional.
            </p>
          </div>

          <div className="glass-content">
            <h3 className="text-xl font-bold mb-4 text-primary">Perhitungan Praktis</h3>
            
            <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-6 rounded-xl">
              <h4 className="font-semibold mb-4 text-secondary">Contoh Kasus:</h4>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Berat penari:</span>
                  <span className="font-mono font-semibold">50 kg (490 N)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Luas kaki normal:</span>
                  <span className="font-mono font-semibold">0.02 m²</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Tekanan normal:</span>
                  <span className="font-mono font-semibold text-primary">24,500 Pa</span>
                </div>
                
                <hr className="border-glass-border my-3" />
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Luas ujung kaki:</span>
                  <span className="font-mono font-semibold">0.002 m²</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Tekanan ujung kaki:</span>
                  <span className="font-mono font-semibold text-accent">245,000 Pa</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                <p className="text-xs text-center font-medium text-accent">
                  Tekanan meningkat 10 kali lipat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[1,2,3,4,5,6].map((num) => (
          <div key={num} className="glass-content">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border-2 border-dashed border-primary/20 flex items-center justify-center overflow-hidden relative">
              <img
                src={`/kaki${num}.jpeg`}
                alt={`Foto kaki ${num}`}
                className="w-full h-full object-cover rounded-xl cursor-pointer transition duration-300 hover:blur-sm"
                onClick={() => window.open(`/kaki${num}.jpeg`, '_blank')}
                style={{ display: 'block' }}
              />
              <span
                className="absolute inset-0 flex items-center justify-center text-center text-sm text-primary opacity-0 hover:opacity-100 transition-opacity bg-white/20 rounded-xl backdrop-blur-sm cursor-pointer"
                onClick={() => window.open(`/kaki${num}.jpeg`, '_blank')}
              >
                <b>Klik untuk melihat gambar.</b>
              </span>
            </div>
            <h3 className="text-sm font-semibold text-primary text-center mt-2">Foto Kaki {num}</h3>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[1,2,3].map((num) => (
          <div key={num} className="glass-content">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border-2 border-dashed border-primary/20 flex items-center justify-center overflow-hidden relative">
              <img
                src={`/ipa${num}.jpeg`}
                className="w-full h-full object-cover rounded-xl cursor-pointer transition duration-300 hover:blur-sm"
                onClick={() => window.open(`/ipa${num}.jpeg`, '_blank')}
                style={{ display: 'block' }}
              />
              <span
                className="absolute inset-0 flex items-center justify-center text-center text-sm text-primary opacity-0 hover:opacity-100 transition-opacity bg-white/20 rounded-xl backdrop-blur-sm cursor-pointer"
                onClick={() => window.open(`/ipa${num}.jpeg`, '_blank')}
              >
                <b>Klik untuk melihat gambar.</b>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Physics Principles */}
      <div className="glass-content">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">
          Prinsip Fisika dalam Gerakan Tari
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold mb-3 text-primary">Momentum dan Impuls</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Gerakan sayap dalam Manuk Dadali menciptakan momentum yang terkontrol. Penari menggunakan 
              impuls untuk mengubah arah gerakan seperti burung yang sedang terbang.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌀</span>
            </div>
            <h3 className="font-semibold mb-3 text-secondary">Rotasi dan Torsi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Putaran dan gerak melingkar dalam tari melibatkan konsep momen inersia dan 
              torsi yang membuat gerakan terlihat anggun.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎵</span>
            </div>
            <h3 className="font-semibold mb-3 text-accent">Gelombang Suara</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Musik gamelan menghasilkan gelombang suara dengan frekuensi dan amplitudo 
              tertentu yang memengaruhi ritme gerakan penari.
            </p>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-content">
          <h3 className="text-2xl font-bold mb-4 text-primary">Tujuan Pembelajaran</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Memahami konsep tekanan dan penerapannya dalam kehidupan sehari-hari</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Menganalisis hubungan antara gaya, luas bidang, dan tekanan</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Mengaplikasikan rumus fisika dalam konteks seni dan budaya</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>Mengembangkan pemahaman interdisipliner antara sains dan seni</span>
            </li>
          </ul>
        </div>
        
        <div className="glass-content">
          <h3 className="text-2xl font-bold mb-4 text-primary">Kesimpulan</h3>
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tari Jaipong bukan hanya sekadar seni pertunjukan, tetapi juga demonstrasi nyata 
              dari berbagai prinsip fisika yang kompleks. Setiap gerakan penari melibatkan 
              perhitungan matematis yang rumit dalam otak mereka.
            </p>
            <p className="text-sm font-medium text-primary text-center">
              "Seni dan sains bertemu dalam harmoni gerakan yang sempurna"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceInArt;