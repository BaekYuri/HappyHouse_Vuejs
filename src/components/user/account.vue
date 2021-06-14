<template>
<div class="account">
                          <!-- Page Header-->
        <header class="masthead">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>Happy House</h1>
                            <span class="subheading">회원 정보 수정</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!--content-->
    	<div id="account-page" class="container mt-5"> 

   		<div style="margin-top:20px"> 			   			
			<h2 class="text-center text-warning"><strong>My Account!</strong></h2>
		</div>				    				    				
		<div class="contact-map" style="margin: 0px auto; width:500px;">
			<div class="row" style="margin-top:40px;">
				<div class="col-sm-2"></div>
				<div class="col-sm-4"><h4>E-MAIL</h4></div>
				<div class="col-sm-6"><h4>{{userinfo.email}}</h4></div>
			</div>
			<div class="row">
				<div class="col-sm-2"></div>
				<div class="col-sm-4"><h4>NAME</h4></div>
				<div class="col-sm-6"><h4>{{userinfo.name}}</h4></div>
			</div>
			<div class="row">
				<div class="col-sm-2"></div>
				<div class="col-sm-4"><h4>ADDRESS</h4></div>
				<div class="col-sm-6"><h4>{{userinfo.addr}}</h4></div>
			</div>
			<div class="row">
				<div class="col-sm-2"></div>
				<div class="col-sm-4"><h4>PHONE</h4></div>
				<div class="col-sm-6"><h4>{{userinfo.phone}}</h4></div>
			</div>
				
		  	<div class="pull-right">

				<button type="button" class="buttncust" @click="move('modifyuserInfo')">회원정보수정</button>
			</div> 	
		</div>
	</div>
</div>
</template>
<style scoped>
   .masthead{
        background-image: url("../../assets/img/info.jpg");
    }
.buttncust {
        margin: 10px;
  border: none;
  color: gray;

  padding: 20px;
  border-radius: 10%;
    background: #e0e0e0;
    box-shadow:  4px 4px 8px #bebebe,
                -4px -4px 8px #ffffff;
}
.buttncust.menu
.buttncust:hover{
    background: #d4d4d4;
}

.buttncust:active{
    background: #ededed;
}
#account-page.container.mt-5{
    padding: 40px;
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
    font-family: 'Open Sans';
}

h2.text-center.text-warning>strong{
    font-weight: 400;
}

</style>
<script>
import {mapGetters} from "vuex";

export default ({
computed:{
                ...mapGetters (["userinfo"]),
                
    },
    created(){
        console.log(this.token);
                this.$store.dispatch("getUserInfo");
    },
    methods: {
        move(url){
            this.$router.push({
                path: "/" + url ,
            })
        },

    },
	})
</script>