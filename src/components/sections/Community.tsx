import Image from "next/image";

import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import type { CommunityProps } from "@/types/landing";

interface CommunityComponentProps {
  data: CommunityProps;
}

export default function Community({ data }: CommunityComponentProps) {
  return (
    <section id="services" className="bg-white py-16">
      <Container>
        <SectionHeading
          title={data.title}
          description={data.description}
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {data.cards.map(({ id, image, alt, title, description }) => (
            <Card
              key={id}
              className="rounded-lg p-8 text-center transition-all "
            >
              <Image
                src={image}
                alt={alt}
                width={65}
                height={56}
                className="mx-auto"
              />

              <h3 className="mt-5 text-xl font-bold leading-tight text-[#263238]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#717171]">
                {description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}