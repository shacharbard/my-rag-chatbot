// src/app/flowiseService.js

import axios from 'axios';

const FLOWISE_API_URL = 'https://flowiseai-railway-bizai-development.up.railway.app/api/v1/prediction/e4c10533-7add-47a2-9ea7-f99c8fcd6b25'; // Replace with your actual Flowise API endpoint

export const getFlowiseResponse = async (data) => {
    try {
      const response = await fetch(FLOWISE_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching data from Flowise API', error);
      throw error;
    }
  };