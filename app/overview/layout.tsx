"use client"
import Navbar from "../components/navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="w-full h-full">
        <Navbar />
        { children }
      </div>
    );
  }