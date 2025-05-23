import React from "react";
import Feature1 from "../assets/feature-1.png";
import Feature2 from "../assets/feature-2.png";
import Feature3 from "../assets/feature-3.png";
import Feature from "./ui/Feature";

const Features = () => {
  const features = [
    {
      image: Feature1,
      title: "Select Car",
      paragraph:
        "We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.",
    },
    {
      image: Feature2,
      title: "Contact Operator",
      paragraph:
        "Our knowledgeable and friendly operators are always ready to help with any questions or concerns",
    },
    {
      image: Feature3,
      title: "Let's Drive",
      paragraph:
        "Whether you're hitting the open road, we've got you covered with our wide range of cars",
    },
  ];
  return (
    <section id="features">
      <div className="container">
        <div className="row features__row">
          <h3 className="features__subtitle">Plan your trip now</h3>
          <h2 className="features__title">Quick and easy car rental</h2>
          <div className="features__list">
            {features.map((feature, index) => (
              <Feature
                key={index}
                image={feature.image}
                title={feature.title}
                paragraph={feature.paragraph}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
