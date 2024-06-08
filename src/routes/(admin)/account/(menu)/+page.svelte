<script lang="ts">
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";

  let adminSection: Writable<string> = getContext("adminSection");
  adminSection.set("home");

  let shooterNames = ['Shooter 1', 'Shooter 2', 'Shooter 3'];
  let courses = ['course1', 'course2', 'course3'];
  let selectedCourse = courses[0];
  let startStation = 1;

  function addShooter() {
    shooterNames = [...shooterNames, `Shooter ${shooterNames.length + 1}`];
  }

  function removeShooter(index) {
    shooterNames = shooterNames.filter((_, i) => i !== index);
  }

  // Button toggling logic
  let buttonStates = shooterNames.map(() => Array(8).fill(false));

  function toggleButton(shooterIndex, buttonIndex) {
    buttonStates[shooterIndex][buttonIndex] = !buttonStates[shooterIndex][buttonIndex];
  }

  function getShooterScore(shooterIndex) {
    return buttonStates[shooterIndex].filter(state => state).length;
  }
</script>

<svelte:head>
  <title>Account</title>
</svelte:head>

<style>
  .toggle-button {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 16px;
  }
  .shooter-row {
    margin-bottom: 10px;
  }
</style>

<h1 class="text-2xl font-bold mb-1">Dashboard</h1>
<div class="alert alert-error max-w-lg mt-2">
  <div>
    <div class="font-bold">Start a New Round</div>
    <div class="my-2">
      Begin a new scoring round by adding shooters, selecting a course, and choosing a starting station. Once ready, click "Start Round" to begin.
    </div>
    <!-- New Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="my-6">
        <h1 class="text-xl font-bold mb-1">Add Shooters</h1>
        {#each shooterNames as shooter, index}
          <div class="flex items-center mb-2">
            <input type="text" bind:value={shooterNames[index]} placeholder={`Shooter ${index + 1}`} class="input input-bordered w-full max-w-xs" />
            {#if index > 0}
              <button class="btn btn-error ml-2" on:click={() => removeShooter(index)}>x</button>
            {/if}
          </div>
        {/each}
        <button class="btn btn-primary btn-sm" on:click={addShooter}>Add Shooter</button>
      </div>

      <div class="my-6">
        <h1 class="text-xl font-bold mb-1">Select Course</h1>
        <select bind:value={selectedCourse} class="select select-bordered w-full max-w-xs">
          {#each courses as course}
            <option>{course}</option>
          {/each}
        </select>

        <div class="my-6">
          <h1 class="text-xl font-bold mb-1">Station Start Number</h1>
          <input type="number" min="1" max="20" bind:value={startStation} class="input input-bordered w-full max-w-xs" />
        </div>

        <button class="btn btn-primary btn-lg">Start Round</button>
      </div>
    </div>
  </div>
</div>

<!-- Shooter Scoring Section -->
{#each shooterNames as shooter, shooterIndex}
  <div class="my-6 shooter-row">
    <h1 class="text-xl font-bold mb-1">{shooter}</h1>
    <div class="flex space-x-2 items-center">
      {#each buttonStates[shooterIndex] as state, buttonIndex}
        <button 
          class={`btn btn-xs toggle-button ${state ? 'btn-secondary' : 'btn-outline'}`} 
          on:click={() => toggleButton(shooterIndex, buttonIndex)}>
          {state ? 'x' : ''}
        </button>
      {/each}
      <div class="text-xl font-bold ml-4">{getShooterScore(shooterIndex)}</div>
    </div>
  </div>
{/each}

<!-- Button Test Section -->
<div class="my-6">
  <h1 class="text-xl font-bold mb-1">Button Test</h1>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <!-- Existing Buttons -->
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
    <button class="btn btn-success">Success</button>
    <button class="btn btn-error">Error</button>
    <button class="btn btn-warning">Warning</button>
    <button class="btn btn-info">Info</button>
    <button class="btn btn-outline">Outline</button>
    <button class="btn btn-ghost">Ghost</button>
    <button class="btn btn-link">Link</button>

    <!-- Radio Buttons -->
    <div>
      <label class="label">
        <span class="label-text">Radio 1</span>
        <input type="radio" name="radio1" class="radio radio-primary" />
      </label>
      <label class="label">
        <span class="label-text">Radio 2</span>
        <input type="radio" name="radio1" class="radio radio-secondary" />
      </label>
    </div>

    <!-- Toggles -->
    <div>
      <label class="label">
        <span class="label-text">Toggle 1</span>
        <input type="checkbox" class="toggle toggle-primary" />
      </label>
      <label class="label">
        <span class="label-text">Toggle 2</span>
        <input type="checkbox" class="toggle toggle-secondary" />
      </label>
    </div>

    <!-- Additional Button Styles -->
    <button class="btn btn-primary btn-xs">Primary XS</button>
    <button class="btn btn-secondary btn-sm">Secondary SM</button>
    <button class="btn btn-accent btn-md">Accent MD</button>
    <button class="btn btn-success btn-lg">Success LG</button>
  </div>
</div>

<!-- Existing Content -->
<div class="my-6">
  <h1 class="text-xl font-bold mb-1">Shots</h1>
  <div class="stats shadow stats-vertical sm:stats-horizontal sm:w-[420px]">
    <div class="stat place-items-center">
      <div class="stat-title">All-Time</div>
      <div class="stat-value">31K</div>
      <div class="stat-desc">hitrate (62%)</div>
    </div>

    <div class="stat place-items-center">
      <div class="stat-title">Last Round</div>
      <div class="stat-value text-secondary">170</div>
      <div class="stat-desc">↗︎ hitrate (71%)</div>
    </div>
  </div>
</div>
<div class="my-6">
  <h1 class="text-xl font-bold mb-1">Accounts</h1>
  <div class="stats shadow stats-vertical sm:stats-horizontal sm:w-[420px]">
    <div class="stat place-items-center">
      <div class="stat-title">New Registers</div>
      <div class="stat-value">1,200</div>
      <div class="stat-desc">↘︎ 90 (14%)</div>
    </div>

    <div class="stat place-items-center">
      <div class="stat-title">Churned Accounts</div>
      <div class="stat-value">42</div>
      <div class="stat-desc">↘︎ 6 (12%)</div>
    </div>
  </div>
</div>
<div class="my-6">
  <h1 class="text-xl font-bold mb-1">Revenue</h1>
  <div class="stats shadow stats-vertical sm:stats-horizontal sm:w-[420px]">
    <div class="stat place-items-center">
      <div class="stat-title text-success">Revenue</div>
      <div class="stat-value text-success">$4200</div>
      <div class="stat-desc">↗︎ $180 (4%)</div>
    </div>

    <div class="stat place-items-center">
      <div class="stat-title">New Subscribers</div>
      <div class="stat-value">16</div>
      <div class="stat-desc">↘︎ 1 (%7)</div>
    </div>
  </div>
</div>
