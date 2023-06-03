<template>
	<div class="con">
		<div class="header">
			<div class="imgcon"><img src="../assets/1.png" /></div>
			<div class="titlecon">江苏电子信息职业学院 教务系统</div>
			
		</div>
		<div class="main">
			<div class="mainimgcon"><!-- <img src="../assets/2.png" /> -->
				  <el-carousel  height="500px">
				      <el-carousel-item v-for="item in imagebox" :key="item.url">
				        <img :src="item.idView"/>
				      </el-carousel-item>
				    </el-carousel>
			</div>
			<div class="logincon_1">
				<LoginComponent />
			</div>
			
		</div>
		<div class="footer">江苏电子信息职业学院教务处 版权所有© Copyright 1999-2023 正方软件股份有限公司   版本V-8.0.0</div>
	</div>
</template>

<script>
import LoginComponent from "../components/LoginComponent.vue"
export default{
	data() {
		return{
			 imagebox:[
			        {idView:"/pictures/风景1.png"},
			        {idView:"/pictures/风景2.png"},
			        {idView:"/pictures/风景3.png"},
			        {idView:"/pictures/风景4.png"}
			        ],
		}
	},
	components:{
		LoginComponent
	}
}
</script>

<style scoped="scoped">
	.el-carousel__item{
		width: 100%;
	}

	.con{
		width:1200px;
		margin: 20px auto;	
	}
	.header{
		display: flex;
		align-items: center;
		
	}
	.imgcon{
		margin-left: 5px;
		
		padding-top: 3px;
	}
	.titlecon{
		margin-left: 10px;
		font-size: 22px;
		color: #336699;
		font-weight: 500;
		
	}
	.main{
		margin-top: 40px;
		border: solid 3px gainsboro;
		background-color: #F5F5F5;	
		display: flex;
		justify-content: space-around;
	}
	.mainimgcon{
		width: 100%;
		height: 500px;
		margin: 0px 7px;
	}
	.footer{
		text-align: center;
		font-size: 10px;
		margin-top:20px;
		color:gainsboro;
	}
	
</style>
