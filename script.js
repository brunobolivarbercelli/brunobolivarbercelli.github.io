function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Bruno com óculos escuros, barba aparada e camisa polo clara, em ambiente externo com fundo desfocado",
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      (alt =
        "Bruno com barba aparada e cabelo curto grisalho, usando camisa polo clara, em ambiente interno com fundo desfocado"),
    )
  }
}
