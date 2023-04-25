import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

interface MyDocument {
  _id: string;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  description: string;
  pictures: string[];
  accessibilityFeatures: string[];
  safetyFeatures: string[];
  ageRange: string;
  reviews: string[];
  neighbourhood: string;
  quadrant: string;
  moreInformation: string[];
}

export const MuiTable2 = () => {
  const [data, setData] = useState<MyDocument[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<MyDocument[]>('http://localhost:5005/api/playgrounds');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><b>Name</b></TableCell>
          <TableCell><b>Location</b></TableCell>
          <TableCell><b>Accessibility Features</b></TableCell>
          <TableCell><b>Safety Features</b></TableCell>
          <TableCell><b>Age Range</b></TableCell>
          <TableCell><b>Neighbourhood</b></TableCell>
          <TableCell><b>Quadrant</b></TableCell>
          <TableCell><b>More Information</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item._id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.location}</TableCell>
            <TableCell>{item.accessibilityFeatures.join(", ")}</TableCell>
            <TableCell>{item.safetyFeatures.join(", ")}</TableCell>
            <TableCell>{item.ageRange}</TableCell>
            <TableCell>{item.neighbourhood}</TableCell>
            <TableCell>{item.quadrant}</TableCell>
            <TableCell>{item.moreInformation.join(", ")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
