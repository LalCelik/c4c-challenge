import { PartnerData } from "../types";
import './PartnerTile.css';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

interface PartnerTileProps {
  partnerData: PartnerData
}


function PartnerTile({ partnerData }: PartnerTileProps) {
  return (
    <div className="partner-tile">
      <img className="partner-thumbnail" src='' />
      <img className="partner-photo" src={partnerData.thumbnailUrl} alt={partnerData.name} />
      <hr />
      <div className="partner-info"> 
      <h2>{partnerData.name}</h2>
      <p>{partnerData.description}</p>
      <p></p>
      </div>
    </div>
  )
}

export default PartnerTile;