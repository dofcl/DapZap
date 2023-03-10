<template>
  <nav
      class="shadow-none navbar navbar-main navbar-expand-lg border-radius-xl"
      v-bind="$attrs"
      id="navbarBlur"
      data-scroll="true"
  >
    <div class="px-0 pt-0 mt-0 container-fluid">
      <breadcrumbs :currentPage="currentRouteName" :textWhite="textWhite"/>
      <div
          class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
          :class="this.$store.state.isRTL ? 'px-0' : 'me-sm-4'"
          id="navbar"
      >
        <div
            class="pe-md-3 d-flex align-items-center"
            :class="this.$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'"
        >
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-flex align-items-center" v-if="!loggedIn">
            <router-link
                :to="{ name: 'Sign In' }"
                class="px-0 nav-link font-weight-bold mx-2"
                :class="textWhite ? textWhite : 'text-body'"
            >
              <i
                  class="fa fa-sign-in"
                  :class="this.$store.state.isRTL ? 'ms-sm-2' : 'me-sm-1'"
              ></i>
              <span class="d-sm-inline d-none">Sign In </span>
            </router-link>
          </li>
          <li class="nav-item d-flex align-items-center" v-if="!loggedIn">
            <router-link
                v-if="!loggedIn"
                :to="{ name: 'Sign Up' }"
                class="px-0 nav-link font-weight-bold"
                :class="textWhite ? textWhite : 'text-body'"
            >
              <i
                  class="fa fa-user"
                  :class="this.$store.state.isRTL ? 'ms-sm-2' : 'me-sm-1'"
              ></i>
              <span class="d-sm-inline d-none">Sign Up </span>
            </router-link>
          </li>
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a
                href="#"
                @click="toggleSidebar"
                class="p-0 nav-link text-body"
                id="iconNavbarSidenav"
            >
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
                <i class="sidenav-toggler-line"></i>
              </div>
            </a>
          </li>
          <li
              v-if="loggedIn"
              class="px-3 nav-item d-flex align-items-center">
            <button class="btn btn-white btn-sm">
              <a
                  class="p-0 nav-link"
                  href="/profile"
                  :class="textWhite ? textWhite : 'text-body'"
              >
                Account
              </a>
            </button>
          </li>
          <li class="nav-item d-flex align-items-center">
            <button
                v-if="loggedIn"
                @click="signout"
                class="nav-link ml-2 btn btn-white btn-sm"
                :class="textWhite ? textWhite : 'text-body'"
            >
              <span class="d-sm-inline d-none">Sign Out </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import Breadcrumbs from "../Breadcrumbs.vue";
import {mapMutations, mapActions} from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      showMenu: false,
      user: this.$store.state.user,
      loggedIn: this.$store.state.user?.isLoggedin,
    };
  },
  props: ["minNav", "textWhite"],
  created() {
    this.minNav;
  },
  mounted() {
    this.user = this.$store.state.user
    this.loggedIn = this.$store.state.user?.isLoggedin
  },
  methods: {
    ...mapMutations(["navbarMinimize", "toggleConfigurator"]),
    ...mapActions(["toggleSidebarColor"]),

    toggleSidebar() {
      this.toggleSidebarColor("bg-white");
      this.navbarMinimize();
    },
    signout() {
      localStorage.removeItem('user')
      this.user.profile.isLoggedin = false
      this.$store.dispatch('logout')
    },
  },
  components: {
    Breadcrumbs,
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
