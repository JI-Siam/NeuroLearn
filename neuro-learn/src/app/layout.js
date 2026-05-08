import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from 'next/font/google'
import { Ubuntu } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
 import { ToastContainer, toast } from 'react-toastify';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto_Slab({
  variable : "--font-roboto-slab" , 
  weight: '400',
  subsets: ['latin'],
}) ; 

const ubuntu = Ubuntu({
  variable : "--font-ubuntu" , 
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "NeuroLearn - Master Your Skills",
  description: "Learn cutting-edge skills from industry experts",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${ubuntu.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-gradient-dark text-text-primary">
       
        <main className="flex-1">
          {children}
        </main>
        <ToastContainer
          theme="dark"
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </body>
    </html>
  );
}
