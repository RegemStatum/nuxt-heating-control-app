export default defineNuxtRouteMiddleware((to, from) => {
  // Skip on server
  if (process.server) {
    return;
  }

  const { user } = useFirebaseAuth();

  const isNavigateToAuthPages = to.path.startsWith("/auth");

  // Set user if there is no current user and there is user in local storage
  const { checkIsUserInLocalStorage, setUserFromLocalStorage } =
    useFirebaseAuth();

  if (!user.value) {
    const isUserInLocalStorage = checkIsUserInLocalStorage();
    if (isUserInLocalStorage) {
      setUserFromLocalStorage();

      if (isNavigateToAuthPages) {
        return navigateTo("/");
      } else {
        return navigateTo(to);
      }
    }
  }

  // Redirect to home page if user is authenticated and
  // tries to navigate to auth pages
  if (user.value && isNavigateToAuthPages) {
    return navigateTo("/");
  }

  // Redirect to signup page if user is not authenticated
  if (!user.value && !isNavigateToAuthPages) {
    return navigateTo("/auth/signup");
  }
});
