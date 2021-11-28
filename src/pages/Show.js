import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { apiGet } from "../misc/config";

const Show = () => {
  let { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then((result) =>
      setShow(result)
    );
  }, [id]);

  console.log(show);

  return <div></div>;
};

export default Show;
