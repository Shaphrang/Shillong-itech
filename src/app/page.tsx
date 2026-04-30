import Link from 'next/link';
import { makeMetadata } from '@/lib/seo';
import { site } from '@/data/site';
import { JsonLd } from '@/components/JsonLd';

export const metadata = makeMetadata('Digital Solutions Company in Shillong', site.description, '/');

const services = [
  { label: 'Web Development', icon: '🌐', active: true },
  { label: 'Flutter Apps', icon: '⚡' },
  { label: 'Booking Systems', icon: '🗓️' },
  { label: 'Admin Dashboards', icon: '📊' },
  { label: 'Automation', icon: '⚙️' },
  { label: 'APIs & Integrations', icon: '🧩' },
  { label: 'UI/UX Design', icon: '✨' },
];

const featuredProjects = [
  {
    id: '01',
    title: 'Business Portfolio Website',
    desc: 'Premium conversion-focused company website with editable CMS sections and lead capture flow.',
    tags: ['Next.js', 'Tailwind CSS', 'SEO'],
  },
  {
    id: '02',
    title: 'Booking Management System',
    desc: 'Centralized booking operations with slots, reminders, and status reports.',
  },
  {
    id: '03',
    title: 'SHINE Survey App',
    desc: 'Field-data collection app with survey sync and real-time reporting dashboard.',
  },
  {
    id: '04',
    title: 'LSC Admin Platform',
    desc: 'Operations dashboard for teams, approvals, and analytics in one place.',
  },
];

const benefits = [
  {
    title: 'Flexible pricing',
    text: 'Plans that fit your needs and scale with your business goals.',
    icon: '🏷️',
  },
  {
    title: 'Affordable solutions',
    text: 'High-quality development without enterprise-level overhead.',
    icon: '💼',
  },
  {
    title: 'Built around requirements',
    text: 'Every product is tailored to your workflow and outcomes.',
    icon: '👥',
  },
];

export default function Home() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    description: site.description,
    areaServed: 'Shillong, Meghalaya',
    telephone: site.phone,
    email: site.email,
  };

  return (
    <>
      <JsonLd data={businessSchema} />

      <section className="bg-[#101214] pb-20 pt-5 sm:pt-8">
        <div className="container-ui">
          <div className="overflow-hidden rounded-[2rem] bg-[#f5f0e6] p-4 shadow-2xl shadow-black/20 sm:rounded-[2.8rem] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-content-center rounded-xl bg-emerald-900/10 text-3xl font-semibold text-emerald-800">AK</div>
                    <div>
                      <p className="text-2xl font-semibold tracking-tight text-zinc-900">Aiban Kharbuli</p>
                      <p className="text-zinc-700">Freelance Developer</p>
                    </div>
                  </div>
                  <button className="grid h-14 w-14 place-content-center rounded-full bg-[#111315] text-white transition hover:scale-105" aria-label="Open menu">
                    <span className="text-2xl">☰</span>
                  </button>
                </div>

                <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Available for new projects
                </p>

                <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
                  Websites.
                  <br />
                  Apps.
                  <br />
                  <span className="text-emerald-800">Impact.</span>
                </h1>

                <p className="mt-6 max-w-xl text-lg text-zinc-700">
                  I build fast, beautiful, and scalable digital solutions that help businesses grow.
                </p>
                <p className="mt-6 inline-flex items-center gap-2 text-zinc-700"><span>📍</span> Shillong, Meghalaya</p>
              </div>

              <div className="relative flex min-h-[360px] items-end rounded-3xl bg-gradient-to-br from-slate-100 via-zinc-200 to-slate-300 p-4">
                <div className="absolute right-4 top-4 rounded-full border-2 border-orange-400 bg-white px-4 py-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700">
                  Clean code<br />Real impact
                </div>
                <div className="w-full rounded-2xl bg-[#171a1d] p-4 text-white shadow-lg">
                  <div className="mb-3 h-2 w-24 rounded-full bg-emerald-500/80" />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-zinc-800 p-3"><div className="h-20 rounded-lg bg-zinc-700" /></div>
                    <div className="rounded-xl bg-zinc-800 p-3"><div className="h-20 rounded-lg bg-emerald-900/50" /></div>
                  </div>
                  <div className="mt-3 rounded-xl bg-zinc-800 p-3"><div className="h-24 rounded-lg bg-zinc-700" /></div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <Link href="/contact" className="rounded-3xl bg-emerald-800 p-5 text-white transition hover:-translate-y-0.5">
                <p className="flex items-center gap-2 text-2xl font-semibold"><span>💼</span> Hire Me / Start a Project</p>
                <p className="mt-1 text-white/80">Let&apos;s build something great</p>
              </Link>
              <a href={`tel:${site.phone}`} className="rounded-3xl bg-[#171a1d] p-5 text-white transition hover:-translate-y-0.5">
                <p className="flex items-center gap-2 text-2xl font-semibold"><span>📞</span> Call</p>
                <p className="mt-1 text-white/70">Tap to call</p>
              </a>
              <a href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`} className="rounded-3xl bg-[#171a1d] p-5 text-white transition hover:-translate-y-0.5">
                <p className="flex items-center gap-2 text-2xl font-semibold"><span>🟢</span> WhatsApp</p>
                <p className="mt-1 text-white/70">Chat on WhatsApp</p>
              </a>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-semibold text-white">What I Do</h2>
            <div className="mt-4 flex gap-3 overflow-x-auto pb-3">
              {services.map((item) => (
                <article key={item.label} className={`min-w-[168px] rounded-3xl border p-5 ${item.active ? 'border-white bg-white text-zinc-900' : 'border-white/10 bg-white/5 text-zinc-200'}`}>
                  <span className="text-2xl">{item.icon}</span>
                  <p className="mt-4 text-lg font-medium">{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-300">Featured Work</p>
            <h2 className="mt-2 font-serif text-4xl text-white">Projects I&apos;m proud of</h2>
            <div className="mt-5 grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
              <article className="rounded-[1.75rem] border border-orange-300/60 bg-gradient-to-b from-zinc-800 to-zinc-950 p-5 text-white">
                <div className="relative h-64 rounded-2xl bg-gradient-to-br from-slate-500 via-zinc-700 to-zinc-900" />
                <p className="mt-4 text-sm text-emerald-300">{featuredProjects[0].id}</p>
                <h3 className="mt-1 text-2xl font-semibold">{featuredProjects[0].title}</h3>
                <p className="mt-2 text-zinc-300">{featuredProjects[0].desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">{featuredProjects[0].tags.map((t) => <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-200">{t}</span>)}</div>
                <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-medium text-zinc-900">View project <span>↗</span></button>
              </article>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {featuredProjects.slice(1).map((project) => (
                  <article key={project.id} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-white">
                    <div className="h-24 rounded-xl bg-gradient-to-br from-zinc-500 to-zinc-800" />
                    <p className="mt-3 text-sm text-orange-300">{project.id}</p>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-1 text-sm text-zinc-300">{project.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {benefits.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-white">
                <span className="text-2xl text-orange-300">{item.icon}</span>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-zinc-300">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-3 md:grid-cols-3">
            <Link href="/contact" className="rounded-2xl bg-emerald-800 px-5 py-4 text-center text-lg font-semibold text-white">Start a Project</Link>
            <a href={`tel:${site.phone}`} className="rounded-2xl bg-zinc-900 px-5 py-4 text-center text-lg font-semibold text-white">Call</a>
            <a href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`} className="rounded-2xl bg-emerald-700 px-5 py-4 text-center text-lg font-semibold text-white">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
