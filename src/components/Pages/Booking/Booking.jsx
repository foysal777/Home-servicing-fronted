import axios from 'axios';
import React, { useEffect, useState } from 'react';


const BookingTable = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchBookings = async () => {
        const token = localStorage.getItem('authToken');
        console.log(token)
  
        try {
          const response = await axios.get('https://home-service-backend-2.vercel.app/booking/api/bookings/', {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          setBookings(response.data);
          setLoading(false); 
        } catch (error) {
          console.error('Error fetching bookings:', error);
          setLoading(false);
        }
      };
  
      fetchBookings();
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center h-screen space-y-4 text-center">
            <div className="animate-spin text-pink-500 rounded-full h-12 w-12 border-t-4 border-pink-500"></div>
            <div>JWT token expired before 5 minutes,<br />so you have to log in again.</div>
          </div>
          
        );
      }
  return (
    <div className='pt-20'>
    <div className="p-6">
      <h2 className="text-4xl text-center text-purple-500 font-semibold mb-8">Booking List</h2>
      <table className="w-full border-collapse border border-pink-500">
        <thead className="bg-gray-100 border border-pink-500">
          <tr>
            <th className="border border-pink-500 p-2">Title</th>
            <th className="border border-pink-500 p-2">Category</th>
            <th className="border border-pink-500 p-2">Image</th>
            <th className="border border-pink-500 p-2">Price</th>
            <th className="border border-pink-500 p-2">Paid</th>
            <th className="border border-pink-500 p-2">Created</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.id}>
              <td className="border p-2">{booking.listing_title}</td>
              <td className="border p-2">{booking.listing_category}</td>
              <td className="border p-2">
                <img src={booking.listing_image} alt="listing" className="w-16 h-16 object-cover" />
              </td>
              <td className="border p-2">${booking.price}</td>
              <td className="border p-2">{booking.paid ? 'Yes' : 'No'}</td>
              <td className="border p-2">{new Date(booking.created_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default BookingTable;
