import {useState, FormEvent} from 'react';
import {Eye, EyeOff, LogIn} from 'lucide-react';
import {motion} from 'framer-motion';

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', {username, password});
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[#f5bc28] px-4 font-sans"
      id="signin-container"
    >
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className="w-full max-w-sm space-y-8"
        id="signin-card"
      >
        <div className="text-center">
          <h1
            className="font-display mb-8 text-4xl font-bold tracking-tight text-[#1a1a1a]"
            id="signin-title"
          >
            Agent Login
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" id="signin-form">
          <div className="group relative" id="username-container">
            <input
              id="username-input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="placeholder:text-gray-400 text-gray-900 w-full rounded-md border-2 border-transparent bg-white px-4 py-3 shadow-sm transition-all duration-200 focus:outline-none"
              required
            />
          </div>

          <div className="group relative" id="password-container">
            <input
              id="password-input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="placeholder:text-gray-400 text-gray-900 w-full rounded-md border-2 border-transparent bg-white px-4 py-3 pr-12 shadow-sm transition-all duration-200 focus:outline-none"
              required
            />
            <button
              id="toggle-password"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-900 hover:text-gray-600 absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
            >
              {showPassword ? (
                <EyeOff size={20} id="eye-off-icon" />
              ) : (
                <Eye size={20} id="eye-icon" />
              )}
            </button>
          </div>

          <motion.button
            id="login-button"
            whileHover={{scale: 1.01}}
            whileTap={{scale: 0.99}}
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-md border-t border-white/30 bg-gradient-to-b from-[#fcd34d] to-[#d97706] py-4 font-bold text-black shadow-lg transition-all duration-200 hover:from-[#fde047] hover:to-[#b45309]"
          >
            <span className="text-lg">Login</span>
            <LogIn size={20} className="stroke-[3px]" />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
