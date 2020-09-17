<template>
	<div class="my-class">{{ message }}</div>
</template>

<style lang="less" scoped>
.my-class {
	font-weight: bold;
}
</style>

<script lang="ts">
import "reflect-metadata";
import { Vue, Component, Prop } from "vue-property-decorator";
import Main from "~/components/Main.vue";

@Component({ components: { Main } })
export default class App extends Vue {
	@Prop() message!: string;

	public mounted() {
		console.log("Mounted!");
	}

	public unmounted() {
		console.log("Bye now!");
	}
}
</script>