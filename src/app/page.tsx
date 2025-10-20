"use client";
import BlurText from "@/components/BlurText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <section id="hero">
        <div className="mx-auto w-full space-y-8">
          <div className="gap-2 flex">
            <div className="flex-col flex w-[70%] space-y-1.5">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                hi, i'm Shoaib 👋
              </h1>
              <p className="max-w-[600px] md:text-xl text-muted-foreground">
                Open Source Contributor
              </p>
            </div>
            <div className="w-[30%] flex justify-start">
              <Image
                src="/avatar.jpg"
                alt="Shoaib's Avatar"
                width={300}
                height={300}
                className="rounded-full size-28 border"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed mb-4">
          Hi, I'm Shoaib. I've been building web applications for the last 1+
          Years. I've worked with startups, multiple businesses, and large
          enterprises to build and scale their web applications. Interested in
          many tech-domain, I prefer to call myself a problem solver. :)
        </p>
        <p className="text-lg leading-relaxed">
          When I'm not coding, you'll find me reading Manga/Novels{" "}
          <strong>VinlandSaga || RevernedInsanity</strong>, ricing my new Fav
          Linux distro. Let's connect—I'd love to help with website or API
          project!
        </p>
      </section>
    </div>
  );
}
