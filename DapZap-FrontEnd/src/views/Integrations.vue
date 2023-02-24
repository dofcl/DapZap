<template>
  <div class="py-2 container-fluid">
    <div class="mt-2 row">
      <div class="col-12">
        <projects-table/>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectsTable from "./components/ProjectsTable";

export default {
  name: "Integrations",
  components: {
    ProjectsTable,
  },
};
</script>
