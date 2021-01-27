import React from "react";

import CardLayout from "./CardLayout";
import { EDUCATION } from "../services/data";

import {
  CardSection,
  CardSectionHeader,
  CardSectionContent,
} from "@kiwicom/orbit-components/lib/Card";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Badge from "@kiwicom/orbit-components/lib/Badge";

const Education = () => (
  <CardLayout icon="education" title="Education">
    {EDUCATION.map((item) => (
      <CardSection expandable>
        <CardSectionHeader>
          <Stack direction="row" align="center" justify="center">
            <Stack direction="column" spacing="tight" grow={false} shrink>
              <Heading element="h4" type="title4">
                {item.field}
              </Heading>
              <Text type="secondary" size="small">
                {item.degree}, {item.school}
              </Text>
            </Stack>
            <Stack>
              <Text type="secondary" size="small" align="right">
                {item.startDate} - {item.endDate}
              </Text>
            </Stack>
          </Stack>
        </CardSectionHeader>
        <CardSectionContent>
          <Stack direction="row" spacing="condensed" wrap>
            <Badge type="info">{item.description}</Badge>
            {item.skills.map((skill) => (
              <Badge type="success">{skill}</Badge>
            ))}
          </Stack>
        </CardSectionContent>
      </CardSection>
    ))}
  </CardLayout>
);

export default Education;
