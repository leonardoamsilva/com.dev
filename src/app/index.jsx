import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { Sidebar } from '../components/layout/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Git } from '../pages/platforms/Git';
import { Construction } from '../pages/Construction';
import { Terms } from '../pages/Terms';
import { Privacy } from '../pages/Privacy';
import { Prompt } from '../pages/platforms/Prompt';
import { Linux } from '../pages/platforms/Linux';
import { Mac } from '../pages/platforms/Mac';
import { Vscode } from '../pages/platforms/Vscode';
import { Vim } from '../pages/platforms/Vim';
import { Contact } from '../pages/Contact';
import { useState } from 'react';
import { Info } from '../components/common/Info';
import { Faq } from '../pages/Faq';
import { PowerShell } from '../pages/platforms/PowerShell';

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
        <Route path='/prompt' element={<Prompt search={search}/>} />
        <Route path='/powershell' element={<PowerShell search={search}/>} />
        <Route path='/linux' element={<Linux search={search}/>} />
        <Route path='/mac' element={<Mac search={search}/>} />
        <Route path='/vscode' element={<Vscode search={search}/>} />
        <Route path='/vim' element={<Vim search={search}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<Faq />} />
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