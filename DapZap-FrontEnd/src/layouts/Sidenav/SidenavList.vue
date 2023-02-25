<template>
  <div
      class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
      id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse navText="Dashboard" :to="{ name: 'Dashboard' }">
          <template #icon>
            <shop/>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Workflow Builder" :to="{ name: 'Workflow Builder' }">
          <template #icon>
            <settings/>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="UI Widgets and No Code" :to="{ name: 'UI Widgets' }">
          <template #icon>
            <box3d/>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse navText="Flow Integrations" :to="{ name: 'Flow Integrations' }">
          <template #icon>
            <office/>
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
  <div class="pt-3 mx-3 mt-3 sidenav-footer">
    <sidenav-card
        :class="cardBg"
        textPrimary="Developer REST APIs"
        route="/docs"
        label="View API Docs"
        icon="ni ni-single-copy-04"
    />
    <div class="card mx-auto text-center mt-3">
      <div class="card-body p-2">
        <h6>Already using CloudFlare?</h6>
        <h6 class="font-weight-bolder">Get started in minutes.</h6>
        <a href="https://cloudflare.com/apps/tgeq0WWDjObt/install?source=button">
          <img
              src="https://install.cloudflareapps.com/install-button.png"
              alt="Install [ appTitle ] with Cloudflare"
              border="0"
              width="150">
        </a>
      </div>
    </div>

    <a
        class="btn bg-gradient-success mt-4 w-100"
        href="/contact-us"
        type="button"
    >Contact Us</a
    >
  </div>
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
import SidenavCard from "./SidenavCard.vue";
import Shop from "../../components/Icon/Shop.vue";
import Office from "../../components/Icon/Office.vue";
import Settings from "../../components/Icon/Settings.vue";
import Box3d from "../../components/Icon/Box3d.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    SidenavCollapse,
    SidenavCard,
    Shop,
    Settings,
    Office,
    Box3d
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>
