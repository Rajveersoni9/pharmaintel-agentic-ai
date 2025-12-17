import { useState } from 'react';
import logo from 'figma:asset/b8d1d022d2f50432eda82d5bc0b5e2ac10703dfe.png';
import { Eye, EyeOff } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation - in real app, this would authenticate with backend
    if (username && email && password) {
      onLogin();
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #5B5FE3 0%, #4E9FEB 35%, #3FBFDB 65%, #2DD4BF 100%)'
      }}
    >
      {/* Decorative background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(91, 95, 227, 0.5) 0%, transparent 70%)',
            top: '10%',
            right: '10%',
            filter: 'blur(60px)'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(78, 159, 235, 0.4) 0%, transparent 70%)',
            bottom: '5%',
            left: '5%',
            filter: 'blur(80px)'
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-35"
          style={{
            background: 'radial-gradient(circle, rgba(63, 191, 219, 0.5) 0%, transparent 70%)',
            top: '50%',
            right: '15%',
            filter: 'blur(50px)'
          }}
        />
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <img 
              src={logo} 
              alt="PharmaIntel Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl text-white">PharmaIntel</span>
          </div>
          <h1 className="text-white mb-2">Login to Your Account</h1>
          <p className="text-white/80 text-sm">Access your pharmaceutical research intelligence platform</p>
        </div>

        {/* Login Form */}
        <div className="bg-black/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-white text-sm">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/90 border-2 border-transparent focus:border-white focus:bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none transition-all"
                placeholder="Enter your username"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-white text-sm">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/90 border-2 border-transparent focus:border-white focus:bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-white text-sm">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/90 border-2 border-transparent focus:border-white focus:bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none transition-all pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-white/30 bg-white/20 text-purple-600 focus:ring-2 focus:ring-white/50"
                />
                <span className="text-sm text-white/90">Remember me</span>
              </label>
              <button type="button" className="text-sm text-white/90 hover:text-white transition-colors">
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-white text-purple-900 hover:bg-white/95 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Login
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-white/70">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/30 hover:bg-white/20 transition-colors text-white"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-sm">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 border border-white/30 hover:bg-white/20 transition-colors text-white"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-sm">GitHub</span>
              </button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <p className="text-sm text-white/80">
                Don't have an account?{' '}
                <button type="button" className="text-white hover:underline">
                  Sign up
                </button>
              </p>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-white/60 text-sm">
          <p>© 2024 PharmaIntel AI. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
