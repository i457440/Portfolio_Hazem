  

        const currentLocation = location.href;
        const menuItem = document.querySelectorAll('a');
        const menuLength = menuItem.length
        for(let i = 0; i<menuLength; i++ ){
            if(menuItem[i].href === currentLocation){
                menuItem[i].className = "active"
            }
        }

        $(document).ready(function(){
        $(window).scroll(function(){
            // sticky navbar on scroll script
            if(this.scrollY > 20){
                $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
            }

            
        });

    
        AOS.init(); 
      

    });

    
    