<template>
	<div>
		<div>
			<Head>
				<slot>课表</slot>
			</Head>
		</div>
		<el-table :data="course" height="800" border style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
		 </el-table-column>
			<el-table-column prop="location" label="地点" width="180">
			</el-table-column>
			<el-table-column prop="course" label="课程名称">
			</el-table-column>
			<el-table-column prop="teacher" label="任课老师">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import Head from "../components/Head.vue"
	export default {
		created() {
			this.course=this.$route.query.course
		},
		components:{
			Head
		},
		data() {
			return {
				course:[],
			}
		}
	}
</script>

<style>
</style>
