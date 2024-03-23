<script>
	import { Button } from "$lib/components/ui/button";
	import "../../app.pcss";
</script>

<div class="bg-base-100 container mx-auto px-4 sm:px-6 lg:px-8">
	<div
		class="flex items-center justify-between py-6 md:justify-start md:space-x-10"
	>
		<div class="flex justify-start lg:w-0 lg:flex-1">
			<Button href="/" variant="ghost" class="text-xl normal-case"
				>FeedHack</Button
			>
		</div>
		<nav class="hidden space-x-10 md:flex">
			<Button href="/blog" variant="ghost" class="normal-case"
				>Blog</Button
			>
			<Button href="/pricing" variant="ghost" class="normal-case"
				>Pricing</Button
			>
			<Button href="/account" variant="ghost" class="normal-case"
				>Account</Button
			>
		</nav>
		<div class="md:hidden">
			<input type="checkbox" id="menu-toggle" class="hidden" />
			<label for="menu-toggle" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			</label>
			<ul
				tabindex="-1"
				class="menu menu-compact dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
			>
				<li><a href="/blog">Blog</a></li>
				<li><a href="/pricing">Pricing</a></li>
				<li><a href="/account">Account</a></li>
			</ul>
		</div>
	</div>
</div>

<div class="py-4">
	<slot />
</div>

<div class="flex-grow"></div>

<footer class="footer bg-base-200 text-base-content footer-center p-4">
	<div>
		<nav>
			<span class="footer-title opacity-80">Explore</span>
			<a class="link link-hover" href="/">Overview</a>
			<a class="link link-hover" href="/pricing">Pricing</a>
			<a class="link link-hover" href="/blog">Blog</a>
			<a class="link link-hover" href="/contact_us">Contact Us</a>
			<a
				class="link link-hover"
				href="https://github.com/CriticalMoments/CMSaasStarter"
				>Github</a
			>
		</nav>
	</div>
	<aside>
		<span class="footer-title opacity-80">Sponsor</span>
		<a class="link link-hover" href="https://criticalmoments.io">
			<img
				alt="Critical Moments Logo"
				src="/images/cm_logo.svg"
				class="mb-2 max-w-xs"
			/>
			Make mobile apps? Improve conversion rates and ratings with Critical
			Moments.
		</a>
	</aside>
</footer>
