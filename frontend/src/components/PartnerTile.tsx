import React from 'react';
import { PartnerData } from '../types';
import './PartnerTile.css';

interface PartnerTileProps {
  partnerData: PartnerData;
  onDelete: (id: number) => void;
}

function PartnerTile({ partnerData, onDelete }: PartnerTileProps) {
  const handleDeleteClick = () => {
    //to delete based on id
    onDelete(partnerData.id);
  };

  return (
    <div className="partner-tile">
      <img className="partner-thumbnail" src={partnerData.thumbnailUrl} alt={partnerData.name} />
      <h3>{partnerData.name}</h3>
      <p className="partner-info">{partnerData.description}</p>
      <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default PartnerTile;
