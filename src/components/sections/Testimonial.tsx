import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import type { TestimonialProps } from "@/types/landing";

interface TestimonialComponentProps {
  data: TestimonialProps;
}

export default function Testimonial({ data }: TestimonialComponentProps) {
  return (
    <section id="testimonial" className="bg-[#F5F7FA] py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Image */}
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg">
          <Image
            src={data.image}
            alt="Customer success illustration"
            width={420}
            height={420}
            className="h-auto w-full"
          />
        </div>

        {/* Content */}
        <div>
          <blockquote className="text-base leading-7 text-[#6e6c6c]">
            &ldquo;{data.description}&rdquo;
          </blockquote>

          <p className="mt-5 text-lg font-bold text-[#4CAF4F]">
            {data.author.name}
          </p>

          <p className="mt-1 text-base text-[#7f7c7c]">
            {data.author.company}
          </p>

          {/* Logos + Button */}
          <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center">
            {/* Logos */}
            <div className="flex flex-wrap items-center justify-center gap-4 lg:flex-nowrap lg:justify-start lg:gap-5">
              {data.logos.map(({ id, image, alt }) => (
                <span
                  key={id}
                  className="inline-flex h-12 w-12 items-center justify-center"
                >
                  <Image
                    src={image}
                    alt={alt}
                    width={44}
                    height={32}
                    className="h-auto w-auto"
                  />
                </span>
              ))}
            </div>

            {/* Link */}
            <Button
              href={data.link.href}
              variant="ghost"
              className="inline-flex whitespace-nowrap px-0 text-lg font-semibold text-[#4CAF4F] lg:ml-4 lg:text-[20px]"
            >
              {data.link.label}
              <span className="ml-2">&rarr;</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}