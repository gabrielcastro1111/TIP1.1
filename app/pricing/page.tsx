"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import { subscriptionPlans } from "@/lib/data";

export default function PricingPage() {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly");

  return (
    <main className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
            <p className="text-lg text-gray-600 mb-8">
              Select the perfect plan for your health journey
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={billingInterval === "monthly" ? "text-primary" : "text-gray-500"}>
                Monthly
              </span>
              <Switch
                checked={billingInterval === "yearly"}
                onCheckedChange={(checked) => setBillingInterval(checked ? "yearly" : "monthly")}
              />
              <span className={billingInterval === "yearly" ? "text-primary" : "text-gray-500"}>
                Yearly (Save 20%)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan) => (
              <Card key={plan.id} className="p-6">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                  <div className="text-3xl font-bold">
                    ${plan.price[billingInterval]}
                    <span className="text-base font-normal text-gray-500">
                      /{billingInterval === "monthly" ? "mo" : "yr"}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full">Get Started</Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}