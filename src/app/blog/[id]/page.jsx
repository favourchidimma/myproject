"use client";
import {use} from 'react'; 

import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { motion } from "framer-motion";

export default function BlogPostPage({ params }) {
  const { id } = use(params);

  // Find the blog post
  const post = blogPosts.find((p) => p.slug === id);
  if (!post) return notFound();

  const related = blogPosts.filter((p) => p.slug !== id).slice(0, 2);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <motion.div
        className="relative h-[60vh] md:h-[70vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center px-4 max-w-2xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">
            {post.date}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {post.title}
          </h1>
        </motion.div>
      </motion.div>

      {/* Subtitle / Intro */}
      {post.subtitle && (
        <motion.div
          className="max-w-3xl mx-auto px-6 py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-300 italic leading-relaxed">
            {post.subtitle}
          </p>
        </motion.div>
      )}

      {/* Blog Content */}
      <motion.div
        className="prose prose-invert prose-lg max-w-3xl mx-auto px-6 pb-16 prose-headings:tracking-wide prose-p:leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Extra Inline Images */}
        {post.extraImages &&
          post.extraImages.map((img, i) => (
            <motion.div
              key={i}
              className="my-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <img
                src={img}
                alt={`Extra ${i + 1}`}
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </motion.div>
          ))}
      </motion.div>

      {/* Related Posts */}
      <motion.div
        className="border-t border-gray-800 py-16 px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          More from the Journal
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {related.map((r, i) => (
            <motion.div
              key={r.slug}
              className="bg-neutral-900 rounded-2xl overflow-hidden shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <Link href={`/blog/${r.slug}`} className="flex flex-col h-full group">
                <div className="overflow-hidden h-56">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-purple-400 transition">
                      {r.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-2">{r.date}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
