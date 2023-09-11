<script lang="ts">
  import { enhance, applyAction } from "$app/forms"
  import { page } from "$app/stores"

  export let data

  let { session, supabase, profile } = data

  const fieldError = (liveForm, name: String) => {
    let errors = liveForm?.errorFields ?? []
    return errors.includes(name)
  }

  // Page state
  let loading = false
  let showSuccess = false

  // Module context
  export let editable = false
  export let title: string = ""
  export let fields
  export let formTarget: string = ""
  export let successTitle = "Success"
  export let successBody = ""
  export let editButtonTitle: string = ""
  export let editLink: string = ""
  export let saveButtonTitle: string = "Save"

  const handleSubmit = () => {
    loading = true
    return async ({ update, result }) => {
      let response = await update({ reset: false })
      await applyAction(result)
      loading = false
      if (result.type === "success") {
        showSuccess = true
      }
    }
  }
</script>

<div class="card bg-base-200 p-6 pb-7 mt-8 max-w-xl flex flex-col md:flex-row">
  {#if title}
    <div class="text-xl font-bold mb-3 w-48 flex-none">{title}</div>
  {/if}

  <div class="w-full min-w-48">
    {#if !showSuccess}
      <form
        class="form-widget flex flex-col"
        method="POST"
        action={formTarget}
        use:enhance={handleSubmit}
      >
        {#each fields as field}
          {#if field.label}
            <label for={field.id}>
              <span class="text-sm text-gray-500">{field.label}</span>
            </label>
          {/if}
          {#if editable}
            <input
              id={field.id}
              name={field.id}
              type={field.inputType ?? "text"}
              disabled={!editable}
              placeholder={field.placeholder ?? field.label ?? ""}
              class="{fieldError($page?.form, field.id)
                ? 'input-error'
                : ''} input-sm mt-1 input input-bordered w-full max-w-xs mb-3 text-base py-4"
              value={$page.form ? $page.form[field.id] : field.initialValue}
            />
          {:else}
            <div class="text-lg mb-3">{field.initialValue}</div>
          {/if}
        {/each}

        {#if $page?.form?.errorMessage}
          <p class="text-red-700 text-sm font-bold mt-1">
            {$page?.form?.errorMessage}
          </p>
        {/if}

        {#if editable}
          <div>
            <input
              type="submit"
              class="ml-auto btn btn-success btn-sm mt-3 min-w-[145px]"
              value={loading ? "..." : saveButtonTitle}
              disabled={loading}
            />
            <span
              class="loading loading-spinner loading-md align-middle mx-3 {loading
                ? ''
                : 'hidden'}"
            ></span>
          </div>
        {:else}
          <!-- !editable -->
          <a href={editLink} class="mt-1">
            <button class="btn btn-outline btn-sm min-w-[145px]">
              {editButtonTitle}
            </button>
          </a>
        {/if}
      </form>
    {:else}
      <!-- showSuccess -->
      <div>
        <div class="text-l font-bold">{successTitle}</div>
        <div class="text-base">{successBody}</div>
      </div>
      <a href="/account/settings">
        <button class="btn btn-outline btn-sm mt-3 min-w-[145px]">
          Return to Settings
        </button>
      </a>
    {/if}
  </div>
</div>
