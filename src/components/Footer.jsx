import {
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaStar,
} from "react-icons/fa";

const avatars = [
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/women/21.jpg",
  "https://randomuser.me/api/portraits/men/31.jpg",
  "https://randomuser.me/api/portraits/men/41.jpg",
];

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-16 rounded-2xl max-w-7xl mx-auto mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

        {/* Left Section */}
        <div>
          {/* Avatars + Rating */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex -space-x-3">
              {avatars.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="student"
                  className="w-8 h-8 rounded-full border-2 border-black"
                />
              ))}
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-semibold">
                4K+
              </div>
            </div>

            <div>
              <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-400">Join 4000+ Students</p>
            </div>
          </div>

          {/* Logo */}
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            🎓 Educore
          </h2>

          <p className="text-gray-400 max-w-xs text-sm">
            Here’s everything you need to know before you start your journey
            with Educore.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-4">Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>Overview</li>
            <li>Curriculum</li>
            <li>Instructor</li>
            <li>Testimonials</li>
            <li>Pricing</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li>404</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="font-semibold mb-4">Socials</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <FaInstagram /> Instagram
              </li>
              <li className="flex items-center gap-3">
                <FaTwitter /> X (Twitter)
              </li>
              <li className="flex items-center gap-3">
                <FaTiktok /> Tiktok
              </li>
              <li className="flex items-center gap-3">
                <FaYoutube /> Youtube
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}