import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Replace with your real Stripe public key
const stripePromise = loadStripe("pk_test_51RA0154Ft3OiftBEBdRpJAIRlRHPws30OrFnt6a8DBRDrCHT0dRv4KYXA0oIpFErU1Q3wYhyiae79m4UxUEFTy5R00vD5wDRHa");

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedListing, setSelectedListing] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  useEffect(() => {
    setLoading(true);

    fetch(`http://127.0.0.1:8000/categoriesPage/api/category/${categoryName}/`)
      .then((response) => response.json())
      .then((data) => {
        setCategoryDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching category details:", error);
        setLoading(false);
      });
  }, [categoryName]);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch(
      "http://127.0.0.1:8000/categoriesPage/create-checkout-session/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ listing_id: selectedListing.id }),
      }
    );

    const session = await response.json();
    if (session.id) {
      stripe.redirectToCheckout({ sessionId: session.id });
    } else {
      alert("Failed to create checkout session");
    }
  };

  
  const handleBkashConfirm = () => {
    const token = localStorage.getItem("authToken");
    console.log("Token:", token);
  
    if (!token || !selectedListing) {
      toast.error("Missing token or listing data");
      return;
    }
  
    axios
      .post(
        "http://127.0.0.1:8000/booking/api/bookings/",
        { 
   
        listing_title: selectedListing.title,
        listing_category: selectedListing.categoryName || categoryName, 
        listing_image: selectedListing.image,
        price: selectedListing.price,
        paid: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        toast.success("Payment Successful via bKash!");
        setSelectedPayment(null);
        setSelectedListing(null);
        // navigate(`/category/${categoryName}`);
        navigate(`/my-booking`);
      })
      .catch((error) => {
        console.error("API Error:", error.response?.data); 
       
      });
  };
  
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-pink-500"></div>
      </div>
    );
  }

  if (!categoryDetails) {
    return <div className="text-center text-gray-600">No data found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-24">
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center">{categoryDetails.name}</h1>
      <p className="text-gray-600 text-center mb-4">{categoryDetails.description}</p>

      <div className="space-y-6">
        {categoryDetails.listings.map((listing, index) => (
          <div
            key={index}
            className="bg-white shadow-lg border-2 border-pink-400 rounded-lg overflow-hidden flex h-56 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={listing.image}
              alt={listing.title}
              className="w-48 h-full object-cover"
            />

            <div className="p-6 flex-1">
              <h2 className="text-xl font-semibold">{listing.title}</h2>
              <p className="text-gray-500">{listing.location}</p>
              <div className="flex items-center mt-2">
                <img
                  src={listing.image}
                  alt="User"
                  className="w-6 h-6 rounded-full mr-2"
                />
                <span className="text-red-500">❤️ 0</span>
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between items-end">
              <p className="text-lg font-bold text-gray-900">£{listing.price}</p>
              <button
                onClick={() => setSelectedListing(listing)}
                className="bg-pink-500 text-white px-5 py-2 rounded-md hover:bg-pink-600 transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🔽 Modal: Payment Options */}
      {selectedListing && !selectedPayment && (
        <div className="fixed inset-0 bg-pink-500 bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white border-pink-500 rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Choose Payment Method
            </h2>

            <div className="flex justify-around mb-4">
              <img
                src="https://freelogopng.com/images/all_img/1656234782bkash-app-logo.png"
                alt="bKash"
                className="h-16 rounded-xl border-2 border-pink-500 cursor-pointer"
                onClick={() => setSelectedPayment("bkash")}
              />
              <img
                src="https://play-lh.googleusercontent.com/EQC9NtbtRvsNcU1r_5Dr8pWm3hPfN3OjGjzkOqzCEPDJvqBGKyfU9-a2ajNtcrIg1rs=w600-h300-pc0xffffff-pd"
                alt="Nagad"
                className="h-16 rounded-xl "
                onClick={() => setSelectedPayment("bkash")}
              />
              <img
                src="https://i0.wp.com/nextcareit.com/wp-content/uploads/2024/05/Rocket-Logo.png?fit=300%2C300&ssl=1"
                alt="Rocket"
                className="h-16 rounded-xl "
                onClick={() => setSelectedPayment("bkash")}
                
              />
            </div>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setSelectedListing(null)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCheckout}
                className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
              >
                Pay with Card
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔽 Modal: bKash Confirm */}
      {selectedPayment === "bkash" && selectedListing && (
        <div className="fixed inset-0 bg-blue-100 bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl text-center">
            <h2 className="text-lg font-bold text-black mb-4">Confirm bKash Payment</h2>
            <img
              src={selectedListing.image}
              alt={selectedListing.title}
              className="h-50 w-fit object-cover rounded mb-4"
            />
            <p className="text-black font-medium mb-2">Price: £{selectedListing.price}</p>

            <div className="flex justify-between">
              <button
                onClick={() => setSelectedPayment(null)}
                className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-400"
              >
                Back
              </button>
              <button
                
                onClick={handleBkashConfirm}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
