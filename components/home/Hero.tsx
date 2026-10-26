"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { cvProfile } from "@/data/cv";

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto] md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {cvProfile.title}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
          Hi, I&apos;m {cvProfile.name.split(" ")[0]}.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
          I build full-stack web and mobile apps, from low-code platforms to
          hand-written TypeScript, and ship each one with a live demo. Browse
          all 20 below.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            View projects <ArrowRight size={18} aria-hidden />
          </a>
          <a
            href={cvProfile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface px-6 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto w-48 sm:w-56 md:w-72"
      >
        <Image
          src="/brandon.jpg"
          alt={`Portrait of ${cvProfile.name}`}
          width={377}
          height={548}
          priority
          className="h-auto w-full rounded-3xl border border-border object-cover shadow-lg"
        />
      </motion.div>
    </section>
  );
}
