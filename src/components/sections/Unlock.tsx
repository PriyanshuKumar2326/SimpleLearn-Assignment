import Image from "next/image";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import type { FeatureProps } from "@/types/landing";

interface UnlockProps {
  data: FeatureProps;
}

export default function Unlock({ data }: UnlockProps) {
  return (
    <section id="features" className="bg-white py-16">
      <Container className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="mx-auto w-full max-w-sm">
          <Image
            src={data.image}
            alt=""
            width={420}
            height={420}
            className="h-auto w-full"
          />
        </div>

        <div className="max-w-xl">
          <h2 className="text-3xl font-bold leading-tight text-[#263238] sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#717171]">
            {data.description}
          </p>
          <Button href={data.button.href} className="mt-8">
            {data.button.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
