import "./assets/main.css";
import "toastify-js/src/toastify.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "/main.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);

app.mount("#app");
