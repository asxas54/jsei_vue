<template>
	<div>
		<Head></Head>
		<Menu :info="userInfo"></Menu>
		<HomeMain :info="userInfo"></HomeMain>
		<foot></foot>
	</div>
</template>

<script>
	import Head from "../components/Head.vue"
	import Menu from "../components/Menu.vue"
	import HomeMain from "../components/HomeMain.vue"
	import foot from "../components/foot.vue"
	export default {
		data() {
			return{
				userInfo:{}
			}
		},
		created() {
			this.userInfo = JSON.parse(this.$route.query.pswd);

		},
		components: {
			Head,
			Menu,
			HomeMain,
			foot
		}
	}
</script>

<style scoped="scoped">

</style>
