import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/Cards';
import { makeMetadata } from '@/lib/seo';
export const metadata = makeMetadata('Projects', 'Selected project work by Shillong ITech.', '/projects');
export default function ProjectsPage(){return <section className='container-ui py-14'><h1 className='text-3xl font-bold'>Projects</h1><div className='mt-6 grid gap-4 md:grid-cols-2'>{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></section>}
