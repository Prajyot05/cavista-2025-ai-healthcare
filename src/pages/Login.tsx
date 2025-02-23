import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

const Login = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const token = await result.user.getIdToken();

      const response = await fetch(
        `${import.meta.env.VITE_SERVER}/api/auth/patient`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );

      const userData = await response.json();
      console.log(userData);
      // login(userData);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <button
        onClick={handleGoogleSignIn}
        className="p-3 bg-gray-400 rounded-md"
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;
