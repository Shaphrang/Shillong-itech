// src/app/page.tsx

import Link from 'next/link';

import { JsonLd } from '@/components/JsonLd';
import { makeMetadata } from '@/lib/seo';
import { site } from '@/data/site';
import { services } from '@/data/services';
import { projects } from '@/data/projects';

export const metadata = makeMetadata(
  'Shillong ITech',
  site.description,
  '/',
);

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

      <main className="min-h-screen bg-[#101214] text-white">
        {/* BACKGROUND */}

        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[-10%] h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="absolute bottom-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-3 pb-10 pt-[84px] sm:px-5">

          {/* HERO */}
          <section
            id="home"
            className="grid gap-4">
            <div className="relative overflow-hidden rounded-[2rem] border border-orange-500/10 bg-[#181c20]">
              {/* BACKGROUND */}

              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10" />

              {/* BLURS */}

              <div className="absolute left-[-100px] top-[-100px] h-[240px] w-[240px] rounded-full bg-orange-500/10 blur-3xl" />

              <div className="absolute bottom-[-100px] right-[-100px] h-[240px] w-[240px] rounded-full bg-red-500/10 blur-3xl" />

              {/* CONTENT */}

              <div className="relative grid gap-5 lg:grid-cols-[1fr_250px]">
                {/* LEFT */}

                <div className="p-5 sm:p-6">
                  {/* MINI STATUS */}

                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/10 bg-orange-500/10 px-3 py-2 backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />

                    <p className="text-[10px] uppercase tracking-[0.18em] text-orange-200">
                      Available for work
                    </p>
                  </div>

                  {/* TITLE */}

                  <div className="mt-5">
                    <h1 className="text-[2.4rem] font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-[3.5rem]">
                      Websites.
                      <br />
                      Booking Systems.
                      <br />
                      Dashboard.
                    </h1>

                  <p className="mt-5 max-w-md text-sm leading-7 text-zinc-400">
                    We create websites, apps, booking systems, and admin
                    dashboards for homestays, resorts, restaurants, cafes,
                    spas, tourism, and growing businesses.
                  </p>
                  </div>

                  {/* ACTIONS */}

                  <div className="mt-5 flex gap-3">
                    {/* WHATSAPP */}

                    <a
                      href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`}
                      className="group relative flex flex-1 items-center justify-between overflow-hidden rounded-[1.3rem] border border-[#25D366]/10 bg-[#1b1f1d] px-4 py-3 transition duration-300 hover:border-[#25D366]/20 hover:bg-[#202522]"
                    >
                      {/* GLOW */}

                      <div className="absolute right-[-30px] top-[-30px] h-[90px] w-[90px] rounded-full bg-[#25D366]/10 blur-2xl" />

                      {/* CONTENT */}

                      <div className="relative flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25D366]/15 text-lg">
                          💬
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-white">
                            WhatsApp
                          </p>

                          <p className="text-[11px] text-zinc-500">
                            Quick chat
                          </p>
                        </div>
                      </div>

                      {/* STATUS */}

                      <div className="relative hidden h-2.5 w-2.5 rounded-full bg-[#25D366] sm:block" />
                    </a>

                    {/* CALL */}

                    <a
                      href={`tel:${site.phone}`}
                      className="group flex items-center gap-3 rounded-[1.3rem] border border-white/10 bg-white/[0.03] px-4 py-3 transition duration-300 hover:bg-white/[0.05]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 text-lg">
                        📞
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          Call
                        </p>

                        <p className="text-[11px] text-zinc-500">
                          Direct
                        </p>
                      </div>
                    </a>
                  </div>

                  {/* MINI STACK */}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      'Flutter',
                      'Dashboards',
                      'Automation',
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] text-zinc-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT APP PANEL */}

                <div className="relative hidden border-l border-white/5 lg:block">
                  <div className="flex h-full items-center justify-center p-5">
                    <div className="w-full max-w-[220px] overflow-hidden rounded-[2.3rem] border border-white/10 bg-[#101114] shadow-2xl shadow-black/20">
                      {/* TOP */}

                      <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                            Active
                          </p>

                          <p className="mt-1 text-sm font-semibold text-white">
                            Workflow
                          </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-white">
                          ⚡
                        </div>
                      </div>

                      {/* APP ITEMS */}

                      <div className="space-y-3 p-4">
                        {[
                          'Booking System',
                          'Flutter App',
                          'Admin Dashboard',
                        ].map((item, index) => (
                          <div
                            key={item}
                            className={`rounded-2xl p-4 transition ${
                              index === 0
                                ? 'bg-gradient-to-r from-orange-500 to-red-500'
                                : 'bg-white/[0.04]'
                            }`}
                          >
                            <p
                              className={`text-[10px] uppercase tracking-[0.15em] ${
                                index === 0
                                  ? 'text-white/70'
                                  : 'text-zinc-500'
                              }`}
                            >
                              Project
                            </p>

                            <p className="mt-2 text-sm font-semibold text-white">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* BOTTOM NAV */}

                      <div className="grid grid-cols-3 border-t border-white/5">
                        {[
                          '🏠',
                          '⚡',
                          '📱',
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-center py-4 text-lg text-zinc-500"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES */}

          <section
            id="services" className="mt-5">
            {/* TOP */}

            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  Services
                </p>

                <h2 className="mt-1 text-base font-semibold text-white">
                  What I Build
                </h2>
              </div>

              <p className="text-[10px] uppercase tracking-[0.15em] text-orange-200">
                Swipe →
              </p>
            </div>

            {/* SLIDER */}

            <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1">
              {[
                {
                  ...services[0],
                  icon: '🌐',
                },

                {
                  ...services[1],
                  icon: '📱',
                },

                {
                  ...services[2],
                  icon: '⚙️',
                },

                {
                  ...services[3],
                  icon: '📊',
                },

                {
                  ...services[4],
                  icon: '🗓️',
                },

                {
                  ...services[5],
                  icon: '🤖',
                },

                {
                  ...services[6],
                  icon: '📈',
                },

                {
                  ...services[7],
                  icon: '📍',
                },
              ].map((item, index) => (
                <article
                  key={item.title}
                  className="group relative min-w-[58%] snap-start overflow-hidden rounded-[1.5rem] border border-orange-500/10 bg-[#181c20] sm:min-w-[38%] lg:min-w-[24%]"
                >
                  {/* BG */}

                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.06] via-transparent to-red-500/[0.04]" />

                  {/* GLOW */}

                  {index === 0 && (
                    <div className="absolute right-[-25px] top-[-25px] h-[80px] w-[80px] rounded-full bg-orange-500/10 blur-2xl" />
                  )}

                  {/* CONTENT */}

                  <div className="relative p-4">
                    {/* TOP */}

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.03] text-lg">
                        {item.icon}
                      </div>

                      <h3 className="flex-1 text-sm font-semibold leading-5 text-white">
                        {item.title}
                      </h3>
                    </div>

                    {/* MINI BULLETS */}

                    <div className="mt-4 space-y-2">
                      {item.bullets.slice(0, 2).map((bullet) => (
                        <div
                          key={bullet}
                          className="flex items-center gap-2"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-orange-400" />

                          <p className="text-[11px] leading-5 text-zinc-500">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* FOOTER */}

                    <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                      <p className="text-[10px] uppercase tracking-[0.12em] text-orange-200">
                        Available
                      </p>

                      <div className="text-xs text-zinc-600 transition duration-300 group-hover:translate-x-1">
                        →
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* PROJECTS */}

          <section
            id="projects"
            className="mt-6"
          >
            {/* TOP */}

            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  Projects
                </p>

                <h2 className="mt-1 text-base font-semibold text-white">
                  Recent Work
                </h2>
              </div>

              <p className="text-[10px] uppercase tracking-[0.15em] text-orange-200">
                Swipe →
              </p>
            </div>

            {/* FEATURED APP CARD */}

            <article className="group relative overflow-hidden rounded-[1.7rem] border border-orange-500/10 bg-[#181c20]">
              {/* BG */}

              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.05] via-transparent to-red-500/[0.03]" />

              {/* IMAGE */}

              {/* IMAGE */}

<div className="relative overflow-hidden">
  <img
    src={projects[0].image}
    alt={projects[0].name}
    className="w-full object-contain transition duration-700 group-hover:scale-[1.02]"
  />
</div>

              {/* FOOTER */}

              <div className="flex gap-2 overflow-x-auto border-t border-white/5 p-3 no-scrollbar">
                {projects[0].tech
                  .split(',')
                  .slice(0, 3)
                  .map((item) => (
                    <div
                      key={item}
                      className="whitespace-nowrap rounded-full border border-orange-500/10 bg-orange-500/[0.05] px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-orange-100"
                    >
                      {item.trim()}
                    </div>
                  ))}
              </div>
            </article>

            {/* MINI SLIDER */}

            {/* MINI PROJECT LIST */}

          <div className="mt-3 space-y-2.5">
            {projects.slice(1).map((project, index) => (
              <article
                key={project.slug}
                className="group relative overflow-hidden border border-orange-400/10 bg-[#23262b]"
              >
                {/* LIGHT GRADIENT BORDER */}

                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/[0.08] via-yellow-300/[0.04] to-red-400/[0.06]" />

                {/* CONTENT */}

                <div className="relative flex items-center gap-3 p-2.5">
                  {/* IMAGE */}

                  <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden border border-orange-300/10">
                    <img
                      src={
                        index === 0
                          ? 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
                          : index === 1
                          ? 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop'
                          : 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop'
                      }
                      alt={project.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* INFO */}

                  <div className="min-w-0 flex-1">
                    {/* TOP */}

                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="line-clamp-1 text-[13px] font-semibold text-white">
                          {project.name}
                        </h3>

                        <p className="mt-1 line-clamp-1 text-[10px] text-zinc-400">
                          {project.outcome}
                        </p>
                      </div>

                      <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-orange-300/10 bg-orange-400/[0.05] text-[11px] text-orange-100 transition duration-300 group-hover:translate-x-0.5">
                        ↗
                      </div>
                    </div>

                    {/* TECH */}

                    <div className="mt-2 flex flex-wrap gap-1">
                      {project.tech
                        .split(',')
                        .slice(0, 2)
                        .map((item) => (
                          <span
                            key={item}
                            className="border border-orange-300/10 bg-orange-400/[0.04] px-1.5 py-1 text-[8px] uppercase tracking-[0.12em] text-orange-100"
                          >
                            {item.trim()}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          </section>

          {/* ========================= */}
          {/* My Experience + COURSES SECTION */}
          {/* ========================= */}

          <section id="experience" className="mt-6">
        <div className="grid gap-4 xl:grid-cols-[1fr_0.95fr]">
          {/* LEFT MAIN EXPERIENCE PANEL */}

          <article className="relative overflow-hidden rounded-[2rem] border border-orange-200/20 bg-[#181c20]">
            {/* BACKGROUND */}

            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10" />

            {/* BLURS */}

            <div className="absolute left-[-80px] top-[-80px] h-[260px] w-[260px] rounded-full bg-orange-400/10 blur-3xl" />

            <div className="absolute bottom-[-80px] right-[-80px] h-[260px] w-[260px] rounded-full bg-red-500/10 blur-3xl" />

            {/* CONTENT */}

            <div className="relative p-5 sm:p-6">
              {/* TOP */}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/10 bg-orange-500/10 px-4 py-2 backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />

                    <p className="text-[11px] uppercase tracking-[0.15em] text-orange-100">
                      Experience & Impact
                    </p>
                  </div>

                  <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Building digital
                    solutions that feel
                    modern & practical.
                  </h2>
                </div>

                {/* FLOATING PROFILE */}

                <div className="hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur sm:block">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                    Profile
                  </p>

                  <div className="mt-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-lg font-bold text-white">
                    AK
                  </div>
                </div>
              </div>

              {/* DESCRIPTION */}

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
                Former software engineer, freelance developer,
                mentor, and technology enthusiast focused on
                helping businesses and organizations build
                practical digital systems that improve workflow,
                visibility, and growth.
              </p>

              {/* BOTTOM PANEL */}

              <div className="mt-5 rounded-[1.8rem] border border-orange-200/10 bg-gradient-to-r from-orange-500/10 to-red-500/10 p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-orange-200">
                      Helping Local Businesses
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      From traditional businesses
                      to modern digital systems.
                    </h3>
                  </div>

                  <div className="flex gap-2">
                    {[
                      'Websites',
                      'Booking',
                      'Dashboards',
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] text-white"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* RIGHT SIDE */}

          <div className="grid gap-4">
            {/* TOP APP STYLE CARD */}

            <article className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-orange-500 to-red-500 p-[1px]">
              <div className="h-full rounded-[2rem] bg-[#181c20] p-5">
                {/* TOP */}

                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/20 text-3xl">
                    🚀
                  </div>

                  <div className="rounded-full bg-orange-500/10 px-3 py-2 text-[10px] uppercase tracking-[0.15em] text-orange-200">
                    Growth
                  </div>
                </div>

                {/* CONTENT */}

                <h3 className="mt-5 text-2xl font-bold text-white">
                  Modern Digital Presence
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  Websites, online visibility,
                  booking systems, customer engagement,
                  and scalable digital experiences.
                </p>

                {/* MINI STATS */}

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    'Responsive',
                    'Fast',
                    'Modern UI',
                    'SEO Ready',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/[0.03] px-4 py-3 text-center text-xs text-zinc-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* BOTTOM GRID */}

            <div className="grid gap-4 sm:grid-cols-2">
              {/* CARD */}

              <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#181c20] p-5">
                {/* BG */}

                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-3xl">
                    📚
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    Teaching & Mentoring
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    Practical guidance in software,
                    programming, Flutter,
                    AI, and development.
                  </p>
                </div>
              </article>

              {/* CARD */}

              <article className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#181c20] p-5">
                {/* BG */}

                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-3xl">
                    ⚡
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    Automation & AI
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400">
                    Smart workflows, integrations,
                    AI systems, and productivity
                    focused solutions.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

          {/* ========================= */}
          {/* PRICING SECTION */}
          {/* ========================= */}

          <section
            id="price"
            className="mt-6"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-orange-200 bg-[#fffaf5]">
              {/* BG */}

              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50" />

              {/* BLURS */}

              <div className="absolute left-[-80px] top-[-80px] h-[220px] w-[220px] rounded-full bg-orange-300/20 blur-3xl" />

              <div className="absolute bottom-[-80px] right-[-80px] h-[220px] w-[220px] rounded-full bg-red-300/20 blur-3xl" />

              {/* CONTENT */}

              <div className="relative p-5">
                {/* HEADER */}

                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="max-w-xl">
                    {/* BADGE */}

                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-2 backdrop-blur">
                      <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />

                      <p className="text-[10px] uppercase tracking-[0.18em] text-orange-700">
                        Flexible Pricing
                      </p>
                    </div>

                    {/* TITLE */}

                    <h2 className="mt-4 text-2xl font-bold leading-tight text-zinc-900">
                      Practical pricing
                      for real projects.
                    </h2>

                    {/* TEXT */}

                    <p className="mt-3 text-sm leading-7 text-zinc-600">
                      Flexible plans depending on features,
                      workflows, integrations, and project
                      complexity.
                    </p>
                  </div>

                  {/* INFO */}

                  <div className="rounded-[1.5rem] border border-orange-100 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-500">
                      Payment
                    </p>

                    <p className="mt-1 text-sm font-medium text-zinc-900">
                      Subscription & milestones
                    </p>
                  </div>
                </div>

                {/* CARDS */}

                <div className="mt-5 grid gap-3 lg:grid-cols-3">
                  {[
                    {
                      title: 'Starter',
                      price: 'Affordable',
                      icon: '🌱',
                      features: [
                        'Business websites',
                        'Landing pages',
                      ],
                    },

                    {
                      title: 'Professional',
                      price: 'Flexible',
                      icon: '🚀',
                      featured: true,
                      features: [
                        'Flutter apps',
                        'Dashboards',
                      ],
                    },

                    {
                      title: 'Custom',
                      price: 'Custom Quote',
                      icon: '⚡',
                      features: [
                        'AI systems',
                        'Automation',
                      ],
                    },
                  ].map((item) => (
                    <article
                      key={item.title}
                      className={`relative overflow-hidden rounded-[1.7rem] border p-4 ${
                        item.featured
                          ? 'border-orange-300 bg-gradient-to-br from-orange-100 to-red-50'
                          : 'border-orange-100 bg-white/80 backdrop-blur'
                      }`}
                    >
                      {/* GLOW */}

                      {item.featured && (
                        <div className="absolute right-[-40px] top-[-40px] h-[120px] w-[120px] rounded-full bg-orange-300/20 blur-3xl" />
                      )}

                      {/* TOP */}

                      <div className="relative flex items-start justify-between gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                          {item.icon}
                        </div>

                        {item.featured && (
                          <div className="rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-orange-700">
                            Popular
                          </div>
                        )}
                      </div>

                      {/* CONTENT */}

                      <div className="relative mt-5">
                        <h3 className="text-lg font-semibold text-zinc-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-orange-700">
                          {item.price}
                        </p>
                      </div>

                      {/* FEATURES */}

                      <div className="mt-5 space-y-2">
                        {item.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />

                            <p className="text-[11px] text-zinc-600">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* BUTTON */}

                      <button
                        className={`mt-5 w-full rounded-2xl px-4 py-3 text-sm font-medium transition ${
                          item.featured
                            ? 'bg-zinc-900 text-white hover:scale-[1.02]'
                            : 'border border-orange-100 bg-white text-zinc-900 hover:bg-orange-50'
                        }`}
                      >
                        Discuss Project
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* MOBILE APP DOCK */}

        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-orange-500/10 bg-[#fffaf5] md:hidden">

  {/* BG */}

  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/[0.03] via-transparent to-red-500/[0.03]" />

  <div className="relative mx-auto flex max-w-7xl items-center gap-2 px-3 py-2">
    {/* WHATSAPP */}

    <a
      href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`}
      className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl border border-[#25D366]/20 bg-[#25D366] px-4 py-3 shadow-lg shadow-[#25D366]/10 transition active:scale-[0.98]"
    >
      {/* GLOW */}

      <div className="absolute right-[-25px] top-[-25px] h-[80px] w-[80px] rounded-full bg-white/10 blur-2xl" />

      <span className="relative text-base text-white">
        💬
      </span>

      <span className="relative text-sm font-semibold tracking-tight text-white">
        WhatsApp
      </span>
    </a>

    {/* CALL */}

    <a
      href={`tel:${site.phone}`}
      className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl border border-orange-200 bg-gradient-to-r from-orange-50 to-red-50 px-4 py-3 transition active:scale-[0.98]"
    >
      {/* BG */}

      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/[0.04] to-red-500/[0.04]" />

      <span className="relative text-base">
        📞
      </span>

      <span className="relative text-sm font-semibold tracking-tight text-zinc-900">
        Call
      </span>
    </a>
  </div>
</div>
      </main>
    </>
  );
}