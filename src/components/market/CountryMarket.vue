<template>
    <div>
        <section>
            <div class="container">
                <div class="row">
                    <div class="card col-sm-12 inline">
                        <div class="card-body">
                        <h5 class="card-title">검색 결과</h5>
                        </div>
                    </div>
                </div>
            <div class="row" v-if="searched">
                <div class="card col-sm-4 searchresult" >
                    <div class="card-header">
                        상점가
                    </div>
                    <div class="card-body">
                        <h6 class="card-subtitle">상점가 개수</h6>
                        <hr>
                        <div class="resultitem">
                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">동</h3>
                            <div class="progress-value" style="text-align:right">{{marketInfo.shoppingstreetnum}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+market.shoppingstreetnum+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">구 평균</h3>
                            <div class="progress-value" style="text-align:right">{{guAvgInfo.shoppingstreetnum | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+guAvg.shoppingstreetnum+')'}"></div>
                            </div>
                        
                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">전체 평균</h3>
                            <div class="progress-value" style="text-align:right">{{allAvgInfo.shoppingstreetnum | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+allAvg.shoppingstreetnum+')'}"></div>
                            </div>
                        </div>
                        <hr>
                        <h6 class="card-subtitle">상점가 내 상가 수</h6>
                        <hr>
                        <div class="resultitem">
                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">동</h3>
                            <div class="progress-value" style="text-align:right">{{marketInfo.shoppingstreetstore}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+market.shoppingstreetstore+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">구 평균</h3>
                            <div class="progress-value" style="text-align:right">{{guAvgInfo.shoppingstreetstore | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+guAvg.shoppingstreetstore+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">전체 평균</h3>
                            <div class="progress-value" style="text-align:right">{{allAvgInfo.shoppingstreetstore | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+allAvg.shoppingstreetstore+')'}"></div>
                            </div>
                        </div>
                        <hr>
                        <h6 class="card-subtitle">상점가 면적</h6>
                        <hr>
                        <div class="resultitem">
                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">동</h3>
                            <div class="progress-value" style="text-align:right">{{marketInfo.shoppingstreetarea}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+market.shoppingstreetarea+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">구 평균</h3>
                            <div class="progress-value" style="text-align:right">{{guAvgInfo.shoppingstreetarea | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+guAvg.shoppingstreetarea+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">전체 평균</h3>
                            <div class="progress-value" style="text-align:right">{{allAvgInfo.shoppingstreetarea | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+allAvg.shoppingstreetarea+')'}"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card col-sm-4 searchresult" >
                    <div class="card-header">
                        등록시장
                    </div>
                    <div class="card-body">
                        <h6 class="card-subtitle">등록시장 개수</h6>
                        <hr>
                        <div class="resultitem">
                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">동</h3>
                            <div class="progress-value" style="text-align:right">{{marketInfo.registnum}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+market.registnum+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">구 평균</h3>
                            <div class="progress-value" style="text-align:right">{{guAvgInfo.registnum | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+guAvg.registnum+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">전체 평균</h3>
                            <div class="progress-value" style="text-align:right">{{allAvgInfo.registnum | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+allAvg.registnum+')'}"></div>
                            </div>
                        </div>
                        <hr>
                        <h6 class="card-subtitle">등록시장 내 상가 수</h6>
                        <hr>
                        <div class="resultitem">
                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">동</h3>
                            <div class="progress-value" style="text-align:right">{{marketInfo.registstore}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+market.registstore+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">구 평균</h3>
                            <div class="progress-value" style="text-align:right">{{guAvgInfo.registstore | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+guAvg.registstore+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">전체 평균</h3>
                            <div class="progress-value" style="text-align:right">{{allAvgInfo.registstore | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+allAvg.registstore+')'}"></div>
                            </div>
                        </div>
                        <hr>
                        <h6 class="card-subtitle">등록시장 면적</h6>
                        <hr>
                        <div class="resultitem">
                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">동</h3>
                            <div class="progress-value" style="text-align:right">{{marketInfo.registarea}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+market.registarea+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">구 평균</h3>
                            <div class="progress-value" style="text-align:right">{{guAvgInfo.registarea | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+guAvg.registarea+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">전체 평균</h3>
                            <div class="progress-value" style="text-align:right">{{allAvgInfo.registarea | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+allAvg.registarea+')'}"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card col-sm-4 searchresult" >
                    <div class="card-header">
                        인정시장
                    </div>
                    <div class="card-body">
                        <h6 class="card-subtitle">인정시장 개수</h6>
                        <hr>
                        <div class="resultitem">
                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">동</h3>
                            <div class="progress-value" style="text-align:right">{{marketInfo.recognizednum}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+market.recognizednum+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">구 평균</h3>
                            <div class="progress-value" style="text-align:right">{{guAvgInfo.recognizednum | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+guAvg.recognizednum+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">전체 평균</h3>
                            <div class="progress-value" style="text-align:right">{{allAvgInfo.recognizednum | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+allAvg.recognizednum+')'}"></div>
                            </div>
                        </div>
                        <hr>
                        <h6 class="card-subtitle">인정시장 내 상가 수</h6>
                        <hr>
                        <div class="resultitem">
                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">동</h3>
                            <div class="progress-value" style="text-align:right">{{marketInfo.recognizedstore}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+market.recognizedstore+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">구 평균</h3>
                            <div class="progress-value" style="text-align:right">{{guAvgInfo.recognizedstore | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+guAvg.recognizedstore+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">전체 평균</h3>
                            <div class="progress-value" style="text-align:right">{{allAvgInfo.recognizedstore | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+allAvg.recognizedstore+')'}"></div>
                            </div>
                        </div>
                        <hr>
                        <h6 class="card-subtitle">인정시장 면적</h6>
                        <hr>
                        <div class="resultitem">
                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">동</h3>
                            <div class="progress-value" style="text-align:right">{{marketInfo.recognizedarea}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+market.recognizedarea+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">구 평균</h3>
                            <div class="progress-value" style="text-align:right">{{guAvgInfo.recognizedarea | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+guAvg.recognizedarea+')'}"></div>
                            </div>

                            <div class="attr">
                            <h3 class="progress-title" style="text-align:left">전체 평균</h3>
                            <div class="progress-value" style="text-align:right">{{allAvgInfo.recognizedarea | numfilter}}</div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" :style="{width:'calc(100%*'+allAvg.recognizedarea+')'}"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="card col-sm-12 score-div inline">
                    <div class="card-body" v-if="searched">
                            
                            <h5 class="card-title">점수는?</h5>
                            <div class="wrap-star">
                            <h2>{{starRate | numfilter}}점</h2>
                            <div class='star-rating'>
                                <span :style ="{width: 'calc(100%*'+starRate/5+')'}"></span>
                            </div>
                            <div class="mt-3">
                                <p class="card-text">{{introducemsg}}</p>
                                <p class="card-text">{{recommendmsg}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body" v-else>
                        <h5 class="card-title">검색 버튼을 눌러주세요.</h5>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
</template>
<style scoped>

    .masthead{
        background-image: url("../../assets/countrymarket.jpg");
        margin: 10% 10%;
    }
    .card{
        display: inline-block;
        padding: 0px;
    }
    .searchresult{
        width : 30%;
        margin : calc(10%/6);
        padding: 10px;
        border:none;
        border-radius: 50px;
        background: #e0e0e0;
        box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
    }
.progress-title{
    font-size: 16px;
    font-weight: 700;
    color: #5a5a5a;
    margin: 0 0 10px;
}
.demo
{
	padding: 100px 0;
}
.heading-title
{
	margin-bottom: 100px;
}
.progress{
    height: 20px;
    line-height: 15px;
    background: #f0f0f0;
    border-radius: 0;
    margin-bottom: 50px;
    padding: 4px;
    box-shadow: none;
    overflow: visible;
}

.progress:last-child{
    margin-bottom: 0;
}

.progress .progress-bar{
    position: relative;
    animation: animate-positive 2s;
}

.progress .progress-value{
    font-size: 13px;
    color: #fff;
    border-radius: 4px;
    padding: 3px 7px;
    background: #29102b;
    position: absolute;
    top: -50px;
    right: -35px;
}

.progress .progress-value:after{
    content: "";
    border: 5px solid transparent;
    border-top: 5px solid #29102b;
    border-left: 5px solid #29102b;
    position: absolute;
    bottom: -6px;
    left: 0;
}

@-webkit-keyframes animate-positive{
    0% { width: 0%; }
}

@keyframes animate-positive{
    0% { width: 0%; }
}
/* CSS Document */

.attr *{
    display:inline-block;
    width:50%;
}


h2 {font-size:15px;}
.star-rating {
    width:304px;
    margin: 0 auto;
}
.star-rating,.star-rating span {display:block; height:55px; overflow:hidden; background:url(../../assets/star.png)no-repeat; }
.star-rating span{background-position:left bottom; line-height:0; vertical-align:top; }

.inline{
    margin-top: 5%;
    margin-bottom: 5%;
    width:100%;
    border:none;
    border-radius: 50px;
    background: #e0e0e0;
    box-shadow: inset 20px 20px 60px #bebebe,
            inset -20px -20px 60px #ffffff;
}

.card-header{
    font-weight: bold;
    background: #e0e0e0;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
}

.card-header:first-child{
    background: #e0e0e0;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;
}
.resultitem{
    padding:20px;
    border-radius: 10px;
    background: #e0e0e0;
    box-shadow:  9px 9px 18px #d9d9d9,
                -9px -9px 18px #e7e7e7;
}

.resultitem > .progress:nth-child(3n) > .progress-bar{
    background-color: darkblue;
    color: darkblue;
}

.resultitem > .progress:nth-child(3n+1) > .progress-bar{
    background-color: deepskyblue;
    color: deepskyblue;
}
</style>
<script>
import {mapGetters} from "vuex";
export default {
 data() {
        return {
            market: {
                "registnum": 0,
                "registstore": 0,
                "registarea": 0,
                "recognizednum": 0,
                "recognizedstore": 0,
                "recognizedarea": 0,
                "shoppingstreetnum": 0,
                "shoppingstreetstore": 0,
                "shoppingstreetarea":0,

            },
            allAvg: {
                "registnum": 0,
                "registstore": 0,
                "registarea": 0,
                "recognizednum": 0,
                "recognizedstore": 0,
                "recognizedarea": 0,
                "shoppingstreetnum": 0,
                "shoppingstreetstore": 0,
                "shoppingstreetarea":0,

            },
            guAvg: {
                "registnum": 0,
                "registstore": 0,
                "registarea": 0,
                "recognizednum": 0,
                "recognizedstore": 0,
                "recognizedarea": 0,
                "shoppingstreetnum": 0,
                "shoppingstreetstore": 0,
                "shoppingstreetarea":0,

            },
            score: {
                "registnum": 0,
                "registstore": 0,
                "registarea": 0,
                "recognizednum": 0,
                "recognizedstore": 0,
                "recognizedarea": 0,
                "shoppingstreetnum": 0,
                "shoppingstreetstore": 0,
                "shoppingstreetarea":0,
            },
            regist:0,
            recognized:0,
            shoppingstreet:0,
            starRate:0,
            searched:false,
            introducemsg:"",
            recommendmsg:"",
        }
    },
    computed:{
  
        ...mapGetters(["gugun","dong","marketInfo","allAvgInfo","guAvgInfo","maxInfo","attr"]),
        //"registnum","registstore","registarea","recognizednum","recognizedstore","recognizedarea","shoppingstreetnum","shoppingstreetstore","shoppingstreetarea",
        
    },
    async created() {
        await this.$store.dispatch("getMaxInfo");
        await this.$store.dispatch("getAllAvgInfo");
        this.changeAllAvg();
        console.log(this.maxInfo);
    },
    methods: {
        async search(){
            if(this.gugun=="선택" || this.dong=="선택"){
                alert("지역을 선택해주세요.");
                return;
            }
            this.searched= true;
            let data = {gugun: this.gugun, dong: this.dong};
            await this.$store.dispatch("getMarketInfo", data).then(()=>{
                this.changeMarket();
                this.getScore();
            });
            await this.$store.dispatch("getGuAvgInfo",this.gugun).then(()=>{
                this.changeGu();
            });
            this.setMsg();
            console.log(this.score);
            
        },
        changeMarket(){
            for(let key of this.attr){
                this.market[key]= this.marketInfo[key]/this.maxInfo[key];
            }
            
        },
        changeGu(){
            for(let key of this.attr){
                this.guAvg[key]= this.guAvgInfo[key]/this.maxInfo[key];
            }
            
        },
        changeAllAvg(){
            for(let key of this.attr){
                this.allAvg[key]= this.allAvgInfo[key]/this.maxInfo[key];
            }
            
        },
        getScore(){
            for(let key of this.attr){
                this.score[key]= this.market[key]/this.allAvg[key];
            }
            this.regist = (this.score.registnum+this.score.registstore+this.score.registarea)/3;
            this.recognized = (this.score.recognizednum+this.score.recognizedstore+this.score.recognizedarea)/3;
            this.shoppingstreet = (this.score.shoppingstreetnum+this.score.shoppingstreetstore+this.score.shoppingstreetarea)/3;
            this.starRate= (this.regist+this.recognized+this.shoppingstreet)*2.5/3;
            this.starRate= this.starRate>5?5:this.starRate;
        },
        setMsg(){
            let items=["상점가","등록시장","인정시장"];
            let keys=["shoppingstreet","regist","recognized"];
            this.introducemsg="";
            let low=[];
            let high=[];
            for(let i=0;i<3;i++){
                if(this[keys[i]]<2.5){
                    low.push(items[i]);
                }else{
                    high.push(items[i]);
                }
            }
            if(low.length>0){
                for(let i=0;i<low.length-1;i++){
                    this.introducemsg+=(low[i]+",");
                }
                this.introducemsg+=low[low.length-1];
                if(low[low.length-1]=="상점가"){
                    this.introducemsg+="가 ";
                }else{
                    this.introducemsg+="이 ";
                }
                
                this.introducemsg+="다소 적은 동네에요. "
            }
            if(high.length>0){
                for(let i=0;i<high.length-1;i++){
                    this.introducemsg+=(high[i]+",");
                }
                 this.introducemsg+=high[high.length-1];
                if(high[high.length-1]=="상점가"){
                    this.introducemsg+="가 ";
                }else{
                    this.introducemsg+="이 ";
                }
                this.introducemsg+="활성화 되어 있어요."
            }
            if(this.starRate<1.7){
                this.recommendmsg="번화가 규모가 작아 조용한 동네에요. 소음으로 고통받지 않을 수도 있어요.";
            }else if(this.starRate<3.3){
                this.recommendmsg="조용하지는 않지만, 어느정도 번화가가 있어 근처에서 가볍게 놀기 좋은 동네에요.";
            }else{
                this.recommendmsg="큰 번화가가 있어 여가 생활을 보다 더 신나게 즐길 수 있는 동네에요.";
            }
            
        }
    },
    filters:{
        numfilter: function(value){
            return value.toFixed(2);
        }
    }


}
</script>