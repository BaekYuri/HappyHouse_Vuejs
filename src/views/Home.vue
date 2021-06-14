<template>
  <div class="home">
    <!-- Page Header-->
    <header class="masthead">
      <div class="overlay"></div>
      <div class="container">
        <div class="row" id="boxs">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Happy House</h1>
              <span class="subheading">아파트 정보 사이트</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview">
            <router-link to="/apart">
              <div class="cols" style="display: inline-block">
                <img src="../assets/house_apart.png" height="100px" />
                <h2 class="post-title">아파트 거래 내역</h2>
                <h3 class="post-subtitle">바로가기</h3>
              </div>
            </router-link>
          </div>
          <hr />
          <div class="post-preview">
            <router-link to="/bike">
              <div class="cols" style="display: inline-block">
                <img src="../assets/bycicle.png" height="100px" />
                <h2 class="post-title">우리 동네 자전거 대여소</h2>
                <h3 class="post-subtitle">바로가기</h3>
              </div>
            </router-link>
          </div>
          <hr />
          <div class="post-preview">
            <router-link to="/market">
              <div class="cols" style="display: inline-block">
                <img src="../assets/market.png" height="100px" />
                <h2 class="post-title">우리 동네 시장 활성화</h2>
                <h3 class="post-subtitle">바로가기</h3>
              </div>
            </router-link>
          </div>
          <hr />
          <div class="post-preview">
            <router-link to="/list">
              <div class="cols" style="display: inline-block">
                <img src="../assets/conversation.png" height="100px" />
                <h2 class="post-title">QNA 게시판</h2>
                <h3 class="post-subtitle">바로가기</h3>
              </div>
            </router-link>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>
<style scoped>
.masthead {
  background-image: url("../assets/bicycle.jpg");
}
a {
  text-decoration: none;
  color: blue;
}
.post-preview {
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: -8px -8px 16px #bebebe, 8px 8px 16px #ffffff;
}
.post-preview > a:focus,
.post-preview > a:hover {
  font-family: sans-serif;
  text-decoration: none;
  color: #0d6efd;
}
.cols > img {
  margin: 10px;
}
</style>
<script>
export default {};
</script>
