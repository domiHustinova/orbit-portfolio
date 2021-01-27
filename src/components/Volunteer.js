import React from "react";

import Card, {
  CardHeader,
  CardSection,
  CardSectionHeader,
  CardSectionContent,
} from "@kiwicom/orbit-components/lib/Card";

import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";
import Heading from "@kiwicom/orbit-components/lib/Heading";

import Trip from "@kiwicom/orbit-components/lib/icons/Trip";

const Volunteer = () => (
  <Card>
    <CardHeader title="Volunteer Experience" icon={<Trip />} />

    <CardSection expandable>
      <CardSectionHeader>
        <Stack direction="row" align="center" justify="between">
          <Stack direction="column" spacing="tight" grow={false} shrink>
            <Heading element="h4" type="title4">
              Workshop Instructor
            </Heading>
            <Text type="secondary" size="small">
              Forum on Women in Tech
            </Text>
          </Stack>
          <Stack>
            <Text type="secondary" size="small" align="right">
              06/2018
            </Text>
          </Stack>
        </Stack>
      </CardSectionHeader>
      <CardSectionContent>
        <Stack direction="column">
          <Text type="secondary">
            I was co-instructor of workshop called Marshmallow Towers. The main
            aim of the workshop was to show participants how to communicate
            better in a team.
          </Text>
          <TextLink href="https://www.womenintech.cz" external type="secondary">
            Women In Tech
          </TextLink>
        </Stack>
      </CardSectionContent>
    </CardSection>
  </Card>
);

export default Volunteer;
