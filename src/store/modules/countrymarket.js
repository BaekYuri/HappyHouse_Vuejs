import axios from "axios";
export default {
    state: {
        //
        marketInfo: {
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
        allAvgInfo: {
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
        guAvgInfo: {
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
        maxInfo:{
            "registnum": 100,
            "registstore": 100,
            "registarea": 100,
            "recognizednum": 100,
            "recognizedstore": 100,
            "recognizedarea": 100,
            "shoppingstreetnum": 100,
            "shoppingstreetstore": 100,
            "shoppingstreetarea":100,
        },
        attr:["registnum",
        "registstore",
        "registarea",
        "recognizednum",
        "recognizedstore",
        "recognizedarea",
        "shoppingstreetnum",
        "shoppingstreetstore",
        "shoppingstreetarea"],
    },
    getters: {
        marketInfo(state) {
            return state.marketInfo;
        },
        allAvgInfo(state) {
            return state.allAvgInfo;
        },
        guAvgInfo(state) {
            return state.guAvgInfo;
        },
        maxInfo(state) {
            return state.maxInfo;
        },
        attr(state) {
            return state.attr;
        }
    },
    mutations: {
        setMarketInfo(state, marketInfo) {
            state.marketInfo = marketInfo;
            for (let key of state.attr) {
                state.marketInfo[key] = marketInfo[key]?parseFloat(marketInfo[key]):0;
            }
            
        },
        setAllAvgInfo(state,allAvgInfo) {
            state.allAvgInfo = allAvgInfo;
            for (let key of state.attr) {
                state.allAvgInfo[key] = allAvgInfo[key]?parseFloat(allAvgInfo[key]):0;
            }
        },
        setGuAvgInfo(state,guAvgInfo) {
            state.guAvgInfo = guAvgInfo;
            for (let key of state.attr) {
                state.guAvgInfo[key] = guAvgInfo[key]?parseFloat(guAvgInfo[key]):0;
            }
        },
        setMaxInfo(state,maxInfo) {
            state.maxInfo = maxInfo;
            for (let key of state.attr) {
                state.maxInfo[key] = maxInfo[key]?parseFloat(maxInfo[key]):0;
            }
        }
        
    },
    actions: {
        getMarketInfo(store, payload) {
            return new Promise(function (resolve) {
                axios({
                    method: "post",
                    url: "http://localhost:8096/happyhouse/Market/marketinfo",
                    data: payload,
                }).then((res) => {
                    store.commit("setMarketInfo", res.data.data);
                    resolve();
                }).catch();
            });
        },
        getAllAvgInfo(store) {
            return new Promise(function (resolve) {
                axios({
                    method: "get",
                    url: "http://localhost:8096/happyhouse/Market/allavginfo",
                }).then((res) => {
                    store.commit("setAllAvgInfo", res.data.data);
                    resolve();
                }).catch();
            });
        },
        getGuAvgInfo(store,payload) {
            return new Promise(function (resolve) {
                axios({
                    method: "get",
                    url: "http://localhost:8096/happyhouse/Market/guavginfo/" + payload,
                }).then((res) => {
                    console.log(res.data.data);
                    store.commit("setGuAvgInfo", res.data.data);
                    resolve();
                }).catch();
            });
        },
        getMaxInfo(store) {
            return new Promise(function (resolve) {
                axios({
                    method: "get",
                    url: "http://localhost:8096/happyhouse/Market/maxinfo",
                }).then((res) => {
                    store.commit("setMaxInfo", res.data.data);
                    console.log(res.data);
                    resolve();
                }).catch();
            });
        },
        
    }
}