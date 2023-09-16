<script>
  import "../../app.css"
  import { page } from "$app/stores"
  import BarsComponent from "../bars_component.svelte"
</script>

<div class="navbar sm:container mx-auto">
  <div class="flex-1">
    <a
      class="normal-case logoType headerLogo {$page.url.pathname === '/'
        ? 'hidden'
        : ''}"
      href="/">Critical<br />Moments</a
    >
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal md:px-1 hidden sm:flex font-header">
      <li>
        <a href="https://docs.criticalmoments.io" target="_blank">Docs</a>
      </li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/pricing">Pricing</a></li>
      <li><a href="/account">Account</a></li>
    </ul>
    <div class="dropdown dropdown-end sm:hidden z-50 font-header">
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
        <li>
          <a href="https://docs.criticalmoments.io" target="_blank">Docs</a>
        </li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/account">Account</a></li>
      </ul>
    </div>
  </div>
</div>

<div class={$page.url.pathname === "/" ? "hidden" : ""}>
  <BarsComponent height={25} heightUnit="px" />
</div>

<div class="">
  <slot />
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="flex-grow"></div>
<div class="bg-rc5 text-white">
  <footer
    class="md:container md:mx-auto p-edge flex flex-col md:flex-row text-center md:text-left"
  >
    <div class="flex-1 font-header text-xl py-8 flex flex-col gap-y-2">
      <a class="md:hidden" href="/">Home</a>
      <a class="" href="https://docs.criticalmoments.io" target="_blank">Docs</a
      >
      <a class="" href="/blog">Blog</a>
      <a class="" href="/pricing">Pricing</a>
      <a class="" href="/account">Account</a>
      <a class="" href="/legal">Legal</a>
    </div>
    <div
      class="logoType self-center text-2xl stdphone:text-3xl md:text-4xl xl:text-5xl hidden md:inline"
    >
      <a href="/">
        Critical<br />Moments
      </a>
    </div>
  </footer>
</div>
