<template>
	<div>
		<Head>
			<slot>个人信息</slot>
		</Head>
		<div class="no1"></div>
		<div class="main no2">
			<div class="header">
				<div class="id">{{info.xh}}</div>
				<div class="name">{{info.xm}}</div>
				<div class="picture">
					<div>学号二维码:</div>
					<!-- http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100 -->
					<!-- <div class="idtitle"><img class="showimg" :src="this.url+this.userID+'&amp'"/></div> -->
					<div class="idtitle">
						<vue-qr :logoSrc="imageUrl" :text="info.xh" :size="150"></vue-qr>
					</div>
				</div>
			</div>
			<div class="main2">
				<el-tabs type="border-card">
					<el-tab-pane label="基本信息">
						<div>
							<el-descriptions title="" direction="vertical" :column="4" border>
								<el-descriptions-item label="用户名">{{info.xm}}</el-descriptions-item>
								<el-descriptions-item label="学号">{{info.xh}}</el-descriptions-item>
								<el-descriptions-item label="院系" :span="2">{{info.jgmc}}</el-descriptions-item>
								<el-descriptions-item label="备注">
									<el-tag size="small">{{info.level}}</el-tag>
								</el-descriptions-item>
								<el-descriptions-item label="专业类别">{{info.zymc}}</el-descriptions-item>
								<el-descriptions-item label="性别">{{info.xb}}</el-descriptions-item>
								<el-descriptions-item label="入学年份">{{info.njmc}}</el-descriptions-item>
								<el-descriptions-item label="院系类别">{{info.jg_id}}</el-descriptions-item>
							</el-descriptions>
						</div>
					</el-tab-pane>
					<el-tab-pane label="学籍信息">
						学籍信息列表测1
					</el-tab-pane>
					<el-tab-pane label="其他信息">
						其他信息测2
					</el-tab-pane>
					<el-tab-pane label="联系方式">
						联系方式测3
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>

</template>


<script>
	import vueQr from 'vue-qr'
	import Head from "../components/Head.vue"
	export default {
		data() {
			return {
				info: {},
				File: {},
				imageUrl: require("../assets/user_logo.jpg"), //icon路径
			}
		},
		components: {
			Head,
			vueQr
		},
		created() {
			this.info = this.$route.query
			this.File = this.$route.query.item
		},
	}
</script>
<style scoped="scoped">
	.header {
		margin-top: 50px;
		display: flex;
		justify-content: space-between;
		line-height: 50px;
		font-size: 22px;
	}

	.no1 {
		width: 100%;
	}

	.no2 {
		width: 1300px;
		margin: 0 auto;
	}

	.id {
		margin-left: 50px;
	}

	.picture {
		display: flex;
		justify-content: space-between;
	}

	.idtitle {
		margin-left: 10px;
	}

	.showimg {
		width: 100px;
		height: 100px;
	}
</style>
