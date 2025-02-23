import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Search and Browse",
      description:
        "Customers can browse or search for specific products or services using categories, filters, or search bars.",
      icon: "https://truelysell-wp.dreamstechnologies.com/wp-content/uploads/2024/10/about-hands-1.svg",
    },
    {
      number: "02",
      title: "Add to Cart or Book Now",
      description:
        "Customers can add items to their shopping cart. For services, they may select a service and proceed to book.",
      icon: "https://truelysell-wp.dreamstechnologies.com/wp-content/uploads/2024/10/about-documents-2.svg",
    },
    {
      number: "03",
      title: "Amazing Places",
      description:
        "Customers can explore amazing places and enjoy seamless experiences by booking services online.",
      icon: "https://truelysell-wp.dreamstechnologies.com/wp-content/uploads/2024/10/about-book-1.svg",
    },
  ];

  return (
    <div className="bg-white flex justify-center items-center min-h-screen p-6">
      <div className="text-center max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        <p className="text-gray-600 mt-2">
          Straightforward process designed to make your experience seamless and hassle-free.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-12 ">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md text-center transform transition-transform duration-300 hover:scale-80">
              <span className="text-pink-500 text-5xl font-bold">{step.number}</span>
              <div className="mt-4 flex justify-center">
                <img src={step.icon} alt={step.title} className="w-16 h-16" />
              </div>
              <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-500 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
