import React from "react";

import { SKILLS } from "../services/data";

import Card, {
  CardHeader,
  CardSection,
} from "@kiwicom/orbit-components/lib/Card";
import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@kiwicom/orbit-components/lib/Table";
import Stack from "@kiwicom/orbit-components/lib/Stack";

import Chart from "@kiwicom/orbit-components/lib/icons/Chart";

const Skills = () => (
  <Card>
    <CardHeader icon={<Chart />} title="SKILLS" />
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
  </Card>
);

export default Skills;
