import { makeMetadata } from '@/lib/seo';
export const metadata = makeMetadata('About', 'Shillong ITech is a digital solutions company serving Shillong and beyond.', '/about');
export default function AboutPage(){return <section className='container-ui py-14'><h1 className='text-3xl font-bold'>About Shillong ITech</h1><p className='mt-4 max-w-3xl'>We are a digital solutions company helping businesses build websites, apps, systems, automation, and visibility with practical execution and affordable delivery.</p></section>}
