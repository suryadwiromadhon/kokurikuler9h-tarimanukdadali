import manukDadaliBanner from '@/assets/manuk-dadali-banner.jpg';

const EnglishCorner = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 fade-in">
      {/* Header */}
      <div className="glass-content text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          English Corner
        </h1>
        <p className="text-xl text-muted-foreground">
          Indonesian Cultural Heritage in International Perspective
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Article */}
        <div className="lg:col-span-2">
          <div className="glass-content">
            <img 
              src={manukDadaliBanner} 
              alt="Manuk Dadali Dance Performance"
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Manuk Dadali Dance: A Cultural Treasure from West Java
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="leading-relaxed mb-6">
                <strong className="text-primary">Manuk Dadali</strong> is a super famous folk song from West Java. 
                The song describes the beauty and the pride people have for the garuda bird, which is the national 
                symbol of Indonesia. In the song, the garuda is pictured as a powerful and majestic bird, with strong 
                wings, flying high up in the sky.
              </p>
              
              <p className="leading-relaxed mb-6">
                In <strong className="text-primary">Manuk Dadali,</strong> the garuda isn't just a regular bird; it's 
                also a symbol of spirit, bravery, and freedom. People often sing this song with a cheerful and energetic tune, 
                so it makes anyone who listens to it feel proud to be Sundanese and also proud to be Indonesian.
              </p>
              
              <p className="leading-relaxed mb-6">
                Besides that, <strong className="text-primary">Manuk Dadali</strong> is also often taught in schools, 
                sung at cultural performances, and played during traditional ceremonies. Even though the lyrics are 
                <strong className="text-secondary"> simple, they're full of meaning.</strong> That's why this song has really 
                stuck in people's hearts as one of the cultural identities of West Java.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="glass-content">
            <h3 className="text-xl font-bold mb-4 text-primary">Key Features</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Origin:</strong> West Java, Indonesia (1960s)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Style:</strong> Graceful, wing-like movements</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Music:</strong> Traditional Sundanese gamelan</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Costume:</strong> Wing-like accessories and patriotic colors</span>
              </li>
            </ul>
          </div>

          <div className="glass-content">
            <h3 className="text-xl font-bold mb-4 text-primary">Cultural Significance</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="bg-primary/5 p-3 rounded-lg">
                <strong className="text-primary">Community Bonding</strong>
                <p className="mt-1">Strengthens social connections within communities</p>
              </div>
              <div className="bg-secondary/5 p-3 rounded-lg">
                <strong className="text-secondary">Cultural Preservation</strong>
                <p className="mt-1">Maintains traditional values for future generations</p>
              </div>
              <div className="bg-accent/5 p-3 rounded-lg">
                <strong className="text-accent">Artistic Expression</strong>
                <p className="mt-1">Provides platform for creative and emotional expression</p>
              </div>
            </div>
          </div>

          <div className="glass-content">
            <h3 className="text-xl font-bold mb-4 text-primary">International Recognition</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Manuk Dadali has gained international attention as a symbol of Indonesian pride and 
              cultural identity. It has been performed in cultural festivals worldwide, serving 
              as an ambassador of Indonesian heritage and promoting patriotic values globally.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass-content">
          <h3 className="text-2xl font-bold mb-4 text-primary">Learning Opportunities</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Students from around the world can learn about Indonesian culture through Manuk Dadali dance. 
            This art form offers valuable insights into Indonesian national identity, patriotic values, 
            and the importance of preserving cultural heritage in our modern world.
          </p>
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
            <p className="text-sm font-medium text-primary">
              "Dance is the hidden language of the soul" - Through Manuk Dadali, we discover the pride of Indonesia.
            </p>
          </div>
        </div>

        <div className="glass-content">
          <h3 className="text-2xl font-bold mb-4 text-primary">Educational Value</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
              Enhances cultural awareness and appreciation
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>
              Develops understanding of traditional music
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
              Promotes respect for diversity and heritage
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
              Encourages artistic and creative expression
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EnglishCorner;