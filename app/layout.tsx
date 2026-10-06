import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
export const metadata:Metadata={title:{default:'Loose Wheel Coffee | Ogden, Utah',template:'%s | Loose Wheel Coffee'},description:'A coffee truck serving Ogden, Utah. Thoughtful coffee, warm connections, and a little room to roam.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/></body></html>}
