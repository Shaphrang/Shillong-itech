//src/components/Header.tsx

import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-orange-500/10 bg-[#181c20]">
      {/* TOP GRADIENT */}

      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/[0.03] via-transparent to-red-500/[0.03]" />

      <div className="relative mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-5">
        {/* LEFT */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          {/* LOGO */}

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-sm font-bold text-white shadow-lg shadow-orange-500/10">
            SI
          </div>

          {/* TEXT */}

          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
              Shillong
            </p>

            <h2 className="text-sm font-semibold text-white">
              Shillong ITech
            </h2>
          </div>
        </Link>

        {/* RIGHT */}

        <div className="flex items-center gap-2">
          {/* STATUS */}

          <div className="hidden items-center gap-2 rounded-full border border-orange-500/10 bg-orange-500/[0.05] px-3 py-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />

            <p className="text-[11px] text-orange-100">
              Available
            </p>
          </div>

          {/* CTA */}

          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:scale-[1.03]"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}