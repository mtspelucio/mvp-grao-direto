import Routes from "./routes";
import GlobalStyle from "./globalStyles";
import { AuthProvider } from './auth';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyle />
    </AuthProvider>
  );
}