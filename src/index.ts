import "reflect-metadata";
import Vue from "vue";
import message from "~/message";
import App from "~/components/App.vue";

console.log(message);

let app: Vue | undefined;

document.addEventListener("DOMContentLoaded", () => {
	console.log("Document ready!");

	app = new Vue({ render: createElement => createElement(App) });
	app.$mount("#app");
});
