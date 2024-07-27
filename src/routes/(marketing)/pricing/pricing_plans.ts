export const defaultPlanId = "free"

export const currency = "$"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  compareAtPrice?: number
  features: string[]
  priceIntervalName?: string
  stripe_price_id?: string | null
  stripe_product_id?: string
  product_type: "product" | "subscription"
}

export const pricingPlans: Product[] = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: 0,
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
    product_type: "subscription",
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "A plan to test the purchase experience. Try buying this with the test credit card 4242424242424242.",
    price: 5,
    priceIntervalName: "per month",
    stripe_price_id: "price_1NkdZCHMjzZ8mGZnRSjUm4yA",
    stripe_product_id: "prod_OXj1CcemGMWOlU",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
    product_type: "subscription",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "A plan to test the upgrade experience. Try buying this with the test credit card 4242424242424242.",
    price: 15,
    priceIntervalName: "per month",
    stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV",
    stripe_product_id: "prod_OXj20YNpHYOXi7",
    features: [
      "Everything in Pro",
      "Try the 'upgrade plan' UX",
      "Still actually free!",
    ],
    product_type: "subscription",
  },
]
