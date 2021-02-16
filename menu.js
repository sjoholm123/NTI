function scrollDetect(){
    var lastScroll = 0;
    window.onscroll = function() {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    
      if (currentScroll > 0 && lastScroll <= currentScroll){
        lastScroll = currentScroll;
  
        if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300){
          document.getElementById("box").style.top = "100vh";
        }
      }

    };
  }
  
  scrollDetect();