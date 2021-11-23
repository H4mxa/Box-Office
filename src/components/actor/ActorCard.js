import React from "react";

const ActorCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <div>
      <div>
        <img
          style={{ height: "250px", width: "200px" }}
          src={image}
          alt="actor"
        />
      </div>
      <h1>
        {name} {gender ? `${gender}` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : `No country known`}</p>
      {birthday ? <p>Born `${birthday}`</p> : null}
      <p>{deathday ? `Dead ${deathday}` : "Alive"}</p>
    </div>
  );
};

export default ActorCard;
