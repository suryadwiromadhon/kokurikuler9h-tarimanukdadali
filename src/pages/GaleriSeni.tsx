import manukDadaliBanner from '@/assets/manuk-dadali-banner.jpg';

const GaleriSeni = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-12 fade-in">
      {/* Header */}
      <div className="glass-content text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Galeri Seni
        </h1>
        <p className="text-xl text-muted-foreground">
          Tari Manuk Dadali - Warisan Budaya Jawa Barat
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Media Content */}
        <div className="space-y-6">
          <div className="glass-content">
            <h3 className="text-xl font-semibold mb-4 text-primary">Video Penampilan</h3>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/xeo3Un3ryU8"
                title="Video Tari Manuk Dadali"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="glass-content">
            <h2 className="text-2xl font-bold mb-4 text-primary">Sejarah & Makna</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tari Manuk Dadali berasal dari Jawa Barat, terinspirasi oleh burung garuda yang merupakan 
              simbol kebanggaan dan kebebasan. Tarian ini lahir dari penggabungan gerakan tradisional 
              Sunda dengan simbolisme burung yang anggun dan perkasa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Filosofinya adalah kebebasan, keanggunan, dan kebanggaan sebagai bangsa Indonesia. 
              Manuk Dadali mencerminkan semangat nasionalisme dan cinta tanah air yang mendalam.
            </p>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="space-y-6">
          <div className="glass-content">
            <h2 className="text-2xl font-bold mb-4 text-primary">Deskripsi Detail</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Manuk Dadali adalah lagu daerah Jawa Barat yang sangat terkenal. Lagu ini menggambarkan
              keindahan dan kebanggaan terhadap burung garuda, lambang negara Indonesia. Dalam lagu tersebut,
              burung garuda dilukiskan sebagai burung yang gagah perkasa, memiliki sayap yang kuat,
              serta terbang tinggi di angkasa
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Burung garuda dalam Manuk Dadali bukan hanya sekadar hewan, tetapi juga simbol semangat,
              keberanian, dan kebebasan. Lagu ini sering dinyanyikan dengan irama yang riang dan penuh semangat,
              sehingga membuat siapa saja yang mendengarnya merasa bangga menjadi orang Sunda dan juga bangsa Indonesia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Selain itu, Manuk Dadali juga sering diajarkan di sekolah-sekolah, dinyanyikan saat pertunjukan seni,
              dan dimainkan dalam upacara adat. Dengan lirik yang sederhana namun penuh makna, lagu ini berhasil
              melekat di hati masyarakat sebagai salah satu identitas budaya Jawa Barat.
            </p>
          </div>

            <div className="glass-content">
            <h3 className="text-xl font-semibold mb-2 text-primary">Infografis</h3>
            <div className="relative w-full aspect-[4/3]">
              <img
                src="/infografis.jpeg"
                alt="Infografis Tari Manuk Dadali"
                className="w-full h-full object-cover rounded-xl border-2 border-dashed border-primary/20 cursor-pointer transition duration-300 group-hover:blur-sm"
                onClick={() => window.open('/infografis.jpeg', '_blank')}
                style={{ display: 'block' }}
              />
                <span className="absolute inset-0 flex items-center justify-center text-center text-sm text-primary opacity-0 hover:opacity-100 transition-opacity bg-white/20 rounded-xl backdrop-blur-sm cursor-pointer"
                onClick={() => window.open('/infografis.jpeg', '_blank')}
                >
                <b>Klik untuk melihat gambar.</b>
                </span>
            </div>
            </div>
        </div>
      </div>


      {/* Cultural Elements */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-content text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎵</span>
          </div>
          <h3 className="font-semibold mb-2 text-primary">Musik Pengiring</h3>
          <p className="text-sm text-muted-foreground">
            Gamelan Salendro dengan kendang, goong, dan saron
          </p>
        </div>

        <div className="glass-content text-center">
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">👘</span>
          </div>
          <h3 className="font-semibold mb-2 text-primary">Kostum Tradisional</h3>
          <p className="text-sm text-muted-foreground">
            Kebaya, selendang, dan aksesoris emas khas Sunda
          </p>
        </div>

        <div className="glass-content text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💃</span>
          </div>
          <h3 className="font-semibold mb-2 text-primary">Gerakan Khas</h3>
          <p className="text-sm text-muted-foreground">
            Kepakan sayap, terbang tinggi, dan gerakan anggun burung
          </p>
        </div>
      </div>
    </div>
  );
};

export default GaleriSeni;