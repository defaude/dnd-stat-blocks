import { createApp } from "vue";
import App from "./App";

const app = createApp(App);
app.mount("#root");

if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => app.unmount());
}
