import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-8">
          {/* ——— Column 2: Important Links ——— */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-tight">
              Important Links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.mfa.gov.bt/tourism/"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  Department of Tourism
                </a>
              </li>
              <li>
                <a
                  href="https://drukair.com.bt/"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  Drukair – Royal Bhutan Airlines
                </a>
              </li>
              <li>
                <a
                  href="https://www.bhutanairlines.bt/"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  Bhutan Airlines
                </a>
              </li>
              <li>
                <a
                  href="https://www.doi.gov.bt/"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200 hover:underline underline-offset-2"
                >
                  Department of Immigration, Bhutan
                </a>
              </li>
            </ul>
          </div>

          {/* ——— Column 3: Contact & Social ——— */}
          <div className="space-y-6 pr-10">
            {/* Contact */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white tracking-tight">
                Contact Us
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/+97517919281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-green-900/40 text-green-400 hover:bg-green-600 hover:text-white transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="mailto:acharyasomnath123@gmail.com"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-blue-900/40 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  aria-label="Email"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white tracking-tight">
                Follow Us
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/share/1CBUMTBnXW/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-indigo-900/40 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/som_nath_lyripop?igsh=MWpnajA0NndtbGI1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 rounded-full bg-pink-900/40 text-pink-400 hover:bg-pink-600 hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.585.07-4.849c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-800" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-gray-500">
          <span>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-gray-400">Bhutanese Tours and Treks</span>.
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
