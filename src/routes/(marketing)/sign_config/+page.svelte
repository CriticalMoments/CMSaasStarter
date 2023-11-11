<script lang="ts">
  import SignConfigModule from "./sign_config_module.svelte"
</script>

<svelte:head>
  <title>Config File Signing</title>
  <meta
    name="description"
    content="Use this tool to sign Critical Moments configuration files."
  />
</svelte:head>

<div class="min-h-[70vh] py-8 lg:py-12 px-6 flex flex-col place-content-center">
  <h1 class="font-header text-3xl md:text-5xl text-center">Signing Tool</h1>
  <h2 class="pt-2 text-xl md:text-2xl text-center text-slate-600 mt-1 pb-3">
    Sign your Critical Moments configuration files here!
  </h2>

  <div class="w-full my-8">
    <SignConfigModule />
  </div>
</div>
