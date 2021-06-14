<template>
    <div>
        <board-header></board-header>
        <div class="container">
    <table class="table table-striped" v-if="boardList">
        <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일자</th>
        </tr>
        <tr v-for="(board, idx) of boardList" :key="idx" @click="move('view','/'+board.no)">
            <td>{{board.no}}</td>
            <td>{{board.title}}</td>
            <td>{{board.writer}}</td>
            <td>{{board.regtime}}</td>
        </tr>
    </table>
    <table class="table table-striped" v-if="!boardList">
        <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일자</th>
        </tr>
        <tr >
            <td colspan="4">검색된 글이 없습니다.</td>
        </tr>
    </table>
    <div id="search" class="row">
        <div class="col-sm-8">
            <div class="col-sm-4">
                <select v-model="search.keyword" class="form-select">
        <option value="title">제목</option>
        <option value="writer">작성자</option>
        <option value="content">내용</option>
    </select>
            </div>
            <div class="col-sm-8"><input type="text" v-model="search.text" class="form-control"></div>
    
        </div>
    <div class="col-sm-4" role="group">
        <button class="buttncust" @click="searchBoard()">검색</button>
        <button class="buttncust" @click="allBoard">전체보기</button>
        <button class="buttncust" @click="move('create','')">글쓰기</button>
    </div>
    
    </div>
    </div>
    </div>
</template>
<style scoped>
    #search{
        margin-top:50px;
    }
    #search *{
        
        display: inline-block;
    }
.table{
    border: none;
    color: gray;
    padding: 30px;   
    border-radius: 10px;
    background: #e0e0e0;
    box-shadow: inset 4px 4px 8px #bebebe,
                inset -4px -4px 8px #ffffff;
    text-decoration: none;
}

.form-select{
    border: none;
    color: gray;
    padding: 20px;   
    border-radius: 10px;
    background: #e0e0e0;
    box-shadow:  4px 4px 8px #bebebe,
                -4px -4px 8px #ffffff;
    text-decoration: none;
}
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

.buttncust:hover{
    background: #d4d4d4;
}

.buttncust:active{
        
        border-radius: 50px;
        background: #e0e0e0;
        box-shadow: inset 4px 4px 8px #bebebe,
                    inset -4px -4px 8px #ffffff;
}

</style>
<script>
import {mapGetters} from "vuex";
import BoardHeader from "./BoardHeader.vue";
export default {
    data() {
        return {
            search:{
                keyword:"title",
                text:"",
            }
        }
    },
    computed:{
        ...mapGetters(["boardList"]),
    },
    created(){
        this.allBoard();
    },
    methods: {
        allBoard(){
            this.$store.dispatch("getBoardList");
        },
        searchBoard(){
            this.$store.dispatch("searchBoard",this.search);
        },
        move(url, param){
            this.$router.push({
                path: "/"+url+param,
            })
        },
    },
    components:{
        BoardHeader,
    }
}
</script>