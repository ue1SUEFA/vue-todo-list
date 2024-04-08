import { createApp } from "vue";
import App from "./App.vue";
import inputfocus from "./directives/inputfocus";
const app = createApp(App);
app.directive("focus", inputfocus);
app.mount("#app");
