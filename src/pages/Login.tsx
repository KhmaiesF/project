import React, { useState } from 'react';
import { Mail, Lock, Brain, User, Calendar, School } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [isStudent, setIsStudent] = useState(false);
  const [establishment, setEstablishment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-12 w-12 text-blue-500" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent mb-2">
            Welcome to MindSpace
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your safe space for mental wellness
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-6">
          {!isLogin && (
            <>
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="input pl-10"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="age" className="block text-sm font-medium">
                  Age
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="input pl-10"
                    placeholder="Enter your age"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Are you a student?
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={isStudent}
                    onChange={(e) => setIsStudent(e.target.checked)}
                    className="rounded text-blue-500"
                  />
                  <span className="text-sm">Yes, I am a student</span>
                </div>
              </div>

              {isStudent && (
                <div className="space-y-2">
                  <label htmlFor="establishment" className="block text-sm font-medium">
                    Educational Establishment
                  </label>
                  <div className="relative">
                    <School className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="establishment"
                      type="text"
                      value={establishment}
                      onChange={(e) => setEstablishment(e.target.value)}
                      className="input pl-10"
                      placeholder="Enter your school/university"
                      required
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input pl-10"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input pl-10"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-primary w-full">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>

          <div className="flex justify-between text-sm">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 hover:text-blue-600"
            >
              {isLogin ? 'Create an account' : 'Already have an account?'}
            </button>
            {isLogin && (
              <a href="#" className="text-blue-500 hover:text-blue-600">
                Forgot your password?
              </a>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;