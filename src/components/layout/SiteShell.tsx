import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const SiteShell = ({children}:{children:React.ReactNode})=>{
 const [scrolled,setScrolled]=useState(false);
 const [open,setOpen]=useState(false);
 const {pathname}=useLocation();
 useEffect(()=>{const handle=()=>setScrolled(window.scrollY>64);handle();window.addEventListener('scroll',handle,{passive:true});return()=>window.removeEventListener('scroll',handle)},[]);
 useEffect(()=>{setOpen(false);window.scrollTo(0,0)},[pathname]);
 useEffect(()=>{const esc=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};document.addEventListener('keydown',esc);return()=>document.removeEventListener('keydown',esc)},[]);
 useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open]);
 const onHome=pathname==='/';
 const dark=!scrolled&&onHome&&!open;
 const a=(id:string)=>onHome?`#${id}`:`/#${id}`;
 return <div className="min-h-screen flex flex-col bg-(--color-paper)">
  <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:z-[100] focus:bg-white focus:p-3">Lewati navigasi</a>
  <header className={`fixed z-50 top-0 inset-x-0 transition-colors duration-300 ${dark?'text-white bg-transparent':'text-(--color-ink) bg-(--color-paper)/95 backdrop-blur-md border-b border-black/10'}`}>
   <div className="mx-auto max-w-[1440px] px-5 md:px-12 h-[76px] md:h-[92px] flex items-center justify-between">
    <Link to="/" className="font-display text-xl md:text-2xl font-extrabold tracking-[-.075em] relative z-50">NARWASITA<span className="text-(--color-copper)">.</span></Link>
    <nav className="hidden md:flex gap-10 text-[.85rem] font-medium" aria-label="Navigasi utama"><Link to="/collections" className="hover:opacity-60">Koleksi</Link><a href={a('cerita')} className="hover:opacity-60">Cerita</a><a href={a('keaslian')} className="hover:opacity-60">Keaslian</a><a href={a('toko-resmi')} className="hover:opacity-60">Toko resmi</a></nav>
    <button className="md:hidden relative z-50 p-3 -mr-3" aria-label={open?'Tutup menu':'Buka menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(v=>!v)}>{open?<X size={25}/>:<Menu size={25}/>}</button>
   </div>
  </header>
  {open&&<div id="mobile-navigation" className="fixed inset-0 z-40 bg-(--color-paper) pt-32 px-6 text-(--color-ink) md:hidden"><nav aria-label="Navigasi seluler" className="flex flex-col gap-7 text-3xl font-display font-semibold"><Link onClick={()=>setOpen(false)} to="/collections">Koleksi</Link><a onClick={()=>setOpen(false)} href={a('cerita')}>Cerita</a><a onClick={()=>setOpen(false)} href={a('keaslian')}>Keaslian</a><a onClick={()=>setOpen(false)} href={a('toko-resmi')}>Toko resmi</a></nav></div>}
  <main id="main-content" className="flex-grow">{children}</main>
  <footer className="bg-(--color-ink) text-white pt-20 md:pt-32 pb-8 px-5 md:px-12">
   <div className="max-w-[1440px] mx-auto"><div className="flex flex-col md:flex-row justify-between gap-10 pb-16"><div><h2 className="text-5xl md:text-8xl font-display font-bold tracking-[-.09em]">NARWASITA<span className="text-(--color-copper)">.</span></h2><p className="text-white/60 max-w-sm mt-5 leading-relaxed">Cerita dari banyak tempat, dibawa ke keseharian.</p></div><nav className="flex flex-col gap-4 text-sm md:pt-7"><Link to="/collections">Koleksi</Link><a href={a('cerita')}>Cerita</a><a href={a('keaslian')}>Keaslian</a><a href={a('toko-resmi')}>Toko resmi</a></nav></div><div className="pt-6 border-t border-white/20 text-xs text-white/55 flex justify-between flex-wrap gap-3"><span>© {new Date().getFullYear()} Narwasita.</span><span>Dirancang untuk dikenakan hari ini.</span></div></div>
  </footer>
 </div>
};