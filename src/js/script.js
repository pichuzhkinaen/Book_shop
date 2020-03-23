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

        // Меню над товарами - обработка событий

    let ulMenu = document.querySelector('.shop-buy__menu'),
        btnMenu = document.querySelectorAll('.shop-buy__btn'),
        goods = document.querySelectorAll('.shop-buy__goods');

        goods[0].style.display = 'flex';
        btnMenu[0].classList.add('shop-buy__btn_active');
        for (let a = 1; a < btnMenu.length; a++) {
            goods[a].style.display = 'none';
        }
       
    ulMenu.addEventListener('click', function(event) {
        
        let target = event.target;
        if (target && target.classList.contains('shop-buy__btn')) {

            for (let i = 0; i < btnMenu.length; i++) {

                if (target == btnMenu[i]) {
                    btnMenu[i].classList.add('shop-buy__btn_active');
                    goods[i].style.display = 'flex';
                } else {
                    btnMenu[i].classList.remove('shop-buy__btn_active');
                    goods[i].style.display = 'none';
                }
            }
        }
    });


            // Вставка картинки с корзиной и звездочкой в карточки товаров


    function getBtnPurchase() {
        let purchase = document.querySelectorAll('.shop-buy__purchase');

        for(let i = 0; i < purchase.length; i++) {
            let purchaseBtnBasket = document.createElement('button'),
                purchaseBtnStar = document.createElement('button');
            
            purchase[i].append(purchaseBtnBasket);
            purchaseBtnBasket.className = "shop-buy__basket";
            purchaseBtnBasket.addEventListener('click', addGoodBasket);
            purchase[i].append(purchaseBtnStar);
            purchaseBtnStar.className = "shop-buy__star";
        }
    }
    getBtnPurchase();


        // Calc покупок. При нажатии на корзину у товара меняется сумма вверху
    
    let btnBasket = document.querySelectorAll('.shop-buy__basket') [0], // кнопка "добавить в корзину"
        sum = document.getElementById('sum'), // данные корзины
        
        goodCard = document.querySelectorAll('.shop-buy__goods'), // карточки товара - родительские элементы кнопки добавления в корзину
        sumValue = 0;
        sum.innerHTML = '$' +  sumValue;

        // console.log("price:");
        // // console.log(price);
        // console.log(price[0]);
        // console.log(price[0].innerHTML);

        // let personsSum = {};
        // personsSum[price] = [price, 1];

        // console.log(personsSum);

    function addGoodBasket(event) {
        let target = event.target,
            parentBox = target.parentNode, // родительский элемент кнопки "Добавить в корзину"
            price = parentBox.querySelector('.shop-buy__price').innerHTML;

            sumValue = Number(sumValue) + Number(price); // перевод в числовое значение

            sum.innerHTML = '$' + sumValue;

        console.log('addGoodBasket');
        console.log(target);
        console.log(parentBox);
        console.log(price);
        console.log(sumValue);
    }

    // for(let j = 0; j < btnBasket.length; j++){
    //     btnBasket[j].addEventListener('click', addGoodBasket);
    // }

    // btnBasket.addEventListener('click', function(event) {
    
    //     let target = event.target;
    //     if (target && target.classList.contains('shop-buy__basket')) {

    //         for (let i = 0; i < btnBasket.length; i++) {

    //             if (target == btnBasket[i]) {
    //                 for (let j = 0; j < price.length; j++) {
    //                     if ([j].price == [i].btnBasket) {
    //                         sum = sumValue + price[j];
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     console.log(sum);
    // });


    // function addGoodBasket(event) {

    //     let //parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину" (родитель текущего элемента)
    //             target = event.target;

    //     for (let i = 0; i < btnBasket.length; i++) {
    //         if (target == btnBasket[i]) {
    //             console.log(btnBasket[i]);

    //             for (let a = 0; a < price.length; a++) {
    //                 if (btnBasket[i] == price[a]) {
    //                     console.log(price[a]);
    //                 }
    //             }
    //         }
    //     }
    // }
    // for(let j = 0; j < btnBasket.length; j++){
    //     btnBasket[j].addEventListener('click', addGoodBasket);
    // // console.log(btnBasket[j]);
    // }

        // for (let i = 0; i < price.length; i++) {
        //     let priceData = getPriceData() || {};

        //     priceData[i] = price[i];

        // }
        // console.log(price[0]);
    // Добавляем товар в корзину

    // function addGoodBasket(e) {
    //     let parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
    //         price = parentBox.querySelector('.shop-buy__price').innerHTML; // стоимость товара

    //     for (let j = 0; j < price.length; j++) {
            
    //     }
    // };
    // function addGoodBasket(event) {
        
    //     let target = event.target;

    //     if (target && target.classList.contains('shop-buy__basket')) {

    //         for (let i = 0; i < price.length; i++) {

    //             if (target == price[i]) {
    //                 console.log(price);
    //             }
    //         }
    //     }
    // }


            // let target = event.target,
        //     parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
        //     price = parentBox.querySelector('.shop-buy__price').innerHTML; // стоимость товара

        //     let obj = {};
        //     price.forEach(function(value, key) {
        //         obj[key] = value;
        //     });
        //     console.log(obj);
        // if (target && target.classList.contains('.shop-buy__goods')) {
    
        //     for (let i = 0; i < price.length; i++) {
    
                // if (target == parentBox) {
                // sum = sumValue + price[i];
                // }
        //     }
        // }



    // function addToCart(e){
    //     //this.disabled = true; // блокируем кнопку на время операции с корзиной

    //     let parentBox = this.parentNode, // родительский элемент кнопки "Добавить в корзину"
    //         price = parentBox.querySelector('.shop-buy__price').innerHTML; // стоимость товара

    //     sum[itemId] = [itemTitle, itemPrice, 1];

    //     if(!setCartData(cartData)){ // Обновляем данные в LocalStorage
    //     this.disabled = false; // разблокируем кнопку после обновления LS
    //     }
    // return false;
    // }
    // Устанавливаем обработчик события на каждую кнопку "Добавить в корзину"


    // [].forEach.call(btnBasket,function(el){
    //     el.addEventListener('click', function (e) {
    //         for (let i = 0; i < price.length; i++) {
    //             sum.innerHTML = sumValue + price;
    //             console.log(sum);
    //         }
    //     });
    // });

    // btnBasket.addEventListener('click', function() {
    //     for (let i = 0; i < btnBasket.length; i++) {

    //         for (let j = 0; j < price.length; j ++) {
    //             if (btnBasket[i] == price[j]) {
    //                 sum.innerHTML = price[j];
    //             }
                
    //         }

    //     }
    //     console.log(sum);
    // });

    // btnBasket.addEventListener('click', function(event) {
        
    //     let target = event.target;

    //     for (let i = 0; i < price.length; i++) {

    //         if (target == price[i]) {
    //             sum.innerHTML = price[i];
    //         }
    //     }
    // });


    // btnBasket.addEventListener('click', function() {
    //     let 
    //     //btnBasket = querySelectorALL('.shop-buy__basket'),
    //         price = querySelectorAll('.shop-buy__price'),
    //         personsSum = getElementById('sum'),
    //         personsSumValue = 0;

    //         personsSum.innerHTML = personsSumValue;
    // });
    


        // let persons = document.querySelectorAll('.counter-block-input')[0],
        // restDays = document.querySelectorAll('.counter-block-input')[1],
        // place = document.getElementById('select'),
        // totalValue = document.getElementById('total'),
        // personsSum = 0,
        // daysSum = 0,
        // total = 0;

        // totalValue.innerHTML = 0;

        // persons.addEventListener('change', function() {
        //     personsSum = +this.value;
        //     total = (daysSum + personsSum)*4000;

        //     if(restDays.value == '' || persons.value == '') {
        //         totalValue.innerHTML = 0;
        //     } else {
        //         totalValue.innerHTML = total;
        //     }
        // });

        // restDays.addEventListener('change', function() {
        //     daysSum = +this.value;
        //     total = (daysSum + personsSum)*4000;

        //     if(persons.value == '' || restDays.value == '') {
        //         totalValue.innerHTML = 0;
        //     } else {
        //         totalValue.innerHTML = total;
        //     }
        // });

        // place.addEventListener('change', function() {
        //     if (restDays.value == '' || persons.value == '') {
        //         totalValue.innerHTML = 0;
        //     } else {
        //         let a = total;
        //         totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        //     }
        // });
        

});