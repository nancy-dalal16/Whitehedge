// On Scroll Animation Intialization

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const header_nav = document.querySelector(".header");

const toggleNavbar = () => {
    header_nav.classList.toggle("active");
}

mobile_nav.addEventListener("click", () => toggleNavbar(
   document.body.style.overflowY = document.body.style.overflowY === 'hidden' ? 'visible' : 'hidden'
));




(function(document){
    var div = document.getElementById('servicemenu');
   
    var icon = document.getElementById('icon');
    var open = false;
    
    div.addEventListener('click', function(){
      if(open){
        icon.className = 'fa fa-arrow-down';  
      } else{
        icon.className = 'fa fa-arrow-down open';
      }
      
      open = !open;
    });
  })(document);




// $('#servicemenu').click(function() {
    // icon = $(this).find("i");
    // if( icon.hasClass("bx bx-md bx-chevron-down"))
    // {
    //     icon.addClass("bx bx-md bx-chevron-up").removeClass("bx bx-md bx-chevron-down");
    // }
    // else{
    //     icon.addClass("bx bx-md bx-chevron-down").removeClass("bx bx-md bx-chevron-up");
    //   }
  
// });