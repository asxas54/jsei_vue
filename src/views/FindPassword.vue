<template>
	<div class="con">
		<div class="header">
			<div class="imgcon"><img src="../assets/1.png" /></div>
			<div class="titlecon">江苏电子信息职业学院 教务系统</div>

		</div>
		<div class="main">
			<div class="mainimgcon">
				<el-carousel height="500px">
					<el-carousel-item v-for="item in imagebox" :key="item.url">
						<img :src="item.idView" />
					</el-carousel-item>
				</el-carousel>
			</div>
			<div>
				<findPassword></findPassword>
			</div>
		</div>
		<div class="footer">江苏电子信息职业学院教务处 版权所有© Copyright 1999-2023 正方软件股份有限公司 版本V-8.0.0</div>
	</div>
</template>

<script>
	import findPassword from "../components/findPassword.vue"
	export default {
		data() {
			return {
				info: "success", //标志提示框类型
				infoTitle: "登录成功!", //提示框的标题
				userID: "",
				passwordID: "",
				stus: {},
				imagebox: [{
						idView: "/pictures/风景1.png"
					},
					{
						idView: "/pictures/风景2.png"
					},
					{
						idView: "/pictures/风景3.png"
					},
					{
						idView: "/pictures/风景4.png"
					}
				],
			}
		},
		components: {
			findPassword
		}
	}
</script>

<style scoped="scoped">
	.btn {
		margin-top: 15px;
	}

	.el-carousel__item {
		width: 100%;
	}

	.logincon {
		height: 450px;
		background-color: #FFFFFF;
	}

	.titlecon {
		/* padding: 25px 20px; */
		font-weight: 600;
		margin-top: 3px;
	}

	.con1 {
		display: flex;
		align-items: center;
		margin-top: 20px;
	}

	.content {
		margin: 0px 40px;
	}

	.el-input {
		width: 300px;
	}

	.el-button {
		width: 300px;
		margin: 0px 40px;
	}

	.findpassword {
		text-align: right;
		margin: 10px 0px;
		margin-right: 40px;
	}

	.findpassword>a {
		text-decoration: none;
		color: #336699;
	}

	.info {
		text-align: left;
		width: 280px;
		color: #a94442;
		background-color: #f2dede;
		border-color: #ebccd1;
		border-radius: 2px;
		font-size: 13px;
		padding: 20px 10px;
		margin: 0px 40px;
		margin-top: 10px;
	}

	.warning {
		display: none;
		width: 280px;
		margin: 0px 40px;
		margin-top: 10px;
	}

	.el-icon-user {
		width: 100px;
	}

	.con {
		width: 1200px;
		margin: 20px auto;
	}

	.header {
		display: flex;
		align-items: center;

	}

	.imgcon {
		margin-left: 5px;

		padding-top: 3px;
	}

	.titlecon {
		margin-left: 10px;
		font-size: 22px;
		color: #336699;
		font-weight: 500;

	}

	.main {
		margin-top: 40px;
		border: solid 3px gainsboro;
		background-color: #F5F5F5;
		display: flex;
		justify-content: space-around;
	}

	.mainimgcon {
		width: 100%;
		height: 500px;
		margin: 0px 7px;
	}

	.footer {
		text-align: center;
		font-size: 10px;
		margin-top: 20px;
		color: gainsboro;
	}
</style>
