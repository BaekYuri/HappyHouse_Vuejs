<template>
    <div>
        <board-header></board-header>
        <div class="container">
        <h2>글 수정</h2>
        <div id="modifyArticle">
        <table class="table">
            <tr>
                <th>제목</th>
                <td><input type="text" class="form-control" v-model="board.title"></td>
                <th>작성일자</th>
            </tr>
            <tr>
                <th>작성자</th>
                <td><input type="text" class="form-control" v-model="board.writer" readonly></td>
                <td><input type="text" class="form-control"  v-model="board.regtime" readonly></td>
            </tr>
            <tr>
                <th>내용</th>
                <td colspan="2"><textarea id="modifycontent" class="form-control" rows="15" cols="100"  v-model="board.content" placeholder="내용"></textarea></td>
            </tr>
        </table>
        </div>
        <div id="modify" class=" col-sm-3">
        <button class="btn buttncust" @click="modify()">수정</button>
        <button class="btn buttncust" @click="move('list','')">목록</button>
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
#modify{
    margin: 0 auto;
}
</style>
<script>
import {mapGetters} from "vuex";
import BoardHeader from './BoardHeader.vue';
export default {
  components: { BoardHeader },
    computed:{
        ...mapGetters(["board","userinfo", "isLogin"]),
    },
    created() {
        if(this.userinfo.email != this.board.writer || !this.isLogin){
            alert("다른 사람의 글은 수정할 수 없습니다.");
            this.move("list","");
        }
    },
    methods: {
        modify(){
            if(this.identify()){
                this.$store.dispatch("modifyBoard").then(()=>{
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