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
  <h1>User page</h1>
  <button @click="handleUserLogout">Log out</button>
</template>
