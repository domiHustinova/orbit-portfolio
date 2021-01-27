import React from "react";

import Card, {
  CardHeader,
  CardSection,
  CardSectionHeader,
  CardSectionContent,
} from "@kiwicom/orbit-components/lib/Card";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import Badge from "@kiwicom/orbit-components/lib/Badge";
import List, { ListItem } from "@kiwicom/orbit-components/lib/List";

import { City, PriorityBoarding } from "@kiwicom/orbit-components/lib/icons";

const Work = () => (
  <Card>
    <CardHeader title="Work Experience" icon={<City />} />
    <CardSection expandable initialExpanded>
      <CardSectionHeader>
        <Stack direction="row" align="center" justify="between">
          <Stack direction="column" spacing="tight" grow={false} shrink>
            <Heading element="h4" type="title4">
              QA Tester
            </Heading>
            <Text type="secondary" size="small">
              Kiwi.com
            </Text>
          </Stack>
          <Stack>
            <Text type="secondary" size="small" align="right">
              02/2018 - Present
            </Text>
          </Stack>
        </Stack>
      </CardSectionHeader>
      <CardSectionContent>
        <Stack direction="column">
          <List size="normal" type="secondary" spaceAfter={null}>
            <ListItem icon={<PriorityBoarding />}>
              Manual and automated testing of our website
            </ListItem>
            <ListItem icon={<PriorityBoarding />}>
              Creating test scenarios, tracking bugs
            </ListItem>
            <ListItem icon={<PriorityBoarding />}>
              Close cooperation with developers, product managers and other
              departments
            </ListItem>
            <ListItem icon={<PriorityBoarding />}>
              Providing and managing internal technical support for our Customer
              Support department - including solving or outsourcing various
              technical issues related to the functionality of our product,
              creating schedule, taking care of documentation and communication
              with other departments to improve the processes
            </ListItem>
          </List>
          <Stack direction="row" spacing="condensed" wrap>
            <Badge type="success">Gitlab</Badge>
            <Badge type="success">Cypress</Badge>
            <Badge type="success">Jira</Badge>
            <Badge type="success">Webstorm</Badge>
            <Badge type="success">Git</Badge>
          </Stack>
        </Stack>
      </CardSectionContent>
    </CardSection>
    <CardSection expandable>
      <CardSectionHeader>
        <Stack direction="row" align="center" justify="between">
          <Stack direction="column" spacing="tight" grow={false} shrink>
            <Heading element="h4" type="title4">
              Booking Agent, Travel Consultant
            </Heading>
            <Text type="secondary" size="small">
              Kiwi.com
            </Text>
          </Stack>
          <Stack>
            <Text type="secondary" size="small" align="right">
              08/2016 - 01/2018
            </Text>
          </Stack>
        </Stack>
      </CardSectionHeader>
      <CardSectionContent>
        <Stack direction="column">
          <Text type="secondary">
            I worked at this position as a part timer while still studying. I
            was responsible for complex processing of all tasks connected to
            incoming orders from customers. I handled both inbound and outbound
            communication with customers, airlines or partners and all their
            order related inquiries. I worked independently but also cooperated
            with the colleagues.
          </Text>
          <Stack direction="row" spacing="condensed" wrap>
            <Badge type="success">Communication</Badge>
            <Badge type="success">Customer Service</Badge>
          </Stack>
        </Stack>
      </CardSectionContent>
    </CardSection>
  </Card>
);

export default Work;
