 'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
const links = [{href:'/about',label:'Tentang Sarau'},{href:'/services',label:'Pengalaman'},{href:'/packages',label:'Paket'},{href:'/gallery',label:'Galeri'},{href:'/blog',label:'Journal'}]
export default function Navbar(){
 const [open,setOpen]=useState(false)
 const [scrolled,setScrolled]=useState(false)
 const pathname=usePathname()
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>30);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[])
 useEffect(()=>{setOpen(false)},[pathname])
 useEffect(()=>{if(!open)return;const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[open])
 return <header className={`sl-nav ${pathname==='/'&&!scrolled&&!open?'over-hero':''}`}><div className="sl-nav-inner sl-wrap"><Link href="/" aria-label="Sarau Luxury — Beranda" className="sl-brand">SARAU<span>LUXURY · EVENT & EXPERIENCE</span></Link><nav className="sl-desktop-nav" aria-label="Navigasi utama">{links.map(l=><Link key={l.href} href={l.href} aria-current={pathname===l.href?'page':undefined}>{l.label}</Link>)}</nav><Link href="/booking" className="sl-nav-cta">Let’s plan an event <ArrowUpRight size={16}/></Link><button className="sl-menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open?'Tutup menu':'Buka menu'}>{open?<X/>:<Menu/>}</button></div>{open&&<nav id="mobile-navigation" className="sl-mobile-nav" aria-label="Navigasi seluler">{links.map(l=><Link key={l.href} href={l.href} onClick={()=>setOpen(false)}>{l.label}<ArrowUpRight size={16}/></Link>)}<Link href="/clients" onClick={()=>setOpen(false)}>Klien</Link><Link href="/contact" onClick={()=>setOpen(false)}>Kontak</Link><Link href="/booking" onClick={()=>setOpen(false)}>Rencanakan acara <ArrowUpRight size={16}/></Link></nav>}</header>
}
