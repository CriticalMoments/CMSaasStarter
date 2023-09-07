export const pricingPlans = {
    free: {
        name: "Free",
        description: "A free plan to get you started!",
        price: "$0",
        priceIntervalName: "per month",
        stripe_price_id: null,
        features: [
            "MIT Licence",
            "Fast Performance",
            "Stripe Integration"
        ]
    },
    pro: {
        name: "Pro",
        description: "A plan to test the purchase experience. Try buying this with the test credit card 4242424242424242.",
        price: "$5",
        priceIntervalName: "per month",
        stripe_price_id: "price_1NkdZCHMjzZ8mGZnRSjUm4yA",
        features: [
            "Everything in Free",
            "Support us with fake money",
            "Test the purchase experience"
        ]
    },
    enterprise: {
        name: "Enterprise",
        description: "A plan to test the upgrade expereince. Try buying this with the test credit card 4242424242424242.",
        price: "$15",
        priceIntervalName: "per month",
        stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV",
        features: [
            "Everything in Pro",
            "Try the 'upgrade plan' UX",
            "Still actually free!"
        ]
    }
}