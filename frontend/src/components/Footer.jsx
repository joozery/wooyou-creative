import { FaFacebookF, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white font-prompt pt-20 pb-10 border-t border-blue-500/10">
      {/* 🔵 Blur Glows */}
      <div className="absolute top-0 left-[-10%] w-72 h-72 bg-blue-500/20 blur-[120px] z-0" />
      <div className="absolute bottom-0 right-[-10%] w-72 h-72 bg-cyan-400/20 blur-[100px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* LOGO + Desc */}
          <div>
            <h1 className="text-2xl font-bold text-blue-400 mb-2">WOOYOU</h1>
            <p className="text-sm text-gray-400">
              Creative Tech Studio. We build immersive solutions that blend design and tech.
            </p>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Docs</a></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaDiscord].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center border border-blue-500 rounded-full hover:bg-blue-500/20 transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Line */}
        <div className="border-t border-blue-500/10 mt-10 pt-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Wooyou Creative. All rights reserved.
        </div>
      </div>
    </footer>
  );
}