import React from 'react'
import { FaHome } from "react-icons/fa";
import Footer from '../Footer/Footer';

const Contact = () => {

    const contacts = [
        { icon: "📞", title: "Phone", details: ["(888) 888-8888", "(123) 456-7890"] },
        { icon: "✉️", title: "Email Address", details: ["truelysell@example.com", "johnsmith@example.com"] },
        { icon: "📍", title: "Address", details: ["367 Hillcrest Lane, Irvine, California, United States"] },
    ];


    return (
        <div className='pt-24'>
            <div className="text-center mb-6 pt-10">
                <h2 className="text-3xl font-bold text-gray-900">Contact us</h2>
                <div className="flex justify-center items-center text-pink-600 mt-1">
                    <FaHome onClick={() => { navigate('/') }} className="mr-2" />
                    <span className="text-gray-500"> &gt; Contact us</span>
                </div>
            </div>

            <section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contacts.map((contact, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105">
                            <div className="text-pink-500 text-4xl mb-3">{contact.icon}</div>
                            <h2 className="text-xl font-semibold">{contact.title}</h2>
                            {contact.details.map((detail, i) => (
                                <p key={i} className="text-gray-500">{detail}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </section >

            {/* get in touch  */}

            <section className='p-14'>

                <div className="pt-22  grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="overflow-hidden rounded-lg">
                        <img src="https://truelysell-wp.dreamstechnologies.com/wp-content/uploads/2024/01/contact-us.png" alt="Cleaning Service" className="w-full h-full object-cover transform transition duration-300 hover:scale-105" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Get In Touch</h1>
                        <p className="text-gray-500 mb-6">Aliquam lorem ante, dapibus in, viverra quis</p>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Enter Your Full Name" className="p-3 border border-pink-500 rounded-lg w-full" />
                                <input type="email" placeholder="Enter Email Address" className="p-3 border border-pink-500 rounded-lg w-full" />
                            </div>
                            <input  type="text" placeholder="Enter Phone Number" className="p-3 border border-pink-500 rounded-lg w-full" />
                            <textarea placeholder="Enter your Comments" className="p-3 border border-pink-500 rounded-lg w-full h-32"></textarea>
                            <button className="bg-pink-500 text-white px-6 py-3 rounded-lg">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            <section>
                <Footer></Footer>
            </section>

        </div >
    )
}

export default Contact
