import React from 'react';

const FlipCard = () => {
  const cardContent = [
    {
      front: "General",
      back: "EMotor, health, fire, miscellinous, travel and women compensation."
    },
    {
      front: "Life Insurance",
      back: "Secure your family's financial future with tailored life insurance plans. Panurgic offers expert guidance to help you choose the best coverage for your needs, ensuring peace of mind and long-term security."
    },
    {
      front: "Claim Settlement",
      back: "Our dedicated legal team simplifies the claim process, ensuring a hassle-free settlement. With expert legal support, we assist in resolving claims efficiently, maximizing your benefits without unnecessary delays."
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* Section Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Explore Interactive Cards</h1>
        <p className="text-gray-600">Hover over the cards below to reveal hidden content on the back side. These cards showcase a flipping animation effect for a sleek design.</p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap items-center justify-center gap-12">
        {cardContent.map((card, index) => (
          <div key={index} className="group relative w-80 h-80 [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg [backface-visibility:hidden] shadow-xl">
                <h2 className="text-2xl font-bold">{card.front}</h2>
              </div>
              {/* Back Side */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-xl">
                <p className="text-center px-6 text-lg">{card.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlipCard;
