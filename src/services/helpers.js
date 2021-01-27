import React from "react";

import { Code, Email, Linkedin } from "@kiwicom/orbit-components/lib/icons";

export const renderIcon = (icon) => {
  switch (icon) {
    case "email":
      return <Email />;
    case "linkedin":
      return <Linkedin />;
    case "code":
      return <Code />;
    default:
      return null;
  }
};
