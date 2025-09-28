import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="glass-content text-center max-w-2xl mx-auto">
      <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-3xl">🔍</span>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-primary">404</h1>
      <p className="text-xl text-muted-foreground mb-6">Halaman yang Anda cari tidak ditemukan</p>
      <p className="text-muted-foreground mb-8">
        Mungkin halaman telah dipindahkan atau URL yang dimasukkan salah.
      </p>
      <a 
        href="/" 
        className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
};

export default NotFound;
