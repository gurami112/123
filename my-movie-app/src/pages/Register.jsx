import AuthForm from "../components/AuthForm";
export default function Register({ onLogin }) {
  return <AuthForm type="register" onLogin={onLogin} />;
}
