const enrollData = {
  heading: "Enroll now and become a UI/UX Design Pro!",
  subheading:
    "Say goodbye to endless Googling and scattered tutorials. In just 30 days, you'll transform from a beginner",
  buttons: [
    { label: "Enroll Now", primary: true },
    { label: "See Curriculum", primary: false },
  ],
  features: [
    {
      title: "Live video courses",
      description:
        "Interactive, real-time lessons with expert instructors to deepen your understanding.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600",
    },
    {
      title: "Zero to hero",
      description:
        "A complete, step-by-step journey designed to take you from beginner to advanced.",
      image:
        "https://framerusercontent.com/images/CWYPxCfByQr1eY6yeddO3IydP18.svg",
    },
    {
      title: "Thriving Community",
      description:
        "Join a network of passionate designers, collaborate, get feedback, and grow together.",
      image:
        "https://framerusercontent.com/images/1GEDZtUTOGsLrgsOt2XZEbXg.svg",
    },
  ],
  stats: [
    { value: "30+", label: "exercises" },
    { value: "150+", label: "lessons" },
    { value: "600+", label: "hours" },
    { value: "Lifetime", label: "access" },
  ],
};

export default function EnrollCTA() {
  const { heading, subheading, buttons, features, stats } = enrollData;

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 max-w-3xl mx-auto">
          {heading}
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          {subheading}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-lg font-medium transition
                ${
                  btn.primary
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-white text-gray-900 border hover:bg-gray-50"
                }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-4 text-left"
            >
              <div className="bg-black rounded-xl p-2 mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-lg h-48 w-full object-cover"
                />
              </div>

              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-left shadow-sm"
            >
              <h4 className="text-2xl font-bold text-gray-900">
                {stat.value}
              </h4>
              <p className="text-gray-600 text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}