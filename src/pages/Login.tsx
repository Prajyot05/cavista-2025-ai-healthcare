import GoogleLoginButton from "../components/GoogleLoginButton";

const Login = () => {
  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
      <GoogleLoginButton />
    </div>
  );
};

export default Login;
