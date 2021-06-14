<template>
  <div id="app">
    <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <li class="nav-item"><router-link to="/" class="menu"><img src="./assets/img/logo_house3.png" height="100px"></router-link></li>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto" v-if="isLogin">
                            <li class="nav-item"><a class="menu" id="welcommsg" style="color:#006699;">WELCOME {{userinfo.name}}! </a></li>
                            <li class="nav-item"><router-link to="/" class="menu" >HOME</router-link></li>
                            <li class="nav-item"><router-link to="/list" class="menu">BOARD</router-link> </li>
                            <li class="nav-item"><a class="menu" @click.prevent="onClickLogout">LOGOUT</a></li>
                            <li class="nav-item"><router-link to="/account" class="menu">MY INFO</router-link></li>
                    </ul>
                    <ul class="navbar-nav ml-auto" v-else>
                        <li class="nav-item"><router-link to="/" class="menu" >HOME</router-link></li>
                        <li class="nav-item"><router-link to="/list" class="menu">BOARD</router-link> </li>
                        <li class="nav-item"><router-link to="/login" class="menu">LOGIN</router-link></li>
                        <li class="nav-item"><router-link to="/join" class="menu">SIGN IN</router-link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    <router-view />
    <!-- Footer-->
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <ul class="list-inline text-center">
                            <li class="list-inline-item">
                                <a href="#!">
                                    <span class="fa-stack fa-lg">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#!">
                                    <span class="fa-stack fa-lg">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#!">
                                    <span class="fa-stack fa-lg">
                                        <i class="fas fa-circle fa-stack-2x"></i>
                                        <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                        <p class="copyright text-muted">Copyright &copy; Your Website 2021</p>
                    </div>
                </div>
            </div>
        </footer>
  </div>
</template>
    
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f0efeb;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

li{
    list-style: none;
}
.menu{
    font-size: 36px;
    color: black;
    text-decoration: none;

}
#app{
    background-color: #e0e0e0;
}
</style>
<script>
import {mapActions,mapGetters} from "vuex";

export default ({
    computed:{
                ...mapGetters (["userinfo","isLogin"]),
                
    },
    created(){
        this.$store.dispatch("getUserInfo");
    },
    watch: {
        "userinfo.email"(){
            this.getUser();
        }
    },
    methods: {
        ...mapActions (["getUserInfo", "logout"]),


        onClickLogout(){
           // userinfo = null;
           alert("로그아웃 되었습니다.");
            this.$store.dispatch("logout");
        },
        getUser(){
            console.log(this.isLogin,  this.userinfo);
            if(this.isLogin){
                this.$store.dispatch("getUserInfo");
            }
        }
    },
})
</script>