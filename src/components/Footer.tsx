//src/components/Footer.tsx

import Link from 'next/link';

import { site } from '@/data/site';

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#101214]"
    >
      {/* BLUR */}

      <div className="absolute left-[-80px] top-[-80px] h-[240px] w-[240px] rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="absolute bottom-[-80px] right-[-80px] h-[240px] w-[240px] rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-32 pt-10 sm:px-6">
        {/* TOP */}

        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          {/* LEFT */}

          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-content-center rounded-2xl bg-emerald-700 text-sm font-bold text-white">
                AK
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Shillong ITech
                </h2>

                <p className="text-sm text-zinc-400">
                  Shillong, Meghalaya
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
              Freelance developer building modern
              websites, dashboards, Flutter apps,
              AI workflows, automation systems,
              and scalable business solutions.
            </p>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 Shillong ITech. Built with care.
            </p>

            <p>
              Modern software solutions from Shillong.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}