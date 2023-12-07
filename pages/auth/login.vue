<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <AuthForm :auth-type="'login'" />
</template>
