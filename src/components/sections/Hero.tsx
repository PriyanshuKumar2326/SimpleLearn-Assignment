import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import type { HeroProps } from "@/types/landing";

interface HeroComponentProps {
  data: HeroProps;
}

export default function Hero({ data }: HeroComponentProps) {
  return (
    <section id="home" className="bg-[#F5F7FA]">
      <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 md:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#4CAF4F]">
            Membership growth platform
          </p>
          <h1 className="text-4xl font-bold leading-tight text-[#263238] sm:text-5xl lg:text-6xl">
            {data.title.line1}
            <span className="block text-[#4CAF4F]">{data.title.line2}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#717171] sm:text-lg">
            {data.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={data.button.href}>{data.button.label}</Button>
            <a
              href="#services"
              className="text-sm font-semibold text-[#263238] transition hover:text-[#4CAF4F]"
            >
              Explore services
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-110">
          <div className="absolute inset-8 rounded-full bg-green-200/35 blur-3xl" />
          <Image
            src={data.image}
            alt="Business growth illustration"
            width={520}
            height={520}
            priority
            className="relative h-auto w-full"
          />
        </div>
      </Container>

      <div className="flex justify-center gap-2 pb-6" aria-label="Hero slides">
        {Array.from({ length: data.slider.total }, (_, index) => {
          const isActive = index + 1 === data.slider.active;

          return (
            <span
              key={index}
              className={`h-2.5 w-2.5 rounded-full ${
                isActive ? "bg-[#4CAF4F]" : "bg-[#4CAF4F]/30"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
