import { useEffect, useState } from 'react';
import Navbar from '../Navbar.jsx';

const sampleDrives = [
  { id: 1, company: 'Acme Tech', role: 'Software Engineer', package: '12 LPA' },
  { id: 2, company: 'CloudNine', role: 'Frontend Developer', package: '10 LPA' },
  { id: 3, company: 'DataPulse', role: 'Backend Intern', package: '8 LPA' },
];

export default function Dashboard() {
  const [drives, setDrives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [appliedIds, setAppliedIds] = useState([]);
  const [userEmail] = useState(() => localStorage.getItem('userEmail') || '');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDrives(sampleDrives);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  function handleApply(id) {
    if (!appliedIds.includes(id)) {
      setAppliedIds([...appliedIds, id]);
    }
  }

  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      {userEmail && <p>Signed in as: {userEmail}</p>}

      {loading ? (
        <p>Loading placement drives...</p>
      ) : (
        <ul>
          {drives.map((drive) => {
            const isApplied = appliedIds.includes(drive.id);
            return (
              <li key={drive.id}>
                <strong>{drive.company}</strong> - {drive.role} ({drive.package}){' '}
                <button
                  type="button"
                  disabled={isApplied}
                  onClick={() => handleApply(drive.id)}
                >
                  {isApplied ? 'Applied' : 'Apply'}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
