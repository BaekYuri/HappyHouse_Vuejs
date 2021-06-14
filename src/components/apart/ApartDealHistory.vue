<template>
     <div> 
         <div v-if="aptHistory.length>0">
         <h4>{{clickedItem.dong}} {{clickedItem.aptName}}의 거래내역</h4>
         <div class="row">
             <div class="col-sm-6" v-for="(apt, idx) in aptHistory" :key="idx">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{{apt.dealYear}}년 {{apt.dealMonth}}월 {{apt.dealDay}}일</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{{apt.dealAmount | amountFilter}}원</h6>
                        <p class="card-text">{{apt.floor}}층 / {{apt.area}} m2</p>
                    </div>
                </div>
            </div>
         </div>
        
         </div>
         <span v-else>좌측의 건물을 클릭해주세요.</span>
     </div>
</template>
<style scoped>
    .card{
        width: 90%;
        margin: 5%;
        border : none;
        border-radius: 20px;
        background: linear-gradient(145deg, #f0f0f0, #cacaca);
        box-shadow:  5px 5px 10px #bebebe,
                    -5px -5px 10px #ffffff;
    }
</style>
<script>
import {mapGetters} from "vuex";
export default {
    props:["clickedItem"],
    computed:{
        ...mapGetters(["aptHistory"]),
    },
    watch:{
        async clickedItem(){
            await this.$store.dispatch("getAptHistory",{ city: '선택', dong: this.clickedItem.dong, aptname: this.clickedItem.aptName});
        }
    },
    methods: {
    },
    filters:{
        amountFilter(val){
            val = val.replace(/,/g, '');
            val = parseInt(val);
            val*=10000;
            return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>