import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';
import AddPartner from './AddPartner';
import { PartnerData } from '../types';

interface DashboardProps {}

/*
  Component containing dashboard information
*/
function Dashboard({}: DashboardProps) {
  const [partners, setPartners] = useState<PartnerData>({});

  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000/partners') //Connect to backend
      .then((res) => res.json())
      .then((data: PartnerData) => {
        setPartners(data); //Set partner data
      })
      .catch((error) => {
        console.error('Error fetching partners:', error);
      });
  }, []);

  //handles deleting partners
  const handleDeletePartner = (id: number) => {
    fetch(`http://localhost:4000/partners/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Removes partner
        setPartners((prevPartners) => prevPartners.filter((partner) => partner.id !== id));
      })
      .catch((error) => {
        console.error('Error when deleting:', error);
      });
  };

  return (
    <div id="main-content">
      <div id="main-partners-grid">
      <AddPartner />
      </div>
      <div id="main-partners-grid">
        
        {Object.entries(partners).map(([id, partner]) => (
          <PartnerTile key={partner.id} partnerData={partner} onDelete={handleDeletePartner} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
