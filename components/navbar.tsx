import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo/Brand */}
        <Link href="/" className="text-xl font-bold hover:text-blue-600">
          My Ecommerce
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
        </div>

        {/* Right side actions (cart, user menu, etc.) */}
        <div className="flex items-center space-x-4">
          {/* Add cart icon, user menu, etc. here */}
        </div>
      </div>
    </nav>
  );
};
