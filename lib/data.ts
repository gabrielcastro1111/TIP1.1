// Subscription Plans
export const subscriptionPlans = [
  {
    id: "basic",
    name: "Basic",
    price: {
      monthly: 29.99,
      yearly: 299.99
    },
    features: [
      "AI-powered meal plans",
      "Basic recipe collection",
      "Calorie calculator",
      "Community forum access",
      "Monthly newsletter",
      "Digital recipe book included"
    ]
  },
  {
    id: "pro",
    name: "Professional",
    price: {
      monthly: 49.99,
      yearly: 499.99
    },
    features: [
      "Everything in Basic",
      "AI-driven nutrition insights",
      "Custom meal plans",
      "Weekly meal prep guides",
      "Priority support",
      "Advanced progress tracking",
      "Premium recipe collection"
    ]
  },
  {
    id: "elite",
    name: "Elite",
    price: {
      monthly: 79.99,
      yearly: 799.99
    },
    features: [
      "Everything in Professional",
      "24/7 AI nutrition assistant",
      "Personalized macro tracking",
      "Advanced health analytics",
      "Exclusive recipes library",
      "Custom shopping lists",
      "Restaurant menu analyzer",
      "Early access to new features"
    ]
  }
];

// Products for the shop
export const products = [
  {
    id: 1,
    name: "Smart Food Scale",
    description: "Digital kitchen scale with nutritional tracking",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1591198619986-bf9cd458c09c",
    category: "equipment"
  },
  {
    id: 2,
    name: "Meal Prep Containers",
    description: "Set of 7 portion-control containers",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1531261366392-f31f956e2fe9",
    category: "equipment"
  },
  {
    id: 3,
    name: "Protein Blend",
    description: "Plant-based protein powder",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f",
    category: "supplements"
  }
];

// Recipes
export const recipes = [
  {
    id: 1,
    title: "Quinoa Buddha Bowl",
    description: "Nutrient-rich bowl with quinoa, roasted vegetables, and tahini dressing",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    time: "25 mins",
    calories: 450,
    category: "lunch"
  },
  {
    id: 2,
    title: "Berry Protein Smoothie",
    description: "Antioxidant-rich smoothie with mixed berries and protein",
    image: "https://images.unsplash.com/photo-1553530979-7ee52a2670c4",
    time: "5 mins",
    calories: 280,
    category: "breakfast"
  },
  {
    id: 3,
    title: "Grilled Chicken Salad",
    description: "Fresh salad with grilled chicken and avocado",
    image: "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f",
    time: "20 mins",
    calories: 380,
    category: "dinner"
  }
];

// Affiliate Products
export const affiliateProducts = [
  {
    id: 1,
    name: "Premium Blender",
    description: "Professional-grade blender for smoothies and meal prep",
    price: 199.99,
    affiliateLink: "#"
  },
  {
    id: 2,
    name: "Air Fryer XL",
    description: "Large capacity air fryer for healthy cooking",
    price: 129.99,
    affiliateLink: "#"
  },
  {
    id: 3,
    name: "Meal Prep Guide Book",
    description: "Complete guide to efficient meal preparation",
    price: 24.99,
    affiliateLink: "#"
  }
];