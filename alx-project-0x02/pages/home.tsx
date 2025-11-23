import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { PostData } from '@/interfaces';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostData[]>([]);

  const handleAddPost = (post: PostData) => {
    setPosts([...posts, post]);
  };

  return (
    <>
      <Head>
        <title>Home - ALX Project</title>
        <meta name="description" content="Home page with dynamic content" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Home Page</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Create New Post
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card
              title="Welcome to Next.js"
              content="Build amazing web applications with Next.js, React, and TypeScript. This framework provides server-side rendering, static site generation, and more."
            />
            <Card
              title="TypeScript Power"
              content="TypeScript adds type safety to your JavaScript code, helping you catch errors early and write more maintainable code."
            />
            <Card
              title="Tailwind CSS"
              content="Rapidly build modern websites with Tailwind's utility-first CSS framework. Style your components with ease."
            />
          </div>

          {posts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                  <Card key={index} title={post.title} content={post.content} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </>
  );
}
