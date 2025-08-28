export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0F0F0F] px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-white">
                ⚡ Shevanio
              </span>
            </div>
            <p className="text-sm text-zinc-400">Systems Administrator & Cybersecurity Professional</p>
            <p className="text-sm text-zinc-500">
              Copyright © 2025 - All rights reserved
            </p>
            <div className="inline-flex items-center gap-2 rounded-md border border-zinc-500 bg-zinc-800/50 px-4 py-2 text-xs text-zinc-400">
              Based in Barcelona, Spain
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              🚀 Social
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-zinc-400 hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-zinc-400 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Shevanio1950"
                  target="_blank"
                  className="text-zinc-400 hover:text-white"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Shevanio"
                  target="_blank"
                  className="text-zinc-400 hover:text-white"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/david-luna-camuñez"
                  target="_blank"
                  className="text-zinc-400 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              📜 Skills
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-zinc-400">
                  TypeScript & JavaScript
                </span>
              </li>
              <li>
                <span className="text-zinc-400">
                  Python & Bash
                </span>
              </li>
              <li>
                <span className="text-zinc-400">
                  React & Node.js
                </span>
              </li>
            </ul>
          </div>

          {/* By the Creator Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              🌎 Experience
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-zinc-400">
                  Abast (2022-Present)
                </span>
              </li>
              <li>
                <span className="text-zinc-400">
                  Logicalis (2020-2021)
                </span>
              </li>
              <li>
                <span className="text-zinc-400">
                  Eurona (2017-2020)
                </span>
              </li>
            </ul>

            {/* Newsletter Section */}
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold text-zinc-400">
                📩 Contact Me
              </h4>
              <p className="mb-4 text-sm text-zinc-500">
                Get in touch for collaboration or opportunities!
              </p>
              <a
                href="mailto:shevanio1950@gmail.com"
                className="inline-block rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200 transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © 2025 Shevanio. All Rights Reserved. Portfolio by{" "}
          <a
            href="mailto:shevanio1950@gmail.com"
            className="text-zinc-400 hover:text-white"
          >
            David Luna Camuñez
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
