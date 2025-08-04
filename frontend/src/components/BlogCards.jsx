import React from 'react';
import blogImage from '../assets/10.jpeg';

const blogPosts = [
  {
    date: 'June 30,2024',
    tag: 'organic',
    title: 'Marketing Guide: 5 Steps to Success.',
    image: blogImage,
  },
  {
    date: 'May 10,2023',
    tag: 'organic',
    title: 'Best way to solve business deal issue.',
    image: blogImage,
  },
  {
    date: 'Jan 10,2022',
    tag: 'organic',
    title: 'Business ideas to grow your business.',
    image: blogImage,
  },
  {
    date: 'Feb 12,2022',
    tag: 'organic',
    title: '31 customer stats know in 2020.',
    image: blogImage,
  },
];

const BlogCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {blogPosts.map((post, index) => (
        <div
          key={index}
          className="relative w-72 h-80 rounded-3xl overflow-hidden shadow-lg group"
        >
          {/* Image Layer */}
          <img
            src={post.image}
            alt="Blog"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:rotate-3 scale-105"
          />

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 rounded-t-3xl p-4">
            <p className="text-xs text-gray-500 mb-1">
              {post.date} – {post.tag}
            </p>
            <h3 className="text-base font-semibold text-gray-800 leading-snug">
              {post.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
