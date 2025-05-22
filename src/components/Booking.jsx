import {
  faCalendarAlt,
  faCar,
  faLocationDot,
  faSpinner,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

const Booking = ({
  carModels,
  bookingOpen,
  setBookingOpen,
  selectedModel,
  setSelectedModel,
  setSuccessOpen,
}) => {
  const [bookingLoading, setBookingLoading] = useState(false);
  const [pickupDate, setPickupDate] = useState(new Date());
  const [dropDate, setDropDate] = useState(new Date());

  const dropRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();

    setBookingLoading(true);

    setTimeout(() => {
      setBookingLoading(false);
      setBookingOpen(false);
      setSuccessOpen(true);
    }, 2000);

    setTimeout(() => {
      setSuccessOpen(false);
    }, 6000);

    console.log("Form submitted");
  }

  return (
    <div className={`booking ${bookingOpen && "booking-open"}`}>
      <div className="booking__container">
        <button
          className="booking__close"
          onClick={() => setBookingOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h3 className="booking__title">Book a Car</h3>
        <form
          action=""
          className="booking__form"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faCar} />
              <span>
                Select Your Model<span className="required">*</span>
              </span>
            </label>
            <select
              className="form__item__select"
              value={selectedModel}
              onChange={(event) => setSelectedModel(event.target.value)}
            >
              <option value="" disabled>
                Select
              </option>
              {carModels.map((model) => (
                <option key={model.id} value={`${model.make} ${model.model}`}>
                  {model.make} {model.model}
                </option>
              ))}
            </select>
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                Pick-up<span className="required">*</span>
              </span>
            </label>
            <select className="form__item__select" required>
              <option value="" disabled>
                Select
              </option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Sydney">Sydney</option>
              <option value="Beijing">Beijing</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                Drop-off<span className="required">*</span>
              </span>
            </label>
            <select className="form__item__select" required>
              <option value="" disabled>
                Select
              </option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Sydney">Sydney</option>
              <option value="Beijing">Beijing</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>
                Pick-up<span className="required">*</span>
              </span>
            </label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={new Date(pickupDate).toISOString().split("T")[0]}
              onChange={(event) => {
                setPickupDate(event.target.value);
                setDropDate(
                  new Date(event.target.value).setDate(
                    new Date(event.target.value).getDate() + 1
                  )
                );
                dropRef.current.min = event.target.value;
                dropRef.current.focus();
                dropRef.current.style.borderColor = "var(--primary)";
              }}
              className="form__item__input"
              required
            />
          </div>
          <div className="form__item">
            <label className="form__item__label">
              <FontAwesomeIcon icon={faCalendarAlt} />
              <span>
                Drop-off<span className="required">*</span>
              </span>
            </label>
            <input
              type="date"
              ref={dropRef}
              onChange={(event) => setDropDate(event.target.value)}
              min={new Date(pickupDate).toISOString().split("T")[0]}
              value={new Date(dropDate).toISOString().split("T")[0]}
              className="form__item__input"
              required
            />
          </div>
          <div className="form__item">
            <button className="form__item__submit">
              {bookingLoading ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="form__item__submit__loading"
                />
              ) : (
                "Book Ride"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
