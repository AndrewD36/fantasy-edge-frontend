import Link from 'next/link';
import { Menu } from 'lucide-react';

const links = [
  { href: '/players', label: 'Players' },
  { href: '/rankings', label: 'Rankings' },
  { href: '/optimizer', label: 'Optimizer' },
]

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              🏈 Fantasy Edge
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link 
                href={link.href as any} 
                className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
}