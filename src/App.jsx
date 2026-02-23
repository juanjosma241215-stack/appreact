import { Header } from './features/layout/components/Header';
import { Content } from './features/layout/components/content';
import { Footer } from './features/layout/components/Footer';
import { Article } from './features/layout/components/Article';
import { Props } from './features/layout/components/Props';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <BrowserRouter basename={isProd ? '/appreact' : ''}>
      <div className="container-fluid p-0 d-flex flex-column min-vh-100 bg-light">
        <Header />
        <main className="flex-grow-1">
          <div className="container py-4"> 
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/inicio" element={<Content />} />
              <Route path="/articles" element={<Article />} />
              <Route path="/props" element={<Props />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;