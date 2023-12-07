<script setup lang="ts">
interface Props {
  authType: "signup" | "login";
}
const { authType } = defineProps<Props>();

interface TemplateInfo {
  heading: string;
}
const signupTemplateInfo: TemplateInfo = {
  heading: "Sign up",
};
const loginTemplateInfo: TemplateInfo = {
  heading: "Log in",
};
const templateInfo =
  authType === "signup" ? signupTemplateInfo : loginTemplateInfo;
</script>

<template>
  <div class="container">
    
    <h1>{{ templateInfo.heading }}</h1>
  </div>
</template>

<style scoped lang="scss"></style>
