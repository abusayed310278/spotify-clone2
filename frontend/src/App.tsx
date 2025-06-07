
import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import { Toaster } from "react-hot-toast";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage";

function App() {
  return (
    <>
     

      {/* <header>
        <SignedOut>
          <SignInButton>
            <Button>
              Sign In
            </Button>

          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header> */}
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/auth-callback" element={<AuthCallbackPage />}/>


      </Routes>

      <Toaster />

    </>
  );
}

export default App;
