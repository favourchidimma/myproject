"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Nights That Changed the Game",
    excerpt: "Experience the energy and unforgettable moments from our most iconic events...",
    image: "/behind scene.jpg",
    slug: "top-5-nights",
  },
  {
    id: 2,
    title: "Behind the Scenes with the DJ",
    excerpt: "Go backstage with our resident DJs and discover how they create the vibe...",
    image: "/dj.jpg",
    slug: "behind-the-scenes",
  },
  {
    id: 3,
    title: "VIP Culture: Why It’s Worth It",
    excerpt: "Ever wondered what makes VIP experiences at Nightlife so special? Here's the scoop...",
    image: "/vipculture.jpg",
    slug: "vip-culture",
  },
];

export default function BlogPage() {
  return (
    <div className="text-white bg-black min-h-screen">
      <div className="relative h-[60vh] w-full">
  <Image
    src="/blogimage.jpg"
    alt="Blog Hero"
    fill
    priority
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-center px-4">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold"
    >
      The Nightlife Journal
    </motion.h1>
  </div>
</div>

      <div>
        <button className="bg-purple-500 rounded px-2 font-thin text-sm">
            FEATURED
        </button>
      </div>
      <div>
        <p>
          Unveiling the Nitelclub Experienc - A Nightclub Redefined!
        </p>
      </div>
      <div>
        <p>DECEMBER 18 2025</p>
      </div>
      <div>
        <p className="w-">
          Immerse yourself in a world where music, dance, and ambiance converge, redefining nightlife - read more about the NITECLUB Experience and embark on an extraordinary journey!
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-pink-500/30 transition-shadow"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={500}
              height={300}
              className="object-cover w-full h-60"
            />
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-400">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block text-pink-500 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <div 
  className="relative bg-cover bg-center w-auto h-60 mt-20 flex flex-col justify-center items-center text-center px-6 opacity-60"
  style={{ backgroundImage: "url('/beatsnoop.jpg')" }}
>
  <p className="text-white font-bold text-3xl md:text-5xl">
    Never miss a show of your favorite artist
  </p>
  <form className="bg-white text-red-900 w-full max-w-lg flex flex-col sm:flex-row items-center mt-6 p-3 rounded-2xl shadow-lg">
    <input 
      type="text" 
      placeholder="Your Email" 
      className="flex-1 px-4 py-2 border-none outline-none text-gray-700 w-full sm:w-auto"
    />
    <button 
      type="submit" 
      className="bg-purple-600 text-white px-5 py-2 rounded-lg mt-3 sm:mt-0 sm:ml-3 hover:bg-purple-700 transition cursor-pointer"
    >
      Subscribe
    </button>
  </form>
  <div>
     <p>Get notifications delivered to your email weekly</p>
  </div>
</div>
    </div>
  );
}
