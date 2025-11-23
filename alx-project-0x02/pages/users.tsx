import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';
import { GetStaticProps } from 'next';

interface UsersPageProps {
  users: UserProps[];
}

export default function Users({ users }: UsersPageProps) {
  return (
    <>
      <Head>
        <title>Users - ALX Project</title>
        <meta name="description" content="View all users from JSONPlaceholder API" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">All Users</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    return {
      props: {
        users: data,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    return {
      props: {
        users: [],
      },
    };
  }
};
