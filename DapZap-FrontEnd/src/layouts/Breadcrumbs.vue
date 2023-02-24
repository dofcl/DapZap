<template>
  <nav aria-label="breadcrumb">
    <h4 v-if="currentPage && currentPage !== '/'" class="mb-0 mt-0 font-weight-bolder" :class="textWhite ? 'text-white' : ''">
      {{ currentPage }}
    </h4>
  </nav>
</template>

<script>
export default {
  name: "breadcrumbs",
  props: {
    currentPage: {
      required: true,
    },
    textWhite: {
      type: String,
    },
  },
};
</script>
