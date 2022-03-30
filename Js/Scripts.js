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

/*Ativar e desativar menu*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    
    //Link ativo
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')   

    //Remover menu ativo
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

}

function removeMenu()
{
    //Remover menu ativo
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

  

