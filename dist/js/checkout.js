const data = products = [
    {
        id: 1,
        img: "/src/img/Recomendef/1.jpg",
        img1: "/src/img/Recomendef/2.jpg",
        img2: "/src/img/Recomendef/3.webp",
        name: "Bath & Body ",
        h2: "Lotion Whipped Argan Body",
        price: 20,
        brand: "Lip",
    },
    {
        id: 2,
        img: "/src/img/Recomendef/2.jpg",
        img1: "/src/img/Recomendef/1.jpg",
        img2: "/src/img/Recomendef/3.webp",
        name: "Fragrance",
        h2: "Lotion Whipped Argan Body",
        price: 30,
        brand: "Masks",
    },
    {
        id: 3,
        img: "/src/img/Recomendef/3.webp",
        img1: "/src/img/Recomendef/2.jpg",
        img2: "/src/img/Recomendef/1.jpg",
        name: "Tools & Brushes",
        h2: "Lotion Whipped Argan Body",
        price: 50,
        brand: "Fresh",
    },
    {
        id: 4,
        img: "/src/img/Recomendef/4.jpg",
        img1: "/src/img/Recomendef/2.jpg",
        img2: "/src/img/Recomendef/3.webp",
        name: "Skin Care",
        h2: "Lotion Whipped Argan Body",
        price: 60,
        brand: "Damaged Hair",
    },
    {
        id: 5,
        img: "/src/img/Recomendef/5.jpg",
        img1: "/src/img/Recomendef/2.jpg",
        img2: "/src/img/Recomendef/3.webp",
        name: "Mademoiselle Perfume",
        h2: "Lotion Whipped Argan Body",
        price: 10,
        brand: "Body Care",
    },
    {
        id: 6,
        img: "/src/img/Recomendef/6.jpg",
        img1: "/src/img/Recomendef/2.jpg",
        img2: "/src/img/Recomendef/3.webp",
        name: "Hair",
        h2: "Lotion Whipped Argan Body",
        price: 50,
        brand: "Brush Cleaners",
    },
];




$(function () {

    const cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);

    // active check-out
    $(".items-agreeterm").change(function (e) {
        e.preventDefault();
        if ($(".items-agreeterm").prop("checked") === true) {
            $(".checkout").prop("disabled", false);
            $(".checkout").addClass("active");
        } else {
            $(".checkout").prop("disabled", true);
            $(".checkout").removeClass("active");
        }
    });

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
    })

    // ===== toggle ===== //
    $(".btn-shopping").click(function () {
        $(".total1").toggle();
    });


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



});



// === renderCART-LIST ====//
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
