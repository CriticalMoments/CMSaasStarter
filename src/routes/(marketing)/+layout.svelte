<script>
  import "../../app.css"
</script>

<div class="navbar bg-base-100 container mx-auto">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">SaaS Starter</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 hidden sm:flex">
      <li>
        <a
          href="https://github.com/CriticalMoments/CMSaasStarter"
          class="bg-base-200">★ us on Github</a
        >
      </li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/pricing">Pricing</a></li>
      <li><a href="/account">Account</a></li>
    </ul>
    <div class="dropdown dropdown-end sm:hidden">
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
      <ul
        tabindex="0"
        class="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><a href="/blog">Blog</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/account">Account</a></li>
        <li>
          <a
            href="https://github.com/CriticalMoments/CMSaasStarter"
            class="bg-base-200">★ us on Github</a
          >
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="">
  <slot />
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="flex-grow"></div>
<div class="bg-base-200 text-base-content">
  <footer class="footer p-10 gap-x-48 place-content-center">
    <nav>
      <span class="footer-title">Explore</span>
      <a class="link link-hover" href="/">Overview</a>
      <a class="link link-hover" href="/pricing">Pricing</a>
      <a class="link link-hover" href="/blog">Blog</a>
      <a
        class="link link-hover"
        href="https://github.com/CriticalMoments/CMSaasStarter">Github</a
      >
    </nav>
    <aside>
      <span class="footer-title">Sponsor</span>
      <a
        class="link link-hover max-w-[260px]"
        href="https://criticalmoments.io"
      >
        <img
          alt="Critical Moments Logo"
          src="/images/cm_logo.svg"
          class="w-[180px] mb-3 aspect-[420/154]"
        />
        Make mobile apps? Improve conversion rates and ratings with Critical Moments.
      </a>
    </aside>
  </footer>
</div>
