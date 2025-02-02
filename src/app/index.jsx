import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Git } from '../pages/Git';
import { Construction } from '../pages/Construction';
import { Terms } from '../pages/Terms';
import { Privacy } from '../pages/Privacy';
import { Windows } from '../pages/Windows';
import { Linux } from '../pages/Linux';
import { Mac } from '../pages/Mac';
import { Vscode } from '../pages/Vscode';
import { Vim } from '../pages/Vim';
import { Contact } from '../pages/Contact';
import { useState } from 'react';
import { Info } from '../components/Info';

export const App = () => {
  const [search, setSearch] = useState('');



  return (
    <BrowserRouter>
    <div className="page">
      <Header setSearch={setSearch}/>
      <main>
      <Sidebar />
      <section className="content">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/git' element={<Git search={search}/>} />
        <Route path='/windows' element={<Windows search={search}/>} />
        <Route path='/linux' element={<Linux search={search}/>} />
        <Route path='/mac' element={<Mac search={search}/>} />
        <Route path='/vscode' element={<Vscode search={search}/>} />
        <Route path='/vim' element={<Vim search={search}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='*' element={<Construction />} />
      </Routes>

      </section>
      <Info />
      </main>
      <Footer />
    </div>
    </BrowserRouter>
  );
};