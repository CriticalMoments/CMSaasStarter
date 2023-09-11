<script>
  import "../app.css";
  import { page } from "$app/stores";
</script>

<div class="hero min-h-[100vh] bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-lg">
      <h1 class="text-5xl font-bold">This is embarassing...</h1>
      <p class="py-6 text-2xl">There was an error: {$page?.error?.message}</p>
    </div>
  </div>
</div>
