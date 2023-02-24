<template>
  <sidenav
      :custom_class="this.$store.state.mcolor"
      :class="[
      this.$store.state.isTransparent,
      this.$store.state.isRTL ? 'fixed-end' : 'fixed-start',
    ]"
      v-if="this.$store.state.showSidenav"
  />
  <main
      class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
      :style="this.$store.state.isRTL ? 'overflow-x: hidden' : ''"
  >
    <!-- nav -->
    <navbar
        :class="[navClasses]"
        :textWhite="this.$store.state.isAbsolute ? 'text-white opacity-8' : ''"
        :minNav="navbarMinimize"
        v-if="this.$store.state.showNavbar"
    />
    <router-view/>
    <app-footer v-show="this.$store.state.showFooter"/>
  </main>
</template>
<script>
import Sidenav from "./layouts/Sidenav";
import Navbar from "@/layouts/Navbars/Navbar.vue";
import AppFooter from "@/layouts/Footer.vue";
import {mapMutations} from "vuex";

export default {
  name: "App",
  components: {
    Sidenav,
    Navbar,
    AppFooter,
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
  created() {
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('SET_USER_DATA', userData)
    }
  },
  computed: {
    navClasses() {
      return {
        "position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky": this
            .$store.state.isNavFixed,
        "position-absolute px-4 mx-0 w-100 z-index-2": this.$store.state
            .isAbsolute,
        "px-0 mx-4 mt-4": !this.$store.state.isAbsolute,
      };
    },
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
  },
};
</script>
<style>
body {
  background-attachment: fixed !important;
  background-repeat: no-repeat;
  background-position: center !important;
}

aside#sidenav-main {
  border-right: 1px solid #d1ebde !important;
  border-radius: 0;
  background-color: #c6efba6b !important;
  margin-top: -11px !important;
  height: 110% !important;
}

.card {
  border-radius: 5px !important;
  box-shadow: 0 0 0 3px #2fae0933 !important;
  background-color: #ebf1e1b8 !important;
}

.card-header:first-child {
  border-radius: 5px !important;
}

.navbar-vertical .navbar-brand > img, .navbar-vertical .navbar-brand-img {
  max-height: none !important;
}

div#sidenavCard.card {
  border-radius: 20px !important;
}
</style>
