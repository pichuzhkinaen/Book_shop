window.addEventListener('DOMContentLoaded', function() {
    'use strict';

        //Menu - categories

    let data = [[0, -1, "all"],
                [1, 0, "Fiction & Literature"],
                [4, 1, "Children"],
                [5, 1, "Science Fiction"],
                [6, 1, "Fantasy"],
                [7, 1, "Mystery"],
                [8, 1, "Romance"],
                [9, 1, "Horror"],
                [10, 1, "Poetry"],
                [11, 1, "Literature"],
                [12, 1, "Crime"],
                [13, 2, "Comic"],
                [14, 2, "Cook"],
                [15, 2, "Psychology"],
                [2, 0, "Non - Fiction"],                
                [16, 2, "Medical"],
                [17, 2, "Art"],
                [18, 2, "Photography"],
                [19, 2, "Law"],
                [20, 2, "History"],
                [21, 2, "Business"],
                [22, 2, "Computer"],
                [23, 3, "Baby"],
                [24, 3, "Sex"],
                [25, 3, "Travel"],
                [26, 3, "Science"],
                [3, 0, "Other books"],                
                [27, 3, "Sports"],
                [28, 24, "Bdsm"]];
        //Add buttons
      
    for(let i = 0; i < data.length; i++) {

        for(let j = 0; j < data.length; j++) {
            if(data[i][0] == data[j][1]) {
                console.log(data[j]);
            }
        }
    }

    // function getListContent() {
    //     let fragment = new DocumentFragment();
      
    //     for(let i = 1; i <= 3; i++) {
    //       let button = document.createElement('button');
    //       button.className = "shop__btn";
    //       button.append(data[i][2]);
    //       fragment.append(button);
    //     }
      
    //     return fragment;
    // }

    // let catListBtn = document.getElementById('cat_list_btn');
    // catListBtn.append(getListContent());

            // Modal

    

    // //smooth scroll and pageup

    (function() {   
        let goTopBtn = document.querySelector('.pageup');
        
        window.addEventListener('scroll', trackScroll);
        goTopBtn.addEventListener('click', backToTop);

        function trackScroll() {
            let scrolled = window.pageYOffset;
            let coords = document.documentElement.clientHeight;
        
            if (scrolled > coords) {
            goTopBtn.classList.add('pageup_show');
            }
            if (scrolled < coords) {
            goTopBtn.classList.remove('pageup_show');
            }
        }
        
        function backToTop() {
            if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
            }
        }
    })();

});