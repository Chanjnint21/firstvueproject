import Vue from "vue";
import App from "./App.vue";

// Disable production tip in console
Vue.config.productionTip = false;

// Create a new Vue instance
new Vue({
  // Render function to render the App component
  render: (h) => h(App),
}).$mount("#app"); // Mount the instance to a DOM element with an id of 'app'
