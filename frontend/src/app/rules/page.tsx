import type { Metadata } from "next";
import Rules from "@/components/rules";

export const metadata: Metadata = {
  title: "Rules | Hacktoberfest 2026",
  description: "The ground rules for genuine Hacktoberfest 2026 contributions at GDG IIT Mandi.",
};

export default function RulesPage() {
  return <Rules />;
}
