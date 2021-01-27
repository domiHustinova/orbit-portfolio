import React from "react";

import { LINKS } from "../services/data";
import { renderIcon } from "../services/helpers";
import CardLayout from "./CardLayout";

import { CardSection } from "@kiwicom/orbit-components/lib/Card";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Button from "@kiwicom/orbit-components/lib/Button";
import Text from "@kiwicom/orbit-components/lib/Text";

const About = () => (
  <CardLayout icon="about" title="ABOUT ME">
    <CardSection>
      <Stack direction="column">
        <Stack justify="center" direction="row" spacing="compact">
          {LINKS.map((link) => (
            <Button
              iconLeft={renderIcon(link.name)}
              circled
              external={link.external}
              size="small"
              type={link.buttonType}
              href={link.href}
            />
          ))}
        </Stack>
        <Text></Text>
      </Stack>
    </CardSection>
  </CardLayout>
);

export default About;
