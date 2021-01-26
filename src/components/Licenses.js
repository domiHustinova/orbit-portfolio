import React from "react";

import Card, {
  CardHeader,
  CardSection,
  CardSectionHeader,
} from "@kiwicom/orbit-components/lib/Card";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import Heading from "@kiwicom/orbit-components/lib/Heading";

import InsuranceConfirmed from "@kiwicom/orbit-components/lib/icons/InsuranceConfirmed";

const Licenses = () => (
  <Card>
    <CardHeader
      title="Licenses & Certifications"
      icon={<InsuranceConfirmed />}
    />

    <CardSection>
      <CardSectionHeader>
        <Stack direction="row" align="center" justify="between">
          <Stack direction="column" spacing="tight" grow={false} shrink>
            <Heading element="h4" type="title4">
              JavaScript 2
            </Heading>
            <Text type="secondary" size="small">
              Czechitas
            </Text>
          </Stack>
          <Stack>
            <Text type="secondary" size="small" align="right">
              Issued 05/2019
            </Text>
          </Stack>
        </Stack>
      </CardSectionHeader>
      {/*</CardSection>*/}

      {/*<CardSection>*/}
      <CardSectionHeader>
        <Stack direction="row" align="center" justify="between">
          <Stack direction="column" spacing="tight" grow={false} shrink>
            <Heading element="h4" type="title4">
              JavaScript 1
            </Heading>
            <Text type="secondary" size="small">
              Czechitas
            </Text>
          </Stack>
          <Stack>
            <Text type="secondary" size="small" align="right">
              Issued 12/2018
            </Text>
          </Stack>
        </Stack>
      </CardSectionHeader>
    </CardSection>
  </Card>
);

export default Licenses;
