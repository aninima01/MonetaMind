import { testimonialsData } from "@/data/landing";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
const Features = () => {
  return (
    <section className="py-20 bg-[#5A189A]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          Take control of your finances like never before with our powerful,
          user-friendly finance manager MonetaMind. Whether you're budgeting,
          tracking expenses, or setting financial goals, our platform simplifies
          the process and keeps you in control.
        </p>
        <Link href="/dashboard">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
          >
            Start Free Trial
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Features;
