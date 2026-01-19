import React from "react";

export default function Framer() {
  return (
    <div
      id="Framer"
      className="flex justify-center px-4 sm:px-6 lg:px-20 py-20 scroll-mt-[120px]"
    >
      <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/8AHPXm9Y6mI"
          title="That’s Framer: The pro site builder loved by designers"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
}
