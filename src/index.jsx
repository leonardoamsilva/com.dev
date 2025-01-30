import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Git } from './pages/Git';
import { Construction } from './pages/Construction';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';
import { Windows } from './pages/Windows';
import { Linux } from './pages/Linux';
import { Mac } from './pages/Mac';
import { Vscode } from './pages/Vscode';
import { Vim } from './pages/Vim';
import { Contact } from './pages/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="page">
      <Header />
      <main>
      <Sidebar />
      <section className="content">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/git' element={<Git />} />
        <Route path='/windows' element={<Windows />} />
        <Route path='/linux' element={<Linux />} />
        <Route path='/mac' element={<Mac />} />
        <Route path='/vscode' element={<Vscode />} />
        <Route path='/vim' element={<Vim />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='*' element={<Construction />} />
      </Routes>

      </section>
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  </React.StrictMode>
);

