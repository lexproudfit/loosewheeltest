import Link from 'next/link';
import { Logo } from './Logo';
export function Footer(){return <footer><div className="footer-top"><Link href="/" className="footer-brand" aria-label="Loose Wheel home"><Logo/><span>Good coffee. Wherever life takes you.</span></Link><div className="footer-links"><Link href="/about">Our story</Link><Link href="/services">What we do</Link><Link href="/contact">Say hello →</Link></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Loose Wheel Coffee</span><span>Roaming Ogden, Utah · Made for the everyday</span></div></footer>}
