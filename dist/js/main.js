// ====== JS Slider Owl Carousel ====== //
$(function () {
    $(".owl-one").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText: [$('.am-next'), $('.am-prev')],

    });
    $(".owl-two").owlCarousel({
        items: 1,

        autoplayHoverPause: false,
        nav: true,
        navText: [$('.am-next1'), $('.am-prev1')],
        dots: false,
    });
    $(".owl-three").owlCarousel({
        items: 1,
        nav: true,
        navText: [$('.am-next2'), $('.am-prev2')],
        dots: false,
    });

    $(".owl-five").owlCarousel({
        items: 5,

        nav: true,
        navText: [$('.am-next4'), $('.am-prev4')],
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            },
            1200: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });
    $(".owl-six").owlCarousel({
        items: 5,

        nav: true,
        navText: [$('.am-next5'), $('.am-prev5')],
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            },
            1200: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });
    $(".owl-seven").owlCarousel({
        items: 3,

        nav: true,
        navText: [$('.am-next6'), $('.am-prev6')],
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 2,
                nav: true,
                loop: false
            },
            1200: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
    $(".owl-eight").owlCarousel({
        items: 6,
        nav: true,
        navText: [$('.am-next7'), $('.am-prev7')],
        dots: false,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: true,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            },
            1200: {
                items: 6,
                nav: true,
                loop: false
            }
        }

    });

    $(".owl-111").owlCarousel();
});

// ======== data products of month ======== //
$(function () {
    const listPrOfMonth = [
        {
            img: "https://mld080hfvime.i.optimole.com/ZK8IPZM.g3vc~3882c/w:138/h:138/q:auto/https://lorada.c-themes.com/cosmetics/wp-content/uploads/2020/02/cosmetic-cat-1.png",
            name: "MakeUp",
            pro1: "Face",
            pro2: "Cheek",
            pro3: "Eye",
            pro4: "Lip",
        },
        {
            img: "https://mld080hfvime.i.optimole.com/ZK8IPZM.g3vc~3882c/w:138/h:117/q:auto/https://lorada.c-themes.com/cosmetics/wp-content/uploads/2020/02/cosmetic-cat-2.png",
            name: "Skin Carep",
            pro1: "Moisturizers",
            pro2: "Treatments",
            pro3: "Cleansers",
            pro4: "Masks",
        },
        {
            img: "https://mld080hfvime.i.optimole.com/ZK8IPZM.g3vc~3882c/w:138/h:129/q:auto/https://lorada.c-themes.com/cosmetics/wp-content/uploads/2020/02/cosmetic-cat-3.png",
            name: "Fragrancep",
            pro1: "For Women",
            pro2: "For Menk",
            pro3: "Floral",
            pro4: "Fresh",
        },
        {
            img: "https://mld080hfvime.i.optimole.com/ZK8IPZM.g3vc~3882c/w:138/h:143/q:auto/https://lorada.c-themes.com/cosmetics/wp-content/uploads/2020/02/cosmetic-cat-4.png",
            name: "Hair",
            pro1: "Hair Styling",
            pro2: "Hair Tools",
            pro3: " Hair Color",
            pro4: " Damaged Hair",
        },
        {
            img: "https://mld080hfvime.i.optimole.com/ZK8IPZM.g3vc~3882c/w:138/h:132/q:auto/https://lorada.c-themes.com/cosmetics/wp-content/uploads/2020/02/cosmetic-cat-5.png",
            name: "Bath & Body",
            pro1: "Sun Care",
            pro2: "For Face",
            pro3: "For Body",
            pro4: "Body Care",
        },
        {
            img: "https://mld080hfvime.i.optimole.com/ZK8IPZM.g3vc~3882c/w:138/h:144/q:auto/https://lorada.c-themes.com/cosmetics/wp-content/uploads/2020/02/cosmetic-cat-6.png",
            name: "Fragrance",
            pro1: " Lip Brushes",
            pro2: "Eye Brushes",
            pro3: "Eye",
            pro4: " Brush Cleaners",
        },
    ];
    // cách ra thì cha với con . còn ko cách thì 2 thèn ngang vế nhau
    listPrOfMonth.map((val) => {
        //if (val.tail === "ProductsOfMonth") {
        $(`
            <div class="products-month-1-item col-xs-12 col-sm-6 col-md-6 col-lg-4">
           <img src=${val.img} alt="">
           <ul class="products-ul">
             <li class="products-name"> ${val.name}</li>
             <li>${val.pro1} </li>
             <li>${val.pro2}</li>
             <li>${val.pro3} </li>
             <li>${val.pro4}</li>
           </ul>
         </div> 
           `).appendTo(".products-month-1.row");
    })

});

//=============================== Load data to Owl Carousel =====================================//
$(function () {
    const productsOwl = $(".owl-four").owlCarousel({
        items: 5,
        nav: true,
        navText: [$('.am-next3'), $('.am-prev3')],
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            500: {
                items: 2,
                nav: true
            },

            900: {
                items: 3,
                nav: true,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            },
            1200: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });
    const productsOwl2 = $(".owl-five").owlCarousel({
        items: 5,
        nav: true,
        navText: [$('.am-next3'), $('.am-prev3')],
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            500: {
                items: 2,
                nav: true
            },

            900: {
                items: 3,
                nav: true,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            },
            1200: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });
    const productsOwl3 = $(".owl-six").owlCarousel({
        items: 5,
        nav: true,
        navText: [$('.am-next3'), $('.am-prev3')],
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            500: {
                items: 2,
                nav: true
            },

            900: {
                items: 3,
                nav: true,
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            },
            1200: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });

    const data = products = [
        {
            id: 1,
            img: "/src/img/Recomendef/1.jpg",
            img1: "/src/img/Recomendef/1.1.jpg",
            img2: "/src/img/Recomendef/1.2.jpg",
            name: "Bath & Body ",
            h2: "Lotion Whipped Argan Body",
            price: 20,
            brand: "Lip",
        },
        {
            id: 2,
            img: "/src/img/Recomendef/2.jpg",
            img1: "/src/img/Recomendef/2.1.jpg",
            img2: "/src/img/Recomendef/2.2.jpg",
            name: "Fragrance",
            h2: "Lotion Whipped Argan Body",
            price: 30,
            brand: "Masks",
        },
        {
            id: 3,
            img: "/src/img/Recomendef/3.webp",
            img1: "/src/img/Recomendef/3.1.jpg",
            img2: "/src/img/Recomendef/3.2.jpg",
            name: "Tools & Brushes",
            h2: "Lotion Whipped Argan Body",
            price: 50,
            brand: "Fresh",
        },
        {
            id: 4,
            img: "/src/img/Recomendef/4.jpg",
            img1: "/src/img/Recomendef/4.1.jpg",
            img2: "/src/img/Recomendef/4.2.jpg",
            name: "Skin Care",
            h2: "Lotion Whipped Argan Body",
            price: 60,
            brand: "Damaged Hair",
        },
        {
            id: 5,
            img: "/src/img/Recomendef/5.jpg",
            img1: "/src/img/Recomendef/5.1.jpg",
            img2: "/src/img/Recomendef/5.2.jpg",
            name: "Mademoiselle Perfume",
            h2: "Lotion Whipped Argan Body",
            price: 10,
            brand: "Body Care",
        },
        {
            id: 6,
            img: "/src/img/Recomendef/6.jpg",
            img1: "/src/img/Recomendef/6.1.jpg",
            img2: "/src/img/Recomendef/6.2.jpg",
            name: "Hair",
            h2: "Lotion Whipped Argan Body",
            price: 50,
            brand: "Brush Cleaners",
        },
        {
            id: 7,
            img: "/src/img/Recomendef-Eye/1.1.jpg",
            img1: "/src/img/Recomendef-Eye/1.2.jpg",
            img2: "/src/img/Recomendef-Eye/1.3.jpg",
            name: "Bath & Body ",
            h2: "Lotion Whipped Argan Body",
            price: 20,
            brand: "Lip",
            category: "eye",
        },
        {
            id: 8,
            img: "/src/img/Recomendef-Eye/2.1.jpg",
            img1: "/src/img/Recomendef-Eye/2.2.jpg",
            img2: "/src/img/Recomendef-Eye/2.3.jpg",
            name: "Fragrance",
            h2: "Lotion Whipped Argan Body",
            price: 30,
            brand: "Masks",
            category: "eye",
        },
        {
            id: 9,
            img: "/src/img/Recomendef-Eye/3.1.jpg",
            img1: "/src/img/Recomendef-Eye/3.2.jpg",
            img2: "/src/img/Recomendef-Eye/3.3.webp",
            name: "Tools & Brushes",
            h2: "Lotion Whipped Argan Body",
            price: 50,
            brand: "Fresh",
            category: "eye",
        },
        {
            id: 10,
            img: "/src/img/Recomendef-Eye/4.1.jpg",
            img1: "/src/img/Recomendef-Eye/4.2.jpg",
            img2: "/src/img/Recomendef-Eye/4.3.jpg",
            name: "Skin Care",
            h2: "Lotion Whipped Argan Body",
            price: 60,
            brand: "Damaged Hair",
            category: "eye",
        },
        {
            id: 11,
            img: "/src/img/Recomendef-Eye/5.1.jpg",
            img1: "/src/img/Recomendef-Eye/5.2.jpg",
            img2: "/src/img/Recomendef-Eye/5.3.jpg",
            name: "Mademoiselle Perfume",
            h2: "Lotion Whipped Argan Body",
            price: 10,
            brand: "Body Care",
            category: "eye",
        },
        {
            id: 12,
            img: "/src/img/Recomendef-Eye/1.1.jpg",
            img1: "/src/img/Recomendef-Eye/1.2.jpg",
            img2: "/src/img/Recomendef-Eye/1.3.jpg",
            name: "Hair",
            h2: "Lotion Whipped Argan Body",
            price: 50,
            brand: "Brush Cleaners",
            category: "eye",
        },
    ];

    const data1 = products1 = [
        {
            id: 7,
            img: "/src/img/Recomendef/5.jpg",
            name: "Bath & Body ,Skin Care",
            h2: "Lotion Whipped Argan Body",
            price: 60,
        },
        {
            id: 8,
            img: "/src/img/Recomendef/4.jpg",
            name: "Bath & Body ,Skin Care",
            h2: "Lotion Whipped Argan Body",
            price: 60,
        },
        {
            id: 9,
            img: "/src/img/Recomendef/3.webp",
            name: "Bath & Body ,Skin Care",
            h2: "Lotion Whipped Argan Body",
            price: 60,
        },
        {
            id: 10,
            img: "/src/img/Recomendef/1.jpg",
            name: "Bath & Body ,Skin Care",
            h2: "Lotion Whipped Argan Body",
            price: 60,
        },
        {
            id: 11,
            img: "/src/img/Recomendef/2.jpg",
            name: "Bath & Body ,Skin Care",
            h2: "Lotion Whipped Argan Body",
            price: 60,
        },
        {
            id: 12,
            img: "/src/img/Recomendef/6.jpg",
            name: "Bath & Body ,Skin Care",
            h2: "Lotion Whipped Argan Body",
            price: 60,
        },
    ];

    const data2 = [
        {
            id: 13,
            img: "/src/img/Recomendef/4.jpg",
            name: "Bath & Body ,Skin Care",
            h2: "Lotion Whipped Argan Body",
            price: 60,
        },
        {
            id: 14,
            img: "/src/img/Recomendef/5.jpg",
            name: "Bath & Body ,Skin Care",
            h2: "Lotion Whipped Argan Body",
            price: 60,
        },
        {
            id: 15,
            img: "/src/img/Recomendef/3.webp",
            name: "Bath & Body ,Skin Care",
            h2: "Lotion Whipped Argan Body",
            price: 60,
        },
        {
            id: 16,
            img: "/src/img/Recomendef/4.jpg",
            name: "Bath & Body ,Skin Care",
            h2: "Lotion Whipped Argan Body",
            price: 60,
        },
        {
            id: 17,
            img: "/src/img/Recomendef/2.jpg",
            name: "Bath & Body ,Skin Care",
            h2: "Lotion Whipped Argan Body",
            price: 60,
        },
        {
            id: 18,
            img: "/src/img/Recomendef/1.jpg",
            name: "Bath & Body ,Skin Care",
            h2: "Lotion Whipped Argan Body",
            price: 60,
        },
    ];

    renderOwl(".owl-four", productsOwl, data);
    renderOwl(".owl-five", productsOwl2, data1);
    renderOwl(".owl-six", productsOwl3, data);

    //==== click Recomended  ====//
    $(".face").click(function (e) {
        e.preventDefault();
        renderOwl(".owl-four", productsOwl, data);
    });
    $(".eye").click(function (e) {
        e.preventDefault();
        renderOwl1(".owl-four", productsOwl, data, "eye")
    });
    $(".cheek").click(function (e) {
        e.preventDefault();
        renderOwl(".owl-four", productsOwl, data);
    });
    $(".makeup").click(function (e) {
        e.preventDefault();
        renderOwl(".owl-four", productsOwl, data);
    });

    // ======== lClick Recomended 2 =======//
    $(".face1").click(function (e) {
        e.preventDefault();
        renderOwl(".owl-five", productsOwl2, data1);
    });
    $(".eye1").click(function (e) {
        e.preventDefault();
        renderOwl(".owl-five", productsOwl2, data2);
    });
    $(".cheek1").click(function (e) {
        e.preventDefault();
        renderOwl(".owl-five", productsOwl2, data1);
    });
    $(".makeup1").click(function (e) {
        e.preventDefault();
        renderOwl(".owl-five", productsOwl2, data1);
    });

    // ======== Click Recomended 3 =======//
    $(".face2").click(function (e) {
        e.preventDefault();
        renderOwl(".owl-six", productsOwl3, data1);
    });
    $(".eye2").click(function (e) {
        e.preventDefault();
        renderOwl(".owl-six", productsOwl3, data2);
    });
    $(".cheek2").click(function (e) {
        e.preventDefault();
        renderOwl(".owl-six", productsOwl3, data1);
    });
    $(".makeup2").click(function (e) {
        e.preventDefault();
        renderOwl(".owl-six", productsOwl3, data1);
    });
});

// Function Render all
function renderOwl(selector, owl, list) {
    const len = $(selector).find(".recomended-item").length;
    // remove all items có trước của selecto old
    for (let i = 0; i < len; i++) {
        owl
            .trigger("remove.owl.carousel", [i])
            .trigger("refresh.owl.carousel");
    }
    //add new owl items của selecto new
    for (let i = 0; i < list.length; i++) {
        owl.owlCarousel(
            "add",
            ` 
            <div data-id=${list[i].id} class="recomended-item ">
                <div style="position: relative;">
                    <img src= ${list[i].img} alt="" class="recomended-item-img">
                    <div class="cart btn btn-cart add"> <i class="fas fa-cart-plus"> Add to Cart</i> </div>
                    <div class="hover-view-option">
                        <ul>
                            <li>
                            <a href="" class="font"><i class="fa fa-eye"></i></a>
                            </li>
                            <li>
                            <a href="" class="font"><i class="fa fa-heart-o"></i></a>
                            </li>
                            <li>
                            <a href="" class="font"><i class="fa fa-balance-scale"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
               <h4> ${list[i].name}</h4>
               <h3>${list[i].h2}</h3>
               <h5>${list[i].price}</h5>
            </div>
         `
        );
    }
    owl.trigger("refresh.owl.carousel");
}

// Function Render Eye
function renderOwl1(selector, owl, list, itemname) {
    const len = $(selector).find(".recomended-item").length;
    // remove all items có trước của selecto old
    for (let i = 0; i < len; i++) {
        owl
            .trigger("remove.owl.carousel", [i])
            .trigger("refresh.owl.carousel");
    }
    //add new owl items của selecto new
    for (let i = 0; i < list.length; i++) {
        if (list[i].category == itemname) {
            owl.owlCarousel(
                "add",
                ` 
                <div data-id=${list[i].id} class="recomended-item ">
                    <div style="position: relative;">
                        <img src= ${list[i].img} alt="" class="recomended-item-img">
                        <div class="cart btn btn-cart add"> <i class="fas fa-cart-plus"> Add to Cart</i> </div>
                        <div class="hover-view-option">
                            <ul>
                                <li>
                                <a href="" class="font"><i class="fa fa-eye"></i></a>
                                </li>
                                <li>
                                <a href="" class="font"><i class="fa fa-heart-o"></i></a>
                                </li>
                                <li>
                                <a href="" class="font"><i class="fa fa-balance-scale"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                   <h4> ${list[i].name}</h4>
                   <h3>${list[i].h2}</h3>
                   <h5>${list[i].price}</h5>
                </div>
             `
            );
        }
        owl.trigger("refresh.owl.carousel");
    }

}

//======= Nút kéo lên kéo xuống ======///

$(window).scroll(function () {
    const currentPos = $(window).scrollTop();
    // show the back to top button
    if (currentPos > 600) {
        $(".back-to-top").fadeIn();
        $(".back-to-top").css("display", "block");
    } else {
        $(".back-to-top").fadeOut();
    }

    // Position Fixed 
    if (currentPos > 77) {
        $(".nav-fixed").fadeIn();
        $(".nav-fixed").css("display", "flex");
    } else {
        $(".wo").css("display", "block");
        $(".nav-fixed").css("display", "none");
    }
});

// =========================== Cart ========================//
$(function () {

    let cart = [];

    // load data from json api
    $("body").on("click", ".add", function (e) {

        //localStorage
        e.preventDefault();
        const currenId = $(this).parents(".recomended-item").data("id");
        const currenItem = products.find((val) => val.id === currenId); //currenItem chứa các sản phẩm có id = id mình vừa click
        // cart : chứa list item mà mình chọn
        // check cai item da co trong cart chua
        const isExsit = cart.findIndex((val) => val.id === currenId);

        if (isExsit === -1) {       //nếu chưa có
            currenItem.quantity = 1;
            currenItem.total = currenItem.quantity * currenItem.price;
            cart.push(currenItem);
        }
        else {
            cart[isExsit].quantity += 1;
            cart[isExsit].total = cart[isExsit].quantity * cart[isExsit].price;
        }
        $(".quantity-item").text(cart.length);
        // render total item () tiền
        const total = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);

        $(".total1 .total").html(`Total price: <span>  ${total} </span>`);
        renDerlist(cart);
        //check so luong san pham de hien cai modal

        if ($(".cart2 .quantity-item").html() < 1) {
            $('.total1').css('display', 'none');
            $('.total').css('display', 'none');
            $('.cart-list').css('border-bottom', 'unset');
            //$('.text-active').css('display', 'block');

        }
        else {
            $('.total').css('display', 'block');
            $('.cart-list').css('border-bottom', '1px solid #eee7e7');;
            $('.text-active').css('display', 'none');
            $('.total1').css('display', 'block');
        }
        localStorage.setItem("cart", JSON.stringify(cart));

    });

    //renDerlist(cart);
    //delete
    $(`body`).on(`click`, `.delete`, function (evt) {
        evt.preventDefault();
        //console.log("ahihi");
        const currenId = $(this).parent().data("id");

        const currenItem = products.find((val) => val.id === currenId);

        //console.log(cart[isExsit].quantity);
        var quantity1 = $(this).parent().children("span").children("span").eq(0).html();
        //cart[isExsit].quantity = quantity1;

        if (quantity1 > 1) {
            quantity1--;
            $(this).parent().children("span").children("span").eq(0).html(quantity1);


            //update total
            let total2 = $(".total1 .total").children("span").html() - $(this).parent().children("span").children("span").eq(1).html();
            $(".total1 .total").html(`Total price: <span>  ${total2} </span>`);
        }
        else {

            var $this = $(evt.currentTarget),
                cartItem = $this.parent();

            //update total
            let total23 = $(".total1 .total").children("span").html() - $(this).parent().children("span").children("span").eq(1).html();
            $(".total1 .total").html(`Total price: <span>  ${total23} </span>`);

            let cartLengthhUpdate = cart.length - 1;
            cartItem.remove();
            cart.pop(currenItem);

            $(".quantity-item").text(cartLengthhUpdate);
            //renDerlist(cart)
        }
        // check so luong san pham de hien cai modal
        if ($(".cart2 .quantity-item").html() < 1) {
            $('.total1').css('display', 'none');
            $('.total').css('display', 'none');
            $('.cart-list').css('border-bottom', 'unset');
            //$('.text-active').css('display', 'block');

        }
        else {
            $('.total').css('display', 'block');
            $('.cart-list').css('border-bottom', '1px solid #eee7e7');;
            $('.text-active').css('display', 'none');
            $('.total1').css('display', 'block');
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    });

    // check so luong san pham de hien cai modal


    //console.log($(".cart2 .quantity-item").html());
    if ($(".cart2 .quantity-item").html() < 1) {
        $('.total1').css('display', 'none');
        $('.total').css('display', 'none !important');
        $('.cart-list').css('border-bottom', 'unset');
        //$('.text-active').css('display', 'block');

    }
    else {
        $('.total').css('flex', 'auto');
        $('.cart-list').css('border-bottom', '1px solid #eee7e7');;
        $('.text-active').css('display', 'none');
        $('.total1').css('display', 'block');
    }

    // ======================= Click block none Cart- giỏ h ================================//
    $('.close-search').click(function () {
        $('.search-product-width').toggle();
    });

    $('.search-button-2').click(function () {
        $(".search-input2").val('');
        $('.search-product-width').toggle();
    });


    // Check out product from Cart
    $(".checkout").click(function (e) {
        e.preventDefault();
        //console.log("1", cart);

        window.location.href = './checkout.html';
        //return false;
        $("#order-info-view").empty();
        //console.log("ahihi");
        cart.map((val) => {
            $(`
                <li class="order-product-info row a-center jc-spacebtw">
                    <div class="col-xs-2 order-product-thumbnail flex a-center jc-center">
                    <img src="${val.img}" alt="">
                    <span class="order-quantity flex a-center jc-center"><span> ${val.quantity} </span></span>
                    </div >
                    <div class="col-xs-8 order-product-name">
                        <p>${val.name}</p>
                    </div>
                    <div class="col-xs-2 order-product-price">
                     <p>$${val.price}</p>
                    </div>
                </li >
                    `).appendTo("#order-info-view");
        })
        const total = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);
        $(".calc-subtotal").html(total);
        $(".total2").html(total);
    });


    // Product-view
    const productssss = [];
    $(".recomended-item-img").click(function (e) {
        e.preventDefault();

        const currenId2 = $(this).parent().parent().data("id");
        console.log(currenId2);

        const currenItem2 = products.find((val) => val.id === currenId2);
        productssss.push(currenItem2);
        localStorage.setItem("productview", JSON.stringify(productssss));

        window.location.href = './product-view.html';

    });





});


function renDerlist(list) {
    $(".cart-list").empty();
    list.map((val) => {
        $(`
             <li data-id=${val.id} class= "cart-custom" >
                    <img src="${val.img}" alt="">
                    <span>
                    ${val.name}
                    <span class="quantity">${val.quantity} </span>
                x $
                <span>${val.price} </span>
                        </span>
                <i class="fas fa-trash-alt delete" ></i>
            </li>
        `).appendTo(".cart-list");
    })
};

// ================ Search products ===============// 
$(function () {
    $(".search-input2").keypress(function () {

        const SearchInput = $(".search-input2").val();

        const filterProduct =
            products
                .filter((val) => {
                    return val.name.toLowerCase().includes(SearchInput.toLowerCase());
                })
                .map((val) => {
                    return {
                        ...val,
                        name: val.name.toLowerCase()
                            .split(SearchInput.toLowerCase())
                            .join(`<span style = "color:red">${SearchInput}</span>`)
                    }
                })
        renderProduct(filterProduct);
    });

    // ====== active checkout ====== //
    $("#item-agree2").change(function (e) {
        e.preventDefault();
        console.log("huhu");
        if ($("#item-agree2").prop("checked") === true) {
            $(".checkout").prop("disabled", false);
            $(".checkout").addClass("active");
        } else {
            $(".checkout").prop("disabled", true);
            $(".checkout").removeClass("active");
        }
    });

    $("#item-agree1").change(function (e) {
        e.preventDefault();
        console.log("huhu");
        if ($("#item-agree1").prop("checked") === true) {
            $(".checkout").prop("disabled", false);
            $(".checkout").addClass("active");
        } else {
            $(".checkout").prop("disabled", true);
            $(".checkout").removeClass("active");
        }
    });

    $("#item-agree").change(function (e) {
        e.preventDefault();
        console.log("huhu");
        if ($("#item-agree").prop("checked") === true) {
            $(".checkout").prop("disabled", false);
            $(".checkout").addClass("active");
        } else {
            $(".checkout").prop("disabled", true);
            $(".checkout").removeClass("active");
        }
    });


    // ========== Menu left =========//
    $(document).click(function () {
        $(".menu-max-width").removeClass("active");
    });

    $(".header-mobile-nav").click(function (event) {
        $(".menu-max-width").addClass("active");
        event.stopPropagation();
    });

    $(".menu-max-width").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    // Open-Close Cart
    $("#myBtn1").click(function (event) {
        $("#myDiv1").css('display', 'block');
    });

    $("#myBtn2").click(function (event) {
        $("#myDiv2").css('display', 'block');
    });

    $("#myBtn3").click(function (event) {
        $("#myDiv3").css('display', 'block');
    });

    $(".close-total1").click(function (e) {
        $(".total1").css('display', 'none');
        console.log("close");
    });


});

//======== Load product-Search =======//
function renderProduct(products) {
    $(".show-product .row").empty();
    if (products.length) {
        products.map((val) => {
            $(`
                <div data-id=${val.id} class= "recomended-item  col-lg-3" >
                    <div style="position: relative;">
                        <img src= ${val.img} alt="" style="width: 100%;"  class="recomended-item-img">
                        <div class="cart btn btn-cart add"> <i class="fas fa-cart-plus"> Add to Cart</i> </div>
                        <div class="hover-view-option">
                            <ul>
                                <li>
                                    <a href="" class="font"><i class="fa fa-eye"></i></a>
                                </li>
                                <li>
                                    <a href="" class="font"><i class="fa fa-heart-o"></i></a>
                                </li>
                                <li>
                                    <a href="" class="font"><i class="fa fa-balance-scale"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h4> ${val.name}</h4>
                    <h3>${val.h2}</h3>
                    <h5>${val.price}</h5>
                </div>
            `).appendTo(".show-product .row");
        });
    }
    else {
        $(`< h1 > No Products Found!</h1 > `).appendTo(".show-product .row");
    }
};


