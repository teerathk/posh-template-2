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
                                       <input type="search" name="" placeholder="Search entire store here...">
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
                              <div class="wish-i ">
                                 <router-link to="cart" class="cartitems">
                                 <span v-html="itemsincart" class="cart">
                                 </span>
                                 <img src="/src/assets/images/cart-i.jpg" alt="">
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
                            <span><img src="/src/assets/img/menu-template/category.png">Show All Categories <i class="fa fa-chevron-down"></i></span>
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
                        <div class="left-thumbs">
                            <ul>
                               <li><img src="/src/assets/images/akn-1250-1.png"></li>
                               <li><img src="/src/assets/images/akn-1250.png"></li>
                               <li><img src="/src/assets/images/akn-1250-3.png"></li>
                               <li><img src="/src/assets/images/akn-1250-3.png"></li>
                               <li><img src="/src/assets/images/akn-1250-1.png"></li>
                               <li><img src="/src/assets/images/akn-1250.png"></li>
                            </ul>
                        </div>
                         <div class="right-main">
                             <img src="/src/assets/images/akn-1250-1.png">
                        </div>          
                  </div>
               </div>
               <div class="col-sm-7">
                  <div class="detial-sect">
                     <h1 class="title-pm-detail">ASUS TUF F15 Gaming Laptop, 15.6" Full HD 144Hz Screen, Intel Core i7-10870H Processor, NVIDIA GeForce GTX 1660 Ti, 32GB DDR4 Memory, 512GB SSD + 1TB HDD, RGB Backlit Keyboard, Windows 10 Home, Gray</h1>
                     <div class="price-pm-detail">$<strong>1,569.99</strong></div>
                     <div class="short-pm-detail">
                        <ul>
                           <li>Memory is 32 GB high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once.</li>
                           <li>Hard Drive is 512GB PCIe NVMe M.2 Solid State Drive which allows to fast bootup, data transfer + 1TB Hard Disk Drive for ample storage space</li>
                           <li>Intel Core i7-10870H 2.20 GHz 8-Core Processor (16MB Cache, up to 5.0GHz), NVIDIA GeForce GTX 1660 Ti GDDR6 6GB Graphics</li>
                           <li>15.6" Full HD (1920 x 1080) 144Hz Display</li>
                           <li>Ports and Operating System: 2 x USB 3.2, 1 x USB 2.0, 1 x HDMI port, 1 x DisplayPort, 1 x LAN: 10/100/1000 Mbps, 1 x 3.5mm combo audio jack, Windows 10 Home 64-bit, Wireless Wi-Fi 6 (802.11ax) + Bluetooth 5.0</li>
                           <li>Original Seal is opened for upgrade ONLY, 1-years warranty on Upgraded RAM/SSD from DE Electronics, and original 1-Year Manufacture warranty on remaining components</li>
                        </ul>
                     </div>

              <div class="addtocart-select-pm">
                <form method="post" @submit.prevent="addtocart">
                  <div class="qty-push-bx">							
                    <input type="hidden" v-model="product_id" />
                    <input type="hidden" v-model="user_id" />
                    <input type="number" min="1" max="100" v-model="cartform.quantity" placeholder="1" id="txtAcrescimo" class="qty-number" />
                  </div>
                  
                  <button type="submit" class="primary" on>Add to Cart</button>
                </form>
							</div>

                  </div>
               </div>
            </div>
         </div>
         </div>

<div class="container bgcolor-gl mb-5">
            <div class="produ-listing-bx cart-c">
               <div class="row">
                  <div class="col-12"><h2 class="cat-title">Recommended For You</h2><div class="fea-prod-sm">Show More <i class="fa fa-chevron-right"></i></div></div>
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



<div class="container bgcolor-gl">
            <div class="produ-listing-bx cart-c">
               <div class="row">
                  <div class="col-12"><h2 class="cat-title">Customers Also Bought</h2><div class="fea-prod-sm">Show More <i class="fa fa-chevron-right"></i></div></div>
               </div>
               <div class="row">
                  <div class="col-sm-3">
                  <div class="product-item">                
                     <div class="pro-img-bx">
                        <a href="#">
                        <img src="/src/assets/img/ab810G-B68TYL1.png" alt="">
                        </a>
                     </div>
                     <div class="pro-title-bx">
                        <h3 class="prod-title">Logitech M310 910-001675</h3>
                        <div class="prod-p-icon"><span class="pro-price">$19.49</span><span class="pro-icons"><img src="/src/assets/images/buy.png" class="img-fluid"><img src="/src/assets/images/heart.png"></span></div>
                     </div>
                  </div>
                  </div>
                  <div class="col-sm-3">     
                  <div class="product-item">                
                     <div class="pro-img-bx">
                        <a href="#">
                        <img src="/src/assets/img/ab810G-B68TYL4.png" alt="">
                     </a>
                     </div>
                     <div class="pro-title-bx">
                        <h3 class="prod-title">Rosewill 4 Buttons x 1 Wheel USB Wired Optical Mouse</h3>
                        <div class="prod-p-icon"><span class="pro-price">$34.99</span><span class="pro-icons"><img src="/src/assets/images/buy.png" class="img-fluid"><img src="/src/assets/images/heart.png"></span></div>
                     </div>
                  </div>
                  </div>
                  <div class="col-sm-3">
                  <div class="product-item">                
                     <div class="pro-img-bx">
                        <a href="#">
                        <img src="/src/assets/img/ab810G-B68TYL3.png" alt="">
                     </a>
                     </div>
                     <div class="pro-title-bx">
                        <h3 class="prod-title">Logitech S120 2.0 Stereo Speakers</h3>
                        <div class="prod-p-icon"><span class="pro-price">$179.49</span><span class="pro-icons"><img src="/src/assets/images/buy.png" class="img-fluid"><img src="/src/assets/images/heart.png"></span></div>
                     </div>
                  </div>
                  </div>
                  <div class="col-sm-3">
                  <div class="product-item">                
                     <div class="pro-img-bx">
                        <a href="#">
                        <img src="/src/assets/img/ab810G-B68TYL2.png" alt="">
                     </a>
                     </div>
                     <div class="pro-title-bx">
                        <h3 class="prod-title">Logitech 910-002726</h3>
                        <div class="prod-p-icon"><span class="pro-price">$25.04</span><span class="pro-icons"><img src="/src/assets/images/buy.png" class="img-fluid"><img src="/src/assets/images/heart.png"></span></div>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
         </div>
      <!-- lower-middle-section end-->
      
      <br>
      <br>
      <section class="before-footer-section">
         <div class="container">
            <div class="row">
               <div class="col">
                  <div class="small-container">
                     <span><img src="/src/assets/images/icon-01.png"></span>
                     <span>
                     <h4>free delivery</h4>
                     <p> From $200 </p>
                     </span>
                  </div>
               </div>
               <div class="col">
                  <div class="small-container">
                     <span><img src="/src/assets/images/icon-02.png"></span>
                     <span>
                     <h4>free delivery</h4>
                     <p> From $200 </p>
                     </span>
                  </div>
               </div>
               <div class="col">
                  <div class="small-container">
                     <span><img src="/src/assets/images/icon-03.png"></span>
                     <span>
                     <h4>free delivery</h4>
                     <p> From $200 </p>
                     </span>
                  </div>
               </div>
               <div class="col">
                  <div class="small-container">
                     <span><img src="/src/assets/images/icon-04.png"></span>
                     <span>
                     <h4>free delivery</h4>
                     <p> From $200 </p>
                     </span>
                  </div>
               </div>
               <div class="col">
                  <div class="small-container">
                     <span><img src="/src/assets/images/icon-07.png"></span>
                     <span>
                     <h4>free delivery</h4>
                     <p> From $200 </p>
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

import HeaderComp from './Header.vue'
import FooterComp from "./Footer.vue";
import 'vue3-carousel/dist/carousel.css';
import axios from "axios";
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';


export default {
  name: "Product",
  components: {
      HeaderComp, FooterComp, Carousel, Slide, Pagination, Navigation,
  },
  data() {
    return {
      cartform: {
        product_id: 0,
        user_id:0,
        quantity:0,
        item_price:0
      },
      product_info:[]
      
    };
  },
  async mounted(){
    if(localStorage.getItem("login")){
      console.log("Login Data")
      const logindata = JSON.parse(localStorage.getItem("login"));
      this.cartform.user_id = logindata.id
    }
    this.cartform.product_id = this.$route.query.id;
    
    this.getProductInfo();
  },
  methods: {
    async getProductInfo(){
      this.startLoader();
      
      let result = axios.get(axios.defaults.baseURL+"product/get/"+(this.cartform.product_id));
      console.log((await result).data);
      this.product_info = (await result).data
      this.EndLoader();
    },
    async addtocart(e) {
this.startLoader()
          if(this.cartform.quantity==0){
            alert("Quantity must be atleast 1")
          } else {
            
            this.cartform.item_price = this.product_info.net_price;
            this.cartform.product_id = this.$route.query.id;
            console.log(this.cartform)
              axios.post(axios.defaults.baseURL +"addtocart",this.cartform).then((result)=>{
                console.log(result.data);
                const obj = result.data;
                console.log(obj);
                if(obj.success==true){
                  alert("Product Added to the Cart");  

                  var totalQty=0;
                  obj.message.cartitems.forEach(function(items) {
                    console.log("Qty: "+items.quantity)
                    totalQty+=items.quantity
                  })
                  //this.itemsincart=totalQty;
                  $(".cartitems").children("span").html(totalQty);
                  
          if(localStorage.getItem("login")){
            console.log("Login Data")
            const logindata = JSON.parse(localStorage.getItem("login"));
            logindata.cartitems=obj.message.cartitems
            localStorage.setItem("login", JSON.stringify(logindata));
          }

          } else {
            alert("Some error occured");
          }
        })
        
    }
    this.EndLoader()
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
    increment(cart_id){
      var val = $("#cart_"+cart_id).val();
      //if(val>=1){
        val++;
        $("#cart_"+cart_id).val(val);
      //}
      //var val = $this.previousElementSibling.value;
      //alert(cart_id+" - "+val);
    },
    decrement(cart_id){
      var val = $("#cart_"+cart_id).val();
      if(val>=1){
        val--;
      }
      $("#cart_"+cart_id).val(val);
    },    
  }  
};
</script>