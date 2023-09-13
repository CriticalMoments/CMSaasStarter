export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "Critical Moments Pro",
    price: "$25",
    priceIntervalName: "per month",
    stripe_price_id: "price_1NpztbBhIue0PjhEoMHfTvyW",
    stripe_product_id: "prod_OdGQvJygUlTXF3",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "CM Enterprise",
    price: "$199",
    priceIntervalName: "per month",
    stripe_price_id: "price_1NpzvRBhIue0PjhE1sxwQUAM",
    stripe_product_id: "prod_OdGShEg1Cq6deX",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ],
  },
]
