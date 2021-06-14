import axios from "axios";

export default {
    name: "apartstore",
    state: {
        gugunList: [],
        dongList:[],
        aptList: [],
        nowPlace: {
          city:"",
          code:0,
          dongCode:0,
          gugun:"",
          dong:"",
          lat:0,
          lng:0
        },
      aptHistory: [],
      center:{lat:37.5743822, lng:126.9688505},
      gugun:"선택",
      dong:"선택",
      aptName:"",
      clickedItem : {},
      },
      getters: {
        gugunList(state) {
          return state.gugunList;
        },
        dongList(state) {
          return state.dongList;
        },
        aptList(state) {
          return state.aptList;
        },
        nowPlace(state) {
          return state.nowPlace;
        },
        aptHistory(state) {
          return state.aptHistory;
        },
        center(state) {
          return state.center;
        },
        gugun(state) {
          return state.gugun;
        },
        dong(state) {
          return state.dong;
        },
        aptName(state) {
          return state.aptName;
        },
        clickedItem(state) {
          return state.clickedItem;
        }
      },
      mutations: {
        setGugunList(state, gugunList) {
          state.gugunList = gugunList;
        },
        setDongList(state, dongList) {
          state.dongList = dongList;
        },
        setAptList(state, aptList) {
          state.aptList = aptList;
        },
        setNowPlace(state, nowPlace) {
          state.nowPlace = nowPlace;
        },
        setAptHistory(state, aptHistory) {
          state.aptHistory = aptHistory;
        },
        setCenter(state, center) {
          state.center = center;
        },
        setGugun(state,gugun) {
          state.gugun = gugun;
        },
        setDong(state, dong) {
          state.dong = dong;
        },
        setAptName(state, aptName) {
          state.aptName = aptName;
        },
        setClickedItem(state, clickedItem) {
          state.clickedItem = clickedItem;
        }
      },
      actions: {
        getGugunList(store) {
          axios({
            method: "get",
            url:"http://localhost:8096/happyhouse/main/gugun",
          }).then((res) => {
            store.commit("setGugunList", res.data);
          }).catch((err) => {
            console.log(err);
          });
        },
        getDongList(store) {
          axios({
            method: "get",
            url:"http://localhost:8096/happyhouse/main/dong/"+store.state.gugun,
          }).then((res) => {
            store.commit("setDongList", res.data);
          }).catch((err) => {
            console.log(err);
          });
        },
        getAptList(store) {
          return new Promise(function (resolve, reject) {
            axios({
              method: "post",
              url: "http://localhost:8096/happyhouse/main/searchDistinct",
              data: { city: store.state.gugun, dong: store.state.dong, aptname:store.state.aptName}
            }).then((res) => {
              store.commit("setAptList", res.data);
              resolve();
            }).catch((err) => {
              console.log(err);
              reject();
            });
          })
        },
        getAptHistory(store, payload) {
          return new Promise(function (resolve, reject) {
            axios({
              method: "post",
              url: "http://localhost:8096/happyhouse/main/search",
              data: payload
            }).then((res) => {
              console.log(res.data);
              store.commit("setAptHistory", res.data);
              resolve();
            }).catch((err) => {
              console.log(err);
              reject();
            });
          })
        },
        getNowPlace(store) {
          return new Promise(function (resolve, reject) {
            axios({
              method: "get",
              url: "http://localhost:8096/happyhouse/main/addr/"+store.state.gugun+"/"+store.state.dong,
            }).then((res) => {
              store.commit("setNowPlace", res.data);
              resolve();
            }).catch((err) => {
              console.log(err);
              reject();
            });
          })
        }
      }
}