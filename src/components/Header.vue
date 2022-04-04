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
                     <p>Optional - welcome msg will come here!  <a href="#">Join Free</a> or <a href="#">Sign in</a></p>
                  </div>
               </div>
               <div class="col-lg-6">
                  <!-- <div class="right-top-info pull-right">
                     <ul>
                        <li><router-link to="login">Sign In</router-link></li>
                        <li><a href="#">My Account</a></li>
                     </ul>
                     
                  </div> -->
                  <div class="head-right-info">
                  <div class="userLogined"><div class="usr-img"><img src="/src/assets/img/profile.6f7406c7.png" class="proImg"></div><div class="usr-title">Syed Haider</div><i class="fa fa-chevron-down"></i><ul class="userProfileMenu"><li><a href="#">Dashboard</a></li><li><a href="#">My Orders</a></li><li><a href="#">Track My Order</a></li><li><a href="#">My Profile</a></li><li><a href="#">Logout</a></li></ul></div>
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
};
</script>

