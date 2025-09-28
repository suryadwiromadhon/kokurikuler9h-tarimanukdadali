import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const TarianAngka = () => {
  const gerakanData = [
    { waktu: '0s', sayap: 0, kaki: 0 },
    { waktu: '10s', sayap: 3, kaki: 6 },
    { waktu: '20s', sayap: 6, kaki: 12 },
    { waktu: '30s', sayap: 9, kaki: 18 },
    { waktu: '40s', sayap: 12, kaki: 24 },
    { waktu: '50s', sayap: 15, kaki: 30 },
    { waktu: '60s', sayap: 18, kaki: 36 },
  ];

  const polaBeatData = [
    { beat: 1, intensitas: 85 },
    { beat: 2, intensitas: 60 },
    { beat: 3, intensitas: 95 },
    { beat: 4, intensitas: 70 },
    { beat: 5, intensitas: 80 },
    { beat: 6, intensitas: 65 },
    { beat: 7, intensitas: 90 },
    { beat: 8, intensitas: 75 },
  ];
  return (
    <div className="max-w-6xl mx-auto space-y-12 fade-in">
      {/* Header */}
      <div className="glass-content text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          Tarian Angka
        </h1>
        <p className="text-xl text-muted-foreground">
          Matematika dalam Ritme dan Pola Gerakan Tari
        </p>
      </div>

      {/* Main Mathematical Concept */}
      <div className="glass-content">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-primary">Pola Ritmis dalam Tari Manuk Dadali</h2>
            
            <div className="bg-primary/5 p-6 rounded-xl mb-6">
              <h3 className="text-lg font-semibold mb-4 text-primary">Konsep Birama 4/4</h3>
              <div className="grid grid-cols-4 gap-2 mb-4">
                <div className="bg-secondary/20 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-secondary">1</div>
                  <div className="text-xs text-muted-foreground">Beat</div>
                </div>
                <div className="bg-secondary/20 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-secondary">2</div>
                  <div className="text-xs text-muted-foreground">Beat</div>
                </div>
                <div className="bg-secondary/20 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-secondary">3</div>
                  <div className="text-xs text-muted-foreground">Beat</div>
                </div>
                <div className="bg-secondary/20 p-3 rounded-lg text-center">
                  <div className="text-2xl font-bold text-secondary">4</div>
                  <div className="text-xs text-muted-foreground">Beat</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Setiap birama terdiri dari 4 ketukan, membentuk pola matematis yang berulang.
              </p>
            </div>

            <div className="prose text-muted-foreground">
              <p className="leading-relaxed mb-4">
                Gerakan Manuk Dadali dapat dihitung dengan pola ritmis 4/4. Setiap gerakan sayap 
                memiliki durasi waktu yang dapat diukur secara matematis, menciptakan 
                harmoni antara musik dan gerak tubuh yang meniru burung terbang.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Perhitungan Waktu</h3>
            
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 p-6 rounded-xl">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Durasi 1 gerakan:</span>
                  <span className="font-mono font-semibold text-primary">8 detik</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total waktu:</span>
                  <span className="font-mono font-semibold text-secondary">3 menit = 180 detik</span>
                </div>
                <div className="h-px bg-glass-border"></div>
                <div className="flex justify-between items-center text-lg">
                  <span className="text-muted-foreground">Jumlah pola gerakan:</span>
                  <span className="font-mono font-bold text-accent">180 ÷ 8 = 22.5 ≈ 22 pola</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <p className="text-sm text-center font-medium text-accent">
                  Dalam 3 menit terdapat 22 pola gerakan lengkap!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mathematical Analysis */}
      <div className="glass-content">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">
          Metode SPLDV dalam Analisis Gerakan Tari
        </h2>
        
        {/* SPLDV Method */}
        <div className="bg-primary/5 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-bold mb-4 text-primary">Sistem Persamaan Linear Dua Variabel (SPLDV)</h3>
          <p className="text-muted-foreground mb-4">
            Menghitung hubungan antara gerakan sayap (x) dan gerakan kaki (y) dalam Tari Manuk Dadali:
          </p>
          
          <div className="bg-white/10 p-4 rounded-lg mb-4">
            <div className="text-center space-y-2">
              <div className="text-lg font-mono">2x + 3y = 24 (gerakan dalam 1 menit)</div>
              <div className="text-lg font-mono">x + 2y = 15 (gerakan dalam 30 detik)</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-secondary/10 p-4 rounded-lg">
              <h4 className="font-semibold text-secondary mb-2">Substitusi:</h4>
              <div className="text-sm font-mono space-y-1">
                <div>x = 15 - 2y</div>
                <div>2(15 - 2y) + 3y = 24</div>
                <div>30 - 4y + 3y = 24</div>
                <div>y = 6</div>
                <div>x = 3</div>
              </div>
            </div>
            
            <div className="bg-accent/10 p-4 rounded-lg">
              <h4 className="font-semibold text-accent mb-2">Hasil:</h4>
              <div className="text-sm space-y-1">
                <div>Gerakan sayap: 3 per 30 detik</div>
                <div>Gerakan kaki: 6 per 30 detik</div>
                <div>Total gerakan: 9 per 30 detik</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-primary/5 p-6 rounded-xl">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="font-semibold text-primary">Frekuensi Gerakan</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sayap per menit:</span>
                <span className="font-mono">6</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Kaki per menit:</span>
                <span className="font-mono">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total gerakan:</span>
                <span className="font-mono">18 per menit</span>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary/5 p-6 rounded-xl">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🔄</span>
              </div>
              <h3 className="font-semibold text-secondary">Pola Berulang</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Unit pola sayap:</span>
                <span className="font-mono">10 detik</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Unit pola kaki:</span>
                <span className="font-mono">5 detik</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sinkronisasi:</span>
                <span className="font-mono">Setiap 10 detik</span>
              </div>
            </div>
          </div>
          
          <div className="bg-accent/5 p-6 rounded-xl">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="font-semibold text-accent">Tempo</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">BPM (Beat Per Minute):</span>
                <span className="font-mono">100 BPM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Beat per detik:</span>
                <span className="font-mono">1.67 beat/s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Klasifikasi:</span>
                <span className="font-mono">Andante</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Geometric Patterns */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="glass-content">
          <h3 className="text-2xl font-bold mb-6 text-primary">Grafik dan Pola Geometris</h3>
          
          {/* Chart Grafik Gerakan */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 text-primary">Grafik Gerakan Manuk Dadali</h4>
            <div className="bg-white/5 p-4 rounded-xl">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={gerakanData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="waktu" stroke="rgba(255,255,255,0.7)" />
                  <YAxis stroke="rgba(255,255,255,0.7)" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px'
                    }}
                  />
                  <Line type="monotone" dataKey="sayap" stroke="#8b5cf6" strokeWidth={3} name="Gerakan Sayap" />
                  <Line type="monotone" dataKey="kaki" stroke="#06b6d4" strokeWidth={3} name="Gerakan Kaki" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-primary/5 p-4 rounded-xl">
              <h4 className="font-semibold text-primary mb-2">🔺 Formasi V (Sayap Burung)</h4>
              <p className="text-sm text-muted-foreground">
                Penari membentuk formasi V seperti sayap burung dengan sudut 120°, 
                menciptakan ilusi burung terbang yang matematis dan indah.
              </p>
            </div>
            
            <div className="bg-secondary/5 p-4 rounded-xl">
              <h4 className="font-semibold text-secondary mb-2">⭕ Gerakan Lingkaran</h4>
              <p className="text-sm text-muted-foreground">
                Putaran sayap mengikuti rumus lingkaran dengan radius sepanjang rentangan 
                lengan, menciptakan gerakan yang proporsional dan harmonis.
              </p>
            </div>
            
            <div className="bg-accent/5 p-4 rounded-xl">
              <h4 className="font-semibold text-accent mb-2">〰️ Pola Parabolik</h4>
              <p className="text-sm text-muted-foreground">
                Gerakan terbang mengikuti lintasan parabolik seperti burung sungguhan, 
                dengan persamaan y = ax² + bx + c.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-content">
          <h3 className="text-2xl font-bold mb-6 text-primary">Analisis Beat dan SPLDV</h3>
          
          {/* Chart Beat Pattern */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-4 text-secondary">Intensitas Beat dalam 8 Ketukan</h4>
            <div className="bg-white/5 p-4 rounded-xl">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={polaBeatData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="beat" stroke="rgba(255,255,255,0.7)" />
                  <YAxis stroke="rgba(255,255,255,0.7)" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.8)', 
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="intensitas" fill="#f59e0b" name="Intensitas %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-xl">
              <h4 className="font-semibold mb-3 text-primary">Rumus SPLDV Gerakan</h4>
              <div className="bg-white/10 p-3 rounded-lg text-center mb-2">
                <span className="text-lg font-mono">2x + 3y = 24</span><br />
                <span className="text-lg font-mono">x + 2y = 15</span>
              </div>
              <p className="text-xs text-muted-foreground">
                x = gerakan sayap, y = gerakan kaki dalam periode waktu tertentu
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-4 rounded-xl">
              <h4 className="font-semibold mb-3 text-secondary">Rumus Lintasan Parabolik</h4>
              <div className="bg-white/10 p-3 rounded-lg text-center mb-2">
                <span className="text-lg font-mono">y = -0.1x² + 2x + 1</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Lintasan terbang burung dalam gerakan Manuk Dadali
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-xl">
              <h4 className="font-semibold mb-3 text-accent">Rumus Frekuensi Sayap</h4>
              <div className="bg-white/10 p-3 rounded-lg text-center mb-2">
                <span className="text-lg font-mono">f = 1/T = 1/10 = 0.1 Hz</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Frekuensi kepakan sayap per detik dalam tarian
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery: ipa1.jpeg sampai ipa3.jpeg dari public folder */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[1, 2, 3].map((num) => (
          <div key={num} className="glass-content">
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border-2 border-dashed border-primary/20 flex items-center justify-center overflow-hidden relative mb-4">
              <img
                src={`/ipa${num}.jpeg`}
                alt={`Foto IPA ${num}`}
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

      {/* Learning Summary */}
      <div className="glass-content">
        <h2 className="text-2xl font-bold text-center mb-8 text-primary">
          Kesimpulan Pembelajaran
        </h2>
        
        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 p-8 rounded-xl">
          <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6">
            Tari Manuk Dadali menunjukkan bahwa <strong className="text-primary">matematika hadir di mana-mana</strong>, 
            bahkan dalam seni tradisional. Setiap gerakan sayap, ritme, dan pola dalam tari dapat dijelaskan 
            menggunakan konsep matematis seperti SPLDV, grafik, dan geometri.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="font-semibold text-secondary mb-3">📚 Konsep yang Dipelajari:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• SPLDV (Sistem Persamaan Linear Dua Variabel)</li>
                <li>• Grafik dan chart analisis data</li>
                <li>• Persamaan parabolik dan lintasan</li>
                <li>• Frekuensi dan periode kepakan sayap</li>
                <li>• Geometri formasi burung</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-accent mb-3">🎯 Manfaat Pembelajaran:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Memahami aplikasi matematika dalam kehidupan</li>
                <li>• Mengembangkan pemikiran logis</li>
                <li>• Menghargai keteraturan dalam seni</li>
                <li>• Melatih kemampuan analisis</li>
                <li>• Menghubungkan budaya dengan sains</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="font-semibold text-lg text-primary">
              "Matematika adalah bahasa universal yang mengatur keindahan dalam setiap gerakan"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarianAngka;