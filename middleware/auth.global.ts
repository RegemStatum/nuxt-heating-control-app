export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useFirebaseAuth();

  enum Path {
    SIGN_UP = "/auth/signup",
    LOG_IN = "/auth/login",
  }

  if (!user.value && to.path !== Path.SIGN_UP && to.path !== Path.LOG_IN) {
    return navigateTo("/auth/signup");
  }
});
