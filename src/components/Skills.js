import React from "react";

import CardLayout from "./CardLayout";
import { SKILLS } from "../services/data";

import { CardSection } from "@kiwicom/orbit-components/lib/Card";
import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@kiwicom/orbit-components/lib/Table";
import Stack from "@kiwicom/orbit-components/lib/Stack";

const Skills = () => (
  <CardLayout icon="skills" title="SKILLS">
    <CardSection>
      <Stack direction="row" spacing="comfy">
        {SKILLS.map((skill) => (
          <Table compact>
            <TableHead>
              <TableRow>
                <TableCell>{skill.title}</TableCell>
                <TableCell>Level</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {skill.list.map((item) => (
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.level}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ))}
      </Stack>
    </CardSection>
  </CardLayout>
);

export default Skills;
