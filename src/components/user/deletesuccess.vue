<template>
    <div>
      <!-- Page Header-->
        <header class="masthead" style="background-image: url('assets/img/home-bg.jpg')">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>Happy House</h1>
                            <span class="subheading">회원 삭제 성공</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!--content-->
        <div align="center">
	<br><h2>회원 탈퇴가 성공적으로 완료되었습니다.</h2>
	<br><h4> 감사합니다. </h4>
	</div>
	<!-- Modal -->
	<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModal" aria-hidden="true">
	  <div class="modal-dialog">
		 <div class="modal-content">
		    <form>
		      <div class="modal-header">
		        <h5 class="modal-title" id="loginModalLabel">Login</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      
		      
		      
		      <div class="modal-body">
		      <form id="loginform" method="post" action="">
				 <input type="hidden" name="act" value="login">
				  <div class="form-group poll_mb">
				    <label for="id">ID</label>
				  <input type="text" class="form-control"
						id="email" name="email" placeholder="" value="${saveid}">
				  </div>
				  
				  <div class="form-group poll_mb">
				    <label for="pw">비밀번호</label>
				 <input type="password"
						class="form-control" id="pass" name="pass" placeholder=""
						onkeydown="javascript:if(event.keyCode == 13) {login();}">
				  </div>
				  
				  <div class="shop-menu clearfix pull-right">
				  	<!--  <a id="findPW" >비밀번호 찾기</a>-->
				<button type="button" class="btn btn-primary"
						onclick="javascript:findpwd();">비밀번호찾기</button>
				
				  </div>
				  <div id="failmsg"></div>
		      </form>
		      </div>
		      
		      
		      
		      
		      <div class="modal-footer">
		        <button type="button" class="btn btn-primary" style="margin-top:0px" id="loginBtn">로그인</button>
		        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
		      </div>
		    </form>
		  </div>
	  </div>
	</div>
    </div>
</template>
<style scoped>

</style>
<script>


export default ({
    setup() {
        
    },
})
</script>