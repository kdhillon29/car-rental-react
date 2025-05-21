import React, { useEffect, useState } from "react";
import VehicleModels from "../components/VehicleModels";
import axios from "axios";
import ModelHero from "../components/ModelHero";

const VehicleModelsPage = () => {
  const [carModels, setCarModels] = useState([]);
  async function fetchModels() {
    const { data } = await axios.get(
      "https://car-rental-api.up.railway.app/car"
    );

    const models = data.data;

    setCarModels(models);
  }
  useEffect(() => {
    fetchModels();
  }, []);
  return (
    <div>
      <ModelHero />

      <VehicleModels {...{ carModels, setCarModels }} />
    </div>
  );
};

export default VehicleModelsPage;
