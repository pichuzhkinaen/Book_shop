window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //Menu - categories
    // let data = [[0, -1, "all"],
    //             [1, 0, "Fiction & Literature"],
    //             [4, 1, "Children"],
    //             [5, 1, "Science Fiction"],
    //             [6, 1, "Fantasy"],
    //             [7, 1, "Mystery"],
    //             [8, 1, "Romance"],
    //             [9, 1, "Horror"],
    //             [10, 1, "Poetry"],
    //             [11, 1, "Literature"],
    //             [12, 1, "Crime"],
    //             [13, 2, "Comic"],
    //             [14, 2, "Cook"],
    //             [15, 2, "Psychology"],
    //             [2, 0, "Non - Fiction"],                
    //             [16, 2, "Medical"],
    //             [17, 2, "Art"],
    //             [18, 2, "Photography"],
    //             [19, 2, "Law"],
    //             [20, 2, "History"],
    //             [21, 2, "Business"],
    //             [22, 2, "Computer"],
    //             [23, 3, "Baby"],
    //             [24, 3, "Sex"],
    //             [25, 3, "Travel"],
    //             [26, 3, "Science"],
    //             [3, 0, "Other books"],                
    //             [27, 3, "Sports"],
    //             [28, 24, "Bdsm"]];
    //     //Add buttons
      
    // for(let i = 0; i < data.length; i++) {

    //     for(let j = 0; j < data.length; j++) {
    //         if(data[i][0] == data[j][1]) {
    //             console.log(data[j]);
    //         }
    //     }
    // }

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

    let modal = document.getElementById("modal"),
        overlay = document.getElementById("overlay"),
        btn = document.getElementById("open-modal"),
        closeModal = document.querySelector(".modal__close");
    
    btn.onclick = function () {
        modal.style.display = "block";
        overlay.style.display = "block";
    };
    
    closeModal.onclick = function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    };
    
    // Закрытие modal при клике вне его окна
    overlay.onclick = function (event) {     
        console.log('overlay.onclick');
        //event.preventDefault();
        if (event.target == overlay) {
            modal.style.display = "none";
            overlay.style.display = "none";
        }
    };

        //smooth scroll and pageup

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

         // Form

    let form = document.querySelector('.form'),
        input = form.getElementsByTagName('input');
        // statusMessage.classList.add('status');

        console.log(form);

        
    form.addEventListener('submit', function(event) {
        console.log('123');
        event.preventDefault();
        // form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });

        console.log(formData);

        let json = JSON.stringify(obj);

        console.log(json);

        request.send(json);

            // Обнуление инпутов после нажатия кнопки "Вход"
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }

        console.log(input);

    });

    let ulMenu = document.querySelector('.shop-buy__menu'),
        btnMenu = document.querySelectorAll('.shop-buy__btn'),
        goods = document.querySelector('.shop-buy__goods');

        // for (let i = 0; i < ulMenu.length; i++) {
        //     // if (i > 0) {
        //     //     goods[0].style.display = "none";
        //     //     goods.style.display = "block";
        //     // }
        //     // if (i > 0) {
        //     //     btnMenu[0].classList.remove('active');
        //     // }  
        //     btnMenu[i].classList.add('active');
        //     console.log(btnMenuMenu[0]);
        // }

        // function hideBtnMenu(a) {
        //     for (let i = 0; i < ulMenu.length; i++) {
        //         // btnMenu[i].classList.contains('active');
        //         // btnMenu[i].classList.add('hide');
        //         // ulMenu[i].classList.contains('active');
        //         // if (ulMenu[i] == false) {
        //         //     btnMenu[i].classList.add('active');
        //         // }
        //     }
        //     if (btnMenu[i].classList.contains('active');)
        //     console.log(btnMenu);
        // }
        // hideBtnMenu();

        // function hideBtnMenu() {
        //     // btnMenu[0].classList.add('active');
        //     for (let i = 0; i < btnMenu.length; i++) {
        //         // if (btnMenu[b].classList.contains('shop-buy__btn_active')) {
        //         //     btnMenu[b].classList.remove('shop-buy__btn_active');
        //         // }
        //         if (btnMenu[i] == btnMenu[0]) {
        //             btnMenu[i].classList.add('shop-buy__btn_active');
        //         } else {
        //             btnMenu[0].classList.remove('shop-buy__btn_active');
        //             btnMenu[i].classList.add('shop-buy__btn_active');
        //         }
        //         i++;
        //     }
        //     console.log(btnMenu[1]);
        // }
        // hideBtnMenu();

            // btnMenu[0].classList.add('active');
        for (let i = 0; i < btnMenu.length; i++) {
            // if (btnMenu[b].classList.contains('shop-buy__btn_active')) {
            //     btnMenu[b].classList.remove('shop-buy__btn_active');
            // }
            if (btnMenu[i] == btnMenu[0]) {
                btnMenu[i].classList.add('shop-buy__btn_active');
            } 
            // else {
            //     btnMenu[0].classList.remove('shop-buy__btn_active');
            //     btnMenu[i].classList.add('shop-buy__btn_active');
            // }
            // i++;
        }
        console.log(btnMenu[1]);

        // ulMenu.addEventListener('click', function() {
        //     for (let i = 1; i < btnMenu.length; i++) {
        //         btnMenu[0].classList.remove('shop-buy__btn_active');
        //         btnMenu[i].classList.add('shop-buy__btn_active');
        //     }
        // });

        // ulMenu.addEventListener('click', function(event) {
        //     let target = event.target;
        //     if (target && target.classList.contains('shop-buy__btn')) {
        //         for (let i = 0; i < btnMenu.length; i++) {
        //             if (target == btnMenu[i]) {
        //                 btnMenu[0].classList.remove('shop-buy__btn_active');
        //                 btnMenu[i].classList.add('shop-buy__btn_active');
        //                 // break;
        //             }
        //         }

        //     }
        // });
        
    ulMenu.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('shop-buy__btn')) {
            for (let i = 0; i < btnMenu.length; i++) {
                for (let j = 0; j < btnMenu.length; j++) {
                    if (target == btnMenu[j]) {
                        btnMenu[i].classList.remove('shop-buy__btn_active');
                        btnMenu[j].classList.add('shop-buy__btn_active');
                    }
                }
            }
        }
    });
    
        // function showGoods(b) {
        //     if (goods[b].classList.contains('active')) {
        //         goods[b].classList.remove('active');
        //         goods[b].classList.add('show');
        //     }
        // }
        // ulMenu.addEventListener('click', function(event) {
        //     let target = event.target;
        //     if (target && target.classList.contains('shop-buy__btn')) {
        //         for(let i = 0; i < btnMenu.length; i++) {
        //             if (target == btnMenu[i]) {
        //                 hideGoods(0);
        //                 showGoods(i);
        //                 break;
        //             }
        //         }
        //     }
    
        // });

        // function hideTabContent(a) {
        //     for (let i = a; i < goods.length; i++) {
        //         goods[i].classList.remove('active');
        //         // goods[i].classList.add('hide');
        //     }
        // }
        // hideTabContent(1);
        



        // btnMenu.addEventListener('click', function() {
        //     goods.style.display = 'block';
        //     this.classList.add('active');
        //     document.body.style.overflow = 'hidden';
        // });

        // btnMenu.classList.add('active');



        // btnMenu.onclick = function () {
        //     goods[0].style.display = "none";
        //     goods.style.display = "block";
        // };

        // goodsBest.addEventListener('click', function() {
        //     goodsBest.style.display = "block";
        // });

});