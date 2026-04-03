import {
  Building2,
  FileCheck2,
  Landmark,
  Scale,
  ShieldCheck,
  Truck,
} from "lucide-react";

const icons = {
  Building2,
  Scale,
  Landmark,
  ShieldCheck,
  Truck,
  FileCheck2,
};

type ServiceIconProps = {
  name: keyof typeof icons;
  className?: string;
};

export function ServiceIcon({ name, className }: ServiceIconProps) {
  const Icon = icons[name];

  return <Icon className={className} strokeWidth={1.8} />;
}
