<template>
	<div class="con">
		<div class="con1">
			<div class="con2">
				<div class="con2_1"><img src="../assets/logo_jw_w.png"></div>
				<div class="con2_2">江苏电子信息职业学院 <slot>教务系统</slot>
				</div>
			</div>
			<div class="con3">
				<el-dropdown @command="logoout">
					<span class="el-dropdown-link">
						<img src="../assets/user_logo.jpg">
					</span>
					<el-dropdown-menu  slot="dropdown">
						<el-dropdown-item command="a" icon='el-icon-refresh-left'>角色切换</el-dropdown-item>
						<el-dropdown-item command="b" icon='el-icon-edit'>修改密码</el-dropdown-item>
						<el-dropdown-item command="c" icon="el-icon-switch-button">退出</el-dropdown-item>
						
					</el-dropdown-menu>
				</el-dropdown>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			logoout(command){
				console.log(command);
				if(command=="c"){
					localStorage.removeItem("userinfo")
					this.$router.push("/")
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.con {
		background-color: #0483d4;
	}

	.con1 {
		display: flex;
		height: 60px;
		width: 1300px;
		margin: 0px auto;
		align-items: center;
		color: #FFFFFF;
		justify-content: space-between;
		font-size: 20px;
		font-weight: 500;
	}

	.con2 {
		display: flex;
		align-items: center;
	}

	.con2_2 {
		margin-left: 10px;
	}

	.con3 img {
		width: 30px;
		border-radius: 50%;
	}

	.con3 {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 60px;
		width: 50px;
	}

	.con3:hover {
		cursor: pointer;
		background-color: #42B983;
	}
</style>
