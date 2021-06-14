<template>
<div class="signup">
            <!-- Page Header-->
        <header class="masthead" style="background-image: url('@/assets/img/home-bg.jpg')">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>Happy House</h1>
                            <span class="subheading">회원 가입</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- content-->
	<div id="account-page" class="container mt-5"> 
        <div class="container" id ="insidecon">
			<div class="signup-form" style="margin: 0px auto; width:300px;"><!--sign up form-->
				<h2>New User Signup!</h2>  <br>
				<form id="memberform" >

					<input id="email" name="email" type="email" placeholder="Email Address" class="form-control" v-model="userinfo.email"/><br>
					<input id="pass" name="pass" type="password" placeholder="Password" class="form-control" v-model="userinfo.pass"/><br>
					<input id="pwdcheck" name="pwdcheck" type="password" placeholder="Password Confirm" class="form-control" /><br>
					<input type="text" id="name" name="name" placeholder="Name" class="form-control" v-model="userinfo.name"/><br>

					<input type="text" id="addr" name="addr" placeholder="Address" class="form-control" v-model="userinfo.addr"/><br>

				<div class="form-group" align="left">
					<label for="tel">전화번호</label>
					<div id="tel" class="custom-control-inline">
						<input type="text" class="form-control" id="tel2" name="phone" placeholder="010-1111-2222" v-model="userinfo.phone"> 
						</div>
						</div>
					<button type="button" class="buttncust" id="registerBtn" @click="join">회원가입</button>
					<button type="reset" class="buttncust" @click="reset">초기화</button>
				</form>
				<div id="signup-failmsg" style="margin-top:10px;"></div>
				<div id="signup-pw-failmsg" style="margin-top:10px;"></div>
			</div><!--/sign up form-->
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

.buttncust:hover{
    background: #d4d4d4;
}

.buttncust:active{
    background: #ededed;
}
#insidecon{
    padding: 10%;
  border-radius: 10%;
    background: #e0e0e0;
    box-shadow:  4px 4px 8px #bebebe,
                -4px -4px 8px #ffffff;
}
</style>
<script>

import {mapActions} from "vuex";
export default ({
     data() {
        return {
            userinfo:{
                email: "",
                pass: "",
                addr:"",
                name: "",
                phone:"",
            }
        }
    },

    methods: {
        ...mapActions (["registUser"]),
        async join(){
           // alert("일단1 ");
            if(this.identify()){
            await this.$store.dispatch("registUser", this.userinfo).then(()=>{
                this.move("login");
                })
            }

        },
        move(url){
            this.$router.push({
                path: "/" + url ,
            })
        },
        reset(){
            
        },
        identify(){
        let keys = ["email", "pass", "addr", "name", "phone"];
        for(let key of keys){
            if(!this.userinfo[key]){
                alert(key+"를 입력해주세요.");
                return false;
            }

        }
        return true;
    },
    },

})
</script>