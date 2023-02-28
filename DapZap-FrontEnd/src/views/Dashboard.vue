<template>
  <div class="py-3 container-fluid">
    <div class="row">
      <div class="col-lg-7 mb-lg-0 mb-4">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-lg-6">
                <div class="d-flex flex-column h-100">
                  <p class="mb-1 pt-2 text-bold">DapZap is the Zapier for Web3</p>
                  <h5 class="font-weight-bolder">No Code, Low Code, and REST APIs to get to market fast.</h5>
                  <p class="mb-5">
                    Add Prebuilt walletless and Flow/Dapper login UI, PFP pickers and custom marketplace listings.
                    Level up your Web2 or Web3 projects in minutes.
                  </p>
                  <a
                      class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                      href="javascript:;"
                  >
                    Read More
                    <i
                        class="fas fa-arrow-right text-sm ms-1"
                        aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                <div class="bg-gradient-success border-radius-lg h-100">
                  <img
                      src="../assets/img/shapes/waves-white.svg"
                      class="position-absolute h-100 w-50 top-0 d-lg-block d-none"
                      alt="waves"
                  />
                  <div
                      class="position-relative d-flex align-items-center justify-content-center h-100"
                  >
                    <img
                        class="w-100 position-relative z-index-2 pt-4"
                        src="../assets/img/illustrations/rocket-white.png"
                        alt="rocket"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="card h-100 p-3">
          <div
              class="overflow-hidden position-relative border-radius-lg bg-cover h-100"
              style="
              background-image: url('https://demos.creative-tim.com/soft-ui-dashboard/assets/img/ivancik.jpg');
            "
          >
            <span class="mask bg-gradient-dark"></span>
            <div class="card-body position-relative z-index-1 p-3 h-100">
              <div class="d-flex flex-column h-100">
                <h5 class="text-white font-weight-bolder mb-4 pt-2">
                  Works with any NFT or FT on Flow
                </h5>
                <p class="text-white mb-5">
                  Easily automate tasks, and create custom workflows for collectors and customers.
                </p>
                <a
                    class="text-white font-weight-bold ps-1 mb-0 icon-move-left mt-auto"
                    href="/workflows"
                >
                  Read more
                  <i
                      class="fas fa-arrow-right text-sm ms-1"
                      aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-4">
      <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
        <projects-table/>
      </div>
      <div class="col-lg-4 col-md-6">
        <timeline-list
            class="h-100"
            title="Recently Processed DapZaps">
          <timeline-item
              color="success"
              icon="bell-55"
              title="Test Slack"
              date-time="24 FEB 7:20 PM"
          />
          <TimelineItem
              color="info"
              icon="cart"
              title="NFT Purchased"
              date-time="24 FEB 9:34 PM"
          />
          <TimelineItem
              color="warning"
              icon="credit-card"
              title="Flow Purcahsed"
              date-time="25 FEB 2:20 AM"
          />
          <TimelineItem
              color="info"
              icon="check-bold"
              title="First DapZap Created"
              date-time="24 FEB 3:20 PM"
          />
        </timeline-list>
      </div>
    </div>
  </div>
</template>
<script>
import TimelineList from "./components/TimelineList.vue";
import TimelineItem from "./components/TimelineItem.vue";
import ProjectsTable from "./components/ProjectsTable.vue";
import {
  faHandPointer,
  faUsers,
  faCreditCard,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "dashboard-default",
  data() {
    return {
      iconBackground: "bg-gradient-success",
      faCreditCard,
      faScrewdriverWrench,
      faUsers,
      faHandPointer,
    };
  },
  components: {
    ProjectsTable,
    TimelineList,
    TimelineItem,
  },
};
</script>
