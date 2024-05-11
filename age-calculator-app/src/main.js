import { createApp } from "vue";
import { plugin,defaultConfig } from "@formkit/vue";
import { rootClasses } from "../formkit.theme.mjs";
import App from "./App.vue";


createApp(App).use(plugin, defaultConfig({config:{rootClasses}})).mount("#app");
