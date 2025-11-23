import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';
import { GetStaticProps } from 'next';

interface PostsPageProps {
  posts: PostProps[];
}

export default function Posts({ posts }: PostsPageProps) {
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
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    
    return {
      props: {
        posts: data.slice(0, 12), // Get first 12 posts
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
};
