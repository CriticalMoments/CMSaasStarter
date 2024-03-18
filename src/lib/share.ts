import { browser } from "$app/environment"

export const webShareSupported = () => browser && navigator?.share

export const webShare = async (title = "", text = "", url = "") => {
  try {
    await navigator.share({
      title,
      text,
      url,
    })
  } catch (err) {
    // continue
  }
}
