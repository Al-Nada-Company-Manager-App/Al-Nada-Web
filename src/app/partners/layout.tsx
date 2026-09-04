import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners",
  description: "We partner with world-leading manufacturers of environmental and scientific instruments to bring the best technology to Egypt and the Middle East.",
};

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
