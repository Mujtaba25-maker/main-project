import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function CommunitySection() {
  const members = [
     "https://plus.unsplash.com/premium_photo-1669800502105-c181897af983?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJvbnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1669834759272-a02096c1cc8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJvbnQlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1691453528142-d1342787555c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyb250JTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/1089633230/photo/glasses-girl-in-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=8E6NyAd5AxIGhwr4drzq4jL9fHyw7MZcaFcUd9NnTqI=",
    "https://media.istockphoto.com/id/2189564857/photo/studio-portrait-of-a-serious-young-man-of-latin-american-ethnicity-in-a-brown-sweater.webp?a=1&b=1&s=612x612&w=0&k=20&c=JjPGCUn4GWP25o1pHxXHIIS9hRckL2i2LZZmQrWEfcg=",
    "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=DtB4a1dFa3A7aCqgvRB5NXEqH3ZI-KoNXtqduWv982g=",
    "https://media.istockphoto.com/id/1162621648/photo/portrait-of-young-woman-in-a-studio.jpg?s=612x612&w=0&k=20&c=oo7WswO894waQOLicg5dNqM2m93qCwDP3RMYUzYkU4E=",
    "https://media.istockphoto.com/id/491249655/photo/close-up-portrait-of-a-happy-female-face-smiling.jpg?s=612x612&w=0&k=20&c=UDnOOXnB59girMnW8wCg78k7hq5_drXGN9zDpqxODqI=",
    "https://media.istockphoto.com/id/1934795932/photo/portrait-of-attractive-woman-with-blond-hair-smiling-on-white-background.jpg?s=612x612&w=0&k=20&c=u2ia-gaJq6nbqHrMs9EeztiAIGIE2O521YRQHByPIng=",
    "https://media.istockphoto.com/id/155392258/photo/portrait-of-a-smiling-woman.jpg?s=612x612&w=0&k=20&c=NrEn3jgJNQIsUgOayyapg8I6UCjFdQR1vcHPDhNcCr0=",
    "https://media.istockphoto.com/id/928833200/photo/smiling-portrait-of-a-teenage-girl-in-studio.jpg?s=612x612&w=0&k=20&c=8f9m7_VGTyAsl7BD0yAT4pAClWdIQRQVlStB3pctqHg=",
    "https://media.istockphoto.com/id/491249655/photo/close-up-portrait-of-a-happy-female-face-smiling.jpg?s=612x612&w=0&k=20&c=UDnOOXnB59girMnW8wCg78k7hq5_drXGN9zDpqxODqI=",
    "https://media.istockphoto.com/id/2132700561/photo/portrait-of-indian-young-woman-wearing-casual-kurta-on-white-background-stock-photo.jpg?s=612x612&w=0&k=20&c=UJjfuaXVUT7pLvCND19gwVbs4X8mSdba6DsJHU3z4fw=",
    "https://media.istockphoto.com/id/490575083/photo/teen-portrait.jpg?s=612x612&w=0&k=20&c=4ckaK-wC2hYAsvDLIGlIv1S8jqfg65JeWC0n5GMwzlA=",
    "https://media.istockphoto.com/id/172480097/photo/cheerful-smiling-young-woman-portrait.jpg?s=612x612&w=0&k=20&c=ku2XYvywmMqiWNAnFGps_Q-jqcwpoQCl62aofLEwov8=",
    "https://media.istockphoto.com/id/1394229567/photo/beautiful-black-teen-posing-on-studio-white-background.jpg?s=612x612&w=0&k=20&c=iUnSvP8hOOt4U30Q8UKYUBV-QPl8lyGiCrgS5ABEVRs=",
    "https://media.istockphoto.com/id/612853672/photo/smiling-beautiful-woman.jpg?s=612x612&w=0&k=20&c=fNK4odfs1XxU8aCcxc-YxEBrlQo0AnlGRcBcKkU4RYY=",
  ];

  const allMembers = [...members, ...members];

  return (
    <section className="bg-white py-24 overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-purple-100 text-purple-700">
          Community
        </span>

        <h2 className="text-[32px] md:text-[38px] font-semibold text-gray-900 leading-tight">
          Connect with designers <br /> from 150+ countries
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-sm md:text-base">
          It’s your gateway to a career in design. With Educore, you’ll gain the
          skills, confidence, and portfolio to stand out in the competitive world
          of UI/UX design.
        </p>

        <button className="mt-6 inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition">
          Join community
          <span className="bg-white text-purple-600 rounded-md px-1.5 py-0.5">
            →
          </span>
        </button>
      </div>

      {/* SLIDERS */}
      <div className="relative mt-20 space-y-8 pb-24">
        {/* FADE MASKS */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent z-10" />

        {/* ROW 1 */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
          spaceBetween={24}
          loop
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={9000}
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {allMembers.map((img, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div className="w-28 h-28 rounded-2xl overflow-hidden bg-white shadow-md">
                <img
                  src={img}
                  alt="Community member"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ROW 2 (REVERSE) */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
          spaceBetween={24}
          loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={10000}
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {allMembers.map((img, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div className="w-28 h-28 rounded-2xl overflow-hidden bg-white shadow-md">
                <img
                  src={img}
                  alt="Community member"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}