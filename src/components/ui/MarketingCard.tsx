import Image from "next/image";
import Link from "next/link";

import type { LinkAction } from "@/types/landing";

interface MarketingCardProps {
  image: string;
  title: string;
  action: LinkAction;
  imageAlt?: string;
}

export default function MarketingCard({
  image,
  title,
  action,
  imageAlt = "",
}: MarketingCardProps) {
  return (
    <article className="group relative pb-16">
      <div className="relative aspect-[368/286] overflow-hidden rounded-lg">
  <Image
    src={image}
    alt={imageAlt}
    fill
    className="object-cover"
  />
</div>

     <div className="absolute inset-x-4 -bottom-4 flex min-h-45 flex-col items-center justify-between rounded-lg bg-[#F5F7FA] px-6 py-6 text-center shadow-lg shadow-gray-900/10">
  <h3 className="text-[20px] font-medium leading-8 text-[#717171]">
    {title}
  </h3>

  <Link
    href={action.href}
    className="inline-flex items-center text-base font-semibold text-[#4CAF4F] transition hover:text-[#439947]"
  >
    {action.label}
    <span className="ml-2">&rarr;</span>
  </Link>
</div>
    </article>
  );
}
