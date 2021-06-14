<template>
    <div class="home">
    <!-- Page Header-->
        <header class="masthead" v-bind:style="{backgroundImage: 'url(' + imageurl + ')'}">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>Happy House</h1>
                            <span class="subheading">구·동 검색</span>
                            <div class="search-form">
                            <select class="form-select" v-model="selected.gu" @change="getDongList()">
                                    <option value="선택" selected>선택</option>
                                    <option v-for="(gu, idx) in gugunList" :key="idx" :value="gu">{{gu}}</option>
                                </select>
                                <select class="form-select" v-model="selected.dong">
                                    <option value="선택" selected>선택</option>
                                    <option v-for="(dong, idx) in dongList" :key="idx" :value="dong">{{dong}}</option>
                             </select>
                            <input type="text" class="form-control" v-model="selected.aptName" placeholder="아파트 이름" :readonly="isApart">
                            <button class="btn btn-light" @click="search">검색</button>
                        </div>
                        
                        </div>
                        
                    </div>
                    <ul class="nav nav-tabs">
                            <router-link tag="li" class="nav-item"  to="/apart"><span class="nav-link">아파트</span>
                                <!--<router-link class="nav-link"  to="/apart">아파트</router-link>-->
                            </router-link>
                            <router-link tag="li" class="nav-item" to="/bike">
                                <span class="nav-link" >자전거</span>
                            </router-link>
                            <router-link tag="li" class="nav-item" to="/market">
                                <span class="nav-link" >주변 상권</span>
                            </router-link>
                        </ul>
                </div>
            </div>
        </header>
        <router-view ref="oneoffunction"></router-view>
    </div>
</template>
<style scoped>
.nav{
    z-index:1;
}
.nav-item{
    display: inline-flex;
    width:33%;
}
.nav-link{
    width:100%;
}
.site-heading{
    padding-bottom: 0px;
}
.nav-tabs{
    padding-top:100px;
}
.nav span {
  color: black;
}
.nav li{
    width:30%;
    margin-left: calc(10%/6);
    margin-right:calc(10%/6);
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow:  4px 4px 8px #bebebe,
                -4px -4px 8px #ffffff;
}
.nav li.router-link-exact-active {
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow: inset 4px 4px 8px #bebebe,
                inset -4px -4px 8px #ffffff;
     
}
</style>
<script>
import {mapGetters} from "vuex";
export default {
    data() {
        return {
            zoom:15,
            selected:{
                gu:"선택",
                dong:"선택",
                aptName:"",
            },
            imageurl:require('@/assets/apart.jpg'),
            isApart:false,
        }
    },
    computed:{
        ...mapGetters(["gugunList","dongList","aptList", "nowPlace","center", "gugun","dong","aptName","clickedItem"]),
    },
    watch:{
        '$route'(){
            this.findImg();
        }
    },
    created() {
        this.selected.gu = this.gugun;
        this.selected.dong = this.dong;
        this.selected.aptName = this.aptName;
        this.$store.dispatch("getGugunList");
        this.findImg();
    },
    methods: {
        getDongList(){
            this.selected.dong = "선택"
            this.$store.commit("setGugun", this.selected.gu);
            this.$store.commit("setDong", this.selected.dong);
            this.$store.dispatch("getDongList");
            
        },
        async search(){
            this.$store.commit("setDong", this.selected.dong);
            this.$store.commit("setAptName", this.selected.aptName);
            
            this.$refs.oneoffunction.search();
        },
        findImg(){
            let nowRouter = this.$route.name;
            if(nowRouter=="ApartSearch"){
                this.imageurl = require('@/assets/apart.jpg');
                this.isApart= false;
            }else if(nowRouter=="BikeSearch"){
                this.imageurl = require('@/assets/img/bicycle2.jpg');
                this.isApart= true;
            }else{
                this.imageurl = require('@/assets/img/street3.jpg');
                this.isApart= true;
            }
        }
    },
}
</script>