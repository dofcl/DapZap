<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <div class="float-end">
        <router-link to="/workflow">
          <button class="btn btn-success">Create a DapZap</button>
        </router-link>
      </div>
      <h6>My DapZaps</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
          <tr>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
            >
              Project
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
            >
              Description
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
            >
              Status
            </th>
            <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2"
            >
              Quota
            </th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <div class="d-flex px-2">
                <div>
                  <img
                      src="../../assets/img/small-logos/logo-jira.svg"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="jira"
                  />
                </div>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm">Jira</h6>
                </div>
              </div>
            </td>
            <td>
              <span class="text-xs font-weight-bold">test</span>
            </td>
            <td>
              <span class="text-xs font-weight-bold">Disabled</span>
            </td>
            <td class="align-middle text-center">
              <div class="d-flex align-items-center justify-content-center">
                <div>
                  <soft-progress
                      color="danger"
                      variant="gradient"
                      :percentage="30"
                  />
                </div>
                <span class="me-2 text-xs font-weight-bold">3/10</span>
              </div>
            </td>
            <td class="align-middle">
              <button
                  class="btn btn-link text-secondary mb-0"
                  aria-haspopup="true"
                  aria-expanded="false"
              >
                <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <div>
                  <img
                      src="../../assets/img/small-logos/logo-slack.svg"
                      class="avatar avatar-sm rounded-circle me-2"
                      alt="slack"
                  />
                </div>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm">Slack</h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-bold mb-0">Slack email sales channel</p>
            </td>
            <td>
              <span class="text-xs font-weight-bold">Enabled</span>
            </td>
            <td class="align-middle text-center">
              <div class="d-flex align-items-center justify-content-center">
                <span class="me-2 text-xs font-weight-bold">0%</span>
                <div>
                  <soft-progress
                      color="success"
                      variant="gradient"
                      :percentage="0"
                  />
                </div>
              </div>
            </td>
            <td class="align-middle">
              <button
                  class="btn btn-link text-secondary mb-0"
                  aria-haspopup="true"
                  aria-expanded="false"
              >
                <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2">
                <div class="avatar avatar-sm rounded-circle me-2">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                       xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"
                       fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> <circle style="fill:#E8E8E8;" cx="256" cy="256" r="256"></circle>
                      <polygon points="146.32,342.88 146.32,264.72 244,264.72 "></polygon>
                      <path
                          d="M153.84,280H358c36.24,0,65.92-29.68,65.92-65.92v-76.16C423.92,101.68,394.24,72,358,72H153.84 c-36.24,0-65.92,29.68-65.92,65.92v76.16C87.92,250.32,117.6,280,153.84,280z"></path>
                      <g> <path style="fill:#FFFFFF;"
                                d="M147.12,188.48c3.76,2.48,10.4,5.04,16.8,5.04c9.28,0,13.6-4.64,13.6-10.4 c0-6.08-3.6-9.44-13.04-12.88c-12.56-4.48-18.56-11.44-18.56-19.84c0-11.28,9.12-20.56,24.16-20.56c7.12,0,13.28,2,17.2,4.32 l-3.2,9.28c-2.72-1.76-7.84-4.08-14.32-4.08c-7.52,0-11.76,4.32-11.76,9.52c0,5.76,4.16,8.4,13.28,11.84 c12.16,4.64,18.4,10.72,18.4,21.12c0,12.32-9.52,20.96-26.16,20.96c-7.68,0-14.8-1.92-19.68-4.8L147.12,188.48z"></path>
                        <path style="fill:#FFFFFF;"
                              d="M206.16,150.48c0-7.2-0.16-13.2-0.56-18.96h11.12l0.56,11.28h0.4c3.92-6.64,10.4-12.88,22-12.88 c9.52,0,16.8,5.76,19.84,14.08h0.32c2.16-3.92,4.88-6.96,7.84-9.12c4.24-3.2,8.8-4.96,15.52-4.96c9.28,0,23.04,6.08,23.04,30.4 v41.28h-12.48v-39.68c0-13.44-4.96-21.6-15.2-21.6c-7.2,0-12.88,5.36-15.04,11.6c-0.56,1.76-1.04,4.08-1.04,6.4v43.28H250v-42 c0-11.12-4.88-19.28-14.64-19.28c-7.92,0-13.76,6.4-15.76,12.72c-0.72,1.92-1.04,4.08-1.04,6.24v42.24h-12.48v-51.04H206.16z"></path>
                        <path style="fill:#FFFFFF;"
                              d="M325.2,188.48c3.76,2.48,10.4,5.04,16.8,5.04c9.28,0,13.6-4.64,13.6-10.4 c0-6.08-3.6-9.44-13.04-12.88C330,165.76,324,158.8,324,150.4c0-11.28,9.12-20.56,24.16-20.56c7.12,0,13.28,2,17.2,4.32l-3.2,9.28 c-2.72-1.76-7.84-4.08-14.32-4.08c-7.52,0-11.76,4.32-11.76,9.52c0,5.76,4.16,8.4,13.28,11.84c12.16,4.64,18.4,10.72,18.4,21.12 c0,12.32-9.52,20.96-26.16,20.96c-7.68,0-14.8-1.92-19.68-4.8L325.2,188.48z"></path>
                        <path style="fill:#FFFFFF;"
                              d="M435.84,368.16H270.96c-8.24,0-14.96-6.72-14.96-14.96V248.24c0-8.24,6.72-14.96,14.96-14.96h164.88 c8.24,0,14.96,6.72,14.96,14.96v104.88C450.8,361.44,444.08,368.16,435.84,368.16z"></path>
                        <polygon style="fill:#FFFFFF;" points="405.84,413.12 405.84,353.2 330.88,353.2 "></polygon> </g>
                      <rect x="345.92" y="278.24" width="14.96" height="14.96"></rect>
                      <rect x="315.92" y="278.24" width="14.96" height="14.96"></rect>
                      <rect x="285.92" y="278.24" width="14.96" height="14.96"></rect>
                      <rect x="375.84" y="278.24" width="14.96" height="14.96"></rect>
                      <rect x="405.84" y="278.24" width="14.96" height="14.96"></rect>
                      <rect x="345.92" y="308.24" width="14.96" height="14.96"></rect>
                      <rect x="375.84" y="308.24" width="14.96" height="14.96"></rect>
                      <rect x="405.84" y="308.24" width="14.96" height="14.96"></rect> </g></svg>
                </div>
                <div class="my-auto">
                  <h6 class="mb-0 text-sm">SMS</h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-sm font-weight-bold mb-0">SMS me when floor below $100</p>
            </td>
            <td>
              <span class="text-xs font-weight-bold">Enabled</span>
            </td>
            <td class="align-middle text-center">
              <div class="d-flex align-items-center justify-content-center">
                <span class="me-2 text-xs font-weight-bold">80%</span>
                <div>
                  <soft-progress
                      color="info"
                      variant="gradient"
                      :percentage="80"
                  />
                </div>
              </div>
            </td>
            <td class="align-middle">
              <button
                  class="btn btn-link text-secondary mb-0"
                  aria-haspopup="true"
                  aria-expanded="false"
              >
                <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SoftProgress from "@/components/SoftProgress";

export default {
  name: "projects-table",
  components: {
    SoftProgress,
  },
};
</script>
