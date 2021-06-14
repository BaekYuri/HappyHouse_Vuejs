<template>
    <div>
        <board-header></board-header>
        <div class="container">
        <h2>{{board.no}}번째 글</h2>
        <div id="form">
        <table class="table">
            <tr>
                <th>제목</th>
                <td><input type="text" class="form-control" v-model="board.title" readonly></td>
                <th>작성일자</th>
            </tr>
            <tr>
                <th>작성자</th>
                <td><input type="text" class="form-control" v-model="board.writer" readonly></td>
                <td><input type="text" class="form-control"  v-model="board.regtime" readonly></td>
            </tr>
            <tr>
                <th>내용</th>
                <td colspan="2"><textarea id="modifycontent" class="form-control" rows="15" cols="100"  v-model="board.content" placeholder="내용" readonly></textarea></td>
            </tr>
        </table>
        </div>
        <div id="buttons" class="col-sm-3" v-if="userinfo.email==board.writer">
        <button class="btn buttncust"  @click="move('modify','/'+no)">수정</button>
        <button class="btn buttncust"  @click="deleteBoard()">삭제</button>
        <button class="btn buttncust"  @click="move('list','')">목록</button>
        </div>
        <div id="buttons" class="col-sm-3" v-else>
        <button class="btn buttncust"  @click="move('list','')">목록</button>
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
#buttons{
    margin: 0 auto;
}
</style>
<script>
import {mapGetters} from "vuex";
import BoardHeader from './BoardHeader.vue';
export default {
  components: { BoardHeader },
    data() {
        return {
            no: 0,
        }
    },
    computed:{
        ...mapGetters(["board", "userinfo"]),
    },
    created() {
        this.no = this.$route.params.no;
        this.$store.dispatch("getBoardDetail",this.no);
    },
    methods: {
        move(url, param){
            this.$router.push({
                path: "/"+url+param,
            })
        },
        deleteBoard(){
            this.$store.dispatch("deleteBoard",this.no).then(()=>{
                    this.move("list","");
                })
        }
    },
}
</script>