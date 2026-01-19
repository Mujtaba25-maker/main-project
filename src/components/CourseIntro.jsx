import {
  CheckIcon,
  AcademicCapIcon,
  PencilSquareIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const features = [
  {
    icon: AcademicCapIcon,
    title: "Online Learning",
    desc: "Engage in interactive, real-time sessions led by industry experts, ensuring in-depth understanding and instant feedback.",
  },
  {
    icon: PencilSquareIcon,
    title: "Hands-on Projects",
    desc: "Apply your skills to real-world scenarios with practical assignments designed to enhance learning and portfolio building.",
  },
  {
    icon: UserGroupIcon,
    title: "Dedicated Mentorship",
    desc: "Receive personalized guidance and support from experienced mentors to help you navigate challenges and achieve your learning goals.",
  },
];

const checklist = [
  "Learn design principles from research to creating functional interfaces.",
  "Build real-world projects using tools like Figma and Adobe XD.",
  "Develop skills for UI/UX roles, including prototyping and testing.",
  "Get expert feedback to refine your work.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function CourseIntro() {
  return (
    <section
      className="bg-[#f6f6f6] py-20 px-4 scroll-mt-[120px]"
      id="CourseIntro"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          className="lg:col-span-1"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-[36px] font-medium leading-[1.18] text-gray-900">
            The only design <br />
            course you need to <br />
            be among top 1% <br />
            designers
          </h1>

          <div className="flex gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 shadow"
            >
              Enroll Now
              <span className="bg-white text-purple-600 rounded-md px-2 py-1 text-sm">
                →
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white px-6 py-3 rounded-xl border text-gray-900 font-medium"
            >
              See Curriculum
            </motion.button>
          </div>

          {/* CHECKLIST */}
          <motion.ul
            className="mt-10 space-y-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {checklist.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3 text-gray-700"
              >
                <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0">
                  <CheckIcon className="w-4 h-4 text-white" />
                </span>
                <p className="text-sm leading-relaxed">{item}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* CENTER IMAGE */}
        <motion.div
          className="lg:col-span-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://framerusercontent.com/images/3hhqcPchYtqbG3JqoxUedEKvum8.png?scale-down-to=1024"
            alt="Student"
            className="w-full max-w-md rounded-3xl object-cover shadow-xl"
          />
        </motion.div>

        {/* RIGHT FEATURES */}
        <motion.div
          className="lg:col-span-1 space-y-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex gap-4 items-start"
            >
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
