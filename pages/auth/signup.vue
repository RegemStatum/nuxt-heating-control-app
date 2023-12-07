<script setup lang="ts">
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <AuthForm :auth-type="'signup'" />
</template>
