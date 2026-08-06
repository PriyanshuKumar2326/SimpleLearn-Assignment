import Image from "next/image";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ClientsProps } from "@/types/landing";

interface ClientsComponentProps {
  data: ClientsProps;
}

export default function Clients({ data }: ClientsComponentProps) {
  const { title, description, logos } = data;

  return (
    <section id="product" className="bg-white py-16">
      <Container>
        <SectionHeading title={title} description={description} />

        <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-7">
          {logos.map(({ id, image, alt }) => (
            <div
              key={id}
              className="flex  items-center justify-center rounded-lg  bg-white px-5  "
            >
              <Image
                src={image}
                alt={alt}
                width={44}
                height={48}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
