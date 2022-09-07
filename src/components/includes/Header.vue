<template>


  <div>
    
  <div id="loader-container">
    <div class="back-load"></div>
    <div class="loader"></div>
  </div>
    <header class="top-section">
         <div class="container">
            <div class="row">
               <div class="col-lg-6">
                  <div class="left-top-info">
                     <p>Optional - welcome msg will come here!  <router-link to="signup">Join Free</router-link> or <router-link to="login">Sign In</router-link></p>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="right-top-info pull-right" v-if="!isHidden">
                     <ul>
                        <li><router-link to="login">Sign In</router-link></li>
                        <li><a href="#">My Account</a></li>
                     </ul>
                     
                  </div>
                  <div class="head-right-info" v-if="isHidden">
                  <div class="userLogined"><div class="usr-img"><img src="/src/assets/img/profile.6f7406c7.png" class="proImg"></div><div class="usr-title">{{ userTitle }}</div><i class="fa fa-chevron-down"></i><ul class="userProfileMenu"><li><a href="#">Dashboard</a></li><li><a href="#">My Orders</a></li><li><a href="#">Track My Order</a></li><li><a href="#">My Profile</a></li><li><a href="#" @click="logout">Logout</a></li></ul></div>
                  </div>
               </div>
            </div>
         </div>
      </header>
      <!-- Top Section End -->
      <!-- logo Section Start -->
      <section class="logo-section">
         <div class="container">
            <div class="row">
               <div class="col-xl-3">
                  <div class="logo-container">
                     <router-link to="home" class="navbar-brand"><img src="/src/assets/images/logo.jpg" alt=""></router-link>
                     
                  </div>
               </div>
               <div class="col-xl-6">
                  <div class="navigation-container">
                     <div class="navigation">
                        <nav class="navbar navbar-expand-lg navbar-light main-NaveBar">
                           <a class="navbar-brand" href=""></a>
                           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                           <i class="fa fa-bars" aria-hidden="true"></i>
                           </button>
                           <div class="collapse navbar-collapse" id="navbarSupportedContent">
                              <div class="menu-main-menu-container">
                                 <ul id="menu-top-menu" class="sm sm-clean ml-auto primeryManu">
                                    <li><a href="#">home</a></li>
                                    <li>
                                       <a href="#">New Arrivals</a>
                                       <ul class="sub-menu">
                                          <li><a href="#">New Arrivals 1</a></li>
                                          <li><a href="#">New Arrivals 2</a></li>
                                       </ul>
                                    </li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">about us</a></li>
                                 </ul>
                              </div>
                           </div>
                        </nav>
                     </div>
                  </div>
               </div>
               <div class="col-xl-3">
                  <div class="top-area-contact-info pull-right">
                     <div>Call Us Now: <span><a href="tel:0123444666" class="phone">0123-444-666</a></span></div>
                     <div><span><a href="mailto:Contact@marketplace.com">Contact@marketplace.com</a></span></div>
                  </div>
               </div>
            </div>
         </div>
      </section>
  </div>
</template>
<script>

export default {
  name: "header",
  
  data() {
    return {
      userTitle:"John",
      itemsincart:0,
      isHidden: false
    };
  },
  async mounted(){
    if(localStorage.getItem("login")){
      console.log("Login Data")
      const logindata = JSON.parse(localStorage.getItem("login"));
      var totalQty=0;
      logindata.cartitems.forEach(function(items) {
        console.log("Qty: "+items.quantity)
        totalQty+=items.quantity
      })
      this.itemsincart=totalQty;
      this.userTitle=logindata.first_name+" "+logindata.last_name;
      console.log(localStorage.getItem("login"))
      this.isHidden=true;
    } else {
      localStorage.clear();
      //this.$router.push({name:"Login"})
    }
  },
  methods:{
    logout() {
      localStorage.clear();
      alert("Logout Success");
      this.itemsincart=0
      this.isHidden=false;
      this.$router.push({name:"Home"});
    }
  }
};
</script>

