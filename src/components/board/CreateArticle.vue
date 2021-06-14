<template>
    <div>
        <board-header></board-header>
        <div class="container">
        <div id="content">
        <input type="text" class="form-control" placeholder="제목" v-model="board.title"><br>
        <input type="text" class="form-control"  placeholder="작성자" :value="userinfo.email" readonly><br>
        <textarea rows="15" class="form-control"  cols="20" placeholder="내용" v-model="board.content"></textarea>
        </div><br>
        <div id="regist">
        <button @click="create()" class="buttncust" >등록</button>
        <button @click="move('list','')" class="buttncust">목록</button>
        </div>
    </div>
    </div>
</template>
<style scoped>
.form-control{
    height: inherit;
    border: none;
    color: gray;
    padding: 20px;   
    border-radius: 10px;
    background: #e0e0e0;
    box-shadow: inset 4px 4px 8px #bebebe,
                inset -4px -4px 8px #ffffff;
    text-decoration: none;
}
.buttncust {
    width: 30%;
    margin-left:calc(10%/6);
    margin-right:calc(10%/6);
    border: none;
    color: gray;
    padding: 20px;   
    border-radius: 10px;
    background: #e0e0e0;
    box-shadow:  4px 4px 8px #bebebe,
                -4px -4px 8px #ffffff;
  text-decoration: none;
}

</style>
<script>
import BoardHeader from './BoardHeader.vue';
import {mapGetters} from "vuex";
export default {
  components: { BoardHeader },
    data() {
        return {
           board:{
               no:0,
               title:"",
               writer:"",
               content:"",
               regtime:""
           } 
        }
    },
    computed:{
        ...mapGetters(["isLogin","userinfo"]),
    },
    created() {
        if(!this.isLogin){
            alert("로그인 후 이용해주세요.");
            this.move("list","");
        }
        this.board.writer = this.userinfo.email;
    },
    methods: {
        create(){
            if(this.identify()){
                this.$store.dispatch("createBoard",this.board).then(()=>{
                    this.move("list","");
                })
            }
        },
        move(url, param){
            this.$router.push({
                path: "/"+url+param,
            })
        },
        identify(){
            let keys = ["title","writer","content"];
            for(let key of keys){
                if(!this.board[key]){
                    alert(key+"를 입력해주세요.");
                    return false;
                }
            }
            return true;
        }
    },
}
</script>