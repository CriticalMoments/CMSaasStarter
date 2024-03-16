import { derived, writable } from "svelte/store"

const translations = import.meta.glob<{ default: { [key: string]: string } }>(
  `../translation/*.json`,
  { eager: true },
)
const localesArray: string[] = []
Object.entries(translations).map(([path]) => {
  const from = "/translation/"
  const localeFileName = path.slice(
    path.indexOf(from) + from.length,
    path.lastIndexOf(".json"),
  )
  localesArray.push(localeFileName)
})

const path = "../translation"
export const defaultLang = "en"
export const currentLang = writable(defaultLang)
export const langs = localesArray

function translate(
  currentLang: string,
  key: string,
  vars: { [key: string]: string },
  returnFallback: boolean,
) {
  if (!key) throw new Error("no key provided to $t()")

  let text = translations[`${path}/${currentLang}.json`].default[key]

  if (!currentLang) throw new Error(`no translation for key "${key}"`)

  if (!text) {
    if (translations[`${path}/${currentLang}.json`].default[key] == undefined) {
      if (
        translations[`${path}/${defaultLang}.json`].default[key] == undefined
      ) {
        return key
      } else if (returnFallback === false) {
        return key
      } else {
        console.warn(
          `"${currentLang}.${key}" translation not found. Showing "${defaultLang}.${key}" instead.`,
        )
        return translations[`${path}/${defaultLang}.json`].default[key]
      }
    }
  }

  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g")
    text = text.replace(regex, vars[k])
  })

  return text
}

export const t = derived(
  currentLang,
  ($currentLang) =>
    (key: string, vars = {}, lang = $currentLang, returnFallback = true) =>
      translate(lang, key, vars, returnFallback),
)

export const setLang = (lang: string | null, replaceQuery = true) => {
  if (!lang || !langs.includes(lang)) {
    return null
  }
  currentLang.set(lang)
  if (replaceQuery) {
    const url = new URL(window.location.toString())
    if (lang) {
      url.searchParams.set(encodeURIComponent("lang"), encodeURIComponent(lang))
    } else {
      url.searchParams.delete("lang")
    }
    history.replaceState({}, "", url)
  }
  localStorage.setItem("lang", lang)
  document.documentElement.setAttribute("lang", lang)
  // set direction
  document.documentElement.setAttribute(
    "dir",
    translations[`${path}/${lang}.json`].default["__direction"],
  )
}
