// toggle close btn


let togglenav = document.querySelector(".toggle");
let listNav = document.querySelector(".home .navbar .nav-list ul");
let item_nav = document.querySelector(".nav-list .links li a");


togglenav.onclick = function(){

    togglenav.classList.toggle("active");

    listNav.classList.toggle("visibal");
}

  
document.addEventListener("click", (e) =>{
  if(e.target.classList.contains("item-nav")){
    togglenav.classList.toggle("active");
    listNav.classList.toggle("visibal");
  }
})

// smooth scroll to section
var mylink = document.getElementById("links");


$(".links li a").click(function(){
      
    $('html, body').animate({
        
       scrollTop: $('#' + $(this).data('cool')).offset().top 
        
    }, 0);  
  
    });

    // btn go to top
 let mybtn = document.querySelector(".btn-top");
  
let nav = document.getElementById("nav");

 window.onscroll = function (){
    
    "use strict";
    
    if(window.pageYOffset > 800){
        mybtn.style.visibility = "visible";
    }
    else{
        mybtn.style.visibility = "hidden";
    }

    if(window.pageYOffset > 150){
      nav.classList.add("on");
  }
  else{
    nav.classList.remove("on");
  }
    
};
mybtn.onclick = function(){
    "use strict";
    
    window.scrollTo(0,0);
}

// get all data 

// all list item 
let listItem = document.querySelectorAll(".work__filters .work__item");
// all image item
let imageItem = document.querySelectorAll(".work__container .wrok__Card ");

// function add class active

listItem.forEach(ele => {

    ele.onclick = function(){
        // active
        listItem.forEach(ele =>{

            ele.className = "";
        })
        ele.className = "active-work";
         // fliter
   let value = ele.textContent;

   imageItem.forEach(card =>{
    card.style.display = "none";
       if(card.getAttribute("data-filter") == value|| value == "all"){
        card.style.display = "block";       }
   })
    }
});
  /*******************Start  close btn******************** */
 const pages = document.getElementById("pages");

 pages.onclick = function(){
  togglePortfolioPopup()
 }

  
  document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup()
        portfolioItemDetails(e.target.parentElement);
    }
  })
  document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("close-btn")){
        togglePortfolioPopup()
    }
  })
  function togglePortfolioPopup(){
      document.querySelector(".portfolio__popup ").classList.toggle("open")
  }
  function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnoil img").src = portfolioItem.querySelector(".work__img").src;

    document.querySelector(".portfolio__popup-subtitle").innerHTML 
    = portfolioItem.querySelector(".details__title").innerHTML;

    document.querySelector(".details__description").innerHTML 
    = portfolioItem.querySelector(".details__descriptions").innerHTML;

    document.querySelector(".details_info .item-one").innerHTML 
    = portfolioItem.querySelector(".details-infos .item-one").innerHTML;

    document.querySelector(".details_info .item-two").innerHTML 
    = portfolioItem.querySelector(".details-infos .item-two").innerHTML;

    document.querySelector(".details_info .item-three").innerHTML 
    = portfolioItem.querySelector(".details-infos .item-three").innerHTML;

    document.querySelector(".details_info .item-four").innerHTML 
    = portfolioItem.querySelector(".details-infos .item-four").innerHTML;

  }
    /*******************Start  close btn******************** */

  /*******************Start  dark mode******************** */
  
let dark = document.getElementById("dark");
let btn = document.getElementById("btn-dark");





btn.onclick = function(){

 dark.classList.toggle("dark");
  console.log("eslam mohamed");

}

    /*******************end  dark mode******************** */
// writter effect

var typed = new Typed('.animate', {
    strings: [
        'font-end developer',
        'font-end developer',
        'web designer',
        'freelancer'
      

       
    ],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
  });  
  var typed = new Typed('.motion', {
    strings: [
        'developer',
        'developer'


       
    ],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
  });  

  // loading website
  let timeout;




  let loader = document.getElementById("preloader");

function   autoplay(){
      window.addEventListener("load", function(){
        loader.style.display = 'none';
      });

}
autoplay()


// start navation
const cards = document.querySelectorAll(".content-indcator .box");
// get all btn items
let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");

//get all box content

let boxEducation = document.getElementById("educaiton");
let boxAbout = document.getElementById("experinece");
let boxCode = document.getElementById("my-skills");


const list = document.querySelectorAll(".list");



function activeLink (){ 

  list.forEach((item) =>

  item.classList.remove('active'));
  
  this.classList.add('active'); 
}
list.forEach((item)=>
   item.addEventListener("click", activeLink ));
function defaultActive(){
  boxCode.classList.add("active");
}  
defaultActive();
btnOne.onclick =function(){
  boxEducation.classList.remove("active");
  boxAbout.classList.remove("active");
  boxCode.classList.add("active");
}

btnTwo.onclick =function(){
  boxEducation.classList.remove("active");
  boxAbout.classList.add("active");
  boxCode.classList.remove("active");
}

btnThree.onclick =function(){
  boxEducation.classList.add("active");
  boxAbout.classList.remove("active");
  boxCode.classList.remove("active");
}

