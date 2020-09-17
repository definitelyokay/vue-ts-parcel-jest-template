<template>
	<Main message="Hello, internet!"></Main>
</template>

<style lang="less" scoped>
</style>

<script lang="ts">
import "reflect-metadata";
import { Vue, Component } from "vue-property-decorator";
import Main from "~/components/Main.vue";

@Component({ components: { Main } })
export default class App extends Vue {}
</script>