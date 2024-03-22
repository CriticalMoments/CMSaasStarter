<script>
  import "../../app.pcss"
</script>

<div class="navbar bg-base-100 container mx-auto">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl normal-case" href="/">SaaS Starter</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal hidden px-1 text-lg font-bold sm:flex">
      <li class="md:mx-2"><a href="/blog">Blog</a></li>
      <li class="md:mx-2"><a href="/pricing">Pricing</a></li>
      <li class="md:mx-2"><a href="/account">Account</a></li>
    </ul>
    <div class="dropdown dropdown-end sm:hidden">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          /></svg
        >
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 font-bold shadow"
      >
        <li><a href="/blog">Blog</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/account">Account</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="">
  <slot />
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="flex-grow"></div>
<div class="">
  <div class="mx-auto max-w-[1000px] border-t"></div>
  <footer
    class="footer place-content-center gap-x-48 p-10 text-base lg:gap-x-64 xl:gap-x-96"
  >
    <nav>
      <span class="footer-title opacity-80">Explore</span>
      <a class="link link-hover mb-1" href="/">Overview</a>
      <a class="link link-hover my-1" href="/pricing">Pricing</a>
      <a class="link link-hover my-1" href="/blog">Blog</a>
      <a class="link link-hover my-1" href="/contact_us">Contact Us</a>
      <a
        class="link link-hover my-1"
        href="https://github.com/CriticalMoments/CMSaasStarter">Github</a
      >
    </nav>
    <aside>
      <span class="footer-title opacity-80">Sponsor</span>
      <a
        class="link link-hover max-w-[260px]"
        href="https://criticalmoments.io"
      >
        <img
          alt="Critical Moments Logo"
          src="/images/cm_logo.svg"
          class="mb-3 aspect-[420/154] w-[180px]"
        />
        Make mobile apps? Improve conversion rates and ratings with Critical Moments.
      </a>
    </aside>
  </footer>
</div>
