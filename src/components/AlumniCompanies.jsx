
const companies = [
  {
    name: "Google",
    logo: "https://i.pinimg.com/736x/3c/17/cc/3c17ccb25d186e2dfc74aa764d34d907.jpg",
  },
  {
    name: "Nike",
    logo: "https://up.yimg.com/ib/th/id/OIP.fssi_WH8r1e_i5oXsAmKYwHaEQ?pid=Api&rs=1&c=1&qlt=95&w=147&h=84",
  },
  {
    name: "PinPoint",
    logo: "https://up.yimg.com/ib/th/id/OIP.3oe7LsORdclbwdG7hIuz9wHaGL?pid=Api&rs=1&c=1&qlt=95&w=101&h=84",
  },
  {
    name: "Naturel Cycles",
    logo: "https://s.yimg.com/fz/api/res/1.2/iilJFsee6QJmDgSc.jzPSg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/49/6e/e3/496ee378b026aa49667f67af231043e5.jpg",
  },
  {
    name: "Sitemark",
    logo: "https://up.yimg.com/ib/th/id/OIP.4CHjyZuF4dmt2y-ERoNAoAHaBl?pid=Api&rs=1&c=1&qlt=95&w=466&h=99",
  },
  {
    name: "Rise",
    logo: "https://up.yimg.com/ib/th/id/OIP.3FnRw_EEaeAkiJTAntzupAHaFj?pid=Api&rs=1&c=1&qlt=95&w=133&h=99",
  },
  {
    name: "Duolingo",
    logo: "https://s.yimg.com/fz/api/res/1.2/AWLUNlWT3MihabuJpK55oQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/87/86/d8/8786d8e802f85194bcda01629cb89f72.jpg",
  },
  {
    name: "Nasa",
    logo: "https://up.yimg.com/ib/th/id/OIP.YJmEL9qiP7yqMmD3PFKFRQHaDt?pid=Api&rs=1&c=1&qlt=95&w=180&h=90",
  },
  {

  }
];

export default function AlumniCompanies() {
  return (
    <section className="bg-gray-100 py-24 px-4 scroll-mt-[120px]" id="AlumniCompanies">
      <div className="max-w-6xl mx-auto text-center">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="bg-purple-600 text-white text-sm px-4 py-1 rounded-full">
            Reviews
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight max-w-3xl mx-auto">
          Our Alumni work at companies like Google, Nike, and Duolingo
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-5 max-w-3xl mx-auto text-sm md:text-base">
          Our alumni of students means everything to us and we're grateful to
          have placed designers in Nasa, Google, Revolut and more amazing teams
          around the world
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-purple-700 transition">
            Enroll Now →
          </button>
          <button className="bg-white border border-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
            See Curriculum
          </button>
        </div>

        {/* Logos */}
        {/* <div className="mt-16 flex flex-wrap justify-center items-center gap-10 opacity-90">
          {companies.map((company, index) => (
            <img
              key={index}
              src={company.logo}
              alt={company.name}
              className="m-h-6 md:h-7  transition"
            />
          ))}
        </div> */}

      </div>
    </section>
  );
}