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


$(function () {

    const productView = JSON.parse(localStorage.getItem("productview"));
    //console.log(productView);
    // Map img nho
    productView.map((val) => {
        $(`
        <div class="column">
            <img src="${val.img}" alt="Nature" style="width:100%" onclick="myFunction(this);">
        </div>
        <div class="column">
            <img src="${val.img1}" alt="Nature" style="width:100%" onclick="myFunction(this);">
        </div>
        <div class="column">
            <img src="${val.img2}" alt="Nature" style="width:100%" onclick="myFunction(this);">
        </div>
        `).appendTo(".row1");
    });


    // Map img lon
    productView.map((val) => {
        $(`
            <span onclick="this.parentElement.style.display='block'" class="closebtn">&times;</span>
            <img id="expandedImg" style="width:70%" src="${val.img}"></img>
        `).appendTo(".container1");
    });

    //Map name lớn
    productView.map((val) => {
        $(`
        <span>${val.name}</span>
        `).appendTo(".product-view-name h5");
    });

    //console.log("brand", val.brand);
    productView.map((val) => {
        $(`
        <h5 class="sku" data-sku=${val.id}>ID : <span>${val.id}</span></h5>
    <h5 class="available">Availability : <span>Many in stock</span></h5>
    <h4 class="item-name">${val.name}</h4>
    <h3 class="item-price">$${val.price}.00</h3>
    <ul class="item-rating flex a-center">
      <li><i class="fas fa-star"></i></i></li>
      <li><i class="fas fa-star"></i></i></li>
      <li><i class="fas fa-star"></i></i></li>
      <li><i class="fas fa-star"></i></i></li>
      <li><i class="fas fa-star-half-alt"></i></i></li>
      <span><a href="">No reviews</a></span>
    </ul>
    <div class="item-buy-guide flex a-center jc-spacebtw">
      <div class="size-shipping">
        <a class="size" href=""
          ><i class="fas fa-tshirt"></i>Size guide</a
        >
        <a class="shipping" href=""
          ><i class="fas fa-box-open"></i>Shipping</a
        >
      </div>
      <a class="ask" href=""
        ><i class="fas fa-envelope"></i>Ask about this product</a
      >
    </div>
    <div class="item-to-cart flex a-center">
      <div class="item-quantity flex a-center">
        <span class="minus flex a-center jc-center noselect">-</span>
        <input class="item-number" type="text" value="1" />
        <span class="plus flex a-center jc-center noselect">+</span>
      </div>
      <div class=" flex a-center jc-center add add1" 
        >ADD TO CART</div
      >
    </div>
    <div class="agree-term flex a-center">
      <input id="agree" type="checkbox" />
      <label for="agree" class="agree-label noselect"
        >I agree with the terms and conditions</label
      >
    </div>
    <input
      class="buy-it-now"
      type="submit"
      value="BUY IT NOW"
      disabled
    />
    <a class="wishlist" href=""
      ><i class="fa fa-heart-o"></i>ADD TO WISHLIST</a
    >
    <a class="compare" href=""
      ><i class="fa fa-balance-scale"></i>ADD TO COMPARE</a
    >

    <div class="extra-info">
      <h3 class="item-brand">Brand : <a href="">${val.brand}</a></h3>
      <h3>Barcode: <span>123456789</span></h3>
      <h3>
        Tags: <a href="">Vintage</a> , <a href="">Awesome</a> ,
        <a href="">Summer</a> , <a href="">Beachwear</a>
      </h3>
    </div>
    <div class="page-description">
      <h5 class="title">DESCRIPTION</h5>
      <div class="info">
        <p>
          We are proud to present our best premium Shopify theme -
          Wokiee.
        </p>
        <p>
          This is multi-purpose software that can be used for any type
          of the store. Great variety of available options will make
          customization process very easy.
        </p>
        <p>
          Please, take a look at feature list and compare with our
          competitors.
        </p>
        <p>
          You can buy our theme and start your business online with
          minimal time investments.
        </p>
        <p>
          Wokiee support DropShipping app Oberlo. <br />
          Wokiee Shopify theme is powerfool tool to create personal
          webshop.
        </p>
      </div>
    </div>
    <div class="add-info">
      <h5 class="title">ADDITIONAL INFORMATION</h5>
      <div class="info">
        <p class="color">Color : <span>Blue, Purple, White</span></p>
        <p class="size">Size : <span>20, 24</span></p>
        <p class="material">Material : <span>100% Polyester</span></p>
      </div>
    </div>
    <div class="reviews">
      <h5 class="title">REVIEWS</h5>
    </div>   
        `).appendTo(".item-description");
    });

    // check so luong san pham de hien cai modal
    if ($(".cart2 .quantity-item").html() < 1) {
        $('.total').css('display', 'none');
        $('.cart-list').css('border-bottom', 'unset');
        $('.text-active').css('display', 'block');
        $('.total1').css('display', 'none');
    }
    else {
        $('.total').css('display', 'block');
        $('.cart-list').css('border-bottom', '1px solid #eee7e7');;
        $('.text-active').css('display', 'none');
        $('.total1').css('display', 'block');
    }

    // ======================= Click block none Cart- giỏ h ================================//
    $(".btn-shopping").click(function () {
        $(".total1").toggle();
    });

    $('.close-search').click(function () {
        $('.search-product-width').toggle();
    });

    $('.search-button-2').click(function () {
        $(".search-input2").val('');
        $('.search-product-width').toggle();
    });

    // =========== Cart ============//
    const cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);

    $("#order-info-view").empty();
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
        `).appendTo(".order-info-view");
    });



    // update quantity
    $(".quantity-item").text(cart.length);

    // update total 
    const total = cart.reduce((acc, val) => {
        return acc + val.total;
    }, 0);

    $(".calc-subtotal").html(total);
    $(".total2").html(total);

    // update total cart-list
    $(".total1 .total").html(`Total price: <span>  ${total} </span>`);

    // update product cart-list 
    $(".cart-list").empty();
    cart.map((val) => {
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
    });


    // ============== Check out ============//
    // Check out product from Cart
    $(".checkout").click(function (e) {
        e.preventDefault();
        console.log("1", cart);

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

    // ====== active checkout ====== //
    $("#item-agree").change(function (e) {
        e.preventDefault();
        if ($("#item-agree").prop("checked") === true) {
            $(".checkout").prop("disabled", false);
            $(".checkout").addClass("active");
        } else {
            $(".checkout").prop("disabled", true);
            $(".checkout").removeClass("active");
        }
    });

    // able the buy button if agree with term
    $("#agree").change(function (e) {
        e.preventDefault();
        if ($("#agree").prop("checked") === true) {
            $(".buy-it-now").prop("disabled", false);
            $(".buy-it-now").addClass("active");
        } else {
            $(".buy-it-now").prop("disabled", true);
            $(".buy-it-now").removeClass("active");
        }
    });

    // ===== Click show infor
    function showInfo(selector) {
        $(selector).click(function (e) {
            e.preventDefault();
            $(selector).toggleClass("show");
            $(selector).find(".title").toggleClass("active");
        });
    }

    showInfo(".page-description");
    showInfo(".add-info");

    //Thay đổi số lượng của sản phẩm
    // increase or decrease quantities of the product
    $(".item-to-cart .minus").click(function (e) {
        e.preventDefault();
        let item_quantity = $(this).parent().find(".item-number").val();
        if (item_quantity > 1) {
            item_quantity--;
        }
        $(".item-number").val(item_quantity);
    });
    $(".item-to-cart .plus").click(function (e) {
        e.preventDefault();
        let item_quantity = $(this).parent().find(".item-number").val();
        if (item_quantity < 10) {
            item_quantity++;
        }
        $(".item-number").val(item_quantity);
    });

    //delete
    $(`body`).on(`click`, `.delete`, function (evt) {
        evt.preventDefault();
        console.log("ahihi");
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
            $('.total').css('display', 'none');
            $('.cart-list').css('border-bottom', 'unset');
            $('.text-active').css('display', 'block');
            $('.total1').css('display', 'none');
        }
        else {
            $('.total').css('display', 'block');
            $('.cart-list').css('border-bottom', '1px solid #eee7e7');;
            $('.text-active').css('display', 'none');
            $('.total1').css('display', 'block');
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    });


    // check continute
    // contact information authentication
    $("body").on("click", ".to_shipping .continue-btn", function (e) {
        e.preventDefault();

        // spinner Loading effect while check
        $(".to_shipping .continue-btn").empty();
        $(`<i class="fa fa-spinner"></i>`).appendTo(".to_shipping .continue-btn");

        //all_input to be convert to array without checking apartment and first-name input after the effect
        setTimeout(() => {
            $(window).scrollTop(0);
            $(".to_shipping .continue-btn").empty();
            $(`<span>Continue to shipping</span>`).appendTo(
                ".to_shipping .continue-btn"
            );
            let all_input = $(this)
                .parents(".input-zone")
                .find("input:text")
                .parent()
                .not(".apartment")
                .not(".last-name"),
                all_label = $(this).parents(".input-zone").find(".error-label"),
                email_phone_input = $(this)
                    .parents(".input-zone")
                    .find(".email-phone input");
            // check regular input with trimming the space "_"
            // reset the authentication
            all_label.removeClass("active");
            all_input.find("input").removeClass("wrong");
            // authenticate all the input if they are valid
            [...all_input.find("input")].forEach((input) => {
                if (input.value.trim().length === 0) {
                    all_input.find(input).addClass("wrong");
                    all_input
                        .find(input)
                        .parent()
                        .find(".error-label")
                        .addClass("active");
                }
            });

            // authenticate the email and phone input
            if (!isNaN(email_phone_input.val().trim())) {
                // if use phone number instead of email
                if (
                    !email_phone_input
                        .val()
                        .trim()
                        .match(/(09|01[2|6|8|9])+([0-9]{8})\b/)
                ) {
                    email_phone_input.addClass("wrong");
                    email_phone_input.parent().find(".error-label").addClass("active");
                }
            } else {
                // if using email instead
                if (
                    !email_phone_input
                        .val()
                        .trim()
                        .match(
                            /^[a-z][a-z0-9_\.]{0,}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm
                        )
                ) {
                    email_phone_input.addClass("wrong");
                    email_phone_input.parent().find(".error-label").addClass("active");
                }
            }

            // console.log(Object.keys(contact_infomation).length);

            // if all the infomation is authentication
            if (all_input.find("input.wrong").length === 0) {
                contact_infomation = {
                    id: $(".email-phone input").val().trim(),
                    lastname: $(".last-name input").val().trim(),
                    firstname: $(".first-name input").val().trim(),
                    address: $(".address input").val().trim(),
                    apartment: $(".apartment input").val().trim(),
                    city: $(".city input").val().trim(),
                    postalcode: $(".postcode input").val().trim(),
                };

                // if save infomation is enable
                if ($("#save").prop("checked") === true) {
                    localStorage.setItem(
                        "contact_info",
                        JSON.stringify(contact_infomation)
                    );
                }
                // render ther shipping infomation and shipping method view
                localStorage.removeItem("shipping_method");
                $(".shipping-step a").removeClass("active");
                $(".shipping-step .shipping")
                    .removeClass("disabled")
                    .addClass("active");
                renderShippingInfo(contact_infomation);
                renderTotalWithShipping(shipping_method, products_incart);

                let curMethod = [
                    ...$(".shipping-method .method").find(".method-price"),
                ].find(
                    (div) =>
                        parseInt(div.getAttribute("data-price")) === shipping_method.price
                );

                $(".shipping-method .method .select-check").removeClass("active");
                $(".shipping-method .method")
                    .find(curMethod)
                    .parent()
                    .find(".select-check")
                    .addClass("active");
            }
        }, 2000);
    });


    // add proudut in view
    $("body").on("click", ".add", function (e) {
        console.log("hihi");
        console.log(productView[0].id);
        console.log($(".item-number").val());
        //localStorage
        e.preventDefault();
        const currenId = productView[0].id;
        const currenItem = products.find((val) => val.id === currenId); //currenItem chứa các sản phẩm có id = id mình vừa click
        //console.log(currenItem);
        // // cart : chứa list item mà mình chọn
        // // check cai item da co trong cart chua
        const isExsit = cart.findIndex((val) => val.id === currenId);

        if (isExsit === -1) {       //nếu chưa có
            currenItem.quantity = 1;
            currenItem.total = currenItem.quantity * currenItem.price;
            cart.push(currenItem);
            //localStorage.setItem('cart', 'currenItem');
            console.log(cart);
        }
        else {
            console.log(cart[isExsit].quantity);
            console.log($(".item-number").val());
            cart[isExsit].quantity = cart[isExsit].quantity + $(".item-number").val();
            cart[isExsit].total = cart[isExsit].quantity * cart[isExsit].price;
        }

        $(".quantity-item").text(cart.length);
        // render total item () tiền
        const total = cart.reduce((acc, val) => {
            return acc + val.total;
        }, 0);

        $(".total1 .total").html(`Total price: <span>  ${total} </span>`);
        renDerlist(cart);
        // //check so luong san pham de hien cai modal

        // if ($(".cart2 .quantity-item").html() < 1) {
        //     $('.total').css('display', 'none');
        //     $('.cart-list').css('border-bottom', 'unset');
        //     $('.text-active').css('display', 'block');
        //     $('.total1').css('display', 'none');
        // }
        // else {
        //     $('.total').css('display', 'block');
        //     $('.cart-list').css('border-bottom', '1px solid #eee7e7');;
        //     $('.text-active').css('display', 'none');
        //     $('.total1').css('display', 'block');
        // }
        // localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cart", JSON.stringify(cart));
    });


});

// reder cart-list
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

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}





