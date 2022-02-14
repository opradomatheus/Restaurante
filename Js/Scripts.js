(function headerMuda() {
    var menu = document.getElementById("menu")
  
    window.addEventListener("scroll", function () {
        if (scrollY > 0)
        menu.classList.add("menuFixo")
        else
        menu.classList.remove("menuFixo")
    })
  })()
  