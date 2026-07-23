import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="relative bg-[#2f5d3a] text-[#dfeadf]">
      {/* Depth / texture feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3a6b44]/50 to-[#24472c]/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-6 md:py-8">
        <div className="grid grid-cols-2 gap-6 md:gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-0 sm:mb-0 flex items-center mt-0">
              <Image
                src="/logonav.png"
                alt="Healwell Logo"
                width={150}
                height={60}
                className="object-contain"
                priority
              />
            </div>

            <p className="text-sm leading-relaxed text-[#c8dcc8]">
              Gentle, personalised natural therapies supporting balance &
              long-term health.
            </p>
          </div>

          {/* Services */}
          <div>
            
            <ul className="space-y-1.5 text-md text-[#c8dcc8]">
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>

              <li>
                <Link href="/enquiry">Consultations</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 font-semibold text-white">Contact</h4>
            <ul className="space-y-1.5 text-sm text-[#c8dcc8]">
              <li>+61 493 106 437</li>
          
              <li className="break-all leading-relaxed">
  healwellnaturaltherapies@gmail.com
</li>
              <li>Australia</li>
            </ul>

          </div>

        </div>

        {/* Bottom strip */}
        <div className="mt-6 border-t border-white/20 pt-3 text-center text-xs text-[#c8dcc8]">
          © {new Date().getFullYear()} Healwell Natural Therapies. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
