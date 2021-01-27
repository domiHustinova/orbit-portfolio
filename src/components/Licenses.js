import React from "react";
import { LICENSES } from "../services/data";

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
      {LICENSES.map((licese) => (
        <CardSectionHeader>
          <Stack direction="row" align="center" justify="between">
            <Stack direction="column" spacing="tight" grow={false} shrink>
              <Heading element="h4" type="title4">
                {licese.name}
              </Heading>
              <Text type="secondary" size="small">
                {licese.organization}
              </Text>
            </Stack>
            <Stack>
              <Text type="secondary" size="small" align="right">
                Issued {licese.issueDate}
              </Text>
            </Stack>
          </Stack>
        </CardSectionHeader>
      ))}
    </CardSection>
  </Card>
);

export default Licenses;
