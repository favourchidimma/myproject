"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Form from "./form";

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Nights That Changed the Game",
    excerpt:
      "Experience the energy and unforgettable moments from our most iconic events...",
    image: "/behindscene.jpg",
    slug: "top-5-nights",
  },
  {
    id: 2,
    title: "Behind the Scenes with the DJ",
    excerpt:
      "Go backstage with our resident DJs and discover how they create the vibe...",
    image: "/dj.jpg",
    slug: "behind-the-scenes",
  },
  {
    id: 3,
    title: "VIP Culture: Why It’s Worth It",
    excerpt:
      "Ever wondered what makes VIP experiences at Nightlife so special? Here's the scoop...",
    image: "/vipculture.jpg",
    slug: "vip-culture",
  },
  {
    id: 4,
    title: "Comedy Nights: Laughter & Lights",
    excerpt:
      "Relive the best moments from our sold-out comedy nights and what makes them unique.",
    image: "/comedy.jpg",
    slug: "comedy-nights",
  },
  {
    id: 5,
    title: "Movie Nights Under the Stars",
    excerpt: "How our outdoor movie nights became the talk of the town.",
    image: "/movienight.jpg",
    slug: "movie-nights",
  },
  {
    id: 6,
    title: "Meet the Team: Faces Behind the Fun",
    excerpt:
      "Get to know the passionate team making every night unforgettable.",
    image: "/team.jpg",
    slug: "meet-the-team",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-black text-white min-h-screen">
     
      <motion.div
       className="relative h-screen flex items-center inset-0  bg-opacity-40 justify-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/club-bg.jpg')" }}        
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="inset-0 bg-opacity-60 flex items-center justify-center px-4 relative z-10 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl flex items-center py-60 justify-center text-center font-bold"
          >
            The Nightlife Journal
          </motion.h1>
        </motion.div>
      </motion.div>

     
      <div className="max-w-4xl mx-auto px-4 py-12 text-center space-y-4">
       <button
  onClick={() =>
    document.getElementById("featured-posts")?.scrollIntoView({ behavior: "smooth" })
  }
  className="bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold tracking-wider"
>
  FEATURED
</button>

        <p className="text-xl sm:text-2xl font-semibold">
          Unveiling the Nitelclub Experience – A Nightclub Redefined!
        </p>
        <p className="text-sm text-neutral-400">December 18, 2025</p>
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
          Immerse yourself in a world where music, dance, and ambiance converge,
          redefining nightlife – read more about the NITECLUB Experience and
          embark on an extraordinary journey!
        </p>
      </div>

   
            <div
        id="featured-posts"
        className="max-w-7xl mx-auto px-4 pb-20 grid gap-10 md:grid-cols-3"
      >

        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 20px rgba(128, 90, 213, 0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-neutral-900 rounded-2xl overflow-hidden shadow-md cursor-pointer group transition-all"
          >
            <div className="overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-60"
                />
              </motion.div>
            </div>
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-400 text-sm">{post.excerpt}</p>
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3 }}
                className="inline-block text-purple-400 font-medium"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-purple-700 hover:underline"
                >
                  Read More →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <Form />
    </div>
  );
}
