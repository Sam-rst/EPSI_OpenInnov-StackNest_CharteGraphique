import { AlertCircle, Loader2 } from 'lucide-react';
import logo from '@/assets/logo.png';

export function LoginMockup() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#032233] via-[#041e2b] to-[#021519] flex items-center justify-center p-8">
      {/* Main Login Card */}
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img src={logo} alt="StackNest" className="h-20 w-auto" />
          </div>
          <p className="text-gray-400 text-sm">Build Fast. Deploy Smart.</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-[#0a2433]/80 backdrop-blur-sm border border-[#0d9297]/20 rounded-lg p-8 shadow-2xl">
          <h1 className="text-2xl font-semibold text-white mb-2">Welcome back</h1>
          <p className="text-gray-400 text-sm mb-6">Sign in to your StackNest account</p>

          {/* Error State Example */}
          <div className="bg-[#c42b1c]/10 border border-[#c42b1c]/30 rounded-md p-3 mb-6 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-[#c42b1c] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[#ff6b6b] text-sm font-medium">Authentication failed</p>
              <p className="text-gray-400 text-xs mt-1">Invalid email or password. Please try again.</p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Email Input - Error State */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-2.5 bg-[#021519] border border-[#c42b1c] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c42b1c] focus:border-transparent transition-all"
                defaultValue="invalid@example.com"
              />
              <p className="text-[#ff6b6b] text-xs mt-1.5">Please enter a valid email address</p>
            </div>

            {/* Password Input - Normal State */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 bg-[#021519] border border-[#0d9297]/30 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d9297] focus:border-transparent transition-all hover:border-[#0d9297]/50"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded bg-[#021519] border border-[#0d9297]/30 text-[#0d9297] focus:ring-2 focus:ring-[#0d9297]" />
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
              </label>
              <a href="#" className="text-sm text-[#0d9297] hover:text-[#0fa8ad] transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Sign In Button - Loading State */}
            <button className="w-full bg-gradient-to-r from-[#0d9297] to-[#0b7b7f] hover:from-[#0fa8ad] hover:to-[#0d8a8f] text-white font-medium py-2.5 rounded-md transition-all duration-200 shadow-lg shadow-[#0d9297]/20 flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Signing in...
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-[#0a2433] text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* SSO Options */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#021519] border border-gray-700 hover:border-[#0d9297]/50 rounded-md text-gray-300 hover:text-white transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                </svg>
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#021519] border border-gray-700 hover:border-[#0d9297]/50 rounded-md text-gray-300 hover:text-white transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{' '}
            <a href="#" className="text-[#0d9297] hover:text-[#0fa8ad] font-medium transition-colors">
              Sign up
            </a>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-600 mt-6">
          © 2026 StackNest. Enterprise Cloud Platform.
        </p>
      </div>
    </div>
  );
}
