import {
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  AcademicCapIcon,
  HomeIcon,
  FireIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const reasons = [
  {
    icon: CurrencyDollarIcon,
    title: "High Paying",
    desc: "UI Design is a lucrative career path that will offer you competitive pay and great benefits.",
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Growth Opportunities",
    desc: "Start as a junior designer and quickly progress to Lead roles, Senior roles, and beyond.",
  },
  {
    icon: AcademicCapIcon,
    title: "No Degree Needed",
    desc: "It requires no college degree but instead rewards people who work hard and grow in their craft.",
  },
  {
    icon: HomeIcon,
    title: "Work From Home",
    desc: "Remote work is on the rise, and UI & UX designers are leading the charge.",
  },
  {
    icon: FireIcon,
    title: "In Demand",
    desc: "You will be in high demand from tech giants to startups, guaranteeing versatile job opportunities.",
  },
  {
    icon: SparklesIcon,
    title: "Make an Impact",
    desc: "A sense of accomplishment from impacting the people who use the products you design.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-purple-600 text-white text-sm px-4 py-1 rounded-full">
            Why Educore?
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-14">
          Why you should choose us
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((item, index) => (
            <div key={index} className="flex gap-4">
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-purple-600" />
              </div>

              {/* Content */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}