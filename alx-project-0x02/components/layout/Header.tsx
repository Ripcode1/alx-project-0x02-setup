import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <Link href="/">ALX Project</Link>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link href="/home" className="hover:text-blue-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-200 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/posts" className="hover:text-blue-200 transition">
                Posts
              </Link>
            </li>
            <li>
              <Link href="/users" className="hover:text-blue-200 transition">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
