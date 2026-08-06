import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import type { CtaProps } from "@/types/landing";

interface CtaComponentProps {
  data: CtaProps;
}

export default function CTA({ data }: CtaComponentProps) {
  return (
    <section id="cta" className="bg-[#F5F7FA] py-16">
      <Container className="text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight text-[#263238] sm:text-5xl lg:text-6xl xl:text-[64px]">
  {data.title}
</h2>
        <Button href={data.button.href} className="mt-9">
          {data.button.label}
          <span aria-hidden="true" className="ml-2">-&gt;</span>
        </Button>
      </Container>
    </section>
  );
}
