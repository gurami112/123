import AuthForm from "../components/AuthForm";
export default function Login({ onLogin }) {
  return <AuthForm type="login" onLogin={onLogin} />;
}
