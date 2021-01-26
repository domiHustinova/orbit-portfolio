import React from "react";

import Card, {
  CardHeader,
  CardSection,
} from "@kiwicom/orbit-components/lib/Card";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Button from "@kiwicom/orbit-components/lib/Button";
import Text from "@kiwicom/orbit-components/lib/Text";

import Code from "@kiwicom/orbit-components/lib/icons/Code";
import Email from "@kiwicom/orbit-components/lib/icons/Email";
import Linkedin from "@kiwicom/orbit-components/lib/icons/Linkedin";
import InformationCircle from "@kiwicom/orbit-components/lib/icons/InformationCircle";

const About = () => (
  <Card>
    <CardHeader icon={<InformationCircle />} title="ABOUT ME" />
    <CardSection>
      <Stack direction="column">
        <Stack justify="center" direction="row" spacing="compact">
          <Button
            iconLeft={<Email />}
            circled
            size="small"
            type="primary"
            href="mailto:domi.hustinova@gmail.com"
          />
          <Button
            iconLeft={<Linkedin />}
            circled
            external
            size="small"
            type="warning"
            href="https://www.linkedin.com/in/dominika-hustinova/"
          />
          <Button
            iconLeft={<Code />}
            circled
            external
            size="small"
            type="critical"
            href="https://github.com/domiHustinova"
          />
        </Stack>
        <Text></Text>
      </Stack>
    </CardSection>
  </Card>
);

export default About;
