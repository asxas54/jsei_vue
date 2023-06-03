<template>
	<div>
		<Head>
			<slot>文件下载</slot>
		</Head>
		<div class="no1">
			<div class="no2">
			<div class="head">
				{{File.title}}
			</div>
			<hr>
			<div class="head2">
				发布时间:{{File.date}}&nbsp;&nbsp;&nbsp;发布人:{{File.people}}
			</div>
			<div class="main1">
				<p>附件:</p>
				<a :href="$url.BASE_URL+File.Path" download>下载文件</a>
			</div>
		</div></div>
	</div>
</template>

<script>
	import Head from "../components/Head.vue"
	export default {
		data() {
			return {
				File: {}
			}
		},
		components: {
			Head,
		},
		created() {
			this.File = this.$route.query.item
		},
	}
</script>

<style scoped="scoped">
	.head {
		width: 100%;
		text-align: center;
		font-size: 25px;
	}

	.main1 {
		font-size: 13px;
		width: 100%;
		text-align: left;
	}

	.head2 {
		font-size: 10px;
	}
	.no1{
		width: 100%;
	}
	.no2{
		width: 1300px;
		margin: 0 auto;
	}
</style>
