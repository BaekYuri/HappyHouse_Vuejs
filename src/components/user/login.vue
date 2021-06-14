<template>
    <div class="login">
          <!-- Page Header-->
        <header class="masthead">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>Happy House</h1>
                            <span class="subheading">로그인</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!--content-->
    <div class="container">
				  <div class="form-group ">
				    <label for="id">ID</label>
				  <input type="text" class="form-control"
						id="userid" name="userid" placeholder="example@gmail.com" v-model="userinfo.email">
				  </div>
				  
				  <div class="form-group ">
				    <label for="pw">비밀번호</label>
				 <input type="password"
						class="form-control" id="userpwd" name="userpwd" placeholder="password" v-model="userinfo.pass">

				  	<!--  <a id="findPW" >비밀번호 찾기</a>-->
  				<button type="button" class="buttncust" @click="login">로그인</button>
				
				  </div>
				  <div id="failmsg"></div>
		      </div>
    </div>
</template>
<style scoped>
    .masthead{
        background-image: url("../../assets/img/hello.jpg");
    }

    .buttncust {
        margin : 10px;
        
  border: none;
  color: gray;

  padding: 20px;
    border-radius: 10%;
    background: #e0e0e0;
    box-shadow:  4px 4px 8px #bebebe,
                -4px -4px 8px #ffffff;
  text-decoration: none;
}

.buttncust:hover{
    background: #d4d4d4;
}

.buttncust:active{
            border-radius: 50px;
    background: #e0e0e0;
    box-shadow: inset 4px 4px 8px #bebebe,
                inset -4px -4px 8px #ffffff;
}
#insidecon{
    padding: 10%;
     border-radius: 50px;
    background: #e0e0e0;
    box-shadow: inset 4px 4px 8px #bebebe,
                inset -4px -4px 8px #ffffff;
}
button.buttncust >a{
    text-decoration: none;
    color: gray;
}
</style>
<script>

import {mapActions} from "vuex";

export default ({
    data() {
        return {
            
            userinfo:{
                email: "",
                pass: ""

            }
        }
    },
    methods: {
        ...mapActions (["login"]),
        async login(){
            if(this.identify()){
             await this.$store.dispatch("login", this.userinfo);
             await this.$store.dispatch("getUserInfo").
                then(()=>{
                    this.move("");
                })
            }
           
        },

        move(url){
            this.$router.push({
                path: "/" + url,
            })
        },

        identify(){
            let keys = ["email","pass"];
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