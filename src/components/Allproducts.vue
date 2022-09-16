<template>
  <div>
    <header-comp></header-comp>
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
                  <input
                    type="search"
                    name=""
                    v-on:keypress="searchObjects"
                    v-model="search"
                    placeholder="Search entire store here..."
                  />
                </div>
                <div class="search-tab">
                  <button type="button" v-on:click="getFilterData">
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
                    <span
                      class="cart"
                      v-if="itemsincart > 0"
                      v-html="itemsincart"
                    ></span>
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
          <div class="col-6">
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
      <div class="row mt-5">
        <div class="col-md-2">
          <form @submit.prevent="getFilterData" method="post">
            <div class="sidebar-options mt-3">
              <div class="brand-options">
                <h5>Brands</h5>
                <ul class="products-cat-opt">
                  <li v-for="(value, index) in this.brandlist" :key="index">
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="brand"
                        class="form-check-input"
                        :value="value" />{{ value
                      }}<span class="checkmark"></span
                    ></label>
                  </li>
                </ul>
              </div>

              <div
                class="brand-options"
                v-for="(value, index) in this.filterlist"
                :key="index"
              >
                <h5>{{ index }}</h5>
                <ul class="products-cat-opt">
                  <li v-for="(subvalue, subindex) in value" :key="subindex">
                    <label class="form-check-label"
                      ><input
                        type="checkbox"
                        v-model="filtersdata[index]"
                        class="form-check-input"
                        :value="subvalue" />{{ subvalue
                      }}<span class="checkmark"></span
                    ></label>
                  </li>
                </ul>
              </div>
            </div>
            <button type="submit" name="filter" class="col-sm-12 primary h-34">
              Apply Filter
            </button>
          </form>
        </div>
        <div class="col-md-10">
          <div class="row">
            <div class="col-sm-12">
              <div class="cat-title-pg">
                <h4>Gaming Laptops</h4>
                <div class="cat-option-pg">
                  <form @submit.prevent="getFilterData" method="post">
                    <div class="price-limit-opt">
                      <span>Price: </span>
                      <div class="form-group min-max-bx">
                        <input
                          type="text"
                          v-model="min_price"
                          placeholder="Min"
                          class="h-34 form-control min-priceprice"
                        />
                        <span class="seperator"> - </span>
                        <input
                          type="text"
                          v-model="max_price"
                          placeholder="Max"
                          class="h-34 form-control max-price"
                        />
                        <button
                          class="primary h-34"
                          type="submit"
                          name="filter"
                        >
                          Go
                        </button>
                      </div>
                    </div>
                  </form>
                  <div class="sortby-opt">
                    <label class="top-position">Sort By</label>
                    <select class="select-custom-point">
                      <option>Featured</option>
                      <option>Brand</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row my-4">
            <div
              class="col-sm-4 item"
              v-for="(item, index) in list"
              :key="index"
            >
              <div class="product-item">
                <div class="pro-img-bx">
                  <router-link
                    :to="{
                      path: '/product',
                      query: { id: item.id },
                      props: true,
                    }"
                  >
                    <img
                      :src="getImgUrl(item.vendor_id, item.featured_image)"
                      @error="
                        $event.target.src =
                          'https://posh-marketplace.plego.pro/img/product-images/997/no_image.png'
                      "
                    />
                  </router-link>
                </div>
                <div class="pro-title-bx">
                  <h3 class="prod-title">
                    <router-link
                      :to="{
                        path: '/product',
                        query: { id: item.id },
                        params: item.id,
                      }"
                      >{{ item.name }}</router-link
                    >
                  </h3>
                  <div class="prod-p-icon">
                    <span class="pro-price">${{ item.net_price }}</span>
                    <span class="pro-icons">
                      <img src="../assets/img/buy.png" class="img-fluid" />
                      <img src="../assets/img/heart.png" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row my-5">
            <div class="col-sm-12 d-flex justify-content-center">
              <!-- START PAGINATION HERE -->
              <span v-if="total==0">No Product Found</span>



              <nav v-if="total>0" aria-label="Page navigation" class="pagiBox-bx">
                <ul class="pagination">
                  <li class="page-item">
                    <a class="page-link" v-if="from > 1" @click="getFilterData(current_page - 1)"
                      >Previous</a
                    >
                  </li>
                  <li class="page-item" v-for="(num, index) in total" :key="index">
                    <a class="page-link" @click="getFilterData((index+1))"
                      >{{ (index+1) }}</a
                    >
                  </li>

                  <li class="page-item">
                    <a class="page-link" v-if="to < total" @click="getFilterData(current_page + 1)"
                      >Next</a
                    >
                  </li>
                </ul>
              </nav>
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
import axios from "axios";
import HeaderComp from "./includes/Header.vue";
import FooterComp from "./includes/Footer.vue";

var paginate = 1;
export default {
  name: "Allproducts",
  props: {
    product_id: 0,
  },
  components: { HeaderComp, FooterComp },
  data() {
    return {
      total_price: 0,
      cartform: {
        product_id: 0,
        user_id: 0,
        quantity: 1,
        item_price: 0,
        net_price: 0,
        name: null,
        description: null,
      },

      MainCategory: [],
      userTitle: "John",
      itemsincart: 0,
      isHidden: false,
      query: null,
      sub_category: this.$route.query.id,
      parent_category: this.$route.query.p_id,
      list: [],
      list_head: [],
      showTitle: true,

      brandlist: [],
      filterlist: [],
      filtersdata: [],
      filtersd: {},

      brand: [],
      colors: [],
      warranty: [],
      ram: [],
      processor: [],
      min_price: 0,
      max_price: 0,

      order_by: 0,
      to: null,
      from: null,
      total: null,
      current_page: null,
      search: "",

      img_url: axios.defaults.url + "/img/product-images",
      //img_url: "https://posh-marketplace.plego.pro/img/product-images",
      seller_id:import.meta.env.VITE_SELLER_ID,
    };
  },

  async mounted() {
    this.query = this.$route.query.search;

    if (localStorage.getItem("login")) {
      console.log("Login Data");
      const logindata = JSON.parse(localStorage.getItem("login"));

      if (logindata.cartitems) {
        this.itemsincart = logindata.cartitems.length;
        for (var i = 0; i < logindata.cartitems.length; i++) {
          this.total_price +=
            parseInt(logindata.cartitems[i].item_price) *
            parseInt(logindata.cartitems[i].quantity);
        }
      }
      this.userTitle = logindata.first_name + " " + logindata.last_name;
      this.cartform.user_id = logindata.id;
      console.log(localStorage.getItem("login"));
      this.isHidden = true;
    } else if (!localStorage.getItem("login")) {
      if (localStorage.getItem("guest")) {
        const guestdata = JSON.parse(localStorage.getItem("guest"));
        this.cartitemslist = guestdata;
        var tempTotalPrice = 0;
        this.count_cartitems = this.cartitemslist.length;
        this.cartitemslist.forEach(function (items) {
          console.log("Qty: " + items.quantity);
          tempTotalPrice += items.quantity * items.item_price;
        });
        this.total_price = tempTotalPrice;

        $(".cart").html(this.count_cartitems);
        if (this.count_cartitems == 0) {
          $(".cart").hide();
        } else {
          $(".cartitems").children("span").show();
        }
      }
    }
    this.getHeadFoot();
    this.getCategoryFilters();
    //
    this.getFilterData();
    //alert(this.$route.query.search)
  },
  methods: {
    searchObjects: function (e) {
      if (e.keyCode === 13) {
        this.getFilterData();
      }
    },

    async getCategoryFilters() {
      this.startLoader();
      let cat_result = axios.get(
        axios.defaults.baseURL + "category/pfilters/" + this.sub_category
      );
      if ((await cat_result).data != null) {
        this.filterlist = (await cat_result).data.data;
        this.filtersdata = (await cat_result).data.labels;

        this.brandlist = (await cat_result).data.brandlist;
        //this.brand = (await cat_result).data.brandlist;
      }
      //this.filterlist = (await cat_result).data;
      console.log(this.filterlist);
      this.EndLoader();
    },
    async getFilterData(page = 0) {
      var url = "";
      if (page > 0) {
        url += "?page=" + page;
      }

      this.startLoader();
      let cat_result = axios.get(
        axios.defaults.baseURL +
          "seller/getcategorytitle/" +
          this.parent_category
      );
      this.MainCategory = (await cat_result).data;

      var obj = this;
      let result = axios
        .get(
          axios.defaults.baseURL + "allproducts" + url,
          {
            params: {
              filter: JSON.stringify(this.filtersdata),
              search: this.search,
              min_price: this.min_price,
              max_price: this.max_price,
              brand: this.brand.toString(),
              colors: this.colors.toString(),
              warranty: this.warranty.toString(),
              ram: this.ram.toString(),
              processor: this.processor.toString(),
              sub_category: this.sub_category,
              parent_category: this.parent_category,
              user: this.seller_id,
            },
          },
          { useCredentails: true }
        )
        .then((response) => {
          let res = response.data;
          this.list = res.data;

          this.to = res.to;
          this.from = res.from;
          this.total = res.total;
          if (res.total < res.per_page) {
            this.from = 0;
          }
          this.current_page = res.current_page;
        });
      this.EndLoader();
    },
    startLoader() {
      console.log("karachi");
      var target_ContId = document.getElementById("loader-container");
      // target_ContId.style.display = "block";
    },
    EndLoader() {
      console.log("pak");
      var target_ContId = document.getElementById("loader-container");
      // target_ContId.style.display = "none";
    },
    getImgUrl(vendor, pet) {
      return this.img_url + "/" + vendor + "/" + pet;
    },
    async pagination(action) {
      if (action == "b") {
        if (paginate > 0) paginate -= 1;
        //alert("Back: " + paginate);
      } else {
        if (paginate <= 3) paginate += 1;
        //alert("Next: " + paginate);
      }
      this.startLoader();
      let result = axios.get(
        axios.defaults.baseURL + "allproducts",
        {
          params: {
            search: this.query,
            min_price: this.min_price,
            max_price: this.max_price,
            brand: this.brand.toString(),
            colors: this.colors.toString(),
            warranty: this.warranty.toString(),
            ram: this.ram.toString(),
            processor: this.processor.toString(),
            sub_category: this.sub_category,
            parent_category: this.parent_category,
            page: paginate,
          },
        },
        { useCredentails: true }
      );
      console.warn((await result).data.data);
      this.list = (await result).data.data;
      //page: paginate
      this.EndLoader();
      //alert("Hello");
    },
    logout() {
      localStorage.clear();
      alert("Logout Success");
      this.itemsincart = 0;
      this.isHidden = false;
      this.$router.push({ name: "Home" });
    },
    addtocart(item) {
      this.cartform.item_price = item.seller_price;
      this.cartform.product_id = item.id;
      this.cartform.quantity = 1;
      this.cartform.id = 1;

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
      }
    },
    async getHeadFoot() {
      let result = axios.get(axios.defaults.baseURL + "headerfooter/"+this.seller_id);
      console.log("header footer");
      this.list_head = (await result).data;
      if (this.list_head.logo) this.showTitle = false;
    },

    wishlist() {
      alert("Added to Wishlist");
    },
    getImgUrll(pet) {
      return this.img_url + "/"+this.seller_id+"/" + pet;
    },
    showmenu() {
      $("#navbarTogglerSidebar2").toggle();
    },
    showcatlist() {
      $("#navbarTogglerSidebar").addClass("active");
    },
    hidesidemenu() {
      $("#navbarTogglerSidebar").removeClass("active");
    },
    // hidesidemenu(){
    //   $("#navbarTogglerSidebar").removeClass("show")
    // },
    // showcatlist(){
    //   $("#navbarTogglerSidebar").addClass("show")
    // }
  },
};
</script>