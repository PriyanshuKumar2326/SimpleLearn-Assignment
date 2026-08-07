import Image from "next/image";

import Container from "@/components/ui/Container";
import type { StatisticsProps } from "@/types/landing";

interface AchievementsProps {
  data: StatisticsProps;
}

export default function Achievements({ data }: AchievementsProps) {
  return (
    <section id="achievements" className="bg-[#F5F7FA] py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold leading-tight text-[#4D4D4D] sm:text-4xl">
            {data.title.line1}
            <span className="block text-[#4CAF4F]">
              {data.title.line2}
            </span>
          </h2>

          <p className="mt-4 text-base text-[#717171]">
            {data.description}
          </p>
        </div>

        {/* Statistics */}
        <dl className="grid gap-8 sm:grid-cols-2">
          {data.items.map(({ id, image, alt, value, label }) => (
            <div key={id} className="flex items-center gap-4">
              <Image
                src={image}
                alt={alt}
                width={48}
                height={48}
              />

              <div>
                <dt className="text-3xl font-bold text-[#4D4D4D]">
                  {value}
                </dt>

                <dd className="text-sm text-[#717171]">
                  {label}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}