<template>
    <div>
        <!-- Main Content-->
        <div class="container">
            <div class="row bike-map">
            <GmapMap
                :center="center"
                :zoom="zoom"
                map-type-id="roadmap"
                style="height: 700px"
                ref="mapRef">
                <GmapMarker
                :key="index"
                v-for="(m, index) in bikeList"
                :position="{lat: parseFloat(m.stationLatitude), lng: parseFloat(m.stationLongitude)}"
                :clickable="true"
                :draggable="true"
                @click="findBike(index)"/>
            </GmapMap> 
            </div>
            <hr>
            <div>
            <span>지도에 표시된 대여소를 클릭하세요.</span>
            <div v-if="nowBike.rackTotCnt" >
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{nowBike.stationName}}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">거치대 개수 : {{nowBike.rackTotCnt}}</h6>
                            <hr>
                            <p class="card-text">자전거주차총건수 : {{nowBike.parkingBikeTotCnt}}</p>
                            <p class="card-text">거치율 : {{nowBike.shared}}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
                <div class="card col-sm-4 park-item" v-for="(park,idx) of parkList" :key="idx">
                    <img class="card-img-top" :src="park.img" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">{{park.parkName}}</h5>
                        <p class="card-text">{{park.address}}</p>
                        <p class="card-text">{{park.management}} / {{park.tel}}</p>
                        <a :href="park.siteLink" class="btn btn-primary">홈페이지</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <hr />
        
    </div>
</template>
<style scoped>

    .card{
        margin:30px;
        border-radius: 50px;
        background: #e0e0e0;
        border:none;
        box-shadow:  20px 20px 60px #bebebe,
                    -20px -20px 60px #ffffff;      
    }
    .card-img-top{
        
        border-radius: inherit;
        height: 300px;
    }

    .park-item{
        width: 30%;
        margin: calc(10%/6);
    }

</style>
<script>
import {mapGetters} from "vuex";
export default {
    data() {
        return {
            zoom:18,
            nowBike:{},
        }
    },
    computed:{
        ...mapGetters(["gugunList","dongList","nowPlace","bikeList","center","gugun","dong","parkList"]),
    },
    async created() {
        if(this.bikeList.length<=0){
            this.$store.dispatch("getBikeList");
        }
        if(this.gugun!="선택" || !this.gugun){
            await this.$store.dispatch("getNowPlace");
            this.pan(this.nowPlace.lat,this.nowPlace.lng);
        }
    },
    methods: {
        async search(){
            await this.$store.dispatch("getNowPlace");
            await this.$store.dispatch("getParkList",this.gugun);
            this.pan(this.nowPlace.lat, this.nowPlace.lng);
        },
        findBike(index){
            this.nowBike = this.bikeList[index];
            this.pan(parseFloat(this.bikeList[index].stationLatitude), parseFloat(this.bikeList[index].stationLongitude));
        },
        pan(lat, lng){
            this.$store.commit("setCenter",{lat, lng,});
            this.$refs.mapRef.$mapPromise.then((map) => {
                map.panTo(this.center);
            })
        }
    },

}
</script>