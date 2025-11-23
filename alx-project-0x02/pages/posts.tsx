import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data.slice(0, 12)); // Display first 12 posts
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Posts - ALX Project</title>
        <meta name="description" content="View all posts from JSONPlaceholder API" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">All Posts</h1>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading posts...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <p>Error: {error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  userId={post.userId}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
