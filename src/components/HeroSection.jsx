import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const instructors = [
  {
    name: "Jakob Geidt",
    role: "UI Designer @ Microsoft",
    image:
      "https://media.istockphoto.com/id/2187159461/photo/young-adult-female-high-school-student-poses-for-the-camera-to-have-her-photo-taken.jpg?s=612x612&w=0&k=20&c=L5GPSXTCdiNoXHzgk2Dwx04jxPDhMUkJp-Q-qK0mcZk=",
    flag: "🇺🇸",
  },
  {
    name: "Aspen Geidt",
    role: "Visual Designer @ Netflix",
    image:
      "https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=",
    flag: "🇳🇬",
  },
  {
    name: "Liam O'Connor",
    role: "UX Designer @ Spotify",
    image:
      "https://media.istockphoto.com/id/184616797/photo/portrait-of-a-young-woman-with-black-hair-white-background.jpg?s=612x612&w=0&k=20&c=MwXcmYvUpwVqk1PsMDgCGRkuDyQ7b70qcYdlcSCCrJY=",
    flag: "🇮🇪",
  },
];

const Companies = [
  { name: "Framer", logo: "https://framerusercontent.com/images/Ru8vbge7kRiNpkvXOcAycTFFc.svg" },
  { name: "Linear", logo: "https://framerusercontent.com/images/vF87DMcYJ1zEFwQiaIREbFNUe24.svg" },
  { name: "Raycast", logo: "https://framerusercontent.com/images/CCoZT2jkWCqgYUmsJnhZvEb0M.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
];

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-[90vh] flex items-center px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 bg-gray-800 text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4">
            <span className="bg-purple-600 text-xs px-2 py-0.5 rounded-full">
              New
            </span>
            Registrations are now open!
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Master UI <br /> Design From <br /> Scratch
          </h1>

          <p className="text-gray-400 mt-2 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg">
            The only design course you need to be among top 1% designers.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 mb-6 justify-center lg:justify-start">
            <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg">
              Enroll Now →
            </button>
            <button className="border bg-white text-black border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition">
              See Curriculum
            </button>
          </div>

          {/* COMPANIES */}
          <div className="mt-8">
            <p className="text-xs font-bold tracking-widest text-gray-100 text-center lg:text-left mb-8">
              FEATURED ON
            </p>

            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-black to-transparent z-10" />

              <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                spaceBetween={32}
                loop
                speed={2500}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                allowTouchMove={false}
                className="opacity-80"
              >
                {[...Companies, ...Companies].map((company, index) => (
                  <SwiperSlide key={index} className="!w-auto flex items-center">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-6 sm:h-7 object-contain grayscale hover:grayscale-0 transition"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </motion.div>

        {/* RIGHT – INSTRUCTORS */}
        <div className="relative overflow-hidden h-[280px] sm:h-[320px] md:h-[360px] rounded-3xl">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          >
            {[...instructors, ...instructors].map((person, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative w-56 sm:w-60 md:w-64 h-72 sm:h-80 rounded-3xl overflow-hidden bg-gray-900 flex-shrink-0"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-semibold text-sm sm:text-base flex items-center gap-2">
                    {person.name} <span>{person.flag}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {person.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
