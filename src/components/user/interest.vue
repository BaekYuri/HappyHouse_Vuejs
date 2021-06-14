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
                            <span class="subheading">Interest</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!--content-->
        		<div class="container">
		<div style="width: 50%; text-align: center; margin: 0 auto; margin-top: 50px;">
			<form id="interestform" method="post" action="${root }/User/addlike">


 					<input type="submit" class="btn"  id="registerBtn" value="관심지역 추가"> 
			
			 
			</form>
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