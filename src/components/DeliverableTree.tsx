'use client';

import { ReactElement } from "react";
import { Deliverable } from "../models/Deliverable";
import Button from '@mui/material/Button';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Element from "./Element";

export default function Component({ data } : { data : Deliverable }): ReactElement {
    const title = data.name || "";
    const items = data.elements || [{name: "Fallo"}];
    return(
        <div>
            <Button variant="outlined">{title}</Button>
            <Timeline>
            {/* <ul
                style={{marginLeft: "1rem"}}> */}
                {items.map((item: any, index: number) => {
                    return(
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Element data={item}/>
                            </TimelineContent>
                      </TimelineItem>
                    );
                })}
            </Timeline>
            {/* </ul> */}
        </div>
    )
}