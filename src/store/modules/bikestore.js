import axios from "axios";
export default {
    state: {
        bikeList: [],
        parkList:[],
    },
    getters: {
        bikeList(state) {
            return state.bikeList;
        },
        parkList(state) {
            return state.parkList;
        }
    },
    mutations: {
        setBikeList(state, bikeList) {
            state.bikeList = bikeList;
        },
        concatBikeList(state, bikeList) {
            state.bikeList = state.bikeList.concat(bikeList);
        },
        setParkList(state, parkList) {
            state.parkList = parkList;
        }
    },
    actions: {
        getBikeList(store) {
            axios({
                method: "get",
                url: "http://openapi.seoul.go.kr:8088/714e744d61636873343478436a6245/json/bikeList/1/1000",
            }).then((res) => {
                store.commit("setBikeList", res.data.rentBikeStatus.row);
            }).catch();
            axios({
                method: "get",
                url: "http://openapi.seoul.go.kr:8088/714e744d61636873343478436a6245/json/bikeList/1001/2000",
            }).then((res) => {
                store.commit("concatBikeList", res.data.rentBikeStatus.row);
            }).catch();
        },
        getParkList(store, payload) {
            return new Promise(function (resolve, reject) {
                axios({
                    method: "get",
                    url: "http://localhost:8096/happyhouse/like/park/" + payload,
                }).then((res) => {
                    store.commit("setParkList", res.data);
                    resolve();
                }).catch(() => {
                    reject();
                });
            })
        }
    }
}