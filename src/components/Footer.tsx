const Footer = () => {
  return (
    <footer className="glass-nav mt-20 mx-4 mb-4 px-6 py-6">
      <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="font-semibold text-primary mb-2">Kokurikuler 9H - 1</h3>
          <p className="text-sm text-muted-foreground">
            Mendokumentasikan keragaman budaya Indonesia melalui seni, bahasa, dan sains.
          </p>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Mata Pelajaran</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>Informatika</li>
            <li>PKN</li>
            <li>Bahasa Indonesia</li>
            <li>Seni Budaya</li>
            <li>PJOK</li>
            <li>IPS</li>
            <li>Bahasa Inggris</li>
            <li>PAI</li>
            <li>IPA</li>
            <li>Matematika</li>
            <li>Bahasa Sunda</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Kelas 9H Kelompok 1</h4>
          <p className="text-sm text-muted-foreground">
            Kolaborasi lintas mata pelajaran untuk melestarikan dan memahami budaya Indonesia.
          </p>
        </div>
      </div>
      
      <div className="border-t border-glass-border mt-6 pt-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kokurikuler 9H - 1. Dibuat dengan ❤️ untuk Indonesia. by{' '}
          <a 
            href="https://instagram.com/semestalabs.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition-colors font-medium"
          >
            SemestaLabs
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;