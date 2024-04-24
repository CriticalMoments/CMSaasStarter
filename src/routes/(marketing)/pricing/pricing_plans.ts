export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free 👶",
    description: "Get started creating coloring pages from text prompts.",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: [
      "✔️ Create first 5 pages for free",
      "✔️ Personal use",
      "✔️ Upgrade anytime",
    ],
  },
  {
    id: "pro",
    name: "Artist 👦",
    description:
      "Higher limits and access to all ways of creating coloring pages.",
    price: "$5",
    priceIntervalName: "per month",
    stripe_price_id: "price_1P8cOpALVblCyqc1uulETqyI",
    stripe_product_id: "prod_PyZXEGPULiuFxD",
    features: [
      "✔️ Create up to 1000 pages/month",
      "✔️ Early access to new models & features",
      "✔️ Personal use",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise 👨",
    description:
      "Best for those looking to sell their creations. Get all features and updates.",
    price: "$15",
    priceIntervalName: "per month",
    stripe_price_id: "price_1P8cQ8ALVblCyqc1AdjpXBpe",
    stripe_product_id: "prod_PyZZxow2JZbP8i",
    features: [
      "✔️ Create unlimited coloring pages",
      "✔️ Early access to new models & features",
      "✔️ Commercial use",
    ],
  },
  {
    id: "one_time_payment",
    name: "One Time Payment 👨",
    description:
      "Pay once, use as long as you want. Get all features and updates",
    price: "$49.99",
    priceIntervalName: "",
    stripe_price_id: "https://buy.stripe.com/00gdS40BV7mk49yfZ3",
    stripe_product_id: "prod_PyuHZfz4igLeV2",
    features: [
      "✔️ Create unlimited coloring pages",
      "✔️ Early access to new models & features",
      "✔️ Commercial use",
    ],
  },
]
