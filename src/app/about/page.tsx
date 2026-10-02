import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Hacktoberfest 2026",
  description: "Write code. Ship PRs. Join GDG IIT Mandi for a month of open source and learn how to contribute.",
};

export default function AboutPage() {
  return <About />;
}
