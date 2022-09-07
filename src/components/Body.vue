
<template>
  <div>
<header-comp></header-comp>

      <section class="banner-container">
         <div class="container">
            <div class="row g-0">
               <div class="col-xl-3">
                  <div class="left-bar">
                     <header>
                        <h3>All Categories</h3>
                     </header>
                     <div class="left-menu">
                        <ul>
                           <li class="has-drop-down active">
                              <span class="category-icon">
                              <img src="/src/assets/images/icon-fashion.jpg" alt="">
                              </span>
                              <a href="#">Fashion</a>
                           </li>
                           <li class="has-drop-down">
                              <span class="category-icon">
                              <img src="/src/assets/images/icon-computer.jpg" alt="">
                              </span>
                              <router-link
                    :to="{ path: 'allproducts', query: { id: 10 }, props: true }"
                  >Computer</router-link>
                              <!-- <a href="#">Computer</a> -->
                           </li>
                           <li class="has-drop-down">
                              <span class="category-icon">
                              <img src="/src/assets/images/icon-furniture.jpg" alt="">
                              </span>
                              <a href="#">Furniture</a>
                           </li>
                           <li class="has-drop-down">
                              <span class="category-icon">
                              <img src="/src/assets/images/icon-smartphone.jpg" alt="">
                              </span>
                              <a href="#">Smartphone</a>
                           </li>
                           <li class="has-drop-down">
                              <span class="category-icon">
                              <img src="/src/assets/images/icon-healthbeauty.jpg" alt="">
                              </span>
                              <a href="#">Healthy & Beauty</a>
                           </li>
                           <li class="has-drop-down">
                              <span class="category-icon">
                              <img src="/src/assets/images/icon-sportclothing.jpg" alt="">
                              </span>
                              <a href="#">Sport Clothing</a>
                           </li>
                           <li class="has-drop-down">
                              <span class="category-icon">
                              <img src="/src/assets/images/icon-jewelry.jpg" alt="">
                              </span>
                              <a href="#">Watch & Jewelry</a>
                           </li>
                           <li class="has-drop-down">
                              <span class="category-icon">
                              <img src="/src/assets/images/icon-kitchen.jpg" alt="">
                              </span>
                              <a href="#">Kitchen</a>
                           </li>
                           <li class="has-drop-down">
                              <span class="category-icon">
                              <img src="/src/assets/images/icon-cap.jpg" alt="">
                              </span>
                              <a href="#">Accessories</a>
                           </li>
                           <li class="has-drop-down">
                              <span class="category-icon">
                              <img src="/src/assets/images/icon-more.jpg" alt="">
                              </span>
                              <a href="#">More Category</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-xl-9">
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
                                 <div class="col-sm-9-bc">
                                    <div class="search-box">
                                       <input type="search" name="" placeholder="Search entire store here...">
                                    </div>
                                    <div class="search-tab">
                                       <button type="submit">
                                       <i class="fa fa-search" aria-hidden="true"></i>
                                       </button>
                                    </div>
                                 </div>
                              
                           </form>
                        </div>
                        <div class="banner">
                           <!-- Carousel -->
                           <div id="banner" class="carousel carousel-fade" data-bs-ride="carousel">
                              <div class="carousel-indicators">
    <button type="button" data-bs-target="#banner" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#banner" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#banner" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
                              <!-- The slideshow/carousel -->
                              <div class="carousel-inner">
                                 <div class="carousel-item active">
                                    <a href="#">
                                    <img src="/src/assets/images/banner-01.jpg" alt="" class="d-block" >
                                    </a>
                                 </div>
                                 <div class="carousel-item">
                                    <a href="#">
                                    <img src="/src/assets/images/banner-02.jpg" alt="" class="d-block" >
                                    </a>
                                 </div>
                                 <div class="carousel-item">
                                    <a href="#">
                                    <img src="/src/assets/images/banner-03.jpg" alt="" class="d-block" >
                                    </a>
                                 </div>
                              </div>
                           
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-3">
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
                           <div class="rightBannerBx">
                              <div class="banner-cont">
                                 <a href="#">
                                 <img src="/src/assets/images/right-banner-1.jpg" alt="">
                                 </a>
                              </div>
                              <div class="banner-cont">
                                 <a href="#">
                                 <img src="/src/assets/images/right-banner-2.jpg" alt="">
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- banner Section End -->
      <!-- featured-categores top -->
      <section class="featured-categores">
         <div class="container">
            <h2>FEATURED CATEGORIES</h2>
            <div class="row">
               <div class="col">
                  <div class="category-box">
                     <a href="">
                        <div class="category-pic">
                           <img src="/src/assets/images/p-01.jpg" alt="">
                        </div>
                        <div class="category-title">
                           <h4>Iwatch</h4>
                        </div>
                     </a>
                  </div>
               </div>
               <div class="col">
                  <div class="category-box">
                     <a href="">
                        <div class="category-pic">
                           <img src="/src/assets/images/p-02.jpg" alt="">
                        </div>
                        <div class="category-title">
                           <h4>Bags</h4>
                        </div>
                     </a>
                  </div>
               </div>
               <div class="col">
                  <div class="category-box">
                     <a href="">
                        <div class="category-pic">
                           <img src="/src/assets/images/p-03.jpg" alt="">
                        </div>
                        <div class="category-title">
                           <h4>Swimwear</h4>
                        </div>
                     </a>
                  </div>
               </div>
               <div class="col">
                  <div class="category-box">
                     <a href="">
                        <div class="category-pic">
                           <img src="/src/assets/images/p-04.jpg" alt="">
                        </div>
                        <div class="category-title">
                           <h4>shoes</h4>
                        </div>
                     </a>
                  </div>
               </div>
               <div class="col">
                  <div class="category-box">
                     <a href="">
                        <div class="category-pic">
                           <img src="/src/assets/images/p-05.jpg" alt="">
                        </div>
                        <div class="category-title">
                           <h4>fashion</h4>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- featured-categoresEnd -->
      <!-- Today Deals -->
      <section class="today-deals">
         <div class="container">
            <div class="row">
               <div class="col-xl-9">
                  <div class="best-sellets">
                     <h3>Today deals</h3>
                     <div class="todayDeals-Bx">
                        <div class="leftTodayBx">
                        <div class="tdbx"><img class="img-fluid" src="/src/assets/images/deals-bx-1.jpg"></div>
                        <div class="tdbx"><img class="img-fluid" src="/src/assets/images/deals-bx-3.jpg"></div>
                        </div>
                        <div class="rightTodayBx">
                        <div class="tdbx"><img class="img-fluid" src="/src/assets/images/deals-bx-2.jpg"></div>
                        <div class="tdbx"><img class="img-fluid" src="/src/assets/images/deals-bx-4.jpg"></div>
                        </div>
                     </div>
                     </div>
               </div>
               <div class="col-xl-3">
                  <div class="best-sellets">
                     <h3>BEST SELLERS</h3>
                     <ul>
                     <li>
                        <a href="#">
                        <span class="product-container">
                        <img src="/src/assets/images/b-01.jpg" alt="">
                        </span>
                        <span class="product-detail">
                           <h4>Cologne</h4>
                           <p>Perfume</p>
                           <p class="price">$40.00</p>
                        </span>
                     </a>
                     </li>
                     <li>
                          <a href="#">
                        <span class="product-container">
                        <img src="/src/assets/images/b-02.jpg" alt="">
                        </span>
                        <span class="product-detail">
                           <h4>Kids Clothes</h4>
                           <p>Tshirts</p>
                           <p class="price">$20.00 <span class="price-d">$120.00</span></p>
                        </span>
                     </a>
                     </li>
                     <li>
                          <a href="#">
                        <span class="product-container">
                        <img src="/src/assets/images/b-03.jpg" alt="">
                        </span>
                        <span class="product-detail">
                           <h4>SoundTrueOnEar8</h4>
                           <p>ipod</p>
                           <p class="price">$70.00 <span class="price-d">$120.00</span></p>
                        </span>
                     </a>
                     </li>
                     <li>
                          <a href="#">
                        <span class="product-container">
                        <img src="/src/assets/images/b-04.jpg" alt="">
                        </span>
                        <span class="product-detail">
                           <h4>Nike Shoes</h4>
                           <p>Shoes</p>
                           <p class="price">$60.00</p>
                        </span>
                     </a>
                     </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- Today Deals -->
      <!-- middle Deals top-->
      <section class="middle-deals-section">
         <div class="container">
            <div class="row">
               <div class="col-xl-6">
                  <div class="left-middle-deals">
                     <img src="/src/assets/images/left-middle-deals.jpg" alt="">
                     <div>
                        <h6>colorful kick</h6>
                        <h4>punchy sandals</h4>
                        <a href="#" class="link">See More</a>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6">
                  <div class="right-middle-deals">
                     <img src="/src/assets/images/right-middle-deals.jpg" alt="">
                     <div>
                        <h4>going somewhere?</h4>
                        <a href="#" class="link">See More</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- middle Deals end-->
      <!-- categories section start Fashion-->
      <section class="category-section">
         <div class="container">
            <div class="row g-0">
               <div class="col-xl-12">
               
                  <div class="category-products-blocks">
                     <div class="cp-bloxks">
                        <h3 class="titleWbg"><span>Fashion</span></h3>
                        <p class="subtitle-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam arcu, bibendum nec </p></div>
                     <!-- START:: INSIDE PRODUCTS -->
                     <div class="ProductBox-temp2">
                     <div class="row g-0">
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="new">New</span>
                                 <div><img src="/src/assets/images/electronic-01.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-06.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 </span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-02.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-07.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 <span class="disc">$120.00</span></span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="discount">New</span>
                                 <div><img src="/src/assets/images/electronic-03.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="new">New</span>
                                 <div><img src="/src/assets/images/electronic-08.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 </span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-04.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-09.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 <span class="disc">$120.00</span></span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="new">New</span>
                                 <div><img src="/src/assets/images/electronic-05.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="discount">New</span>
                                 <div><img src="/src/assets/images/electronic-10.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 </span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="new">New</span>
                                 <div><img src="/src/assets/images/electronic-02.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-03.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 </span>
                              </a>
                           </div>
                        </div>
                     </div>
                     </div>
                     <!-- END:: INSIDE PRODUCTS   -->
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- categories section end Fashion -->
      <!-- categories section start ELECTRONICS -->
      <section class="category-section">
         <div class="container">
            <div class="row g-0">
               <div class="col-xl-12">
               
                  <div class="category-products-blocks evenRightBg">
                     <div class="cp-bloxks">
                        <h3 class="titleWbg"><span>ELECTRONICS</span></h3>
                        <p class="subtitle-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam arcu, bibendum nec </p></div>
                     <!-- START:: INSIDE PRODUCTS -->
                     <div class="ProductBox-temp2">
                     <div class="row g-0">
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="new">New</span>
                                 <div><img src="/src/assets/images/electronic-01.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-06.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 </span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-02.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-07.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 <span class="disc">$120.00</span></span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="discount">New</span>
                                 <div><img src="/src/assets/images/electronic-03.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="new">New</span>
                                 <div><img src="/src/assets/images/electronic-08.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 </span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-04.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-09.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 <span class="disc">$120.00</span></span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="new">New</span>
                                 <div><img src="/src/assets/images/electronic-05.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="discount">New</span>
                                 <div><img src="/src/assets/images/electronic-10.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 </span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="new">New</span>
                                 <div><img src="/src/assets/images/electronic-02.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-03.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 </span>
                              </a>
                           </div>
                        </div>
                     </div>
                     </div>
                     <!-- END:: INSIDE PRODUCTS   -->
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- categories section end ELECTRONICS -->
      <!-- categories section start SPORTS  -->
      <section class="category-section">
         <div class="container">
            <div class="row g-0">
               <div class="col-xl-12">
               
                  <div class="category-products-blocks">
                     <div class="cp-bloxks">
                        <h3 class="titleWbg"><span>SPORTS</span></h3>
                        <p class="subtitle-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam arcu, bibendum nec </p></div>
                     <!-- START:: INSIDE PRODUCTS -->
                     <div class="ProductBox-temp2">
                     <div class="row g-0">
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="new">New</span>
                                 <div><img src="/src/assets/images/electronic-01.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-06.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 </span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-02.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-07.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 <span class="disc">$120.00</span></span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="discount">New</span>
                                 <div><img src="/src/assets/images/electronic-03.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="new">New</span>
                                 <div><img src="/src/assets/images/electronic-08.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 </span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-04.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-09.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 <span class="disc">$120.00</span></span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="new">New</span>
                                 <div><img src="/src/assets/images/electronic-05.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="discount">New</span>
                                 <div><img src="/src/assets/images/electronic-10.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 </span>
                              </a>
                           </div>
                        </div>
                        <div class="col">
                           <div class="category-product-block">
                              <a href="#">
                                 <span class="new">New</span>
                                 <div><img src="/src/assets/images/electronic-02.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$70.00</span>
                              </a>
                           </div>
                           <div class="category-product-block">
                              <a href="#">
                                 <div><img src="/src/assets/images/electronic-03.jpg" alt=""></div>
                                 <h5>Dell Inspiron 20 3059</h5>
                                 <span class="price">$30.00 </span>
                              </a>
                           </div>
                        </div>
                     </div>
                     </div>
                     <!-- END:: INSIDE PRODUCTS   -->
                  </div>
               </div>
            </div>
         </div>
      </section>
      <!-- categories section end SPORTS -->

      

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
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';

import axios from "axios";
export default {
  name: "Body",
  components: {
      HeaderComp, FooterComp, Carousel, Slide, Pagination, Navigation,
  },
  data() {
    return {
      list: []
    };
  },
  async mounted() {
    
    this.startLoader();
    let result = axios.get(axios.defaults.baseURL + "categories", this.params);
    console.warn("Check Data");
    const obj = (await result).data;
    console.warn(obj);
    if(obj.success==true){
      this.list = obj.data;
    } else {
      alert("Issue loading categories");
    }
    //console.warn((await result).data);
    //this.list = (await result).data;
    this.EndLoader();
  },
  methods: {
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
    getImgUrl(pet) {
      return createElement('img', {
        attrs: {
          src: require('@assets/img/menu-template/'+pet) // this is now a module request
        }
      })
    },

  }

};
</script>
