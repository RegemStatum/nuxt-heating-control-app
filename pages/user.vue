<script setup lang="ts">
const { logoutUser } = useFirebaseAuth();

const handleUserLogout = async () => {
  try {
    await logoutUser();
    navigateTo("/auth/login");
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <PagesPageTitle title="User" />
  <button @click="handleUserLogout">Log out</button>
</template>
