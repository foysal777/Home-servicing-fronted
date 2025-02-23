import React, { useState } from "react";

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    { title: "24/7 Supports", content: "In our company provide service 24/7 & quick response" },
    { title: "Client’s Reviews", content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { title: "Professional Team", content: "Our professional team is always ready to do your work . In any situation they move fast" },
    { title: "Best Services", content: "Ours best services are Car wash, Plumbing , Construcion etc." },
  ];

  return (
    <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
     
      {/* Right Side Content */}
      <div className="md:w-1/2 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
        <p className="text-gray-600 mt-2">
          Choose us for reliable, personalized service and exceptional results.
        </p>
        <div className="mt-6 space-y-4">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full flex justify-between items-center p-4 font-semibold text-gray-700 focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-600">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>

       {/* Left Side Image */}
       <div className="md:w-1/2 w-full flex justify-center mb-6 md:mb-0">
        <img src="https://img.freepik.com/free-photo/architect-man-showing-something-project-his-colleague-foreman_496169-959.jpg?ga=GA1.1.1673100480.1739595697&semt=ais_hybrid" alt="Construction" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
