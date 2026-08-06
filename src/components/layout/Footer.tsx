import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import { FooterProps } from "@/types/landing";

interface FooterComponentProps {
  data: FooterProps;
}

export default function Footer({
  data: { logo, copyright, socials, company, support, newsletter },
}: FooterComponentProps) {
  return (
    <footer className="bg-[#263238] py-16 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[2fr_1fr_1fr_1.3fr]">

          {/* Left */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src={logo.image}
                alt={logo.alt}
                width={44}
                height={30}
                style={{ width: "auto", height: "auto" }}
              />
              <span className="text-3xl pl-1 font-semibold">{logo.text}</span>
            </Link>

            <div className="mt-10 space-y-2 text-sm text-[#F5F7FA]">
              {copyright.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>

            <div className="mt-10 flex gap-4">
              {socials.map(({ id, icon, href }) => (
                <Link
                  key={id}
                  href={href}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#4CAF4F]"
                >
                  <Image
                    src={icon}
                    alt=""
                    width={18}
                    height={18}
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Company
            </h3>

            <ul className="space-y-4">
              {company.map(({ id, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="text-sm text-[#F5F7FA] hover:text-[#4CAF4F]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Support
            </h3>

            <ul className="space-y-4">
              {support.map(({ id, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="text-sm text-[#F5F7FA] hover:text-[#4CAF4F]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              {newsletter.title}
            </h3>

            <form className="relative">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="h-10 w-full rounded-lg bg-[#515B60] px-4 pr-12 text-sm text-white placeholder:text-[#D9DBE1] outline-none"
              />

              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center p-1 transition-opacity hover:opacity-80"
                type="submit"
                aria-label="Subscribe to newsletter"
              >
                <Image
                  src={newsletter.buttonIcon || "/images/send.svg"}
                  alt="Send"
                  width={18}
                  height={18}
                  style={{ width: "auto", height: "auto" }}
                />
              </button>
            </form>
          </div>

        </div>
      </Container>
    </footer>
  );
}
