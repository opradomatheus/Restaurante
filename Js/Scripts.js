  /*MENU SHOW*/

  const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*ACTIVE AND REMOVE MENU*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    
    //Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')   

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

}

function removeMenu()
{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

  



(function headerMuda() {
    var menu = document.getElementById("menu")
  
    window.addEventListener("scroll", function () {
        if (scrollY > 0)
        menu.classList.add("menuFixo")
        else
        menu.classList.remove("menuFixo")
    })
  })()


