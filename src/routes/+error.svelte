<script>
  import "../app.css"
  import { page } from "$app/stores"
</script>

<div class="hero min-h-[100vh]">
  <div class="hero-content text-center">
    <div class="max-w-lg">
      <h1 class="text-5xl font-bold">Encontramos um problema</h1>
      <p class="py-6 text-2xl">
        Pedimos desculpas, infelizmente o seguinte erro aconteceu: {$page?.error
          ?.message}
      </p>
      <p class="py-6 text-2xl">
        Fique tranquilo, nosso time já foi avisado e corrigirá o problema.
      </p>
      <div>
        <a href="/" class="btn btn-primary btn-wide">Página Inicial</a>
      </div>
    </div>
  </div>
</div>
