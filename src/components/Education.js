import React from "react";

import Card, {
  CardHeader,
  CardSection,
  CardSectionHeader,
  CardSectionContent,
} from "@kiwicom/orbit-components/lib/Card";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Badge from "@kiwicom/orbit-components/lib/Badge";

import Sightseeing from "@kiwicom/orbit-components/lib/icons/Sightseeing";

const Education = () => (
  <Card>
    <CardHeader title="Education" icon={<Sightseeing />} />

    <CardSection expandable>
      <CardSectionHeader>
        <Stack direction="row" align="center" justify="center">
          <Stack direction="column" spacing="tight" grow={false} shrink>
            <Heading element="h4" type="title4">
              Mathematical And Statistical Methods
            </Heading>
            <Text type="secondary" size="small">
              Master's Degree, Masaryk University
            </Text>
          </Stack>
          <Stack>
            <Text type="secondary" size="small" align="right">
              09/2016 - 01/2019
            </Text>
          </Stack>
        </Stack>
      </CardSectionHeader>
      <CardSectionContent>
        <Stack direction="row" spacing="condensed" wrap>
          <Badge type="info">Dean's Award for Outstanding Study Results</Badge>
          <Badge type="success">Excel</Badge>
          <Badge type="success">VBA</Badge>
          <Badge type="success">SQL</Badge>
          <Badge type="success">Statistica</Badge>
          <Badge type="success">Econometrics</Badge>
          <Badge type="success">Data Analysis</Badge>
        </Stack>
      </CardSectionContent>
    </CardSection>

    <CardSection expandable>
      <CardSectionHeader>
        <Stack direction="row" align="center" justify="center">
          <Stack direction="column" spacing="tight" grow={false} shrink>
            <Heading element="h4" type="title4">
              Applied Mathematics and Economics
            </Heading>
            <Text type="secondary" size="small">
              Bachelor's Degree, Masaryk University
            </Text>
          </Stack>
          <Stack>
            <Text type="secondary" size="small" align="right">
              09/2013 - 06/2016
            </Text>
          </Stack>
        </Stack>
      </CardSectionHeader>
      <CardSectionContent>
        <Stack direction="row" spacing="condensed" wrap>
          <Badge type="info">
            Dean's Award for Excellent Bachelor's Thesis
          </Badge>
          <Badge type="success">Matlab</Badge>
          <Badge type="success">RStudio</Badge>
          <Badge type="success">LaTeX</Badge>
          <Badge type="success">Gretl</Badge>
        </Stack>
      </CardSectionContent>
    </CardSection>
  </Card>
);

export default Education;
