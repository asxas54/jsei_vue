<template>
	<div class="right" style="width: 900px;">
		<div class="showInform">
			<el-button plain @click="open1">
				可自动关闭
			</el-button>
		</div>
		<el-row>
			<el-col :span="12">
				<div class="right1">
					<div class="picture">
						<img :src="stus.path" alt="">
					</div>
					<div class="showinfo">
						<el-descriptions direction="vertical" title="用户信息">
							<el-descriptions-item label="用户名">{{stus.xm}}</el-descriptions-item>
							<el-descriptions-item label="学号">{{stus.xh}}</el-descriptions-item>
							<el-descriptions-item label="院系">{{stus.jgmc}}</el-descriptions-item>
							<el-descriptions-item label="备注">
								<el-tag size="small">{{stus.level}}</el-tag>
							</el-descriptions-item>
						</el-descriptions>

					</div>
				</div>
			</el-col>
			<div class="head">
				<div class="header1">通知</div>
				<div class="header2">更多</div>
			</div>
			<el-col class="el" :span="12">
				<div class="right2">
					<el-table @row-click="handleTabelpiblish" :cell-style="{padding:'2px 0px'}" :data="notices"
						:show-header="false" style="width: 100%;padding-top: 40px;">
						<el-table-column show-overflow-tooltip prop="title">
						</el-table-column>
						<el-table-column show-overflow-tooltip prop="piblishData" width="100">
						</el-table-column>
					</el-table>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
				<div class="right3">
					<div class="head3_1">
						<div class="header1">课程</div>
						<div>
							<router-link class="header2" :to="{path:'/showcourse',query:{course}}">更多</router-link>
						</div>
					</div>
					<div>
						<div class="show_head">
							<div class="File_show hover" v-for="(item,index) in course" :key="index">
								<div class="show1">{{item.data}}</div>
							</div>
						</div>
					</div>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="right4">
					<div class="head">
						<div class="header1">文件</div>
						<div class="header2">更多</div>
					</div>
					<div class="show_head">
						<div class="File_show hover" v-for="(item,index) in files" :key="index">
							<div class="show1" @click="ForWardFile(item)"><span class="showTop" v-if="item.isTop">[置顶]
									&nbsp;</span>{{item.title}}
							</div>
							<div class="show2">{{item.date}}</div>
						</div>
					</div>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12">
				<div class="right5">
					<div class="infoNum">{{num}}</div>
					<div class="head5_1">
						<div class="header2">更多</div>
					</div>
					<el-tabs v-model="activeName" type="card">
						<el-tab-pane class="item" label="消息" name="first">
							<div class="show_head fixTitle">
								<div @click="open(item,index)" class="File_show hover " v-for="(item,index) in informs"
									:key="index">
									<div class="show1">{{item.informName}}
									</div>
									<div class="show2">{{item.createDate}}</div>
								</div>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="right6">
					<el-tabs v-model="activeNameScore" type="card">
						<el-tab-pane label="成绩" name="first">
							<div class="show_head fixTitle">
								<div class="File_show hover " v-for="(item,index) in scores" :key="index">
									<div class="show1">{{item.courseName}}
									</div>
									<div class="show2">{{item.score}}</div>
								</div>
							</div>
						</el-tab-pane>
						<el-tab-pane label="考试" name="second">
							<div   class="show_head fixTitle">
								<div  @click="openExam(item,index)" class="File_show hover " v-for="(item,index) in exam" :key="index">
									<div class="show1">{{item.courseName}}
									</div>
								</div>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	const s1 = new Set();
	export default {
		data() {
			return {
				picPath: "",
				stus: {},
				num: 0,
				activeName: "first",
				activeNameScore: "first",
				notices: [],
				files: [],
				course: [],
				informs: [],
				scores: [],
				arr: [],
				exam: []
			}
		},
		props: {
			data: Object,
		},
		created() {
			this.getNotices()
			this.getFiles()
			this.getCourse();
			this.getInform()
			this.getScore();
			this.stus = this.data
			this.getexams();
		},
		methods: {
			handleTabelpiblish(val) {
				console.log(val);
				this.$router.push({
					path: "/inform",
					query: val
				})
			},
			open1() {
				var that = this
				const h = this.$createElement;
				this.$notify({
					title: '消息通知',
					message: h('i', {
						style: 'color: red'
					}, '您有' + that.num + "条消息未读")
				});
			},
			open(item, index) {
				if (s1.has(index)) {} else {
					this.num = this.num - 1;
				}
				s1.add(index)
				this.index = index;
				this.$alert(item.informName, item.createDate, {
					confirmButtonText: '确定'
				});
			},
			openExam(item, index){
				var str=item.location+" "+item.time
				this.$alert(str,item.courseName, {
					confirmButtonText: '确定'
				});
			},
			getNotices() {
				var that = this
				this.$axios({
					url: this.$url.NOTICE_URL,
					methods: "get",
				}).then(function(res) {
					that.notices = res.data
					that.num = Object.keys(that.notices).length
					that.open1()
				})
			},
			getFiles() {
				var that = this
				this.$axios({
					url: this.$url.FILES_URL,
					methods: "get",
				}).then(function(res) {
					that.files = res.data
				})
			},
			getCourse() {
				var that = this
				this.$axios({
					url: this.$url.COURCES_URL,
					methods: "get",
				}).then(function(res) {
					that.course = res.data
				})
			},
			getInform() {
				var that = this
				this.$axios({
					url: this.$url.INFORM_URL,
					methods: "get",
				}).then(function(res) {
					that.informs = res.data
				})
			},
			getScore() {
				var that = this
				this.$axios({
					url: this.$url.SCORESE_URL,
					methods: "get",
				}).then(function(res) {
					that.scores = res.data
				})
			},
			getexams() {
				var that = this
				this.$axios({
					url: this.$url.EXAM_URL,
					methods: "get",
				}).then(function(res) {
					that.exam = res.data
				})
			},
			ForWardFile(item) {
				this.$router.push({
					path: "/DownLoadFile",
					query: {
						item
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.el-row {
		margin-bottom: 5px;
	}

	.picture>img {
		wwidth: 100px;
		height: 100px;
		border-radius: 50px;
		margin-top: 50px
	}

	.showinfo {
		margin-top: -1px;
		margin-left: 15px;
		font: normal 12px/22px "microsoft YaHei";
	}

	.el {
		overflow: auto;
	}

	.el-col {
		padding-left: 5px;
	}

	.right1 {
		height: 200px;
		background-color: #ffffff;
		display: flex;
		justify-content: space-between;
	}

	.right2 {
		height: 200px;
		background-color: #ffffff;
		font-size: 14px;
		position: relative;
		font-family: SimSun;
	}

	.head {
		padding: 5px 10px;
		display: flex;
		justify-content: space-between;
		width: 418px;
		height: 15px;
		position: absolute;
		top: -5px;
		left: 455px;
		z-index: 99;
		background-color: #ffffff;
	}

	.head3_1 {
		padding: 5px 10px;
		display: flex;
		justify-content: space-between;
		width: 425px;
		height: 15px;
		position: absolute;
		top: 0px;
		left: 5px;
		z-index: 99;
		background-color: #ffffff;
	}

	.head5_1 {
		padding: 5px 10px;
		width: 30px;
		height: 20px;
		position: absolute;
		top: 2px;
		left: 400px;
		z-index: 99;
		background-color: #ffffff;
		font-family: SimSun;
	}

	.right3 {
		height: 200px;
		background-color: #ffffff;
		overflow: auto;
		
	}

	.right4 {
		height: 200px;
		background-color: #ffffff;

		overflow: auto;
	}

	.right5 {
		height: 200px;
		background-color: #ffffff;
		position: relative;
		/* overflow: auto; */
	}

	.right6 {
		height: 200px;
		background-color: #ffffff;
	}

	.right {
		width: 820px;
		margin-left: 7px;
		background-color: #ffffff;
	}

	.head {
		margin-top: 5px;
		padding: 5px 5px;
		display: flex;
		justify-content: space-between;
	}

	.header1 {
		font-size: 14px;
		font-weight: 600;
	}

	.header2 {
		font-size: 14px;
		font-weight: 600;
		text-decoration: underline;
		color: #4891d9;
	}

	.infoNum {
		width: 20px;
		height: 20px;
		background-color: indianred;
		border-radius: 10px;
		position: absolute;
		left: 60px;
		top: 0px;
		z-index: 99;
		color: white;
		font-size: 14px;
		line-height: 20px;
	}

	.el-table {
		font-size: 14px;
	}

	.File_show {
		display: flex;
		justify-content: space-between;
		border-bottom: solid 0.5px #bfbfbf;
		/* margin-top: 5px; */
		padding: 5px 10px;
		font-size: 14px;
	}

	.show_head {
		margin-top: 25px;
		font-family: SimSun;
	}

	.showTop {
		color: red;
	}

	.showInform {
		display: none;
	}

	.hover:hover {
		background-color: #f8f9fb;
		cursor: pointer;
	}

	.show1 {
		width: 380px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: left;
	}

	.show2 {
		width: 120px;
		text-align: right;
	}

	.fixTitle {
		height: 158px;
		overflow: auto;
		margin-top: 0px;
	}

	.el-tabs__header {
		margin-bottom: 0px;
		background-color: rebeccapurple;
	}

	>>>.el-tabs__header {
		margin: 0px;
	}
</style>
