"use client";
import BlurText from "@/components/BlurText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-2">
      <section className="flex items-center justify-between gap-8 py-12">
        <div className="flex-1">
          <BlurText 
            text="Hi, I'm Shoaib. I've been building web applications for the last 1+ Years. I've worked with startups, multiple businesses, and large enterprises to build and scale their web applications. Interested in many tech-domain, I prefer to call myself a problem solver. :) When I'm not coding, you'll find me reading Manga/Novels VinlandSaga || RevernedInsanity, ricing my new Fav Linux distro, Let's connect—I'd love to help with website or API project!"
            className="text-lg leading-relaxed"
            animateBy="words"
            delay={100}
          />
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/avatar.jpg"
            alt="Shoaib's Avatar"
            width={300}
            height={300}
            className="rounded-lg"
            priority
          />
        </div>
      </section>
    </div>
  );
}