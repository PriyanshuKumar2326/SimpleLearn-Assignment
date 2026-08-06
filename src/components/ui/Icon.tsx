type IconName =
  | "membership"
  | "association"
  | "clubs"
  | "members"
  | "bookings"
  | "payments";

interface IconProps {
  name: IconName;
  className?: string;
}

const labels: Record<IconName, string> = {
  membership: "M",
  association: "A",
  clubs: "C",
  members: "M",
  bookings: "B",
  payments: "P",
};

export default function Icon({ name, className = "" }: IconProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-lg font-bold text-[#4CAF4F] ${className}`}
    >
      {labels[name]}
    </span>
  );
}
