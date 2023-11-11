<script lang="ts">
  export let centerContent = true
  let isHovered = false
  let hasFailed = false
  let processing = false
  let success: string | null = null
  function handleDragDrop(e: DragEvent) {
    e.preventDefault()
    isHovered = false

    if (e.dataTransfer) {
      if (e.dataTransfer?.items) {
        for (const item of e.dataTransfer?.items) {
          if (item.kind === "file") {
            const file = item.getAsFile()
            if (file) {
              processFile(file)
              return
            }
          }
        }
      } else {
        for (const file of e.dataTransfer?.files) {
          if (file) {
            processFile(file)
            return
          }
        }
      }
    }

    hasFailed = true
  }
  function handleDragOver(e: DragEvent) {
    e.preventDefault()
    isHovered = true
  }
  function handleDragEnter(e: DragEvent) {
    isHovered = true
  }
  function handleDragLeave(e: DragEvent) {
    isHovered = false
  }
  function retry() {
    hasFailed = false
  }
  function handleFileSelect(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      const file = e.target.files?.[0]
      if (file) {
        processFile(file)
        return
      }
    }
    hasFailed = true
  }
  function processFile(file: File) {
    processing = true
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target?.result
      // TODO: actually sign fils
      if (typeof text === "string") {
        success = text
        console.log(text)
      } else {
        hasFailed = true
      }
      processing = false
    }
    // TODO binary
    reader.readAsText(file)
  }
  function download() {
    if (success == null) {
      return
    }
    var element = document.createElement("a")
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(success),
    )
    element.setAttribute("download", "criticalmoments-config.cmconfig")
    element.style.display = "none"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }
</script>

<div class="flex {centerContent ? 'place-content-center' : ''}">
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="border-dashed border-2 border-slate-600 rounded-lg min-w-[240px] lg:w-[500px] px-4 py-12 lg:py-20 {isHovered
      ? 'bg-base-200 bg-opacity-50'
      : ''}"
    style={!hasFailed && !processing && success == null ? "" : "display: none;"}
    on:drop={handleDragDrop}
    on:dragenter={handleDragEnter}
    on:dragleave={handleDragLeave}
    on:dragover={handleDragOver}
  >
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="h-10 w-10 mx-auto mb-6"
    >
      <g
        id="main"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="plus-in-circle"
          transform="translate(-464.000000, -1087.000000)"
          fill="#000000"
        >
          <path
            d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z"
            id="plus-in-circle"
          ></path>
        </g>
      </g>
    </svg>
    <div class="flex flex-col items-center">
      <div class="font-semibold mb-6 text-center">
        Drag and drop your config file to sign.
      </div>
      <label for="file-upload" class="btn btn-outline"> Select File </label>
      <input
        id="file-upload"
        type="file"
        class="hidden"
        on:change={handleFileSelect}
      />
    </div>
  </div>
  <div
    class="border border-slate-600 rounded-lg min-w-[240px] lg:w-[500px] px-4 py-12 lg:py-20"
    style={success != null ? "" : "display: none;"}
  >
    <div class="flex flex-col items-center">
      <div class="text-xl font-semibold text-center mb-6 mx-auto">Success!</div>
      <div class="text-center mb-6 mx-auto max-w-[300px]">
        The attached file has been signed, and can be used in production.
      </div>
      <button class="btn btn-success" on:click={download}>Download</button>
    </div>
  </div>
  <div
    class="border border-slate-600 rounded-lg min-w-[240px] lg:w-[500px] px-4 py-12 lg:py-20"
    style={processing && !hasFailed ? "" : "display: none;"}
  >
    <div class="flex flex-col items-center">
      <div class="loading loading-infinity loading-lg mb-1"></div>
      <div class="text-xl font-semibold text-center mx-auto">Signing...</div>
    </div>
  </div>
  <div
    class="border border-slate-600 rounded-lg min-w-[240px] lg:w-[500px] px-4 py-12 lg:py-20"
    style={success == null && hasFailed ? "" : "display: none;"}
  >
    <div class="flex flex-col items-center">
      <div class="text-xl font-semibold text-center mb-6 mx-auto">
        There was an issue.
      </div>
      <div class="text-center mb-6 mx-auto max-w-[300px]">
        Please ensure the file you select is a valid Critical Moments config
        file in JSON format.
        <!-- TODO: error message from API -->
      </div>
      <button class="btn btn-primary mx-auto" on:click={retry}>Try again</button
      >
    </div>
  </div>
</div>
