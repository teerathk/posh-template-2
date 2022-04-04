<template>
<div>
  	<div id="ajaxLoader">
        <div id="loader"></div>
    </div>

	<div class="main">
		<div class="wrapper seller-temp">
			<div class="login-area">
				<div class="container top-log">
					<div class="row">
						<div class="col-sm-12">

							<div class="logo">
								<h1>Posh Marketplace</h1>
							</div>

							<div class="login-box mb-5">
								<h1>Sign-In</h1>
								<form>
									<input type="email" placeholder="Email Address*">
									<span class="eye-icon-pass"><input type="password" placeholder="Password*"><i class="fas fa-eye"></i></span>
									<span class="invalidLogin alert alert-danger"></span>
									<label class="group">
										<input type="checkbox">
										Stay Signed In
									</label>

									<a href="#">Forgot Password?</a>
									<button class="primary btn-block">
										Login
									</button>
								</form>
							</div>
							<div class="info-login"><h2>Don't have account yet?</h2> <ul><li><a href="#" class="">User Signup</a></li></ul></div>
						</div>
					</div>
				</div>
				<div class="container-fluid bottom-log">
					<div class="row">
						<div class="col-sm-12">
							<p>Copyright © 2022  Posh Market, Inc. All rights reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>
</template>


<script>
import axios from 'axios';
export default {
  name: "Login",
  data() {
    return {
      login: {
        email: null,
        password: null
      },
    };
  },
  created(){
  },
  async mounted() {
    if(localStorage.getItem("login")){
      
      this.$router.push({name:"Home"});
    } else {
      //alert("Not Logged In");
    }

  },
  methods: {
    loginData(e) {
      axios.post(axios.defaults.baseURL +"login",this.login).then((result)=>{
        console.log(result.data);
        const obj = result.data;
        //console.log(obj);
        if(obj.success==true){
          alert(obj.message);
          localStorage.setItem("login", JSON.stringify(obj.userdetail));
          
          this.$router.push('home')
        } else {
          //alert("Some error occured");
        }
        //console.log(result);
      })
      e.preventDefault();
    },
  },
};
</script>