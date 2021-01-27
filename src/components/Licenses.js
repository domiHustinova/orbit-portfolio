import React from "react";
import { LICENSES } from "../services/data";

import {
  CardSection,
  CardSectionHeader,
} from "@kiwicom/orbit-components/lib/Card";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import CardLayout from "./CardLayout";

const Licenses = () => (
  <CardLayout icon="licenses" title="Licenses & Certifications">
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
  </CardLayout>
);

export default Licenses;
