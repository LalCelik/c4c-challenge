import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';
import { PartnerData } from '../types';

interface DashboardProps {}

/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/
function Dashboard({}: DashboardProps) {
  // State to hold the partners data, changed from an array to an object
  const [partners, setPartners] = useState<PartnerData>({});

  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000/partners') // Ensure this endpoint matches your backend
      .then((res) => res.json())
      .then((data: PartnerData) => {
        setPartners(data); // Set the state with the object data
      })
      .catch((error) => {
        console.error('Error fetching partners:', error);
      });
  }, []);

  return (
    <div id="main-content">
      <div id="main-partners-grid">
        {Object.entries(partners).map(([id, partner]) => (
          <PartnerTile key={id} partnerData={partner} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
