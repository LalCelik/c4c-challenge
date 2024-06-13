import express from 'express';
import { PartnerData } from './types';
import fs from 'fs';

const app = express();
const port = 4000;
const partnerFilePath = "frontend/src/database/partner.json";

let partners: PartnerData[] = [];

const readPartnerDataFromFile = () => {
  fs.readFile(partnerFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Issue reading partner data: ${err}`);
      return;
    }

    try {
      partners = JSON.parse(data);
      console.log('Loaded partner data');
      startServer();
    } catch (err) {
      console.error(`Issue with JSON: ${err}`);
    }
  });
};

const writePartnerDataToFile = async () => {
  try {
    await fs.writeFile(partnerFilePath, JSON.stringify(partners, null, 2), 'utf8');
    console.log('Partner data saved');
  } catch (err) {
    console.error(`Error writing to file: ${err}`);
  }
};

readPartnerDataFromFile();

const startServer = () => {
  app.use(express.json());
  app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

  app.get('/', (_req, res) => {
    res.status(200).send(partners);
  });

  app.post('/partners', async (req, res) => {
    const newPartner: PartnerData = req.body;
  
    partners.push(newPartner);
  
    // Adding the updated partners list to the JSON file
    try {
      await writePartnerDataToFile();
      res.status(201).send(newPartner);
      console.log('New partner added and data saved.');
    } catch (err) {
      res.status(500).send({ error: 'Failed to save partner data' });
      console.error(`Error saving new partner: ${err}`);
    }
  });

  // Get all partners
  app.get('/partners', (_req, res) => {
    res.send(partners);
  });

  // Start the backend
  app.listen(port, () => {
    console.log(`Express server starting on port ${port}!`);
  });

  app.delete('/partners/:id', (req, res) => {
    const { id } = req.params;
    const partnerIndex = partners.findIndex((partner) => partner.id === Number(id));
    if (partnerIndex !== -1) {
      partners.splice(partnerIndex, 1);
      // Save the updated partners array back to JSON file
      fs.writeFile(partnerFilePath, JSON.stringify(partners, null, 2), (err) => {
        if (err) {
          console.error(`Error saving to file: ${err}`);
        } else {
          console.log(`Partner deleted successfully`);
        }
      });
      res.status(200).json({ message: `Partner deleted successfully` });
    } else {
      res.status(404).json({ error: `Partner not found.` });
    }
  });
};
