import Link from 'next/link';
import { site } from '@/data/site';
export function Footer(){return <footer className="mt-16 border-t bg-white"><div className="container-ui py-10 text-sm"><p className="font-semibold">{site.name}</p><p>{site.location}</p><div className="mt-4 flex gap-4"><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></div></div></footer>}
