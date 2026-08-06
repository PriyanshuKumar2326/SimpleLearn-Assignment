import Container from "@/components/ui/Container";
import MarketingCard from "@/components/ui/MarketingCard";
import SectionHeading from "@/components/ui/SectionHeading";
import type { BlogProps } from "@/types/landing";

interface BlogComponentProps {
  data: BlogProps;
}

export default function Blog({ data }: BlogComponentProps) {
  return (
    <section id="blog" className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title={data.title} description={data.description} />

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {data.cards.map((card) => (
            <MarketingCard
              key={card.id}
              image={card.image}
              title={card.title}
              action={card.button}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
