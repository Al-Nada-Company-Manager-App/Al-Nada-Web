import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training",
  description: "Professional training services for the optimal use and maintenance of scientific and environmental equipment provided by Al-Nada Scientific Office.",
};

export default function TrainingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
