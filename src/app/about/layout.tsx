import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Al-Nada Scientific Office, our history, vision, and the dedicated team providing top-tier environmental and scientific solutions.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
