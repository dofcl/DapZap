<template>
  <footer class="py-3 footer">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="mb-4 col-lg-6 mb-lg-0">
        </div>
        <div class="col-lg-6">
          <ul
              class="nav nav-footer justify-content-center justify-content-lg-end"
          >
            <li class="nav-item">
              ©
              {{ new Date().getFullYear() }} DapZap. Built during Flow Hackathon
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>
