import { services } from '@/data/services';
import { ServiceCard } from '@/components/Cards';
import { makeMetadata } from '@/lib/seo';
export const metadata = makeMetadata('Services', 'Website, app, software, automation and digital visibility services in Shillong.', '/services');
export default function ServicesPage(){return <section className='container-ui py-14'><h1 className='text-3xl font-bold'>Services</h1><div className='mt-6 grid gap-4 md:grid-cols-2'>{services.map(s=><ServiceCard key={s.slug} service={s}/>)}</div></section>}
