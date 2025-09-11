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
      await new Promise((res) => setTimeout(res, 1500));
      setFinish(true);
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col lg:flex-row items-start justify-center py-20 px-6 lg:px-24 gap-20">
      <div className="max-w-lg space-y-6">
        <h1 className="text-5xl font-extrabold">Get in Touch</h1>
        <p className="text-lg text-neutral-400 leading-relaxed">
          Have any questions or suggestions? We’d love to hear from you. Call us or drop a message using the form.
        </p>

        <div className="space-y-4 text-base">
          <ContactDetail icon={<Phone className="text-black" />} title="Call Us" content="+91 9112211492" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-[#1a0f20] p-10 rounded-2xl w-full max-w-xl shadow-lg"
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
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="firstName"
                type="text"
                placeholder="First Name*"
                value={formInfo.firstName}
                onChange={handleChange}
                className="flex-1 p-4 rounded-lg bg-white placeholder-neutral-600 text-gray-900 focus:outline-none"
                required
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formInfo.lastName}
                onChange={handleChange}
                className="flex-1 p-4 rounded-lg bg-white placeholder-neutral-600 text-gray-900 focus:outline-none"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="email"
                type="email"
                placeholder="Email*"
                value={formInfo.email}
                onChange={handleChange}
                className="flex-1 p-4 rounded-lg bg-white placeholder-neutral-600 text-gray-900 focus:outline-none"
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formInfo.phone}
                onChange={handleChange}
                className="flex-1 p-4 rounded-lg bg-white placeholder-neutral-600 text-gray-900 focus:outline-none"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message*"
              value={formInfo.message}
              onChange={handleChange}
              className="w-full h-40 p-4 rounded-lg bg-white placeholder-neutral-600 text-gray-900 resize-none focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-4 bg-purple-600 text-white rounded-lg font-bold uppercase tracking-wide hover:bg-purple-700 transition ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Sending...' : 'Send Message'}
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
      <p className="text-sm uppercase text-gray-900 font-semibold">{title}</p>
      <p>{content}</p>
    </div>
  </div>
);
