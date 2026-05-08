'use client'

import Link from 'next/link'
import { authClient } from "@/lib/auth-client" ;
import { useRouter } from "next/navigation";
import { useState } from 'react';
import { IoMenu, IoClose, IoLogOut } from 'react-icons/io5';

const Navbar = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/profile", label: "My Profile" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-[#253150]/50">
        {/* Gradient background with glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1020] via-[#111827]/80 to-[#0B1020] pointer-events-none" />
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F8CFF] to-[#7C5CFF] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-lg">NL</span>
              </div>
              <span className="hidden sm:block font-bold text-lg text-[#F3F4F6] group-hover:text-[#4F8CFF] transition-colors">
                NeuroLearn
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#9CA3AF] hover:text-[#F3F4F6] font-medium text-sm transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4F8CFF] to-[#7C5CFF] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Desktop Auth Section */}
            <div className="hidden md:flex items-center gap-6">
              {user ? (
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-[#F3F4F6] font-medium text-sm">
                        {user.name}
                      </p>
                      <p className="text-[#6B7280] text-xs">Learner</p>
                    </div>
                    {user.image && (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4F8CFF] to-[#7C5CFF] overflow-hidden ring-2 ring-[#253150]">
                        <img
                          src={user.image}
                          alt={user.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="btn-secondary flex items-center gap-2 px-6 py-2 text-sm"
                  >
                    <IoLogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link
                    href="/login"
                    className="btn-secondary px-6 py-2 text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="btn-premium px-6 py-2 text-sm font-medium"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#F3F4F6] hover:bg-[#1F2D45] transition-colors"
            >
              {mobileMenuOpen ? (
                <IoClose className="w-6 h-6" />
              ) : (
                <IoMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 z-40 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[#0B1020]/95 border-b border-[#253150]" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="py-8 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-[#F3F4F6] hover:bg-[#1F2D45] font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Auth */}
              <div className="pt-4 border-t border-[#253150] space-y-3">
                {user ? (
                  <>
                    <div className="px-4 py-3 bg-[#151C2F] rounded-xl">
                      <p className="text-[#F3F4F6] font-medium">
                        Hello, {user.name}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full btn-secondary py-3 flex items-center justify-center gap-2"
                    >
                      <IoLogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="w-full block btn-secondary text-center py-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      className="w-full block btn-premium text-center py-3"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;






