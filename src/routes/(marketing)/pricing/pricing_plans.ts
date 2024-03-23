export const defaultPlanId = "free";

export const pricingPlans = [
	// {
	//   id: "free",
	//   name: "Free",
	//   description: "A free plan to get you started!",
	//   price: "$0",
	//   priceIntervalName: "per month",
	//   stripe_price_id: null,
	//   features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
	// },
	{
		id: "starter",
		name: "Starter",
		description:
			"All features included as this is the Beta. Try buying this with the test credit card 4242424242424242.",
		price: "$14.99",
		priceIntervalName: "per month",
		stripe_price_id: "price_1OxAa6CA99JrEWBIhG4R65uX",
		stripe_product_id: "prod_Pmk4gzlna1FrdC",
		features: [
			"Unlimited  xd",
			"Support us with fake money",
			"Test the purchase experience",
		],
	},
	// {
	//   id: "enterprise",
	//   name: "Enterprise",
	//   description:
	//     "A plan to test the upgrade expereince. Try buying this with the test credit card 4242424242424242.",
	//   price: "$15",
	//   priceIntervalName: "per month",
	//   stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV",
	//   stripe_product_id: "prod_OXj20YNpHYOXi7",
	//   features: [
	//     "Everything in Pro",
	//     "Try the 'upgrade plan' UX",
	//     "Still actually free!",
	//   ],
	// },
];
