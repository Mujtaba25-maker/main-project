import { useState } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";

const modules = [
  { title: "Foundations of Design", meta: "6 hours, 1 project, 3 resources" },
  { title: "Research & Wireframing", meta: "6 hours, 1 project, 3 resources" },
  { title: "Prototyping & Interaction", meta: "6 hours, 1 project, 3 resources" },
  { title: "Advanced Concepts", meta: "6 hours, 1 project, 3 resources" },
  { title: "Career Skills", meta: "6 hours, 1 project, 3 resources" },
  { title: "Building a Professional Portfolio", meta: "6 hours, 1 project, 3 resources" },
];

const includes = [
  "62 hours on-demand video",
  "Access on mobile and TV",
  "Full lifetime access",
  "Certificate of completion",
];

export default function CourseCurriculum() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-black text-white py-24 px-4 scroll-mt-[120px]" id="CourseCurriculum">
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-purple-600 text-sm px-4 py-1 rounded-full">
            Curriculum
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
          What you’ll learn in this course
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

  {/* Left – Modules */}
  <div className="lg:col-span-7 space-y-4">
    {modules.map((mod, index) => (
      <div
        key={index}
        className="bg-neutral-900 rounded-xl px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-neutral-800 transition"
        onClick={() => setOpen(open === index ? null : index)}
      >
        <div>
          <h4 className="font-semibold text-lg">
            Module {index + 1}: {mod.title}
          </h4>
          <p className="text-sm text-gray-400 mt-1">{mod.meta}</p>
        </div>
        <PlusIcon className="w-6 h-6 text-gray-400" />
      </div>
    ))}
  </div>

  {/* Right – Pricing Card */}
  <div className="lg:col-span-5 lg:sticky lg:top-24">
    <div className="bg-white text-black rounded-2xl overflow-hidden">

              {/* Price */}
              <div className="bg-purple-600 p-6 text-white">
                <p className="text-sm">Course</p>
                <h3 className="text-4xl font-bold mt-2">$99</h3>
                <p className="text-sm mt-1 opacity-80">
                  2 days left at this price
                </p>
              </div>

              {/* Info */}
              <div className="p-6 space-y-4">
                <h4 className="font-semibold text-lg">
                  Design Mastery: The Ultimate UI/UX Bootcamp by James Martinez
                </h4>
                <p className="text-sm text-gray-600">
                  Transform your creativity into career-ready skills with
                  Nathan Myles' step-by-step guide to mastering UI/UX design.
                </p>

                {/* Avatars */}
                <div className="flex items-center gap-2">
                  <img className="w-7 h-7 rounded-full" src="https://i.pravatar.cc/40?1" />
                  <img className="w-7 h-7 rounded-full" src="https://i.pravatar.cc/40?2" />
                  <img className="w-7 h-7 rounded-full" src="https://i.pravatar.cc/40?3" />
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    4K+
                  </span>
                </div>

                {/* Included */}
                <div className="pt-4">
                  <p className="text-sm font-semibold mb-3">WHAT'S INCLUDED</p>
                  <ul className="space-y-3">
                    {includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <span className="bg-purple-600 text-white p-1 rounded-full">
                          <CheckIcon className="w-4 h-4" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button className="w-full mt-6 bg-black text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-gray-900 transition">
                  Enroll Now →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}