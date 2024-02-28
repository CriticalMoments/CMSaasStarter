export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
  },
  {
    id: "pro",
    name: "SKAN Bronze Subscription",
    description:
      "A bronze plan enabling you access to preplanned routes",
    price: "$49.99",
    priceIntervalName: "per month",
    stripe_price_id: "price_1OonE0K3At0l0k1HWV3Z1vF7",
    stripe_product_id: "prod_Pe5OlROS4oPoC7",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  {
    id: "enterprise",
    name: "SKAN Pro Subscription",
    description:
      "The best plan you can get, giving you access to the secrets of the universe",
    price: "$99",
    priceIntervalName: "per month",
    stripe_price_id: "price_1OdpxJK3At0l0k1HOx5Kxo9S",
    stripe_product_id: "prod_PSlUxQsqZIwjGk",
    features: [
      "Everything in Pro",
      "Try the 'upgrade plan' UX",
      "Still actually free!",
    ],
  },
]
