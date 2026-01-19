import { useState } from "react";

const faqData = {
  title: "Frequently asked questions",
  description:
    "It’s your gateway to a career in design. With Educore, you’ll gain the skills, confidence, and portfolio to stand out in the competitive world of UI/UX design.",
  buttons: [
    { label: "Enroll Now", primary: true },
    { label: "See Curriculum", primary: false },
  ],
  faqs: [
    {
      question: "Who is this course for?",
      answer:
        "This course is designed for beginners, career switchers, and aspiring UI/UX designers who want to build real-world skills.",
    },
    {
      question: "How long do I have access to the course?",
      answer:
        "You get lifetime access to all course content, including future updates.",
    },
    {
      question: "Which tools will I need for this course?",
      answer:
        "You’ll mainly use Figma. Optional tools include Adobe XD and basic prototyping tools.",
    },
    {
      question: "What kind of projects will I work on?",
      answer:
        "You’ll work on real-world UI/UX projects including apps, websites, and case studies.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "Yes, we offer a 14-day money-back guarantee if you’re not satisfied.",
    },
  ],
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-50 py-20 px-4 scroll-mt-[120px]" id="FAQ">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          {faqData.title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600">
          {faqData.description}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          {faqData.buttons.map((btn, i) => (
            <button
              key={i}
              className={`px-6 py-3 rounded-lg font-medium transition inline-flex items-center justify-center gap-2
                ${
                  btn.primary
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-white text-gray-900 border hover:bg-gray-100"
                }`}
            >
              {btn.label}
              {btn.primary && (
                <span className="bg-white text-purple-600 rounded px-2 py-1 text-sm">
                  →
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto mt-14 divide-y">
        {faqData.faqs.map((item, index) => (
          <div key={index} className="py-5">
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center text-left text-gray-900 font-medium"
            >
              <span>{item.question}</span>
              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="text-center text-gray-600 mt-12">
        Have more questions? Let us know:{" "}
        <a
          href="mailto:hello@educore.com"
          className="text-purple-600 font-medium"
        >
          hello@educore.com
        </a>
      </p>
    </section>
  );
}