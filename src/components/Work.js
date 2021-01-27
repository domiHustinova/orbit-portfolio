import React from "react";

import { WORK_EXPERIENCES } from "../services/data";
import { renderIcon } from "../services/helpers";

import CardLayout from "./CardLayout";

import {
  CardSection,
  CardSectionHeader,
  CardSectionContent,
} from "@kiwicom/orbit-components/lib/Card";
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import Badge from "@kiwicom/orbit-components/lib/Badge";
import List, { ListItem } from "@kiwicom/orbit-components/lib/List";

const Work = () => (
  <CardLayout icon="work" title="Work Experience">
    {WORK_EXPERIENCES.map((experience) => (
      <CardSection
        expandable={
          experience.description.length > 0 || experience.skills.length > 0
            ? true
            : false
        }
        initialExpanded={experience.endDate === "Present" ? true : false}
      >
        <CardSectionHeader>
          <Stack direction="row" align="center" justify="between">
            <Stack direction="column" spacing="tight" grow={false} shrink>
              <Heading element="h4" type="title4">
                {experience.title}
              </Heading>
              <Text type="secondary" size="small">
                {experience.company}
              </Text>
            </Stack>
            <Stack>
              <Text type="secondary" size="small" align="right">
                {experience.startDate} - {experience.endDate}
              </Text>
            </Stack>
          </Stack>
        </CardSectionHeader>

        {experience.description.length > 0 && (
          <CardSectionContent>
            <Stack direction="column">
              <List size="normal" type="secondary" spaceAfter={null}>
                {experience.description.map((item) => (
                  <ListItem icon={renderIcon("arrows")}>{item}</ListItem>
                ))}
              </List>
              <Stack direction="row" spacing="condensed" wrap>
                {experience.skills.map((skill) => (
                  <Badge type="success">{skill}</Badge>
                ))}
              </Stack>
            </Stack>
          </CardSectionContent>
        )}
      </CardSection>
    ))}
  </CardLayout>
);

export default Work;
