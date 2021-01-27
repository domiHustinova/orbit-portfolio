import React from "react";
import { renderIcon } from "../services/helpers";

import Card, { CardHeader } from "@kiwicom/orbit-components/lib/Card";

const CardLayout = ({ icon, title, children }) => (
  <Card>
    <CardHeader icon={renderIcon(icon)} title={title} />
    {children}
  </Card>
);

export default CardLayout;
