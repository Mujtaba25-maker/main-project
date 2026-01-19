import { motion } from "framer-motion";

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

export default function HeroSection() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 bg-gray-800 text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="bg-purple-600 text-xs px-2 py-0.5 rounded-full">
              New
            </span>
            Registrations are now open!
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Master UI <br /> Design From <br /> Scratch
          </h1>

          <p className="text-gray-400 mt-6 max-w-xl">
            The only design course you need to be among top 1% designers.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg">
              Enroll Now →
            </button>
            <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              See Curriculum
            </button>
          </div>
        </motion.div>

        {/* RIGHT CONTINUOUS SCROLL */}
        <div className="overflow-hidden relative h-80 rounded-3xl">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...instructors, ...instructors].map((person, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="relative w-64 h-80 rounded-3xl overflow-hidden bg-gray-900 shadow-2xl flex-shrink-0"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    {person.name} <span>{person.flag}</span>
                  </h4>
                  <p className="text-sm text-gray-300">{person.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
