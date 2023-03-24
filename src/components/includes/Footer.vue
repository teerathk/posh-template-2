<template>
  <footer class="footer">
         <div class="container">
            <div class="row">
               <div class="col">
                  <div class="footer-col">
                     <h3>Main Menu</h3>
                     <ul class="footer-list">
              <li>
                <a
                  :href="
                    list.f_main_menu_links ? list.f_main_menu_links[0] : ''
                  "
                  >{{
                    list.f_main_menu_title ? list.f_main_menu_title[0] : ""
                  }}</a
                >
              </li>
              <li>
                <a
                  :href="
                    list.f_main_menu_links ? list.f_main_menu_links[2] : ''
                  "
                  >{{
                    list.f_main_menu_title ? list.f_main_menu_title[2] : ""
                  }}</a
                >
              </li>
              <li>
                <a
                  :href="
                    list.f_main_menu_links ? list.f_main_menu_links[3] : ''
                  "
                  >{{
                    list.f_main_menu_title ? list.f_main_menu_title[3] : ""
                  }}</a
                >
              </li>
            </ul>
                  </div>
               </div>
               <div class="col">
                  <div class="footer-col">
                     <h3>Company</h3>
                     <ul class="footer-list">
              <li>
                <a
                  :href="list.f_company_links ? list.f_company_links[0] : ''"
                  >{{ list.f_company_title ? list.f_company_title[0] : "" }}</a
                >
              </li>
              <li>
                <a
                  :href="list.f_company_links ? list.f_company_links[1] : ''"
                  >{{ list.f_company_title ? list.f_company_title[1] : "" }}</a
                >
              </li>
              <li>
                <a
                  :href="list.f_company_links ? list.f_company_links[2] : ''"
                  >{{ list.f_company_title ? list.f_company_title[2] : "" }}</a
                >
              </li>
            </ul>
                  </div>
               </div>
               <div class="col">
                  <div class="footer-col">
                     <h3>Discover</h3>
                     <ul class="footer-list">
              <li>
                <a
                  :href="list.f_discover_links ? list.f_discover_links[0] : ''"
                  >{{
                    list.f_discover_title ? list.f_discover_title[0] : ""
                  }}</a
                >
              </li>
              <li>
                <a
                  :href="list.f_discover_links ? list.f_discover_links[1] : ''"
                  >{{
                    list.f_discover_title ? list.f_discover_title[1] : ""
                  }}</a
                >
              </li>
              <li>
                <a
                  :href="list.f_discover_links ? list.f_discover_links[2] : ''"
                  >{{
                    list.f_discover_title ? list.f_discover_title[2] : ""
                  }}</a
                >
              </li>
            </ul>
                  </div>
               </div>
               <div class="col">
                  <div class="footer-col">
                     <h3>Download App</h3>
                     <div class="appStoreBox">
                     <div class="appimag"><a href="#"><img class="appstoreiocn" src="/src/assets/images/googleplaystore.png" alt=""></a></div>
                     <div class="appimag"><a href="#"><img class="appstoreiocn" src="/src/assets/images/appstore-icon.png" alt=""></a></div>
                     </div>                     
                  </div>
               </div>
              
            </div>
            <hr>
            
         </div>
         
         <div class="container">
            <div class="footer-newsletter-section">
               <div class="row">
                  <div class="col-xl-9">
                     <form action="">
                        <div class="form-cont">
                           <div>
                              <label>sign up for newsletter</label>
                           </div>
                           <div>
                              <input type="email" name="" placeholder="Put your Email Address here">
                              <span class="error-message" style="display: none;">This is required field.</span>
                              <button type="submit">subscribe</button>
                           </div>
                        </div>
                     </form>
                  </div>
                  <div class="col-xl-3">
                     <div class="social-container">
                        <ul>
                        <li>
                           <h5>follow us</h5>
                        </li>
                        <li>
                           <a
                  :href="list.f_findus_links ? list.f_findus_links[0] : '#'"
                  target="_blank"
                  ><i class="fa fa-facebook" aria-hidden="true"></i></a
                ></li>
                        <li><a
                  :href="list.f_findus_links ? list.f_findus_links[1] : '#'"
                  target="_blank"
                  ><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-futbol-o" aria-hidden="true"></i></a></li>
                        <li><a
                  :href="list.f_findus_links ? list.f_findus_links[2] : '#'"
                  target="_blank"
                  ><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="bottom-footer">
            <p>   © Copyright {{ new Date().getFullYear() }} All Rights Reserved.</p>
            <img src="/src/assets/images/visa.jpg" alt="">
            <img src="/src/assets/images/master-card.jpg" alt="">
            <img src="/src/assets/images/paypal.jpg" alt="">
            <img src="/src/assets/images/american-express.jpg" alt="">
            <img src="/src/assets/images/visa-E.jpg" alt="">
            <img src="/src/assets/images/LA.jpg" alt="">
            <img src="/src/assets/images/Ma.jpg" alt="">
            <img src="/src/assets/images/delta.jpg" alt="">
            <img src="/src/assets/images/del.jpg" alt="">
         </div>
      </footer>
</template>
                


<script>
import axios from "axios";
export default {
  name: "Footer",
  data() {
    return {
      list: [],
      showTitle: true,
      // img_url: "https://posh-marketplace.plego.pro/img/product-images",
      img_url: axios.defaults.url + "/img/product-images",
      seller_id:import.meta.env.VITE_SELLER_ID,
    };
  },
  mounted() {
    this.getHeadFoot();
  },
  methods: {
    async getHeadFoot() {
      let result = axios.get(axios.defaults.baseURL + "headerfooter/"+this.seller_id);
      console.log("header footer");
      // console.log(result);
      // this.list = result;
      this.list = (await result).data;
      $(".navbar-brand span").html(this.list.h_shop_name);
      if (this.list.logo) this.showTitle = false;
      $(".about-foot p").html(this.list.about_us);
    },
    getImgUrll(pet) {
      return this.img_url + "/977/" + pet;
    },
  },
};
</script>