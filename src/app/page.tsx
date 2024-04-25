"use client";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import MarqueeContainer from "@/components/MarqueeContainer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center overflow-x-hidden relative">
      <Header />
      <HomePage />
      <Footer />
    </main>
  );
}
