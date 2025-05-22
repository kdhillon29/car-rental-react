import React, { useEffect, useState } from "react";
import VehicleModels from "../components/VehicleModels";
import axios from "axios";
import ModelHero from "../components/ModelHero";
import Booking from "../components/Booking";
import SuccessPopup from "../components/ui/SuccessPopup";

const VehicleModelsPage = () => {
  const [carModels, setCarModels] = useState([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Ford Focus");
  const [successOpen, setSuccessOpen] = useState(false);

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
      <SuccessPopup successOpen={successOpen} />
      <Booking
        carModels={carModels}
        bookingOpen={bookingOpen}
        setBookingOpen={setBookingOpen}
        selectedModel={selectedModel}
        setSelectedModel={setSelectedModel}
        setSuccessOpen={setSuccessOpen}
      />
      <ModelHero />
      <VehicleModels
        {...{ carModels, setCarModels, setBookingOpen, setSelectedModel }}
      />
    </div>
  );
};

export default VehicleModelsPage;
