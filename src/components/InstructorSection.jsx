import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


const instructorData = {
  name: "James Martinez",
  title: "Meet James Martinez",
  description: [
    "James Martinez is a seasoned UI/UX designer and educator with over a decade of experience creating intuitive, user-centered designs for top global brands.",
    "Passionate about teaching, James has guided thousands of students toward mastering the craft of UI/UX design, combining practical techniques with industry insights.",
  ],
  image:
    "https://framerusercontent.com/images/fkgwgCwFzGs8hldQHY4MDfJvm7U.png",
  stats: [
    { label: "Instructor Rating", value: "4.5", icon: "⭐" },
    { label: "Students", value: "316,195", icon: "👥" },
    { label: "Courses", value: "5", icon: "▶️" },
  ],
  brands: [
    "https://framerusercontent.com/images/Ru8vbge7kRiNpkvXOcAycTFFc.svg",
    "https://framerusercontent.com/images/vF87DMcYJ1zEFwQiaIREbFNUe24.svg",
    "https://framerusercontent.com/images/CCoZT2jkWCqgYUmsJnhZvEb0M.svg",
    "https://framerusercontent.com/images/CCoZT2jkWCqgYUmsJnhZvEb0M.svg",
    "https://framerusercontent.com/images/Ru8vbge7kRiNpkvXOcAycTFFc.svg",
  ],
};

export default function InstructorSection() {
  const { title, description, image, stats, brands } = instructorData;

  return (
    <section className="bg-black text-white py-20 px-4 scroll-mt-[120px]" id="InstructorSection">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="Instructor"
            className="rounded-2xl w-full max-w-md object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
            {title}
          </h2>

          <div className="space-y-4 text-gray-300 leading-relaxed">
            {description.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 space-y-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-purple-500 text-lg">{stat.icon}</span>
                <span className="text-sm">
                  <strong>{stat.value}</strong> {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8" />

          {/* Brands */}
          <p className="text-xs text-gray-400 mb-4 uppercase tracking-wider">
            Brands Educated
          </p>
<Swiper
  modules={[Autoplay]}
  spaceBetween={20}
  slidesPerView={3}
  loop={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="opacity-80"
>
  {brands.map((logo, index) => (
    <SwiperSlide key={index}>
      <div className="flex justify-center items-center">
        <img
          src={logo}
          alt="Brand logo"
          className="h-8 object-contain"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

        </div>
      </div>
    </section>
  );
}