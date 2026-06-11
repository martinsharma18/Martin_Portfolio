import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThreeBackground from '@/components/ThreeBackground';

export default function Home() {
  return (
    <>
      <Head>
        <title>Martin Sharma - Portfolio</title>
        <meta name="description" content="Portfolio website of Martin Sharma - Backend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThreeBackground />
      <Navbar />
      <main className="min-h-screen text-gray-900 dark:text-white">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
} 