export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free 👶",
    description: "Began crafting engaging coloring pages.",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: [
      "✔️ Create 5 pages for free",
      "✔️ Personal use",
      "✔️ Upgrade anytime",
    ],
  },
  {
    id: "pro",
    name: "Artist 👦",
    description: "Higher limits for demanding parents.",
    price: "$5",
    priceIntervalName: "per month",
    stripe_price_id: "price_1PEyVnEAQD7sAy8kjpYVT0IS",
    stripe_product_id: "prod_Q58nVOX7UK0gFX",
    features: [
      "✔️ Create up to 100 pages/month",
      "✔️ Early access to new models & features",
      "✔️ Personal use",
    ],
  },
  // {
  //   id: "enterprise",
  //   name: "Enterprise 👨",
  //   description:
  //     "Best for those looking to sell their creations. Get all features and updates.",
  //   price: "$15",
  //   priceIntervalName: "per month",
  //   stripe_price_id: "price_1P8cQ8ALVblCyqc1AdjpXBpe",
  //   stripe_product_id: "prod_PyZZxow2JZbP8i",
  //   features: [
  //     "✔️ Create unlimited coloring pages",
  //     "✔️ Early access to new models & features",
  //     "✔️ Commercial use",
  //   ],
  // },
  {
    id: "one_time_payment",
    name: "Support me - donate 👨",
    description:
      "Support the development of this project with a one-time payment.",
    price: "$0-1000",
    priceIntervalName: "",
    stripe_price_id: "https://donate.stripe.com/6oEeUZcLLezga6A8ww",
    stripe_product_id: "prod_Q58r6JxDPmJAG2",
    features: ["✔️ Unlimited satisfaction that you helped a developer 🤗"],
  },
]
