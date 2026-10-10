import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const SiteShell = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-(--color-paper)">
      <header 
        className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-(--color-paper)/90 backdrop-blur-md border-b border-(--color-stone)/20 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-[1440px]">
          <Link to="/" className="text-2xl font-display font-semibold tracking-tight z-50 relative">
            NARWASITA
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/collections" className="hover:text-(--color-copper) transition-colors">Koleksi</Link>
            <a href="#cerita" className="hover:text-(--color-copper) transition-colors">Cerita</a>
            <a href="#toko-resmi" className="hover:text-(--color-copper) transition-colors">Toko Resmi</a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 relative p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-(--color-paper) pt-24 px-6">
          <nav className="flex flex-col gap-6 text-2xl font-display">
            <Link to="/collections" onClick={() => setMobileMenuOpen(false)}>Koleksi</Link>
            <a href="#cerita" onClick={() => setMobileMenuOpen(false)}>Cerita</a>
            <a href="#toko-resmi" onClick={() => setMobileMenuOpen(false)}>Toko Resmi</a>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-(--color-ink) text-(--color-white) py-16 px-6 md:px-12 mt-24">
        <div className="container mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-6xl font-display tracking-tight mb-6">NARWASITA</h2>
            <p className="text-(--color-stone) max-w-sm">Berangkat dari ragam cerita Nusantara, dihadirkan untuk keseharian hari ini.</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-(--color-stone) mb-4">Eksplorasi</h3>
            <ul className="space-y-3">
              <li><Link to="/collections" className="hover:text-(--color-copper) transition-colors">Koleksi</Link></li>
              <li><a href="#cerita" className="hover:text-(--color-copper) transition-colors">Cerita Kami</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-(--color-stone) mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-(--color-stone)">
              <li><a href="https://instagram.com/narwasita" target="_blank" rel="noopener noreferrer" className="hover:text-(--color-white) transition-colors">Instagram</a></li>
              <li><a href="mailto:partner@narwasita.id" className="hover:text-(--color-white) transition-colors">Kemitraan</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto max-w-[1440px] mt-16 pt-8 border-t border-(--color-white)/10 text-sm text-(--color-stone) flex flex-col md:flex-row justify-between">
          <p>&copy; {new Date().getFullYear()} Narwasita. Semua hak cipta dilindungi.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy">Privasi</Link>
            <Link to="/terms">Syarat & Ketentuan</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
