import { ArrowRight, ChefHat, Dumbbell, Users, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { subscriptionPlans } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1490818387583-1baba5e638af"
            alt="Healthy Food Banner"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Influencer&apos;s Plate
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            Your Complete Health Transformation Journey
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our exclusive membership program and get access to personalized meal plans, expert guidance, and a supportive community to help you achieve your health goals.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                View Plans <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Need for Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ChefHat className="h-8 w-8" />}
              title="Personalized Meal Plans"
              description="Get custom meal plans tailored to your preferences and goals"
            />
            <FeatureCard
              icon={<Dumbbell className="h-8 w-8" />}
              title="Expert Guidance"
              description="Access to nutrition experts and personalized coaching"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Community Support"
              description="Join a community of like-minded individuals on their health journey"
            />
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-600">
              Select the perfect membership plan for your health journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {subscriptionPlans.map((plan) => (
              <Card key={plan.id} className="p-6 border-2 hover:border-primary transition-colors">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary">
                    ${plan.price.monthly}
                    <span className="text-base font-normal text-gray-500">/month</span>
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

                <Link href={`/checkout?plan=${plan.id}`}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Transformation Today
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Join thousands of others who have transformed their lives through our comprehensive health program.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Choose Your Plan <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}