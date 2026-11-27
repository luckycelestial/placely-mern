import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Navbar from '../Navbar.jsx';
import { profileSchema } from '../components/profileSchema.js';

export default function Profile() {
  const [saved, setSaved] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: '',
      email: '',
      college: '',
      cgpa: '',
    },
  });

  useEffect(() => {
    const storedProfile = localStorage.getItem('studentProfile');
    if (storedProfile) {
      reset(JSON.parse(storedProfile));
    }
  }, [reset]);

  function onSubmit(data) {
    localStorage.setItem('studentProfile', JSON.stringify(data));
    setSaved(true);
  }

  return (
    <div>
      <Navbar />
      <h1>Profile</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" type="text" {...register('fullName')} />
          {errors.fullName && <p>{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="college">College</label>
          <input id="college" type="text" {...register('college')} />
          {errors.college && <p>{errors.college.message}</p>}
        </div>

        <div>
          <label htmlFor="cgpa">CGPA</label>
          <input id="cgpa" type="number" step="0.01" {...register('cgpa')} />
          {errors.cgpa && <p>{errors.cgpa.message}</p>}
        </div>

        <button type="submit">Save Profile</button>
      </form>

      {saved && <p>Profile saved.</p>}
    </div>
  );
}
