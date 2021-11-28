import React from "react";
import IMAGE_NOT_FOUND from "../../image/not-found.png";

import { FlexGrid } from "../Styled";

import ActorCard from "./ActorCard";

const ActorGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
