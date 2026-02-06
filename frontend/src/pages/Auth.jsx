import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { ArrowRight } from "lucide-react";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-emerald-800 to-green-500 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative w-full max-w-6xl">
        {/* Main Container with Sliding Effect */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Sliding Overlay Panel */}
            <div
              className={`absolute top-0 left-0 w-full lg:w-1/2 h-full bg-gradient-to-br from-green-900 to-emerald-600 transition-transform duration-700 ease-in-out z-10 ${
                isSignup ? "lg:translate-x-full" : "lg:translate-x-0"
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full p-12 text-white text-center">
                <div className="mb-6">
                  <img
                    src="/logo.png"
                    alt="SmartKrishi Logo"
                    className="h-20 w-auto mx-auto mb-6"
                  />
                </div>

                {!isSignup ? (
                  <>
                    <h2 className="text-4xl font-black mb-4">
                      New to SmartKrishi?
                    </h2>
                    <p className="text-green-100 mb-8 text-lg leading-relaxed max-w-md">
                      Join thousands of farmers who are already using AI to
                      detect crop diseases, get market insights, and maximize
                      their profits!
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <span className="text-green-50">
                          95% Disease Detection Accuracy
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <span className="text-green-50">
                          Real-time Market Prices
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <span className="text-green-50">
                          Smart Farming Calendar
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsSignup(true)}
                      className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                    >
                      Sign In
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="text-4xl font-black mb-4">Welcome Back!</h2>
                    <p className="text-green-100 mb-8 text-lg leading-relaxed max-w-md">
                      Sign in to access your personalized farming dashboard,
                      crop health reports, and market intelligence.
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <span className="text-green-50">
                          Track Your Crop Progress
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <span className="text-green-50">View Saved Reports</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                        <span className="text-green-50">
                          Access Expert Recommendations
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsSignup(false)}
                      className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                    >
                      Create Account
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Login Form - Left Side */}
            <div
              className={`flex items-center justify-center p-12 transition-opacity duration-500 ${
                isSignup
                  ? "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"
                  : "opacity-100"
              }`}
            >
              <Login onToggle={() => setIsSignup(true)} />
            </div>

            {/* Signup Form - Right Side */}
            <div
              className={`flex items-center justify-center p-12 transition-opacity duration-500 ${
                !isSignup
                  ? "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"
                  : "opacity-100"
              }`}
            >
              <Signup onToggle={() => setIsSignup(false)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;