import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function About() {
  return (
    <>
      <Head>
        <title>About - ALX Project</title>
        <meta name="description" content="Learn more about this project" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">About This Project</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This is a comprehensive Next.js project built with TypeScript and Tailwind CSS. 
              It demonstrates modern web development practices including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Server-side rendering and static site generation</li>
              <li>TypeScript for type-safe code</li>
              <li>Tailwind CSS for responsive styling</li>
              <li>Reusable component architecture</li>
              <li>API integration with JSONPlaceholder</li>
              <li>Dynamic routing and navigation</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Button Component Examples</h3>
            <p className="text-gray-600 mb-4">
              Below are examples of our reusable Button component with different sizes and shapes:
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="small" shape="rounded-sm">
                Small Button
              </Button>
              <Button size="medium" shape="rounded-md">
                Medium Button
              </Button>
              <Button size="large" shape="rounded-full">
                Large Button
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">Next.js 14</h3>
                <p className="text-gray-600 text-sm">
                  React framework for production-grade applications
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">TypeScript</h3>
                <p className="text-gray-600 text-sm">
                  Typed superset of JavaScript for better development
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-800 mb-2">Tailwind CSS</h3>
                <p className="text-gray-600 text-sm">
                  Utility-first CSS framework for rapid UI development
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
