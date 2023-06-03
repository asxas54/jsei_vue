<template>
	<div>
		<Head>
			<slot>通知公告</slot>
		</Head>

		<div class="no1">
			<div class="no2">

				<div class="head">
					{{inform.title}}
				</div>
				<hr>
				<div class="head2">
					发布时间:{{inform.piblishData}}&nbsp;&nbsp;&nbsp;发布人:{{inform.publishman}}
				</div>
				<div class="content">
					<div class="show" v-for="(item,index) in arr" :key="index">
						<div>{{item}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Head from "../components/Head.vue"
	export default {
		data() {
			return {
				inform: {},
				arr: []
			}
		},
		components: {
			Head,
		},
		created() {
			this.inform = this.$route.query
			console.log(this.inform);
			this.DataProcessing(this.inform.data)
		},
		methods: {
			DataProcessing(string) {
				var arr = string.split('|');
				this.arr = arr;
			}
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

	.content {
		margin-top: 20px;
		text-align: left;
	}

	.show {
		margin-top: 15px;
	}

	.no1 {
		width: 100%;
	}

	.no2 {
		width: 1300px;
		margin: 0 auto;
	}
</style>
