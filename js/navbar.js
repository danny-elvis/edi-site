/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollPos < currentScrollPos || currentScrollPos < '5' || (prevScrollPos / 3) > (currentScrollPos / 2)) {
        document.getElementById("navbar").style.bottom = "0";
    } else {
        document.getElementById("navbar").style.bottom = "-4em";
    }
    prevScrollPos = currentScrollPos;
}



// Cache selectors
var lastId,
    topMenu = $("#navbar"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).position().top;//-topMenuHeight+1; offset->position
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 500);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).position().top < fromTop) //offset
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
        $('a').removeClass("active")
        $("[href='#"+id+"']").addClass("active");
        document.getElementById("navbar").style.bottom = "0";
       /* menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active"); */
   }                   
});





/* var header = document.getElementById("navbar");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
} */