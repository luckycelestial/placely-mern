import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../components/loginSchema.js';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data) {
    localStorage.setItem('userEmail', data.email);
    navigate('/student/dashboard');
  }

  return (
    <div className="flex flex-row">
      <div className="w-1/2 h-screen border-2 border-gray-500">
        <header className="text-5xl">
          <h1 className="font-bold">The Future of Campus Hiring.</h1>
          <h2>
            Experience a unified placement ecosystem designed for the next
            generation of talent and recruiters.
          </h2>
        </header>
      </div>

      <div className="w-1/2 h-screen border-2 border-blue-500">
        <div className="p-4 font-bold bg-blue-700 text-4xl text-green-500 border border-gray rounded-md mx-auto max-h-5xl">
          <Link to="/student/dashboard">Login with Google</Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label   htmlFor="email">Email</label>
            <input id="email" type="email" {...register('email')} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button type="submit">Login</button>
        </form>

        <div>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
