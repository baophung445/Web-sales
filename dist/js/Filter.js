$(function () {

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
            colections: "Men",
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
            colections: "SkinCare",
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
            colections: "Makeup",
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
            colections: "Hair",
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
            colections: "Fragrance",
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
            colections: "ToolsBrushe",
        },
    ];

    // load du lieu

    renderProduct(products);

    $(".filter-item").change(function (e) {
        e.preventDefault();
        const filterValue = $(this).val();
        switch (filterValue) {
            case "":
                renderProduct(products);
            case "greater10":
                const greaterValue = products.filter((val) => val.price >= 40);
                renderProduct(greaterValue);
                break;
            case "lesser10":
                const lessValue = products.filter((val) => val.price <= 40);
                renderProduct(lessValue);
                break;
            default:
                break;
        }
    });



    $(".Men").click(function (e) {
        e.preventDefault();
        const MenValue = products.filter((val) => val.colections === "Men");
        renderProduct1(MenValue);


    });
    $(".SkinCare").click(function (e) {
        e.preventDefault();
        const SkinCareValue = products.filter((val) => val.colections === "SkinCare");
        renderProduct1(SkinCareValue);


    });
    $(".Makeup").click(function (e) {
        e.preventDefault();
        const MakeupValue = products.filter((val) => val.colections === "Makeup");
        renderProduct1(MakeupValue);


    });
    $(".Hair").click(function (e) {
        e.preventDefault();
        const HairValue = products.filter((val) => val.colections === "Hair");
        renderProduct1(HairValue);

    });
    $(".Fragrance").click(function (e) {
        e.preventDefault();
        const FragranceValue = products.filter((val) => val.colections === "Fragrance");
        renderProduct1(FragranceValue);

    });
    $(".ToolsBrushe").click(function (e) {
        e.preventDefault();
        const ToolsBrusheValue = products.filter((val) => val.colections === "ToolsBrushe");
        renderProduct1(ToolsBrusheValue);

    });

    const cart = JSON.parse(localStorage.getItem("cart"));

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

//load products   - map product
function renderProduct(products) {
    $(".filter-products-right .row").empty();
    products.map((val) => {
        $(`
        <div data-id=${val.id} class= "recomended-item col-xs-6 col-sm-6 col-md-6 col-lg-4" style="max-width:300px;">
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
            `).appendTo(".filter-products-right .row");
    });
};

function renderProduct1(products) {
    $(".filter-products-right .row").empty();
    products.map((val) => {
        $(`
        <div data-id=${val.id} class= "recomended-item col-xs-6 col-sm-6 col-md-6 col-lg-4" style="max-width:300px;">
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
            `).appendTo(".filter-products-right .row");
    });

    $(".filter-products-right-name").empty();

    products.map((val) => {
        $(`
                <span> ${val.colections} </span>
            `).appendTo(".filter-products-right-name");
    });
};



