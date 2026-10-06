import Link from 'next/link';
export function Photo({src,alt,className=''}:{src:string;alt:string;className?:string}){return <div className={`photo ${className}`} role="img" aria-label={alt} style={{backgroundImage:`url("${src}")`}}/>}
export const coffeePhoto='/coffee.svg';
export const cafePhoto='/community.svg';
export const pourPhoto='/brewing.svg';
export function CTA(){return <section className="cta"><div><p className="eyebrow">LET’S MAKE SOMETHING GOOD</p><h2>Your next gathering.<br/>Our next stop.</h2></div><div><p>A little coffee brings people together.<br/>Let’s bring Loose Wheel to you.</p><Link href="/contact" className="button light">Get in touch <span>→</span></Link></div></section>}
export function PageIntro({label,title,children}:{label:string;title:string;children:React.ReactNode}){return <section className="page-intro"><p className="eyebrow">{label}</p><h1>{title}</h1><p className="intro-copy">{children}</p></section>}
