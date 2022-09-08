
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


                  <li class="has-drop-down" v-for="item in list" :key="item.id">
                  <span class="category-icon">
                    <i class="fa" :class="item.icon" style="color:#000;"></i>
                    <!-- <i class="menu-icon">
                    <img :src="getImgUrlCat(item.img)" /> -->
                  </span>
                  <router-link
                      :to="{
                        path: 'allproducts',
                        query: { id: 10 },
                        props: true,
                      }"
                      >{{ item.title }}</router-link
                    >
                  
                  <!-- <i class="fas fa-angle-right"></i> -->
                  <ul class="side-submenu">
                    <li
                      v-for="subitem in item.active_children"
                      :key="subitem.id"
                    >
                      <router-link
                        :to="{
                          path: 'allproducts',
                          query: { p_id: item.id, id: subitem.id },
                          props: true,
                        }"
                      >
                        {{ subitem.title }}</router-link
                      >
                    </li>
                  </ul>
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
                    </div>
                  </form>
                </div>
                <div class="banner">
                  <!-- Carousel -->
                  <div
                    id="banner"
                    class="carousel carousel-fade"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-indicators">
                      <button v-for="(images, index) in this.sliders" :key="index"
                        type="button"
                        data-bs-target="#banner"
                        :data-bs-slide-to="index"
                        v-bind:class="cravings(index)"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                    </div>
                    <!-- The slideshow/carousel -->
                    <div class="carousel-inner">
                      <div class="carousel-item" v-bind:class="cravings(index)" v-for="(images, index) in this.sliders" :key="index">
                        <a :href="images.link ? images.link : '#'" target="_blank">
                        <img
                           :src="getImgUrll(images.image)"
                           alt=""
                           class="d-block"
                        />
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
                        <img src="/src/assets/images/wish-i.jpg" alt="" />
                      </a>
                    </div>
                    <div class="wish-i">
                      <a href="#">
                        <img src="/src/assets/images/refresh-i.jpg" alt="" />
                      </a>
                    </div>
                    <div class="wish-i">
                      <span class="cart"> 2 </span>
                      <img src="/src/assets/images/cart-i.jpg" alt="" />
                    </div>
                  </div>
                  <div class="clearfix"></div>
                  <div class="rightBannerBx">
                    <div class="banner-cont">
                     <a
                        :href="this.promotion.link1 ? this.promotion.link1 : '#'"
                        target="_blank"
                     >
                        <img :src="getImgUrll(this.promotion.image1)" alt="" />
                     </a>
                    </div>
                    <div class="banner-cont">
                     <a
                        :href="this.promotion.link2 ? this.promotion.link2 : '#'"
                        target="_blank"
                     >
                        <img :src="getImgUrll(this.promotion.image2)" alt="" />
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
        <h2>FEATURED PRODUCTS</h2>
        <div class="row">



         <div
              class="col-sm-3"
              v-for="(product, index) in featuredProducts"
              :key="index"
            >
              <div class="product-item">
                <div class="pro-img-bx">
                  <router-link
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
                        src="../assets/img/buy.png"
                        class="img-fluid" /><img src="../assets/img/heart.png"
                    /></span>
                  </div>
                </div>
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
                  <div class="tdbx">
                    <img
                      class="img-fluid"
                      src="/src/assets/images/deals-bx-1.jpg"
                    />
                  </div>
                  <div class="tdbx">
                    <img
                      class="img-fluid"
                      src="/src/assets/images/deals-bx-3.jpg"
                    />
                  </div>
                </div>
                <div class="rightTodayBx">
                  <div class="tdbx">
                    <img
                      class="img-fluid"
                      src="/src/assets/images/deals-bx-2.jpg"
                    />
                  </div>
                  <div class="tdbx">
                    <img
                      class="img-fluid"
                      src="/src/assets/images/deals-bx-4.jpg"
                    />
                  </div>
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
                      <img src="/src/assets/images/b-01.jpg" alt="" />
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
                      <img src="/src/assets/images/b-02.jpg" alt="" />
                    </span>
                    <span class="product-detail">
                      <h4>Kids Clothes</h4>
                      <p>Tshirts</p>
                      <p class="price">
                        $20.00 <span class="price-d">$120.00</span>
                      </p>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="product-container">
                      <img src="/src/assets/images/b-03.jpg" alt="" />
                    </span>
                    <span class="product-detail">
                      <h4>SoundTrueOnEar8</h4>
                      <p>ipod</p>
                      <p class="price">
                        $70.00 <span class="price-d">$120.00</span>
                      </p>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="product-container">
                      <img src="/src/assets/images/b-04.jpg" alt="" />
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
               <a
                :href="this.promotion.link3 ? this.promotion.link3 : '#'"
                target="_blank"
              >
               <img
                  :src="getImgUrll(this.promotion.image3)"
                  height="240"
                  alt=""
                />
               </a>
              <div>
                <h6>colorful kick</h6>
                <h4>punchy sandals</h4>
                <a href="#" class="link">See More</a>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="right-middle-deals">
               <a
                :href="this.promotion.link4 ? this.promotion.link4 : '#'"
                target="_blank"
              >
               <img
                  :src="getImgUrll(this.promotion.image4)"
                  height="240"
                  alt=""
                />
               </a>

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
                <p class="subtitle-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam arcu, bibendum nec
                </p>
              </div>
              <!-- START:: INSIDE PRODUCTS -->
              <div class="ProductBox-temp2">
                <div class="row g-0">
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="new">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-01.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                  </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-06.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$30.00 </span>
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-02.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-07.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price"
                          >$30.00 <span class="disc">$120.00</span></span
                        >
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="discount">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-03.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="new">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-08.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$30.00 </span>
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-04.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-09.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price"
                          >$30.00 <span class="disc">$120.00</span></span
                        >
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="new">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-05.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="discount">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-10.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$30.00 </span>
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="new">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-02.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-03.jpg"
                            alt=""
                          />
                        </div>
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
                <p class="subtitle-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur diam arcu, bibendum nec
                </p>
              </div>
              <!-- START:: INSIDE PRODUCTS -->
              <div class="ProductBox-temp2">
                <div class="row g-0">
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="new">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-01.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                  </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-06.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$30.00 </span>
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-02.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-07.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price"
                          >$30.00 <span class="disc">$120.00</span></span
                        >
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="discount">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-03.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="new">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-08.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$30.00 </span>
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-04.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-09.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price"
                          >$30.00 <span class="disc">$120.00</span></span
                        >
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="new">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-05.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="discount">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-10.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$30.00 </span>
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="new">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-02.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-03.jpg"
                            alt=""
                          />
                        </div>
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
                <p class="subtitle-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur diam arcu, bibendum nec
                </p>
              </div>
              <!-- START:: INSIDE PRODUCTS -->
              <div class="ProductBox-temp2">
                <div class="row g-0">
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="new">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-01.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                  </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-06.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$30.00 </span>
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-02.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-07.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price"
                          >$30.00 <span class="disc">$120.00</span></span
                        >
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="discount">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-03.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="new">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-08.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$30.00 </span>
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-04.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-09.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price"
                          >$30.00 <span class="disc">$120.00</span></span
                        >
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="new">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-05.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="discount">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-10.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$30.00 </span>
                      </a>
                    </div>
                  </div>
                  <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <span class="new">New</span>
                        <div>
                          <img
                            src="/src/assets/images/electronic-02.jpg"
                            alt=""
                          />
                        </div>
                        <h5>Dell Inspiron 20 3059</h5>
                        <span class="price">$70.00</span>
                      </a>
                    </div>
                    </div>
                    <div class="cus-col">
                    <div class="category-product-block">
                      <a href="#">
                        <div>
                          <img
                            src="/src/assets/images/electronic-03.jpg"
                            alt=""
                          />
                        </div>
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
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";

import axios from "axios";
export default {
  name: "Body",
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
      //
      settings: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
        1400: {
          itemsToShow: 8,
          snapAlign: "start",
        },
      },
      //
      BestSellerProducts: {
        0: {
          featured_image: null,
          vendor_id: null,
        },
      },
      BestSellerProductsLength: 1,
      featuredProducts: [],
      justForYouProducts: [],
      list: [],
      list_homepage: [],
      cartform: {
        product_id: 0,
        user_id: 0,
        quantity: 1,
        item_price: 0,
      },

      sliders: {
        0: {
          link: null,
          image: null,
        },
        1: {
          link: null,
          image: null,
        },
        2: {
          link: null,
          image: null,
        },
      },
      sliderslen: 1,
      catimages: [],
      catimageslen: 1,
      promotion: [],
      img_url: axios.defaults.url + "/img/product-images",
      img_url_cat: axios.defaults.url + "/img/menu-template",

      user_id: 0,
    };
  },
  async mounted() {
    this.startLoader();

    this.getCategories();
    this.getSlidersPromotionsCategoryImages();
    this.getBestSellerCategories();
    this.getFeaturedProducts();
    this.getJustForYouProducts();

    if (localStorage.getItem("login")) {
      console.log("Login Data");
      const logindata = JSON.parse(localStorage.getItem("login"));
      this.user_id = logindata.id;
      this.cartform.user_id = logindata.id;
      if (logindata.cartitems) {
        $(".cartitems").children("span").html(logindata.cartitems.length);
      } else {
        $(".cartitems").children("span").html(0);
      }
      if (logindata.cartitems && logindata.cartitems.length == 0) {
        $(".cartitems").children("span").hide();
      } else {
        $(".cartitems").children("span").show();
      }
    } else if (!localStorage.getItem("login")) {
      if (localStorage.getItem("guest")) {
        const guestdata = JSON.parse(localStorage.getItem("guest"));
        $(".cartitems").children("span").html(guestdata.length);
        if (guestdata.length == 0) {
          $(".cartitems").children("span").hide();
        } else {
          $(".cartitems").children("span").show();
        }
      }
    }

    //console.warn((await result).data);
    //this.list = (await result).data;
    this.EndLoader();
  },
  methods: {
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
        $(".cartitems").children("span").html(this.itemsincart);
        if (this.itemsincart == 0) {
          $(".cartitems").children("span").hide();
        } else {
          $(".cartitems").children("span").show();
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
              $(".cartitems").children("span").html(this.itemsincart);
              if (this.itemsincart == 0) {
                $(".cartitems").children("span").hide();
              } else {
                $(".cartitems").children("span").show();
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

    async getSlidersPromotionsCategoryImages() {
      let result = axios.get(axios.defaults.baseURL + "seller/homepage/977");
      console.log((await result).data);
      this.list_homepage = (await result).data;
      this.catimages = (await result).data.CatImages;
      this.sliders = (await result).data.Sliders;
      this.sliderslen = 3;
      this.promotion = (await result).data.Promotions;
      console.log(this.list_homepage);
    },
    async getCategories() {
      let result = axios.get(
        axios.defaults.baseURL + "categorieslimited",
        this.params
      );
      console.warn("Check Data");
      const obj = (await result).data;
      console.warn(obj);
      if (obj.success == true) {
        this.list = obj.data;
      } else {
        alert("Issue loading categories");
      }
    },
    async getFeaturedProducts() {
      let result = axios.get(axios.defaults.baseURL + "product/featured");
      console.log((await result).data);
      this.featuredProducts = (await result).data;
    },
    async getBestSellerCategories() {
      let result = axios.get(
        axios.defaults.baseURL + "seller/bestcategories/977"
      );
      console.log((await result).data);
      this.BestSellerProducts = (await result).data;
      console.log((await result).data.length);
      this.BestSellerProductsLength = (await result).data.length;
    },
    async getJustForYouProducts() {
      let result = axios.get(
        axios.defaults.baseURL + "product/justforyou/" + this.user_id
      );
      console.log((await result).data);
      this.justForYouProducts = (await result).data;
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
    getImgUrll(pet) {
      return this.img_url + "/" + this.catimages.seller_id + "/" + pet;
    },
    getImgUrlCat(pet) {
      return this.img_url_cat + "/" + pet;
    },
    cravings(index){
      return index==0 ? 'active' : '';
    }
  },
};
</script>
