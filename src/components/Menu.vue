<template>
	<div class="menu">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-submenu index="1">
				<template slot="title">报名申请</template>
				<el-menu-item index="1-1">学籍异动申请</el-menu-item>
				<el-menu-item index="1-2">重修报名</el-menu-item>
				<el-menu-item index="1-3">考级项目报名</el-menu-item>
				<el-menu-item index="1-4">教学项目报名</el-menu-item>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">信息维护</template>
				<el-menu-item index="2-1">学生个人信息维护</el-menu-item>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">选课</template>
				<el-menu-item index="3-1">自主选课</el-menu-item>
				<el-menu-item index="3-2">筛选结果查询</el-menu-item>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title">信息查询</template>
				<el-menu-item index="4-1">查询个人信息</el-menu-item>
				<el-menu-item index="4-2">学籍预警查询</el-menu-item>
				<el-menu-item index="4-3">学生课表查询</el-menu-item>
				<el-menu-item index="4-4">选课名单查询</el-menu-item>
				<el-menu-item index="4-5">教材明细查询</el-menu-item>
				<el-menu-item index="4-6">学生成绩查询</el-menu-item>
			</el-submenu>
			<el-submenu index="5">
				<template slot="title">毕业设计(论文)</template>
				<el-menu-item index="5-1">学生选题</el-menu-item>
				<el-menu-item index="5-2">题目修改申请</el-menu-item>
				<el-menu-item index="5-3">成绩查看</el-menu-item>
				<el-menu-item index="5-4">答辩信息查看</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
		stusInfo:[]
      };
    },
	created() {
		this.stusInfo=this.info;
	},
	props: {
		
	    info: Object, 
	},
    methods: {
      handleSelect(key, keyPath) {
		if(key=="4-1"){
			this.$router.push({
				path:"/myselfpage",
				query:this.stusInfo
			})
		}
      },
    }
  }
</script>
<style scoped="scoped">
	.menu {
		width: 1300px;
		margin: 0 auto;
	}
</style>
