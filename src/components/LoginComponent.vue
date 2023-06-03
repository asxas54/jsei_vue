<template>
	<div class="logincon">
		<div class="titlecon">
			<slot>用户登录</slot>
		</div>
		<div class="content">
			<div class="content_input">
				<div>
					<el-input placeholder="请输入用户名" v-model="userID" prefix-icon="el-icon-user"></el-input>
				</div>
			</div>
			<div class="content_input">
				<div>
					<el-input type="password" placeholder="密码" v-model="passwordID" prefix-icon="el-icon-lock">
					</el-input>
				</div>
			</div>
		</div>
		<div class="findpassword">
			<router-link :to="{path:'/findpassword'}">忘记密码?</router-link>
		</div>
		<div>
			<el-button type="primary" @click="checkIslogin(userID)">登录</el-button>
		</div>
		<div class="info">
			<span>
				1、用户名为工号，初始密码为111111！<br />
				2、因未登记邮箱信息无法找回密码的请与管理员联系补充邮箱信息！
			</span>
		</div>
		<!--登录提示框 -->
		<div class="warning">
			<el-alert :closable="false" :title="infoTitle" :type="info"></el-alert>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				info: "success", //标志提示框类型
				infoTitle: "登录成功!", //提示框的标题
				userID: "",
				passwordID: "",
				stus: []
			}
		},
		created() {
			this.getData()
		},
		methods: {
			checkIslogin(userID) {
				var vue_this = this;
				var warn = document.getElementsByClassName("warning");
				//如果为空,提示输入账号密码
				if (this.userID == "" || this.passwordID == "") {
					this.info = "error";
					this.infoTitle = "请输入账号和密码!"
					warn[0].style.display = "block"
				} else {
					warn[0].style.display = "none"
					var user = this.stus.find((stu) => stu.xh_id === this.userID);
					if (user == undefined) {
						this.info = "error";
						this.infoTitle = "账号不存在!"
						warn[0].style.display = "block"
					} else {
						warn[0].style.display = "none"
						var pswd = this.stus.find((stu) => stu.password === this.passwordID && stu.xh_id === this.userID);
						if (pswd == undefined) {

							this.info = "error";
							this.infoTitle = "密码错误!"
							warn[0].style.display = "block"
						} else {
							warn[0].style.display = "none"
							var second = 3;
							this.info = "success";
							warn[0].style.display = "block"
							vue_this.infoTitle = "登录成功!3秒后跳转";
							setInterval(function() {
								second--;
								vue_this.infoTitle = "登录成功!" + second + "秒后跳转";

							}, 1000)
							localStorage.setItem("userinfo", JSON.stringify({
								username: this.userID,
								password: this.passwordID
							}))
							setTimeout(function() {
								vue_this.$router.push({
									path: '/Schoolhome',
									
									query: {
										pswd: JSON.stringify(pswd)
									}
								});
							}, 3000)
						}
					}
				}
			},
			getData() {
				var that = this;
				this.$axios({
					url: this.$url.STUDENTDATA_URL,
					methods: "get",
				}).then(function(res) {
					console.log(res);
					that.stus = res.data;
				})
			},
			// checkIslogin() {
			// 	this.$router.push("/Schoolhome")
			// },
			logo() {
				//===========Axios与后端接口校验===============
				// this.$axios({
				// 	url: '/user/login',
				// 	method: 'get',
				// 	params: {
				// 		username: this.username,
				// 		password: this.password
				// 	}
				// }).then(function(result) {
				// 	console.log(result);

				// });
				if (this.username == "admin" && this.password == "111111") {
					localStorage.setItem("userinfo", JSON.stringify({
						username: this.username,
						password: this.password
					}))
					this.$router.push("/Schoolhome")
				}

			},

			// register() {
			// 	this.$axios({
			// 		url: '/user/register',
			// 		method: 'post',
			// 		data: {
			// 			username: this.username,
			// 			password: this.password
			// 		}
			// 	}).then(function(result) {
			// 		console.log(result);

			// 	});
			// }
		}
	}
</script>

<style scoped="scoped">
	.logincon {
		height: 450px;
		background-color: #FFFFFF;
	}

	.titlecon {
		padding: 25px 20px;
		font-weight: 600;
		margin-top: 3p warn[0].style.display="block"x;
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
</style>
