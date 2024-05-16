export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "Free access for one stock.",
    price: "£0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["Anyalyst for one stock", "Dividned projection", "Compound intrest projections"],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "Unlimited access to all functionalities for your full portfolio",
    price: "£1.50",
    priceIntervalName: "per month",
    stripe_price_id: "price_1PGqYk02DbZIDI6Fg3drSQje",
    stripe_product_id: "prod_Q74ixRfKJaUXPA",
    features: [
      "Anyalyst for all stocks",
      "Syncs to Trading 212",
      "Unlimited stocks",
    ],
  },
]
