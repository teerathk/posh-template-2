<template>
<div>
    <header-comp></header-comp>

    <!-- logo Section End -->
    <!-- banner Section start -->
    <section class="banner-container top-inner-container">
        <div class="container">
            <div class="row g-0">
                <div class="col-xl-9">
                    <div class="category-search">
                        <form action="">
                            <div class="select-category-box">
                                <select>
                                    <option>All categories</option>
                                    <option>Fashion</option>
                                    <option>Computer</option>
                                    <option>Furniture</option>
                                    <option>Smartphone</option>
                                    <option>Healthy & Beauty</option>
                                    <option>Sport Clothing</option>
                                    <option>Watch & Jewelry</option>
                                    <option>Kitchen</option>
                                    <option>Accessories</option>
                                    <option>More Category</option>
                                </select>
                            </div>
                            <div class="search-box">
                                <input type="search" name="search" placeholder="Search entire store here..." />
                            </div>
                            <div class="search-tab">
                                <button type="submit">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-3">
                    <div class="right-banner-section">
                        <div class="shopping-cart">
                            <div class="wish-i">
                                <a href="#">
                                    <img src="/src/assets/images/wish-i.jpg" alt="">
                                </a>
                            </div>
                            <div class="wish-i">
                                <a href="#">
                                    <img src="/src/assets/images/refresh-i.jpg" alt="">
                                </a>
                            </div>
                            <div class="wish-i">
                                <span class="cart">
                                    2
                                </span>
                                <img src="/src/assets/images/cart-i.jpg" alt="">
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- banner Section End -->
    <div class="sec-nav">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="show-all-cat">
                        <span><img src="/src/assets/img/menu-template/category.png">Show All Categories <i class="fa fa-chevron-down"></i></span>
                        <ul>
                            <li>Cat A</li>
                            <li>Cat B</li>
                            <li>Cat C</li>
                        </ul>
                    </div>
                </div>
                <div class="col-6">
                    <div class="order-track">
                        <ul>
                            <li><a href="#">Track Your Order</a></li>
                            <li><a href="#">Help Center</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container">
        <div class="checkout-itesm-bx">
            <div class="row mt-4">
                <div class="col-12">
                    <h4><strong>Checkout</strong> <span>(2 Items)</span></h4>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-8">
                    <div class="cartIBilling-shipping">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="checkout-process">
                                    <ul class="checkout-method">
                                        <li class="shipping-pay active"><div class="step-counter-point"></div><div class="step-name">Shipping</div></li>
                                        <li class="shipping-pay "><div class="step-counter-point"></div><div class="step-name">Payment</div></li>
                                    </ul>
                                </div>
                                <div class="ba-title"><h4>Billing Address</h4></div>

                            </div>

                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="form-group mb-4 ">
                                    <label class="top-position">First Name*</label>
                                    <input type="text" value="William">
                                </div>
                            </div>
                            <div class="col-sm-6 mb-4">
                                <div class="form-group">
                                    <label class="top-position">Last Name*</label>
                                    <input type="text" value="Smith">
                                </div>
                            </div>
                            <div class="col-sm-12 mb-4">
                                <div class="form-group">
                                    <label class="top-position">Address*</label>
                                    <input type="text" value="1266 Yolanda Plains, Uptonview">
                                </div>
                            </div>

                            <div class="col-sm-6 mb-4">
                                <div class="form-group">
                                    <label class="top-position">Country*</label>
                                    <select class="select-custom-point">
                                        <option>United States</option>
                                        <option>Chile</option>
                                        <option>Czechia</option>
                                        <option>Denmark</option>
                                        <option>Fiji</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-6 mb-4">
                                <div class="form-group">
                                    <label class="top-position">State/Province*</label>
                                    <input type="text" value="California">
                                </div>
                            </div>
                            <div class="col-sm-6 mb-4">
                                <div class="form-group">
                                    <label class="top-position">State/Province*</label>
                                    <input type="text" value="California">
                                </div>
                            </div>
                            <div class="col-sm-6 mb-4">
                                <div class="form-group">
                                    <label class="top-position">City*</label>
                                    <input type="text" value="190001">
                                </div>
                            </div>
                            <div class="col-sm-6 mb-4">
                                <div class="form-group">
                                    <label class="top-position">Email Address*</label>
                                    <input type="text" value="1William.smith@xyz.com">
                                </div>
                            </div>
                            <div class="col-sm-6 mb-4">
                                <div class="form-group">
                                    <label class="top-position">Phone Number*</label>
                                    <input type="text" value="213-555-0143">
                                </div>
                            </div>								
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="check-shipping-m">
                                    <ul class="products-cat-opt">
                                        <li><label class="form-check-label"><input type="checkbox" class="form-check-input" value="">Shipping address same as billing  <span class="checkmark"></span></label></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <h5 class="mt-4 mb-4">Shipping Method</h5>
                                <ul class="products-cat-opt shipping-meth">
                                    <li><label class="form-check-label"><input type="radio" class="form-check-input" name="radio">1 Day <strong>$30</strong>  <span class="checkmark_radio"></span></label></li>
                                    <li><label class="form-check-label"><input type="radio" class="form-check-input" name="radio">2-3 Days <strong>$20</strong> <span class="checkmark_radio"></span></label></li>
                                </ul>
                            </div>
                            <div class="col-12"><router-link to="payment" class="primary  nxtbtn">NEXT</router-link></div>
                        </div>
                    </div>					
                </div>
                <div class="col-sm-4">
                    <div class="cartSummary-bx shipping-right">
                        <div class="cartsum-title">Your Order</div>
                        <div class="youorder-opt-bx">
                            <img src="/src/assets/img/cart-item-1.png" alt="">
                            <div class="youorder-item">
                                <h5>ASUS VivoBook 15 S513</h5>
                                <div class="yr-disc">
                                    <div class="yr-disc-bx">Color <strong>Black</strong></div>
                                    <div class="yr-disc-bx2">Screen Size <strong>15.6</strong></div>
                                </div>
                                <div class="">$<strong>1,569.99</strong> X 01</div>
                            </div>
                        </div>
                        <div class="youorder-opt-bx">
                            <img src="/src/assets/img/cart-item-2.png" alt="">
                            <div class="youorder-item">
                                <h5>ASUS UltraPad Pro</h5>
                                <div class="yr-disc">
                                    <div class="yr-disc-bx">Color <strong>Silver</strong></div>
                                    <div class="yr-disc-bx2">Screen Size <strong>15.6</strong></div>
                                </div>
                                <div class="">$<strong>1,500</strong> X 01</div>
                            </div>
                        </div>
                        <div class="cartSum-list">
                            <div class="cartSummary-items"><div class="csi-title">Item(s)</div><div class="csi-title-amount">$<strong>3069.99</strong></div></div>
                            <div class="cartSummary-items"><div class="csi-title">Est. Delivery</div><div class="csi-title-amount">$<strong>28.56</strong></div></div>
                            <div class="cartSummary-items"><div class="csi-title">Discount Code:</div><div class="csi-title-dc">Posh200</div></div>
                            <div class="cartSummary-items"><div class="csi-title-t">Total</div><div class="csi-total-amount">$<strong>3,088.55</strong></div></div>
                            <router-link to="payment" class="primary">PROCEED TO CHECKOUT <i class="fa fa-cart-plus" aria-hidden="true"></i></router-link>
                            </div>
                    </div>								
                </div>
            </div>
        </div>
    </div>



    <div class="container bgcolor-gl mb-5">
        <div class="produ-listing-bx">
            <div class="row">
                <div class="col-12"><h2 class="cat-title">Similar Products</h2><div class="fea-prod-sm">Show More <i class="fa fa-chevron-right"></i></div></div>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <div class="product-item">                
                        <div class="pro-img-bx">
                            <a href="#">
                                <img src="/src/assets/img/810G-B68TYL1-10.png" alt="">
                            </a>
                        </div>
                        <div class="pro-title-bx">
                            <h3 class="prod-title">DELL E13 Flip EVO Professional Laptop</h3>
                            <div class="prod-p-icon"><span class="pro-price">$1,200.50</span><span class="pro-icons"><img src="/src/assets/images/buy.png" class="img-fluid"><img src="/src/assets/images/heart.png"></span></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">     
                    <div class="product-item">                
                        <div class="pro-img-bx">
                            <a href="#">
                                <img src="/src/assets/img/810G-B68TYL1-3.png" alt="">
                            </a>
                        </div>
                        <div class="pro-title-bx">
                            <h3 class="prod-title">Acer Predator Helios 300 PH315-54-760S Gaming Laptop</h3>
                            <div class="prod-p-icon"><span class="pro-price">$1,000.50</span><span class="pro-icons"><img src="/src/assets/images/buy.png" class="img-fluid"><img src="/src/assets/images/heart.png"></span></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="product-item">                
                        <div class="pro-img-bx">
                            <a href="#">
                                <img src="/src/assets/img/810G-B68TYL1-2.png" alt="">
                            </a>
                        </div>
                        <div class="pro-title-bx">
                            <h3 class="prod-title">Acer Nitro 5 Gaming Laptop</h3>
                            <div class="prod-p-icon"><span class="pro-price">$700.25</span><span class="pro-icons"><img src="/src/assets/images/buy.png" class="img-fluid"><img src="/src/assets/images/heart.png"></span></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="product-item">                
                        <div class="pro-img-bx">
                            <a href="#">
                                <img src="/src/assets/img/810G-B68TYL1-5.png" alt="">
                            </a>
                        </div>
                        <div class="pro-title-bx">
                            <h3 class="prod-title">DELL Strix G15 (2021) Gaming Laptop</h3>
                            <div class="prod-p-icon"><span class="pro-price">$899.99</span><span class="pro-icons"><img src="/src/assets/images/buy.png" class="img-fluid"><img src="/src/assets/images/heart.png"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




    <div class="container-fluid">
        <div class="checkout-itesm-bx">
            <div class="row mt-4">
                <div class="col-12">
                    <h4><strong>Checkout</strong> <span>(2 Items)</span></h4>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 col-12">
                    <div class="cartIBilling-shipping">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="checkout-process">
                                    <ul class="checkout-method">
                                        <li class="shipping-pay active">
                                            <div class="step-counter-point"></div>
                                            <div class="step-name">Shipping</div>
                                        </li>
                                        <li class="shipping-pay active">
                                            <div class="step-counter-point"></div>
                                            <div class="step-name">Payment</div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="ba-title"><h4>Payment</h4></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="checkout-payment-bx">
                                    <div class="checkout-payment-info">
                                        <ul class="products-cat-opt">
                                            <li>
                                                <label class="form-check-label"
                                                       ><input
                                                        type="radio"
                                                        class="form-check-input"
                                                        name="card"
                                                        checked />Credit Card<span
                                                        class="checkmark_radio"
                                                        ></span
                                                    ></label>
                                            </li>
                                        </ul>
                                        <div class="carInput-fileds">
                                            <div class="form-group mb-4 creditcardNo">
                                                <input type="text" placeholder="0000 0000 0000 0000*" />
                                                <img
                                                    src="../assets/img/credit-card-icon.png"
                                                    class="credit-card-icon"
                                                    />
                                            </div>
                                            <div class="form-group select-month">
                                                <select class="select-custom-point">
                                                    <option>MM</option>
                                                    <option>Jan</option>
                                                    <option>Feb</option>
                                                    <option>Mar</option>
                                                    <option>Apr</option>
                                                </select>
                                            </div>
                                            <div class="form-group select-year">
                                                <select class="select-custom-point">
                                                    <option>YYYY</option>
                                                    <option>2020</option>
                                                    <option>2021</option>
                                                    <option>2022</option>
                                                </select>
                                            </div>
                                            <div class="form-group mb-4 select-cvv">
                                                <input type="text" placeholder="CVV" />
                                                <i class="credit-card-icon"></i>
                                            </div>
                                            <div class="form-group mb-4">
                                                <input type="text" placeholder="Card Holder Name" />
                                                <i class="credit-card-icon"></i>
                                            </div>
                                        </div>
                                        <p class="check-txt-pra">
                                            Your card details except CVV would be securely saved for
                                            faster payments.
                                        </p>
                                    </div>
                                    <div class="paypal-box">
                                        <ul class="products-cat-opt">
                                            <li>
                                                <label class="form-check-label"
                                                       ><input
                                                        type="radio"
                                                        class="form-check-input" />PayPal<span
                                                        class="checkmark_radio"
                                                        ></span
                                                    ></label>
                                            </li>
                                        </ul>
                                        <img src="../assets/img/paypal-icon.png" class="img-paypal" />
                                    </div>
                                    <div class="col-12">
                                        <button class="primary nxtbtn">PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="cartSummary-bx shipping-right">
                        <div class="cartsum-title">Your Order</div>
                        <div class="youorder-opt-bx">
                            <img src="../assets/img/cart-item-1.png" alt="" />
                            <div class="youorder-item">
                                <h5>ASUS VivoBook 15 S513</h5>
                                <div class="yr-disc">
                                    <div class="yr-disc-bx">Color <strong>Black</strong></div>
                                    <div class="yr-disc-bx2">
                                        Screen Size <strong>15.6</strong>
                                    </div>
                                </div>
                                <div class="">$<strong>1,569.99</strong> X 01</div>
                            </div>
                        </div>
                        <div class="youorder-opt-bx">
                            <img src="../assets/img/cart-item-2.png" alt="" />
                            <div class="youorder-item">
                                <h5>ASUS UltraPad Pro</h5>
                                <div class="yr-disc">
                                    <div class="yr-disc-bx">Color <strong>Silver</strong></div>
                                    <div class="yr-disc-bx2">
                                        Screen Size <strong>15.6</strong>
                                    </div>
                                </div>
                                <div class="">$<strong>1,500</strong> X 01</div>
                            </div>
                        </div>
                        <div class="cartSum-list">
                            <div class="cartSummary-items">
                                <div class="csi-title">Item(s)</div>
                                <div class="csi-title-amount">$<strong>3069.99</strong></div>
                            </div>
                            <div class="cartSummary-items">
                                <div class="csi-title">Est. Delivery</div>
                                <div class="csi-title-amount">$<strong>28.56</strong></div>
                            </div>
                            <div class="cartSummary-items">
                                <div class="csi-title">Discount Code:</div>
                                <div class="csi-title-dc">Posh200</div>
                            </div>
                            <div class="cartSummary-items">
                                <div class="csi-title-t">Total</div>
                                <div class="csi-total-amount">$<strong>3,088.55</strong></div>
                            </div>
                            <button class="primary">
                                PROCEED TO CHECKOUT <i class="fa fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer-comp></footer-comp>
</div>
</template>

<script>

import HeaderComp from './includes/Header.vue'
import FooterComp from "./includes/Footer.vue";
export default {
  name: "Checkout",
  components: {
      HeaderComp, FooterComp
  }
};
</script>