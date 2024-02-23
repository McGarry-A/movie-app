<template>
  <div>
    <p>{{ sayHello("Ahmed") }} {{ test }}</p>
  </div>
</template>

<script setup lang="ts">
const test = ref("Ahmed");
const { sayHello } = myStore();
</script>
