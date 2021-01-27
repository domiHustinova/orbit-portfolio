import React from "react";

import {
  InformationCircle,
  Sightseeing,
  InsuranceConfirmed,
  Code,
  Chart,
  Trip,
  City,
  Email,
  Linkedin,
  PriorityBoarding,
} from "@kiwicom/orbit-components/lib/icons";

export const renderIcon = (icon) => {
  switch (icon) {
    case "about":
      return <InformationCircle />;
    case "education":
      return <Sightseeing />;
    case "licenses":
      return <InsuranceConfirmed />;
    case "skills":
      return <Chart />;
    case "volunteer":
      return <Trip />;
    case "work":
      return <City />;
    case "email":
      return <Email />;
    case "linkedin":
      return <Linkedin />;
    case "code":
      return <Code />;
    case "arrows":
      return <PriorityBoarding />;
    default:
      return null;
  }
};
