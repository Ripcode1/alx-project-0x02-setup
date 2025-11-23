import Head from 'next/head';
import Header from '@/components/layout/Header';
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <Head>
        <title>ALX Project 0x02 - Welcome</title>
        <meta name="description" content="Next.js project with TypeScript and Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Welcome to ALX Project 0x02
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A modern Next.js application with TypeScript and Tailwind CSS featuring reusable components, 
              routing, and API integration.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="/home"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
