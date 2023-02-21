<template>
  <nav aria-label="breadcrumb">
    <h4 class="mb-0 mt-2 font-weight-bolder" :class="textWhite ? 'text-white' : ''">
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
