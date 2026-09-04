import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse our extensive catalog of high-quality environmental, scientific, and industrial instruments from top global manufacturers.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
