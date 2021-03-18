const addScript = (url) => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

export const onClientEntry = () => {
  window.onload = () => {
    addScript(
      "https://tag.simpli.fi/sifitag/11c4e130-6a57-0139-8892-06b4c2516bae"
    )
  }
}
