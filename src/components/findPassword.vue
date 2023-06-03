<template>
	<div class="logincon">
		<div class="titlecon">找回密码
		</div>
		<div class="content">
			<div class="content_input">
				<div>
					<el-input placeholder="请输入用户名" v-model="userID" prefix-icon="el-icon-user"></el-input>
				</div>
			</div>
			<div class="content_input">
				<div>
					<el-input type="password" placeholder="请输入管理员密码" v-model="admin_Password" prefix-icon="el-icon-lock">
					</el-input>
				</div>
			</div>
		</div>
		<div class="btn">
			<el-button type="primary" @click="findPasswd">找回密码</el-button>
		</div>
		<div class="info">
			<span>
				1、管理员密码:666666！<br />
				2、因未登记邮箱信息无法找回密码的请与管理员联系补充邮箱信息！
			</span>
		</div>
		<!--登录提示框 -->
		<div class="password">
			<el-alert :title="this.str+this.findPassword" type="info" :closable="false">
			</el-alert>
		</div>
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
				stus: [],
				str: "您的密码是:",
				findPassword: "",
				admin_Password: "", //管理员密码
				infoTitle: "查找成功!",
				info: "success",
			}
		},
		created() {
			this.getdata()
		},
		methods: {
			getdata(){
				var that = this;
				this.$axios({
					url: this.$url.STUDENTDATA_URL,
					methods: "get",
				}).then(function(res) {
					console.log(res);
					that.stus = res.data;
				})
			},
			findPasswd() {
				this.getdata()
				var passwordDiv = document.querySelector(".password");
				var warning = document.querySelector(".warning");
				warning.style.display = "block"
				if (this.admin_Password == "666666") {
					passwordDiv.style.display = "none"
					var pswd = this.stus.find((stu) => stu.xh === this.userID);
					console.log(pswd);
					if (pswd!=null||pswd!=undefined||pswd!="") {
						this.infoTitle = "查找成功!"
						this.findPassword=pswd.password
						this.info = "success"
						passwordDiv.style.display = "block"
					} else {
						this.infoTitle = "查找失败!!检查管理员密码或账号"
						this.info = "error"
						passwordDiv.style.display = "none"
					}

				} else {
					this.infoTitle = "查找失败!!检查管理员密码或账号"
					this.info = "error"
				}
			}
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

	.btn {
		margin-top: 15px;
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

	.password {
		width: 280px;
		margin: 0px 40px;
		margin-top: 10px;
		display: none;
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
