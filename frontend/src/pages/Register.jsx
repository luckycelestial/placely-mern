import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerschema } from '../components/registerSchema.js';

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerschema),
  });

  function onSubmit(data) {
    localStorage.setItem('userEmail', data.email);
    navigate('/dashboard');
  }

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
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

        <div>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" {...register('age')} />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <button type="submit">Register</button>
      </form>

      <div>
        <Link to="/">Already have an account? Login</Link>
      </div>
    </div>
  );
}
