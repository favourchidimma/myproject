'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formInfo, setFormInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [finish, setFinish] = useState(false);

  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, email, message } = formInfo;

    if (!firstName || !email || !message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      // Simulate API call delay
      await new Promise((res) => setTimeout(res, 1500));
      setFinish(true);
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-[#0a0a0a] text-white flex flex-col lg:flex-row items-start justify-center py-20 px-6 lg:px-24 gap-20">
      {/* Contact Info */}
      <div className="">
        <h1 className="text-6xl font-extrabold">GET IN TOUCH</h1>
        <p className="text-xl mb-10 leading-relaxed text-neutral-500 ">
          Have any questions or suggestions? We'd love to hear from you! Give us a call or leave your message via the contact form below.
        </p>

        <div className="space-y-6 text-lg">
          {/* <ContactDetail icon={<Mail className="text-black" />} title="Email Address" content="events@ballazz.co" /> */}
          <ContactDetail icon={<Phone className="text-black" />} title="Call Us" content="+91 9112211492" />
          {/* <ContactDetail icon={<MapPin className="text-black" />} title="Address" content="Konibaje - 234 Rd, 234, +234" /> */}
        </div>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#1a0f20] p-10 rounded-xl w-full max-w-xl"
      >
        {finish ? (
          <motion.div
            className="text-2xl font-semibold text-center text-green-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Thank you for your message!
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="sr-only">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formInfo.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  className="w-full p-4 rounded-lg bg-white placeholder-neutral-600 text-gray-900 focus:outline-none"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="sr-only">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formInfo.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full p-4 rounded-lg bg-white placeholder-neutral-600 text-gray-900 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formInfo.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="w-full p-4 rounded-lg bg-white placeholder-neutral-600 text-gray-900 focus:outline-none"
                  required
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formInfo.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-lg bg-white placeholder-neutral-600 text-gray-900 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                value={formInfo.message}
                onChange={handleChange}
                placeholder="Your Message*"
                className="w-full h-40 p-4 rounded-lg bg-white placeholder-neutral-600 text-gray-900 resize-none focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full p-4 bg-white hover:bg-[#7d2e89] transition-colors rounded-lg text-gray-900 font-bold uppercase ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Sending...' : 'Reserve Now'}
            </button>
          </form>
        )}
        <Toaster />
      </motion.div>
    </section>
  );
}

const ContactDetail = ({ icon, title, content }) => (
  <div className="flex items-start gap-4">
    <div className="bg-yellow-500 clip-triangle w-[50px] h-[45px] flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-sm uppercase text-gray-900">{title}</p>
      <p>{content}</p>
    </div>
  </div>
);
