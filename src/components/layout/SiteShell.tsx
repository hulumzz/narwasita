import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { getSiteContent } from '../../content/site';
export const SiteShell=({children}:{children:React.ReactNode})=>{
 const [scrolled,setScrolled]=useState(false);const [open,setOpen]=useState(false);
 const {pathname,hash}=useLocation();const onHome=pathname==='/';
 const hasStores=Object.values(getSiteContent().stores).some(s=>s?.enabled&&s.url);
 const anchor=(id:string)=>onHome?'#'+id:'/#'+id;
 useEffect(()=>{const handler=()=>setScrolled(window.scrollY>64);handler();window.addEventListener('scroll',handler,{passive:true});return()=>window.removeEventListener('scroll',handler)},[]);
 useEffect(()=>{setOpen(false);if(hash){const id=decodeURIComponent(hash.slice(1));requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:'instant'}));}else{window.scrollTo(0,0)}},[pathname,hash]);
 useEffect(()=>{const handler=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',handler);return()=>window.removeEventListener('keydown',handler)},[]);
 useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open]);
 const lightText=onHome&&!scrolled&&!open;
 return <div className="site-shell">
  <a href="#main-content" className="skip-link">Lewati navigasi</a>
  <header className={'site-header '+(lightText?'site-header--over-image':'site-header--solid')}>
   <div className="site-header__inner">
    <Link to="/" className="site-header__logo" aria-label="Narwasita beranda">NARWASITA<span aria-hidden="true">.</span></Link>
    <nav className="site-header__nav" aria-label="Navigasi utama">
     <Link to="/collections">Koleksi</Link><a href={anchor('cerita')}>Cerita</a><a href={anchor('keaslian')}>Keaslian</a>
     {hasStores&&<a href={anchor('toko-resmi')}>Toko resmi</a>}
    </nav>
    <button className="site-header__toggle" type="button" aria-expanded={open} aria-controls="mobile-nav"
     aria-label={open?'Tutup menu':'Buka menu'} onClick={()=>setOpen(!open)}>{open?<X size={24}/>:<Menu size={24}/>}</button>
   </div>
  </header>
  {open&&<div className="site-menu" id="mobile-nav">
   <nav className="site-menu__nav" aria-label="Navigasi seluler">
    <Link onClick={()=>setOpen(false)} to="/collections">Koleksi</Link>
    <a onClick={()=>setOpen(false)} href={anchor('cerita')}>Cerita</a>
    <a onClick={()=>setOpen(false)} href={anchor('keaslian')}>Keaslian</a>
    {hasStores&&<a onClick={()=>setOpen(false)} href={anchor('toko-resmi')}>Toko resmi</a>}
   </nav>
  </div>}
  <main id="main-content">{children}</main>
  <footer className="site-footer"><div className="site-footer__inner">
   <div className="site-footer__top"><div><h2>NARWASITA<span>.</span></h2><p>Cerita dari banyak tempat, dibawa ke keseharian.</p></div>
    <nav aria-label="Navigasi footer"><Link to="/collections">Koleksi</Link><a href={anchor('cerita')}>Cerita</a><a href={anchor('keaslian')}>Keaslian</a>{hasStores&&<a href={anchor('toko-resmi')}>Toko resmi</a>}</nav>
   </div>
   <div className="site-footer__bottom"><span>© {new Date().getFullYear()} Narwasita</span><span>Dari Nusantara, untuk hari ini.</span></div>
  </div></footer>
 </div>;
};