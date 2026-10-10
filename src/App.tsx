import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SiteShell } from './components/layout/SiteShell';

const NotFound = () => (
  <SiteShell>
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-display mb-4">404</h1>
      <p className="text-(--color-stone) mb-8">Halaman tidak ditemukan.</p>
      <a href="/" className="text-(--color-ink) border-b border-(--color-ink) pb-1">Kembali ke Beranda</a>
    </div>
  </SiteShell>
);

const DummyCollections = () => (
  <SiteShell>
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-(--color-paper) pt-24">
      <h1 className="text-4xl font-display mb-4">Koleksi (Dalam Pengembangan)</h1>
      <p className="text-(--color-stone) mb-8">Halaman katalog akan segera hadir pada fase P1.</p>
    </div>
  </SiteShell>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<DummyCollections />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
