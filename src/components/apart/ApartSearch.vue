<template>
 <div>
        <!-- Main Content-->
        <div class="container">
            <div class="row apart-map">
            <GmapMap
                :center="center"
                :zoom="zoom"
                map-type-id="roadmap"
                style="height: 700px"
                ref="mapRef">
                <GmapMarker
                :key="index"
                v-for="(m, index) in aptList"
                :position="{lat: parseFloat(m.lat), lng: parseFloat(m.lng)}"
                :clickable="true"
                :draggable="true"
                :title="m.aptName"
                 @click="searchDealHistory(m)"/>
            </GmapMap> 
            </div>
             <hr />
            <div class="row">
            <div class="col-sm-3">
                <div class="card" v-for="(apt, idx) in aptList" :key="idx" v-on:click="searchDealHistory(apt)">
                <div class="card-body">
                    <h5 class="card-title">{{apt.aptName}}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{{apt.dong}}</h6>
                    <p class="card-text">{{apt.buildYear}}년도 건설</p>
                </div>
                </div>
                <div class="list-group-item" v-if="aptList.length<=0">검색된 내역이 없습니다.</div>
            </div>
            <div class="col-sm-9"><apart-deal-history :clickedItem = "clickedItem"/></div>
        </div>
        </div>
        <hr />
  </div>
</template>
<style scoped>
    .card{
        margin-bottom: 20px;
        border-radius: 20px;
        border:none;
        background: #e0e0e0;
        box-shadow:  5px 5px 10px #bebebe,
                    -5px -5px 10px #ffffff;
    }
    .list-group-item{
        margin-bottom: 20px;
        border-radius: 20px;
        background: #e0e0e0;
        box-shadow: inset 5px 5px 10px #bebebe,
                    inset -5px -5px 10px #ffffff;
    }

    .card:hover{
        border-radius: 20px;
        background: #e0e0e0;
        box-shadow: inset 5px 5px 10px #bebebe,
                    inset -5px -5px 10px #ffffff;
    }
</style>
<script>
import {mapGetters} from "vuex";
import ApartDealHistory from "./ApartDealHistory.vue";
export default {
    data() {
        return {
            zoom:18,
        }
    },
    computed:{
        ...mapGetters(["gugunList","dongList","aptList", "nowPlace","center", "gugun","dong","aptName","clickedItem"]),
    },
    async created() {
        if(this.gugun!="선택" || !this.gugun){
            await this.$store.dispatch("getNowPlace");
            this.pan(this.nowPlace.lat,this.nowPlace.lng);
        }
    },
    methods: {
        async search(){
            await this.$store.dispatch("getAptList");
            await this.$store.dispatch("getNowPlace");
           
            this.pan(this.nowPlace.lat,this.nowPlace.lng);
        },
        searchDealHistory(apt){
            this.pan(parseFloat(apt.lat),parseFloat(apt.lng));
            this.$store.commit("setClickedItem", apt);
        },
        pan(lat, lng){
            this.$store.commit("setCenter",{lat, lng,});
            this.$refs.mapRef.$mapPromise.then((map) => {
                map.panTo(this.center);
            })
        }
    },
    components:{
        ApartDealHistory,
    }
}
</script>