import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/services/api/services/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-6">
     <div className="text-center mb-6">
              <h1 className="text-3xl font-bold">
                Our Recent  <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"> Services</span>
              </h1>
              <p className="text-gray-600 mt-2">Each listing is designed to be clear and concise, providing customers</p>
            </div>
     
      <Slider {...settings}>
        {services.map((service) => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              <div className="flex items-center text-yellow-500 mt-2">
                <Star size={16} />
                <span className="ml-1 text-gray-600">{service.rating} (3 Reviews)</span>
              </div>
              <p className="text-gray-700 font-medium mt-2">From £{service.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
