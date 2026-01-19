const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/45.jpg",
  "https://randomuser.me/api/portraits/men/54.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/77.jpg",
  "https://randomuser.me/api/portraits/women/21.jpg",
  "https://randomuser.me/api/portraits/men/14.jpg",
  "https://randomuser.me/api/portraits/women/11.jpg",
  "https://randomuser.me/api/portraits/men/9.jpg",
  "https://randomuser.me/api/portraits/women/19.jpg",
  "https://randomuser.me/api/portraits/men/41.jpg",
];

export default function CTA() {
  return (
    <section className="px-4 pb-20">
      <div className="relative max-w-7xl mx-auto bg-purple-600 rounded-2xl overflow-hidden px-6 py-16 md:px-16">

        {/* Decorative circles */}
        <div className="absolute right-0 top-0 w-72 h-72 border border-purple-400/30 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-10 bottom-10 w-56 h-56 border border-purple-400/30 rounded-full"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Start Your UI/UX Design <br /> Journey Today!
            </h2>

            <p className="mt-4 text-purple-100 max-w-lg">
              Join thousands of aspiring designers and gain the skills to create
              stunning, user-friendly designs. Don't wait—your design career
              starts here!
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 hover:bg-gray-100 transition">
                Enroll Now
                <span className="bg-black text-white rounded px-2 py-1 text-sm">
                  →
                </span>
              </button>

              <button className="bg-white/10 text-white border border-white/30 px-6 py-3 rounded-lg hover:bg-white/20 transition">
                See Curriculum
              </button>
            </div>
          </div>

          {/* Right Floating Avatars */}
          <div className="relative hidden lg:block h-[300px]">
            {avatars.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="student"
                className="absolute w-14 h-14 rounded-full border-4 border-purple-600 shadow-lg"
                style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 80}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}