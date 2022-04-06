/*Mostrar menu*/

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*Ativar e desativar menu*/

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  //Link ativo
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  //Remover menu ativo
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

function removeMenu() {
  //Remover menu ativo
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

function dia() {
  var dia = document.getElementById("dia-semana");
  var prato = document.getElementById("prato-do-dia")
  var preco = document.querySelector(".preco")

  var hoje = new Date();
  var today = hoje.getDay();

  // var today = 5

  dia.innerHTML = `${today}`;

  switch (today) {
    case 0:
      dia.textContent = "Domingo";
      prato.src = "Img/alaminuta.png"
      break;

    case 1:
      dia.textContent = "Segunda-feira";
      prato.src = "Img/alaminuta.png"
      break;

    case 2:
      dia.textContent = "Terça-feira";
      prato.src = "Img/yakisoba.png"
      break;

    case 3:
        dia.textContent = "Quarta-feira" 
        prato.src = "Img/alaminuta.png"
        break

    case 4:
        dia.textContent = "Quinta-feira" 
        prato.src = "Img/yakisoba.png"
        break   

    case 5:
        dia.textContent = "Sexta-feira"
        prato.src =  "Img/burger-fritas-suco.png"
        break

    case 6:
        dia.textContent = "Sabádo"
        prato.src = "Img/alaminuta.png"
        break

    default:
        dia.textContent = "[ERRO] Dia inválido!"
      break;
  }
}




