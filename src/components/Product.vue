<template>
  <div>
    <header-comp></header-comp>
    <!-- logo Section End -->
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
                  <router-link to="cart" class="cartitems"
              >
              <span class="cart" ></span>
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
    <div class="breadcrumbs">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <ul class="breadcrumbs-list">
              <li><a href="">All Categories</a></li>
              <li><a href="">Laptop Computers</a></li>
              <li><a href="">Traditional Laptop Computers</a></li>
              <li>Gaming Laptops</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="details-pm-section">
        <div class="row mt-5">
          <div class="col-sm-5">
            <div class="singal-product">
              <div class="gallery-pm-main">
                  <!-- START GALLERY HERE -->


                  
                  <div class="mySlides right-main">
                    <img
                      :src="
                        getImgUrl(
                          product_info.vendor_id,
                          product_info.featured_image
                        )
                      "
                      style="width: 100%"
                    />
                  </div>

                  <div
                    class="mySlides right-main"
                    v-for="(item, index) in gallery"
                    :key="index"
                  >
                    <img
                      :src="getImgUrl(product_info.vendor_id, item)"
                      style="width: 100%"
                    />
                  </div>





                  <div class="row gallery-pm-thumb">
                    <div
                    class="left-thumbs"
                      
                    >
                    <ul>
                      <li><img
                        class="demo cursor active"
                        :src="
                          getImgUrl(
                            product_info.vendor_id,
                            product_info.featured_image
                          )
                        "
                        style="width: 100%"
                        @click="currentSlide(1)"
                        alt="The Woods"
                      /></li>
                  <li v-for="(item, index) in gallery"
                      :key="index">
                      <img
                        class="demo cursor"
                        :src="getImgUrl(product_info.vendor_id, item)"
                        style="width: 100%"
                        @click="currentSlide(index + 2)"
                      /></li></ul>
                    </div>
                  </div>
                  <!-- END:: GALLERY HERE -->
                </div>
<!-- 


              <div class="left-thumbs">
                <ul>
                  <li 
                  class="mySlides"
                  v-for="(item, index) in gallery"
                    :key="index">
                    <img
                    class="demo cursor"
                      :src="getImgUrl(product_info.vendor_id, item)"
                      @click="currentSlide(1)"
                      style="width: 100%"
                    />
                    </li>

                </ul>
              </div>



              <div class="right-main">
               <img
                      :src="
                        getImgUrl(
                          product_info.vendor_id,
                          product_info.featured_image
                        )
                      "
                      style="width: 100%"
                    />
              </div> -->
            </div>
          </div>
          <div class="col-sm-7">
            <div class="detial-sect">
              <h1 class="title-pm-detail">
                {{ product_info.name }}
              </h1>
              <div class="price-pm-detail">$<strong>{{ product_info.seller_price }}</strong></div>
              <div class="short-pm-detail">
                {{ product_info.description }}
              </div>

              <div class="addtocart-select-pm">
                <form method="post" @submit.prevent="addtocart">
                <div class="row">
                  <div class="col-sm-7">               
                  <div class="qty-push-bx">
                    <input type="hidden" v-model="product_id" />
                    <input type="hidden" v-model="user_id" />
								<button class="incrementNum btnplus-item">+</button>
								<input
                      type="number"
                      min="1"
                      max="100"
                      v-model="cartform.quantity"
                      placeholder="1"
                      id="txtAcrescimo"
                      class="qty-number"
                    />
								<button class="incrementNum btnminus-item">-</button>
							  </div>
              </div>
                <div class="col-sm-5">
                  <button type="submit" class="primary" on>Add to Cart</button>
                  </div>
              </div>
                </form>
            </div>
          </div>
          </div>
          </div>
          </div></div>
    <div class="container bgcolor-gl mb-5">
      <div class="produ-listing-bx cart-c">
        <div class="row">
          <div class="col-12">
            <h2 class="cat-title">Recommended For You</h2>
            <div class="fea-prod-sm">
              Show More <i class="fa fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div
              class="col-xl-3 col-sm-6 col-12"
              v-for="(product, index) in recommended"
              :key="index"
            >
              <div class="product-item">
                <div class="pro-img-bx">
                  <router-link
                    @click="forceclick(product.id)"
                    :to="{
                      path: '/product',
                      query: { id: product.id },
                      props: true,
                    }"
                  >
                    <img
                      :src="
                        getImgUrl(product.vendor_id, product.featured_image)
                      "
                      alt=""
                    />
                  </router-link>
                </div>
                <div class="pro-title-bx">
                  <h3 class="prod-title">
                    <router-link
                      @click="forceclick(product.id)"
                      :to="{
                        path: '/product',
                        query: { id: product.id },
                        props: true,
                      }"
                    >
                      {{ product.name }}
                    </router-link>
                  </h3>
                  <div class="prod-p-icon">
                    <span class="pro-price">${{ product.seller_price }}</span
                    ><span class="pro-icons">
                      <img
                        @click="addtocart2(product)"
                        src="/src/assets/img/buy.png"
                        class="img-fluid" />
                      <img src="/src/assets/img/heart.png"
                    /></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div class="container bgcolor-gl">
      <div class="produ-listing-bx cart-c">
        <div class="row">
          <div class="col-12">
            <h2 class="cat-title">Customers Also Bought</h2>
            <div class="fea-prod-sm">
              Show More <i class="fa fa-chevron-right"></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div
              class="col-xl-3 col-sm-6 col-12"
              v-for="(product, index) in justForYouProducts"
              :key="index"
            >
              <div class="product-item">
                <div class="pro-img-bx">
                  <router-link
                    @click="forceclick(product.id)"
                    :to="{
                      path: '/product',
                      query: { id: product.id },
                      props: true,
                    }"
                  >
                    <img
                      :src="
                        getImgUrl(product.vendor_id, product.featured_image)
                      "
                      alt=""
                    />
                  </router-link>
                </div>
                <div class="pro-title-bx">
                  <h3 class="prod-title">
                    <router-link
                      @click="forceclick(product.id)"
                      :key="product.id"
                      :to="{
                        path: '/product',
                        query: { id: product.id },
                        props: true,
                      }"
                    >
                      {{ product.name }}
                    </router-link>
                  </h3>
                  <div class="prod-p-icon">
                    <span class="pro-price">${{ product.seller_price }}</span
                    ><span class="pro-icons"
                      ><img
                        @click="addtocart2(product)"
                        src="/src/assets/img/buy.png"
                        class="img-fluid" /><img
                        src="/src/assets/img/heart.png"
                    /></span>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
    <!-- lower-middle-section end-->

    <br />
    <br />
    <section class="before-footer-section">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="small-container">
              <span><img src="/src/assets/images/icon-01.png" /></span>
              <span>
                <h4>free delivery</h4>
                <p>From $200</p>
              </span>
            </div>
          </div>
          <div class="col">
            <div class="small-container">
              <span><img src="/src/assets/images/icon-02.png" /></span>
              <span>
                <h4>free delivery</h4>
                <p>From $200</p>
              </span>
            </div>
          </div>
          <div class="col">
            <div class="small-container">
              <span><img src="/src/assets/images/icon-03.png" /></span>
              <span>
                <h4>free delivery</h4>
                <p>From $200</p>
              </span>
            </div>
          </div>
          <div class="col">
            <div class="small-container">
              <span><img src="/src/assets/images/icon-04.png" /></span>
              <span>
                <h4>free delivery</h4>
                <p>From $200</p>
              </span>
            </div>
          </div>
          <div class="col">
            <div class="small-container">
              <span><img src="/src/assets/images/icon-07.png" /></span>
              <span>
                <h4>free delivery</h4>
                <p>From $200</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import HeaderComp from "./includes/Header.vue";
import FooterComp from "./includes/Footer.vue";
import "vue3-carousel/dist/carousel.css";
import axios from "axios";
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";

export default {
  name: "Product",
  components: {
    HeaderComp,
    FooterComp,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      HeaderKey: 0,
      recommended: [],
      justForYouProducts: [],
      cartform: {
        product_id: 0,
        user_id: 0,
        quantity: 1,
        item_price: 0,
      },
      product_info: [],
      slideIndex: 1,
      //img_url: "https://posh-marketplace.plego.pro/img/product-images",
      img_url: axios.defaults.url + "/img/product-images",
      gallery: [],
    };
  },
  async mounted() {
    if (localStorage.getItem("login")) {
      console.log("Login Data");
      const logindata = JSON.parse(localStorage.getItem("login"));
      this.cartform.user_id = logindata.id;
      $(".cart").html(logindata.cartitems.length);
      if (logindata.cartitems.length == 0) {
        $(".cart").hide();
      } else {
        $(".cart").show();
      }
    } else if (localStorage.getItem("guest")) {
      const guestdata = JSON.parse(localStorage.getItem("guest"));
      $(".cart").html(guestdata.length);
      if (guestdata.length == 0) {
        $(".cart").hide();
      } else {
        $(".cart").show();
      }
    }
    this.cartform.product_id = this.$route.query.id;
    this.showSlides(this.slideIndex);
    this.getProductInfo();
    this.getRecommendedProducts();
    this.getJustForYouProducts();
  },

  methods: {
    forceclick(id) {
      //this.product_id = id;
      this.$route.query.id = id;
      this.getProductInfo();
    },
    async getJustForYouProducts() {
      let result = axios.get(axios.defaults.baseURL + "product/justforyou/0");
      console.log((await result).data);
      this.justForYouProducts = (await result).data;
    },
    increment() {
      //alert("Yeah")
      var val = $("#txtAcrescimo").val();
      //if(val>=1){
      val++;
      this.cartform.quantity = val;
      // $("#txtAcrescimo").val(val);
      //}
      //var val = $this.previousElementSibling.value;
      //alert(cart_id+" - "+val);
    },
    decrement() {
      var val = $("#txtAcrescimo").val();
      if (val > 1) {
        val--;
      }
      this.cartform.quantity = val;
      // $("#txtAcrescimo").val(val);
    },
    async productHistory() {
      if (this.cartform.user_id != 0) {
        axios.post(
          axios.defaults.baseURL + "product-history",
          {
            user_id: this.cartform.user_id,
            product_id: this.cartform.product_id,
          },
          { useCredentails: true }
        );
      }
    },
    async getProductInfo() {
      this.startLoader();
      this.cartform.product_id = this.$route.query.id;
      this.productHistory();

      let result = axios.get(
        axios.defaults.baseURL +
          "product/getForTemplate/" +
          this.$route.query.id
      );
      console.log((await result).data);
      this.product_info = (await result).data;
      this.gallery = await this.product_info.images;

      this.EndLoader();
    },
    async getRecommendedProducts() {
      let result = axios.get(
        axios.defaults.baseURL + "product/recommended/" + this.$route.query.id
      );
      console.log((await result).data);
      this.recommended = (await result).data;
    },
    async addtocart(e) {
      this.startLoader();

      this.cartform.item_price = this.product_info.seller_price;
      this.cartform.product_id = this.$route.query.id;

      if (this.cartform.quantity == 0) {
        alert("Quantity must be atleast 1");
      } else if (!localStorage.getItem("login")) {
        //alert("Please Login First")
        this.cartform.name = this.product_info.name;
        this.cartform.description = this.product_info.description;
        this.cartform.net_price = this.product_info.seller_price;

        if (localStorage.getItem("guest")) {
          const guestdata = JSON.parse(localStorage.getItem("guest"));
          if (guestdata.length > 0) {
            var match = false;
            guestdata.forEach((element, index) => {
              if (element.product_id == this.cartform.product_id) {
                match = true;
                element.quantity =
                  parseInt(element.quantity) + parseInt(this.cartform.quantity);
                guestdata[index] = element;
              }
            });
            if (match == false) {
              this.cartform.id = guestdata.length + 1;
              guestdata.push(this.cartform);
            }
            localStorage.setItem("guest", JSON.stringify(guestdata));
          } else {
            const guestdata = [];
            guestdata.push(this.cartform);
            localStorage.setItem("guest", JSON.stringify(guestdata));
          }
        } else {
          const guestdata = [];
          guestdata.push(this.cartform);
          localStorage.setItem("guest", JSON.stringify(guestdata));
        }

        const guestdata = JSON.parse(localStorage.getItem("guest"));
        //alert(guestdata);
        //this.itemsincart = guestdata.length

        $(".cart").html(guestdata.length);
        if (guestdata.length == 0) {
          $(".cart").hide();
        } else {
          $(".cart").show();
        }

        alert("Updated Cart");
        this.HeaderKey++;
      } else {
        this.cartform.item_price = this.product_info.seller_price;
        this.cartform.product_id = this.$route.query.id;
        console.log(this.cartform);
        axios
          .post(axios.defaults.baseURL + "addtocart", this.cartform)
          .then((result) => {
            console.log(result.data);
            const obj = result.data;
            console.log(obj);
            if (obj.success == true) {
              alert("Product Added to the Cart");

              var totalQty = obj.message.cartitems.length;
              // obj.message.cartitems.forEach(function(items) {
              //   console.log("Qty: "+items.quantity)
              //   totalQty+=items.quantity
              // })
              //this.itemsincart=totalQty;
              $(".cart").html(totalQty);

              if (totalQty == 0) {
                $(".cart").hide();
              } else {
                $(".cart").show();
              }

              if (localStorage.getItem("login")) {
                console.log("Login Data");
                const logindata = JSON.parse(localStorage.getItem("login"));
                logindata.cartitems = obj.message.cartitems;
                localStorage.setItem("login", JSON.stringify(logindata));
              }
              this.HeaderKey++;
            } else {
              alert("Some error occured");
            }
          });
      }
      this.EndLoader();
      e.preventDefault();
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

    addtocart2(item) {
      this.cartform.item_price = item.seller_price;
      this.cartform.product_id = item.id;
      this.cartform.quantity = 1;

      if (!localStorage.getItem("login")) {
        //alert("Please Login First")
        this.cartform.name = item.name;
        this.cartform.description = item.description;
        this.cartform.net_price = item.seller_price;

        if (localStorage.getItem("guest")) {
          const guestdata = JSON.parse(localStorage.getItem("guest"));
          if (guestdata.length > 0) {
            var match = false;
            guestdata.forEach((element, index) => {
              if (element.product_id == this.cartform.product_id) {
                match = true;
                element.quantity = parseInt(element.quantity) + 1;
                guestdata[index] = element;
              }
            });
            if (match == false) {
              this.cartform.id = guestdata.length + 1;
              guestdata.push(this.cartform);
            }
            localStorage.setItem("guest", JSON.stringify(guestdata));
          } else {
            const guestdata = [];
            guestdata.push(this.cartform);
            localStorage.setItem("guest", JSON.stringify(guestdata));
          }
        } else {
          const guestdata = [];
          guestdata.push(this.cartform);
          localStorage.setItem("guest", JSON.stringify(guestdata));
        }

        // const guestdata = JSON.parse(localStorage.getItem("guest"));
        // if(localStorage.getItem("guest")){
        //   const guestdata = JSON.parse(localStorage.getItem("guest"));
        //   this.cartform.id = guestdata.length+1
        //   guestdata.push(this.cartform);
        //   localStorage.setItem("guest", JSON.stringify(guestdata));
        // } else {
        //   const guestdata=[];
        //   guestdata.push(this.cartform);
        //   localStorage.setItem("guest", JSON.stringify(guestdata));
        // }

        const guestdata = JSON.parse(localStorage.getItem("guest"));
        this.itemsincart = guestdata.length;
        $(".cart").html(this.itemsincart);
        if (this.itemsincart == 0) {
          $(".cart").hide();
        } else {
          $(".cart").show();
        }

        this.HeaderKey++;

        //this.$router.push({name:"Login"});
      } else {
        //alert("Added to cart")
        console.log(this.cartform);
        this.startLoader();
        axios
          .post(axios.defaults.baseURL + "addtocart", this.cartform)
          .then((result) => {
            console.log(result.data);
            const obj = result.data;
            console.log(obj);
            if (obj.success == true) {
              alert("Product Added to the Cart");

              this.itemsincart = obj.message.cartitems.length;
              $(".cart").html(this.itemsincart);
              if (this.itemsincart == 0) {
                $(".cart").hide();
              } else {
                $(".cart").show();
              }
              if (localStorage.getItem("login")) {
                console.log("Login Data");
                const logindata = JSON.parse(localStorage.getItem("login"));
                logindata.cartitems = obj.message.cartitems;
                localStorage.setItem("login", JSON.stringify(logindata));
              }
            } else {
              alert("Some error occured");
            }
          });
        this.EndLoader();
        this.HeaderKey++;
      }
    },
    wishlist() {
      alert("Added to Wishlist");
    },

    // START:: Product page Slideshow

    Active(index) {
      if (index == 0) {
        return "active";
      } else {
        return "";
      }
    },
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },

    currentSlide(n) {
      this.showSlides((this.slideIndex = parseInt(n)));
    },
    getImgUrl(vendor, pet) {
      return this.img_url + "/" + vendor + "/" + pet;
    },
    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("demo");
      // var captionText = document.getElementById("caption");

      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      console.log("slides");
      console.log(slides);
      console.log(this.slideIndex);
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
      // captionText.innerHTML = dots[this.slideIndex-1].alt;
    },
    // END:: Product page Slideshow
  },
};
</script>