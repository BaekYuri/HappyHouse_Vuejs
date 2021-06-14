
import axios from "axios";

export default {
    state: {
        boardList: [],
        board: {
          no:0,
          title:"",
          writer:"",
          content:"",
          regtime:""
        },
      },
      getters: {
        boardList(state) {
          return state.boardList;
        },
        board(state) {
          return state.board;
        },
      },
      mutations: {
        setBoardList(state, boardList) {
          state.boardList = boardList;
        },
        setBoard(state, board) {
          state.board = board;
        },
      },
      actions: {
        getBoardList(store) {
          axios({
            method: "get",
            url:"http://localhost:8096/happyhouse/board/list",
          }).then((res) => {
            console.log(res.data);
            store.commit("setBoardList", res.data);
            
          }).catch((err) => {
            console.log(err);
          });
        },
        createBoard(store, board) {
          axios({
            method: "post",
            url: "http://localhost:8096/happyhouse/board/create",
            data: board,
          }).then(() => {
            alert("등록이 완료되었습니다.");
            store.commit("setBoard", board);
          }).catch((err) => {
            console.log(err);
          });
        },
        getBoardDetail(store, no) {
          axios({
            method: "get",
            url:"http://localhost:8096/happyhouse/board/view/"+no,
          }).then((res) => {
            store.commit("setBoard", res.data);
          }).catch((err) => {
            console.log(err);
          })
        },
        modifyBoard(store) {
          axios({
            method: "put",
            url: "http://localhost:8096/happyhouse/board/modify",
            data: store.state.board
          }).then((res) => {
            alert("수정 완료");
            console.log(res.data);
          }).catch((err) => {
            console.log(err);
          })
        },
        searchBoard(store, search) {
          let text = search.text;
          if (search.text=="") {
            text = "none";
          }
          axios({
            method: "get",
            url: "http://localhost:8096/happyhouse/board/search/" + search.keyword + "/" + text,
          }).then((res) => {
            store.commit("setBoardList", res.data);
          }).catch((err) => {
            console.log(err);
          });
        },
        deleteBoard(store, no) {
          console.log(store);
          console.log(no);
          axios({
            method: "delete",
            url:"http://localhost:8096/happyhouse/board/delete/"+no,
          }).then(() => {
            alert(no+"번 게시물이 삭제되었습니다.");
          }).catch((err) => {
            console.log(err);
          })
        }
      },
}