import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Stoic Genesis</title>
        <meta name="description" content="Stoic Genesis: Calm Over Chaos. Streetwear inspired by Stoic philosophy." />
        <meta property="og:title" content="Stoic Genesis" />
        <meta property="og:description" content="Calm Over Chaos" />
        <meta property="og:image" content="/logo-stoic-genesis.jpg" />
      </Head>
      
      <main className="bg-black text-white min-h-screen font-serif">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen px-4 text-center">
          <Image
            src="/logo-stoic-genesis.jpg"
            alt="Stoic Genesis Logo"
            width={200}
            height={200}
            className="mb-6"
            priority
          />
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Stoic Genesis
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mt-4 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Calm Over Chaos
          </motion.p>
          <motion.a
            href="#story"
            className="mt-8 px-6 py-3 bg-green-900 hover:bg-green-700 transition-colors rounded-full text-white uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            aria-label="Explore Stoic Genesis Story"
          >
            Explore
          </motion.a>
        </section>

        {/* Story Section */}
        <section
          id="story"
          className="max-w-4xl mx-auto px-6 py-20 text-center text-gray-200"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Philosophy Meets Streetwear
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Stoic Genesis is more than a brand — it’s a mindset. Inspired by ancient
            Greek and Roman wisdom, we craft modern streetwear that reflects timeless
            values: resilience, purpose, and inner peace. Each piece is designed with
            intention, encouraging wearers to move through the world with calm over chaos.
          </motion.p>
        </section>

        {/* Footer */}
        <footer className="bg-green-900 text-white py-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Stoic Genesis. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
