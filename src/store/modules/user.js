import axios from "axios";
export default {
    state: {
        userinfo: {
            email: "",
            addr: "",
            name: "",
            phone: "",
        },
        isLogin:false,
    },
    getters: {
        userinfo(state) {
            return state.userinfo;
        },
        isLogin(state) {
            return state.isLogin;
        }
    
    },
    mutations: {
        setUserInfo(state, payload) {
            state.isLogin = true;
            state.userinfo = payload;
        },
        setLogout(state) {
            state.isLogin = false;
            state.userinfo = {
                email: "",
                addr: "",
                name: "",
                phone: "",
            };
            localStorage.removeItem("access-token");
        },
        
        
    },
    actions: {
        
        getUserInfo(store) {
            let token = localStorage.getItem("access-token");
            if (!token) {
                return;
            }
            axios({
                method: "post",
                url: "http://localhost:8096/happyhouse/User/info",
                headers: { "access-token" : token}
            }).then((res) => {
                console.log(res.data.UserDto.name);
                if (res.data) {
                    //alert("로그인 성공! ");
                    store.commit("setUserInfo", res.data.UserDto);
                    
                }
                else
                    console.log("실패에요!!");
            }).catch((err) => {
                console.log(err);
            });
        },

        login(store, loginObj) {
            return new Promise(function (resolve) {
                axios({
                    method: "post",
                    url: "http://localhost:8096/happyhouse/User/login",
                    data: loginObj,
                }).then((res) => {
                    // let token = res.config.data;
                    localStorage.setItem("access-token", res.headers["access-token"]);
                    resolve();
                }).catch((err) => {
                    alert("이메일과 비밀번호를 확인하세요.");
                    console.log(err);
                });
            })

        },

        logout(store) {
            store.commit('setLogout');
        },


        modifyuserinfo(store, payload) {
            return new Promise(function (resolve) {
            let token = localStorage.getItem("access-token");
            axios({
                method: "put",
                url: "http://localhost:8096/happyhouse/User/modifyuserinfo",
                data: payload,
                headers: { "access-token" : token}
            }).then((res) => {
                alert("수정 완료");
                localStorage.setItem("access-token", res.headers["access-token"]);
                store.commit("setUserInfo", payload);
                resolve();
            }).catch((err) => {
                console.log(err);
            })
        })
        },
        registUser(store, payload) {
            axios({
                method: "post",
                url: "http://localhost:8096/happyhouse/User/join",
                data: payload,
                
            }).then(() => {
                alert("회원 가입이 완료되었습니다. 로그인을 해주세요.");
            }).catch((err) => {
                console.log(err);
                alert("다시 확인하고 가입해주세요.")
            });
        },
        deleteUser(store) {
            let token = localStorage.getItem("access-token");
            axios({
                method: "delete",
                url: "http://localhost:8096/happyhouse/User/delete/",
                data: store.state.userinfo.email,
                headers: { "access-token" : token}
            }).then(() => {
                alert("탈퇴가 정상적으로 처리 되었습니다.");
                store.commit("setLogout");
            }).catch((err) => {
                console.log(err);
            })
        },
        
    }
}