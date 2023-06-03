<template>
	<div class="bg_color">
		<div class="main">
			<div class="left">
				<div class="myapp">
					<div class="title">我的应用</div>
					<div class="el-icon-s-tools" @click="setMyapp"></div>
					<el-dialog width="1000px" title="管理我的应用" :visible.sync="dialogFormVisible">
						<el-form>
							<div class="dialog_main">
								<div class="dialog_left">
									<div class="left_title">教学综合信息服务平台</div>
									<el-tree class="hoverColor" :data="data" :props="defaultProps"
										@node-click="handleNodeClick" style="background-color: #eee;"></el-tree>
								</div>
								<div class="right">
									<div class="dialog_right">
										<div class="right_title1">我的应用</div>
										<div class="icon_main" v-for="(item,index) in myapps" :key="index">
											<div  ><img :src="item.pic_path"><img class="pic_icon"
													@click="deleteApp(index)" src="../../public/pictures/ico_90.gif" />
											</div>
											<div>{{item.name}}</div>
										</div>
									</div>
									<div class="dialog_right nobom">
										<div class="right_title2">全部应用</div>
										<div class="icon_main" v-for="(item,index) in allapps" :key="index">
											<div><img :src="item.pic_path"><img class="pic_icon" @click="addApp(index)"
													src="../../public/pictures/ico_91.gif" /></div>
											<div>{{item.name}}</div>
										</div>
									</div>
								</div>
							</div>
							</el-form-item>
						</el-form>
						<div slot="footer" class="dialog-footer">
							<el-button @click="dialogFormVisible = false">关闭</el-button>
						</div>
					</el-dialog>
				</div>
				<div class="showapp">
					<div class="icon_main" v-for="(item,index) in myapps" :key="index">
						<div @click="toShowinfo(item)"><img :src="item.pic_path"></div>
						<div>{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="rightshow">
				<Homeright :data="stusInfo"></Homeright>
			</div>
		</div>
	</div>
</template>


<script>
	import Homeright from "./HomeRight.vue"
	export default {
		data() {
			return {
				stusInfo:{},
				myapps: [],
				allapps: [],
				dialogTableVisible: false,
				dialogFormVisible: false,
				data: [{
					label: '学生应用',
					children: [{
							label: '报名申请'
						}, {
							label: '信息维护',
						},
						{
							label: '选课'
						}, {
							label: '信息查询'
						},
					],

				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			}
		},
		props: {
		    info: Object, 
		},
		created() {
			this.getMyapps()
			this.getAllapps()
			// obj = JSON.parse(this.$route.query.obj)
			this.stusInfo=this.info;
			console.log(this.stusInfo);
		},
		methods: {
			toShowinfo(item) {
				if(item.name=="查询个人信息"){
					// this.$router.push("/myselfpage")
					this.$router.push({
						path:"/myselfpage",
						query:this.stusInfo
					})	
				}
			},
			setMyapp() {
				this.dialogFormVisible = true
			},
			getMyapps() {
				var that = this;
				this.$axios({
					url: this.$url.MY_APPS_URL,
					methods: "get",
				}).then(function(res) {
					console.log(res);
					that.myapps = res.data
				})
			},
			getAllapps() {
				var that = this;
				this.$axios({
					url: this.$url.ALL_APPS_URL,
					methods: "get",
				}).then(function(res) {
					console.log(res);
					that.allapps = res.data
				})
			},
			deleteApp(index) {
				//向allapp数组添加当前myapp所指的位置
				this.allapps.push(this.myapps[index])
				this.myapps.splice(index, 1)
				var MyAppTitle = document.querySelector(".right_title1")
				if (this.myapps.length == 0) {
					MyAppTitle.innerHTML = ""
				}
			},
			addApp(index) {
				this.myapps.push(this.allapps[index])
				this.allapps.splice(index, 1)
				var MyAppTitle = document.querySelector(".right_title1")
				if (this.myapps.length != 0) {
					MyAppTitle.innerHTML = "我的应用"
				}
			},
			handleNodeClick(data) {
			}
		},
		components: {
			Homeright
		}
	}
</script>

<style scoped="scoped">
	.bg_color {
		background-color: #ececec;
		padding: 10px;
	}

	.main {
		margin: 0 auto;
		width: 1300px;
		display: flex;
	}

	.left {
		width: 330px;
		height: 600px;
		background-color: #ffffff;
	}


	.myapp {
		display: flex;
		justify-content: space-between;
		font-size: 18px;
		font-weight: 550;
		border-bottom: 0.5px solid #cccccc;

	}

	.title {
		margin: 8px 0px 0px 10px;
	}

	.el-icon-s-tools {
		font-size: 25px;
		margin: 8px 15px 10px 0px;
	}

	.el-icon-s-tools:hover {
		cursor: pointer;
	}

	.dialog_main {
		display: flex;
		height: 400px;
		align-items: flex-start
	}

	.dialog_left {
		width: 400px;
		height: 400px;

		background-color: #ececec;
	}

	.dialog_right {
		width: 750px;
		display: flex;
		flex-wrap: wrap;
		padding-left: 20px;
		position: relative;
	}

	.icon_main {
		width: 90px;
		height: 90px;
		margin-top: 35px;
		margin-bottom: 20px;
		margin-right: 5px;
		position: relative;
	}

	.pic_icon {
		position: absolute;
		right: 18px;
	}

	.pic_icon:hover {
		cursor: pointer;
	}

	.nobom {
		border-bottom: 0px;
	}

	.right_title1 {
		position: absolute;
		top: 1px;
		left: -7px;
		width: 755px;
		line-height: 25px;
		text-align: left;
		background-color: #ececec;
	}

	.right_title2 {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 770px;
		line-height: 25px;
		text-align: left;
		background-color: #ececec;
	}

	.dialog_right .nobom {
		position: relative;
	}

	.left_title {
		margin-top: 21px;
		margin-bottom: 5px;
		font-size: 13px;
	}

	.showapp {
		display: flex;
		flex-wrap: wrap;
	}

	.showapp>.icon_main {
		width: 100px;
		height: 100px;
		font-size: 13px;
		margin-top: 10px;
		margin-left: 5px;
	}

	.rightshow {
		background-color: #ececec;
	}

	.right {
		background-color: #ececec;
	}
</style>
