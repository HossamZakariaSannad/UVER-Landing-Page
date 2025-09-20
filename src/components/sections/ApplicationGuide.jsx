import React from "react";
import IconList from "../../ui/IconList";
import CustomButton from "../../ui/CustomButton";

const ApplicationGuide = () => {
  const guideItems = [
    {
      icon: "🔍",
      title: "Search for Your Ideal College",
      description:
        "Browse through an extensive database of colleges and universities. Refine your search based on location, majors, campus facilities, and more.",
    },
    {
      icon: "💬",
      title: "Chat with Admissions Experts",
      description:
        "Ask questions, seek advice, and gain valuable insights to make informed decisions about your college applications.",
    },
    {
      icon: "👀",
      title: "Track Deadlines and Requirements",
      description:
        "Receive notifications for upcoming deadlines, document requirements, and submission dates.",
    },
    {
      icon: "📝",
      title: "Apply with Confidence",
      description:
        "Utilize convenient form filling features, upload required documents seamlessly, and submit applications electronically.",
    },
    {
      icon: "🎓",
      title: "Plan Your College Future",
      description:
        "Use UVER’s tools to compare offers, evaluate financial aid packages, and make informed decisions.",
    },
    {
      icon: "🎓",
      title:
        "Discover, apply, succeed – UVER app makes college search effortless.",
      image: "/graduation.webp",
      button: "Get Early Access",
    },
  ];

  // polygon approximates a smooth left tab curve (multiple small points),
  // right side remains straight (100% 9% -> 100% 100%).
  const folderClip =
    "polygon(0 0, 20% 0, 28% 3%, 34% 6%, 38% 8%, 42% 9%, 100% 9%, 100% 100%, 0 100%)";

  return (
    <section id="guide" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
       {/* Heading */}
<div className="grid grid-cols-1 md:grid-cols-3 items-center mb-12">
  {/* Left text */}
  <div className="flex justify-start">
    <span className="text-gray-500 border-l-4 border-indigo-500 pl-2">
      How It Works
    </span>
  </div>

  {/* Middle heading */}
  <div className="flex justify-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
      Simple Steps to College Success
    </h2>
  </div>

  {/* Right icon */}
  <div className="flex justify-end">
    <span className="text-4xl">🎓</span>
  </div>
</div>


        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {guideItems.map((item, idx) => {
            const isImageCard = !!item.image;
            return (
              <div
                key={idx}
                // same overall dimensions for every card
                className="relative h-[350px] rounded-xl flex flex-col"
                style={{
                  // for non-image cards apply folder clip + background color
                  ...(isImageCard
                    ? {
                        backgroundColor: "#111827", // gray-900 fallback
                      }
                    : {
                        backgroundColor: "#4F46E5", // indigo-600
                        clipPath: folderClip,
                        WebkitClipPath: folderClip,
                      }),
                }}
              >
                {isImageCard ? (
                  // === Image card: no clip-path, normal rounded rectangle ===
                  <div className="relative flex-1 overflow-hidden rounded-xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {/* overlay for readability */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* content pulled up so it doesn't touch the bottom */}
                    <div className="absolute left-6 right-6 bottom-14">
                      <h3 className="text-base font-semibold text-white mb-3 leading-snug">
                        {item.title}
                      </h3>
                      {item.button && (
                        <CustomButton className="py-2 px-5 text-sm">
                          {item.button} →
                        </CustomButton>
                      )}
                    </div>
                  </div>
                ) : (
                  // === Folder-shaped card content ===
                  <div className="p-6 flex-1 flex items-center text-white">
                    <IconList items={[item]} className="w-full" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApplicationGuide;
