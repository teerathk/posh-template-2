<template>
  <div>
    <header-comp></header-comp>
    <!-- banner Section start -->
    <section class="banner-container top-inner-container">
      <div class="container">
        <div class="row g-0">
          <div class="col-9">
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
                  <input
                    type="search"
                    name=""
                    placeholder="Search entire store here..."
                  />
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
                    <img src="/src/assets/images/wish-i.jpg" alt="" />
                  </a>
                </div>
                <div class="wish-i">
                  <a href="#">
                    <img src="/src/assets/images/refresh-i.jpg" alt="" />
                  </a>
                </div>
                <div class="wish-i">
                  <router-link to="cart" class="cartitems">
                    <span class="cart" v-html="itemsincart"></span>
                    <img src="/src/assets/images/cart-i.jpg" alt="" />
                  </router-link>
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
          <div class="col-sm-6">
            <div class="show-all-cat">
              <span
                ><img src="/src/assets/img/menu-template/category.png" />Show
                All Categories <i class="fa fa-chevron-down"></i
              ></span>
              <ul>
                <li>Cat A</li>
                <li>Cat B</li>
                <li>Cat C</li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6">
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

    <div class="container-fluid">
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
                              name="paymentgateway"
                              checked />Credit Card<span
                              class="checkmark_radio"
                            ></span
                          ></label>
                        </li>
                      </ul>
                      <div class="carInput-fileds">
                        <div class="form-group mb-4 creditcardNo">
                          <input
                            type="text"
                            v-model="paymentdetails.card"
                            placeholder="0000 0000 0000 0000*"
                          />
                          <img
                            src="../assets/img/credit-card-icon.png"
                            class="credit-card-icon"
                          />
                        </div>
                        <div class="form-group select-month">
                          <select
                            class="select-custom-point"
                            v-model="paymentdetails.expirymonth"
                          >
                            <option>MM</option>
                            <option value="01">Jan</option>
                            <option value="02">Feb</option>
                            <option value="03">Mar</option>
                            <option value="04">Apr</option>
                            <option value="05">May</option>
                            <option value="06">Jun</option>
                            <option value="07">Jul</option>
                            <option value="08">Aug</option>
                            <option value="09">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                          </select>
                        </div>
                        <div class="form-group select-year">
                          <select
                            class="select-custom-point"
                            v-model="paymentdetails.expiryyear"
                          >
                            <option>YYYY</option>
                            <option value="20">2020</option>
                            <option value="21">2021</option>
                            <option value="22">2022</option>
                            <option value="23">2023</option>
                            <option value="24">2024</option>
                            <option value="25">2025</option>
                            <option value="26">2026</option>
                          </select>
                        </div>
                        <div class="form-group mb-4 select-cvv">
                          <input
                            type="text"
                            placeholder="CVV"
                            v-model="paymentdetails.cvv"
                          />
                          <i class="credit-card-icon"></i>
                        </div>
                        <div class="form-group mb-4">
                          <input
                            type="text"
                            placeholder="Card Holder Name"
                            v-model="paymentdetails.name"
                          />
                          <i class="credit-card-icon"></i>
                        </div>
                      </div>
                      <p class="check-txt-pra">
                        Your card details except CVV would be securely saved for
                        faster payments.
                      </p>
                    </div>

                    <div class="col-12">

    <div id="smart-button-container">
      <div style="text-align: center;">
        <div id="paypal-button-container"></div>
      </div>
    </div>
                      <button
                      id="pyaro"
                        class="primary nxtbtn"
                        v-on:click="placeorder"
                        v-if="count_cartitems"
                        style="display: none;"
                      >
                        PLACE ORDER
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="cartSummary-bx shipping-right">
              <div class="cartsum-title">Your Order</div>
              <div
                class="youorder-opt-bx"
                v-for="items in cartitemslist"
                :key="items.id"
              >
                <!-- <img src="../assets/img/cart-item-1.png" alt="" /> -->
                <img
                  class="img-fluid"
                  :src="getImgUrl(items.vendor_id, items.featured_image)"
                  @error="
                    $event.target.src =
                      'https://posh-marketplace.plego.pro/img/product-images/997/no_image.png'
                  "
                />
                <div class="youorder-item">
                  <h5>{{ items.name }}</h5>
                  <div class="yr-disc">
                    <div class="yr-disc-bx">Color <strong>Black</strong></div>
                    <div class="yr-disc-bx2">
                      Screen Size <strong>15.6</strong>
                    </div>
                  </div>
                  <div class="">
                    $<strong>{{ items.item_price }}</strong> X
                    {{ items.quantity }}
                  </div>
                </div>
              </div>
              <div class="cartSum-list">
                <div class="cartSummary-items">
                  <div class="csi-title">Item(s)</div>
                  <div class="csi-title-amount">
                    $<strong>{{ this.total_price }}</strong>
                  </div>
                </div>
                <div class="cartSummary-items">
                  <div class="csi-title">Est. Delivery</div>
                  <div class="csi-title-amount">
                    $<strong>{{ shippingamount }}</strong>
                  </div>
                </div>
                <div class="cartSummary-items bt-0">
                  <div class="csi-title">Discount</div>
                  <div class="csi-title-amount">-$<strong> 10.00</strong></div>
                </div>
                <div class="cartSummary-items justify-sbetw pt-4">
                  <div class="csi-title-t">Total</div>
                  <div class="csi-total-amount">
                    $<strong>{{ total_price + shippingamount - 10 }}</strong>
                  </div>
                </div>
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
import HeaderComp from "./includes/Header.vue";
import FooterComp from "./includes/Footer.vue";
import axios from "axios";
export default {
  name: "Payment",
  components: {
    HeaderComp,
    FooterComp,
  },
  async mounted() {


    this.loadSession();
    this.getCartData();






    // let recaptchaScript = document.createElement("script");
    // recaptchaScript.setAttribute(
    //   "src",
    //   "https://www.paypal.com/sdk/js?client-id=AbFTmNl7-uK6DwkZWgjd1UbT-hEISlYGNKlbe_DeiioKq7GCTwL786VNO_9B-fSljY4s85MLdPu_gyq8"
    // );
    // document.head.appendChild(recaptchaScript);

    const script = document.createElement("script");
    script.src =
    "https://www.paypal.com/sdk/js?client-id=AeGIexliJjrLgo1pvuD34jNON2clgKR1bcx4bAx1DSi-ryq-9gRE5Lr5Yh2v0XWUFFap9yTsYk6G9Zo-&currency=USD"
      ;
    script.addEventListener("load", this.initPayPalButton);
    document.body.appendChild(script);

  },

  data() {
    return {
      paymentdetails: {
        card: "4032034591556389",
        name: "TEERATH KUMAR",
        cvv: 954,
        expirymonth: 11,
        expiryyear: 24,
        user_id: null,
      },
      user_id: null,
      shippingamount: 0,
      cartitemslist: [],
      count_cartitems: 0,
      total_price: 0,
      count: 0,
      userdetails: [],
      img_url: "https://posh-marketplace.plego.pro/img/product-images/",
    };
  },
  methods: {

    initPayPalButton() {
      paypal.Buttons({
        style: {
          shape: 'pill',
          color: 'blue',
          layout: 'vertical',
          label: 'paypal',
          
        },

        createOrder: function(data, actions) {
          return actions.order.create({
            purchase_units: [{"amount":{"currency_code":"USD","value":26.05,"breakdown":{"item_total":{"currency_code":"USD","value":1},"shipping":{"currency_code":"USD","value":25},"tax_total":{"currency_code":"USD","value":0.05}}}}]
          });
        },

        onApprove: function(data, actions) {
          return actions.order.capture().then(function(orderData) {
            
            // Full available details
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

            // Show a success message within this page, e.g.
            const element = document.getElementById('paypal-button-container');
            element.innerHTML = '';
            element.innerHTML = '<h3>Thank you for your payment!</h3>';

            // this.placeorder();
            document.getElementById("pyaro").click();
            // Or go to another URL:  actions.redirect('thank_you.html');
            
          });
        },

        onError: function(err) {
          console.log(err);
        }
      }).render('#paypal-button-container');
    },


    async InitiatePaypal(){
      this.loaded = true;
      window.paypal
        .Buttons({
            style: {
              shape: "pill",
              color: "gold",
              layout: "vertical",
              label: "pay",
            },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.product.price,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
    async placeorder() {
      // alert($(".csi-total-amount").children("strong").html());
      var totalamount = $(".csi-total-amount").children("strong").html();

      const shipping = JSON.parse(localStorage.getItem("shipping"));
      // console.log(this.paymentdetails);
      // this.startLoader();

      axios
        .post(axios.defaults.baseURL + "placeorder", {
          user_id: this.user_id,
          currency: shipping.Currency,
          amount: shipping.Amount,
          tracking: shipping.tracking,
          card: this.paymentdetails.card,
          name: this.paymentdetails.name,
          cvv: this.paymentdetails.cvv,
          expirymonth: this.paymentdetails.expirymonth,
          expiryyear: this.paymentdetails.expiryyear,
        })
        .then(
          (response) => {
            console.log(response);
            var resp = response.data;
            console.log(resp);
            if (resp.success == "true") {
              // alert("Order Successful");
              var order_id = response.data;

              this.cartitemslist = null;
              const logindata = JSON.parse(localStorage.getItem("login"));
              logindata.cartitems = null;
              // localStorage.setItem("login", JSON.stringify(logindata));

              $(".cart").html(0);
              $(".cart").hide();

              this.$router.push("success");
              console.log(response);
              // let result = axios
              //   .get(axios.defaults.baseURL + "processPaypal", {
              //     params: {
              //       user_id: this.user_id,
              //       price: totalamount,
              //       orderid: order_id,
              //     },
              //   })
              //   .then(
              //     (response) => {
              //       var resultset = response.data;
              //       console.log(resultset);
              //       if (resultset.status == 1) {
              //         // window.open(resultset.message, "_self");
              //         this.$router.push("success");


              //         // $("iframe").prop("src", resultset.message);
              //         // $(".modal").show();

              //         // $(".span.closeXbtn").show();
              //       }
              //     },
              //     (error) => {
              //       console.log(error);
              //     }
              //   );
            } else {
              alert("Order Not Successful");
            }
          },
          (error) => {
            console.log(error);
          }
        );

      // this.$router.push("success");
      this.HeaderKey += 1;
      this.EndLoader();
    },

    loadSession() {
      if (localStorage.getItem("login")) {
        console.log("Login Data");
        const logindata = JSON.parse(localStorage.getItem("login"));
        console.log(logindata.id);
        this.user_id = logindata.id;

        const shipping = JSON.parse(localStorage.getItem("shipping"));
        this.shippingamount = parseInt(shipping.Amount);
      }
    },
    async getCartData() {
      this.startLoader();
      this.total_price = 0;
      this.count = 0;
      let result = axios.post(
        axios.defaults.baseURL + "usercartdata",
        {
          user_id: this.user_id,
        },
        {
          useCredentails: true,
        }
      );
      console.log("Cart Check Data2");
      console.log((await result).data);

      this.cartitemslist = (await result).data;

      var totalQty = 0;
      var tempTotalPrice = 0;
      this.count_cartitems = this.cartitemslist.length;
      this.cartitemslist.forEach(function (items) {
        console.log("Qty: " + items.quantity);
        totalQty += items.quantity;
        tempTotalPrice += items.quantity * items.item_price;
      });
      this.total_price = tempTotalPrice;
      //this.itemsincart=totalQty;
      $(".cart").html(this.count_cartitems);
      if (this.count_cartitems == 0) {
        $(".cart").hide();
      } else {
        $(".cart").show();
      }

      if (localStorage.getItem("login")) {
        console.log("Login Data");
        const logindata = JSON.parse(localStorage.getItem("login"));
        this.user_id = logindata.id;
        logindata.cartitems = this.cartitemslist;
        localStorage.setItem("login", JSON.stringify(logindata));
      }

      //this.count_cartitems = this.cartitemslist.length
      this.EndLoader();
    },
    startLoader() {
      console.log("karachi");
      var target_ContId = document.getElementById("loader-container");
      target_ContId.style.display = "block";
    },
    EndLoader() {
      console.log("pak");
      var target_ContId = document.getElementById("loader-container");
      target_ContId.style.display = "none";
    },
    getImgUrl(vendor, pet) {
      return this.img_url + "/" + vendor + "/" + pet;
    },
  },
};
</script>