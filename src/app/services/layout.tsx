import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our comprehensive range of environmental, scientific, and engineering services, including environmental measurements, laboratory equipment, and calibration.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
