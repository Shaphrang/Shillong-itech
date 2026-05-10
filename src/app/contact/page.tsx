import { site } from '@/data/site';
import { makeMetadata } from '@/lib/seo';
export const metadata = makeMetadata('Contact', 'Contact Shillong ITech for websites, apps, and digital systems.', '/contact');
export default function Contact(){return <section className='container-ui py-14'><h1 className='text-3xl font-bold'>Contact Us</h1><p className='mt-4'>Phone: <a className='text-forest' href={`tel:${site.phone}`}>{site.phone}</a></p><p>WhatsApp: <a className='text-forest' href={`https://wa.me/${site.whatsapp.replace(/\D/g,'')}`}>{site.whatsapp}</a></p><p>Email: <a className='text-forest' href={`mailto:${site.email}`}>{site.email}</a></p><p>Location: {site.location}</p></section>}
