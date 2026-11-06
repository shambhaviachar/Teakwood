import React, { useState } from 'react';
import { BLOG_POSTS, RESORT_INFO } from '../data/resortData';
import { BlogItem } from '../types';
import { Clock, User, ArrowLeft, ArrowRight, Share2, Tag, Calendar, Check } from 'lucide-react';

export const BlogsPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogItem | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleShare = (post: BlogItem) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (selectedPost) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <button
          onClick={() => setSelectedPost(null)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#5C3A21] hover:text-[#432A17] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-[#8B6B4E]">
            <span className="font-semibold text-[#5C3A21]">{selectedPost.category}</span>
            <span aria-hidden="true">·</span>
            <span>{selectedPost.date}</span>
            <span aria-hidden="true">·</span>
            <span>{selectedPost.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1810] leading-tight">
            {selectedPost.title}
          </h1>

          <div className="flex items-center justify-between py-3 border-y border-[#E8DFC8] text-xs text-[#7A695B]">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#5C3A21]" />
              <span>Written by {selectedPost.author}</span>
            </div>
            <button
              onClick={() => handleShare(selectedPost)}
              className="flex items-center gap-1.5 hover:text-[#5C3A21] cursor-pointer font-medium"
            >
              {copied ? <Check className="w-4 h-4 text-[#2E5A36]" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-[#24160E]/10 border border-[#E8DFC8]">
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-stone max-w-none text-[#4A3B32] space-y-4 text-sm leading-relaxed">
          {selectedPost.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl font-serif font-bold text-[#2B1810] pt-4">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            return (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-[#E8DFC8] flex items-center gap-2">
          <Tag className="w-3.5 h-3.5 text-[#8B6B4E]" />
          <div className="flex items-center gap-2 text-xs text-[#7A695B]">
            {selectedPost.tags.map((tag, i) => (
              <span key={i}>
                #{tag}
                {i < selectedPost.tags.length - 1 && <span className="ml-2">·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 pb-16">
      {/* Banner */}
      <section className="bg-[#2C1810] text-[#FAF7F2] py-16 px-4 sm:px-6 lg:px-8 border-b border-[#3E2419]">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
            Travel & Outing Stories
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            Teakwood Resort Blog
          </h1>
          <p className="text-sm sm:text-base text-[#D8C7B6] max-w-2xl leading-relaxed font-light">
            Insights, travel advice, and event planning tips to make the most of your countryside weekend escapes and team offsites.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-2xl border border-[#E8DFC8] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                <div className="aspect-[16/10] overflow-hidden bg-[#24160E]/10">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#8B6B4E]">
                    <span className="font-semibold text-[#5C3A21]">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-lg font-serif font-bold text-[#2B1810] group-hover:text-[#5C3A21] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-[#6D584B] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#E8DFC8]/60 flex items-center justify-between text-xs font-semibold text-[#5C3A21]">
                <span>Read Full Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
