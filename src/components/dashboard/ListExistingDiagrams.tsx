import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from "./Title"
import CustomizedMenuContainer from "../../container/CustomizedMenuContainer";
import { ApiResponse } from "../../types";

export default function ListExistingDiagrams({savedDiagrams}: {savedDiagrams: ApiResponse[] | undefined}) {
  return (
    <>
      <Title>Recent Diagrams</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {savedDiagrams !== undefined &&
        savedDiagrams?.map((element: any) =>
          (element?.data?.data as ApiResponse[]).map((row: ApiResponse) => (
            <TableRow key={row.id}>
              <TableCell>{row.creation}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell><CustomizedMenuContainer id={row.id} /></TableCell>
            </TableRow>
          ))
        )
      }
      </TableBody>
      </Table>
      <Link color="primary" href="#" sx={{ mt: 3 }}>
        See more saved diagrams
      </Link>
    </>
  );
}
