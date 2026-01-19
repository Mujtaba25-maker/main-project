const testimonials = [
  {
    rating: 5,
    text: "The hands-on projects and real-world examples gave me the confidence to tackle complex design challenges. Educore made all the difference in my career pivot.",
    name: "Sarah Johnson",
    role: "Senior Product Designer @ Google",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    rating: 5,
    text: "The course broke down complex concepts into actionable lessons. I landed a freelance gig within weeks of completing it. Thank you, Educore!",
    name: "Amina Yusuf",
    role: "Visual Designer @ Adobe",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    rating: 5,
    text: "What sets Educore apart is its focus on outcomes. I built a professional portfolio and got hired within three months. Best investment I've ever made!",
    name: "David Nguyen",
    role: "UX Researcher @ Amazon",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    rating: 5,
    text: "The course broke down complex concepts into actionable lessons. I landed a freelance gig within weeks of completing it. Thank you, Educore!",
    name: "Amina Yusuf",
    role: "Visual Designer @ Adobe",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    rating: 5,
    text: "Educore doesn't just teach design—it teaches you how to think like a designer. I loved the curriculum, the projects, and the community support.",
    name: "Olivia Martinez",
    role: "Creative Director @ Apple",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    rating: 5,
    text: "I've taken many courses, but Educore stands out. The balance of theory and practice, plus the mentorship, is unparalleled. I highly recommend it!",
    name: "Jason Patel",
    role: "Product Manager @ Meta",
    avatar: "https://i.pravatar.cc/100?img=6",
  },
  {
    rating: 5,
    text: "What sets Educore apart is its focus on outcomes. I built a professional portfolio and got hired within three months. Best investment I've ever made!",
    name: "Lila Anderson",
    role: "Design Lead @ IBM",
    avatar: "https://i.pravatar.cc/100?img=7",
  },
  {
    rating: 5,
    text: "Thanks to Educore, I transitioned from a non-design background to a Senior UX role. The course structure and support were game-changers.",
    name: "Michael Zheng",
    role: "Senior UX Designer @ LinkedIn",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
  {
    rating: 5,
    text: "This course gave me the skills and portfolio I needed to stand out. Within a month, I received multiple interview calls.",
    name: "Priya Desai",
    role: "Experience Designer @ Salesforce",
    avatar: "https://i.pravatar.cc/100?img=9",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                “{item.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900 text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}