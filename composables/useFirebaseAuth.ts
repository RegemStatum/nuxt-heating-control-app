import { createUserWithEmailAndPassword, type User } from "firebase/auth";

const useFirebaseAuth = () => {
  const { $auth } = useNuxtApp();

  const user = useState<User | null>("user", () => null);

  const registerUser = async (email: string, password: string) => {
    const userCredentials = await createUserWithEmailAndPassword(
      $auth,
      email,
      password
    );
    if (userCredentials) {
      user.value = userCredentials.user;
    }
  };

  return {
    user,
    registerUser,
  };
};

export default useFirebaseAuth;
