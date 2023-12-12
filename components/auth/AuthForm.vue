<script setup lang="ts">
interface Props {
  submitButtonText: string;
}
defineProps<Props>();

const { registerUser, loginUser } = useFirebaseAuth();

const authStore = useAuthStore();
const { authType, user, isLoading, error } = storeToRefs(authStore);
const { beginLoading, endLoading, setError } = authStore;

const getErrorMessageFromErrorCode = (errorCode: string) => {
  return errorCode.split("/")[1].split("-").join(" ");
};

const handleSubmit = async () => {
  try {
    beginLoading();

    validateAuthEmail(user.value.email, "email");
    validateAuthPassword(user.value.password, "password");

    switch (authType.value) {
      case AuthType.SIGN_UP:
        await registerUser(user.value.email, user.value.password);
        break;
      case AuthType.LOG_IN:
        await loginUser(user.value.email, user.value.password);
        break;
      default:
        throw new Error(`There is no ${authType.value} authentication type`);
    }

    await navigateTo("/");
    endLoading();
  } catch (err: any) {
    console.error(err);

    const errCode = err?.code;
    if (!errCode) {
      setError(err.type, err.message, err?.inputName || "");
      endLoading();
      return;
    }

    const errMessage = getErrorMessageFromErrorCode(errCode);
    setError(err.type, errMessage, err?.inputName || "");
    endLoading();
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form">
    <div class="inputs">
      <AuthFormEmailInput />
      <AuthFormPasswordInput />
    </div>
    <UiInfoMessage
      v-if="error.message && !error.inputName"
      type="error"
      :text="error.message"
    />
    <button :disabled="isLoading" type="submit" class="submit-btn">
      <p>{{ submitButtonText }}</p>
      <UiLoadersButtonLoader v-if="isLoading" />
    </button>
  </form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: getInd(600);
  .inputs {
    display: flex;
    flex-direction: column;
    gap: getInd(400);

    :deep(.input-container) {
      @include inputContainer;
    }
  }

  .submit-btn {
    @include primaryButton;

    display: flex;
    justify-content: center;
    gap: getInd(200);
  }
}
</style>
