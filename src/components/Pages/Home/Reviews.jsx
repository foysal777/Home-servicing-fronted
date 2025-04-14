import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Reviews() {
    const [providers, setProviders] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch("https://home-service-backend-2.vercel.app/review/reviews/")
            .then((response) => response.json())
            .then((data) => setProviders(data));
    }, []);

    const handleDelete = (id) => {
        fetch(`https://home-service-backend-2.vercel.app/review/reviews/${id}/`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    setProviders(providers.filter((provider) => provider.id !== id));
                }
            })
            .catch((error) => console.error("Error deleting review:", error));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? providers.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === providers.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="text-center p-10 relative">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold">
                Our Genuine <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Reviewers</span>
              </h1>
              <p className="text-gray-600 mt-2">Each listing is designed to be clear and concise, providing customers</p>
            </div>
            <div className="relative max-w-5xl mx-auto overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {providers.map((provider, index) => (
                        <div
                            key={index}
                            className="transform transition-transform duration-300 hover:scale-80 min-w-full border border-pink-500 rounded-lg p-6 flex flex-col items-center text-center shadow-sm"
                        >
                            <div className="flex items-center gap-1 mb-2">
                               
                                    <span  className="text-pink-500">{provider.rating} </span>
                                
                            </div>
                            <h3 className="font-semibold text-lg">{provider.review_title}</h3>
                            <p className="text-gray-500 italic">"{provider.review_text}"</p>
                            <div className="flex items-center gap-2 mt-3">
                                <img
                                    src={provider.image}
                                    alt={provider.name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <p className="font-medium text-pink-500">{provider.name}</p>
                            </div>
                            <p className="text-sm text-gray-900">{provider.date_posted}</p>
                            {/* <button
                                onClick={() => handleDelete(provider.id)}
                                className="mt-3 px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                                Delete
                            </button> */}
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
            >
                <FaChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
            >
                <FaChevronRight size={20} />
            </button>
        </div>
    );
}
