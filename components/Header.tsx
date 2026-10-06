'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
export function Header() {
 const [open,setOpen]=useState(false); const path=usePathname();
 return <header className="header"><Link href="/" className="brand" aria-label="Loose Wheel home"><span className="brand-symbol">✳︎</span><span>LOOSE WHEEL<small>COFFEE • OGDEN, UTAH</small></span></Link><button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?'Close ✕':'Menu ☰'}</button><nav id="navigation" className={open?'navigation open':'navigation'} aria-label="Main navigation">{[['/','Home'],['/about','About'],['/services','Services'],['/contact','Contact']].map(([href,label])=><Link key={href} href={href} aria-current={path===href?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/contact" onClick={()=>setOpen(false)}>Book the truck <span>→</span></Link></nav></header>
}
