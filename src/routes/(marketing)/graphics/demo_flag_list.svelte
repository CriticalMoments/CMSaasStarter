<script lang="ts">
  let lines = [
    "app_version > '3.2.1'",
    "os_version < '14.2.1'",
    "platform == 'iPadOS'",
    "interface_orientation == 'landscape'",
    "app_install_date > now() - 8d",
    "network_connection_type == 'wifi'",
    "on_phone_call == true",
    "user_interface_idiom == 'tablet'",
    "dark_mode == true",
    "library_version > '1.2.3'",
    "device_manufacturer == 'Apple'",
    "device_battery_level > 0.25",
    "device_battery_state != 'charging'",
    "has_watch == true",
    "screen_scale == 'retina'",
    "locale_language_code != 'en'",
    "locale_country_code == 'CA'",
    "app_id == 'io.criticalmoments.demo'",
    "has_active_network == false",
    "device_low_power_mode == false",
    "device_model_class == 'iPod'",
    "other_audio_playing == false",
    "screen_width_points > 320",
    "app_state == 'inactive'",
    "low_data_mode == true",
    "device_orientation == 'portrait'",
    "device_model > 'iPhone13,3'",
  ]
</script>

<div
  class="pt-6 w-full h-full relative overflow-hidden text-center font-mono text-lg font-bold text-[#8494AE]"
  aria-hidden="true"
>
  {#each Array(2) as _}
    <div class="feature-flag-scroll-text">
      {#each lines as line}
        <div class="py-2">{line}</div>
      {/each}
    </div>
  {/each}
  <div
    class="absolute w-full h-36 bg-gradient-to-b from-base-100 to-transparent top-0"
  ></div>
  <div
    class="absolute w-full h-36 bg-gradient-to-t from-base-100 to-transparent bottom-0"
  ></div>
</div>

<style>
  .feature-flag-scroll-text {
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: slidein;
  }

  @keyframes slidein {
    from {
      transform: translateY(0%);
    }

    to {
      transform: translateY(-100%);
    }
  }
</style>
