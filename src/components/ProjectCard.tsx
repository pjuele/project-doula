'use client'

import { ReactElement } from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import type { Project } from '@prisma/client'
import { Avatar, Chip, IconButton, ListItem, ListItemAvatar, ListItemText, Paper } from "@mui/material";
import Link from "next/link";

// function getRandomColorCombination(): { foreground: string, background: string } {
//     const hue = Math.floor(Math.random() * 360);
//     const saturation = Math.floor(Math.random() * 50) + 50;
//     const lightness = Math.floor(Math.random() * 20) + 80;
  
//     const foregroundColor = `hsl(${hue}, ${saturation}%, ${lightness + 10}%)`;
//     const backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness - 40}%)`;
  
//     return { foreground: foregroundColor, background: backgroundColor };
//   }
  
  function getRandomColorCombination(colors: string[]): { foreground: string, background: string } {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const backgroundColor = colors[randomIndex];
  
    const foregroundColor = lightenColor(backgroundColor, 70);
  
    return { foreground: foregroundColor, background: backgroundColor };
  }
  
  function lightenColor(color: string, amount: number): string {
    const parsedColor = color.replace('#', '');
    const num = parseInt(parsedColor, 16);
  
    const r = (num >> 16) + amount;
    const g = ((num >> 8) & 0x00FF) + amount;
    const b = (num & 0x0000FF) + amount;
  
    const newR = Math.min(r, 255);
    const newG = Math.min(g, 255);
    const newB = Math.min(b, 255);
  
    const newColor = ((newR << 16) | (newG << 8) | newB).toString(16).padStart(6, '0');
  
    return `#${newColor}`;
  }
  
  
export default function Component({ project, noLink=true } : { project: Project, noLink?: boolean }): ReactElement {
    if (!project) {
        return <div>Loading...</div>;
    };
    // const nrDeliverables = project.deliverables.length;
    const colors = [
        '#94587b',
        '#8555db',
        '#8e86e4',
        '#e3c990',
        '#d3d4b3',
        '#a4d2e8',
        '#b8d5dd',
        '#9cb0d7',
        '#b9cccb',
        '#d6ceab'
      ];
      
    const nick = project.name ? project.name.substring(0,3) : "?";
    const fullName = project.name ? project.name.substring(5) : "?";
    const { foreground, background } = getRandomColorCombination(colors);
    const textColor = "#555";
    const paperColor = "#f8f8f8";
    const chipBackground = background;
    const chipForeground = foreground;
    return(
        // <div className="p-5 m-5 flex flex-col justify-center items-start">
            <Paper elevation={2} sx={{ bgcolor: paperColor, color: textColor, width: "12rem" }} className="p-5 mt-3 mr-3 flex flex-col justify-start items-start">
                <Chip sx={{ bgcolor: chipBackground, color: chipForeground, fontWeight: "bold", marginBottom: "1rem" }} label={nick}/>
                <Link href={`/projects/${project.id}`}>
                    <h4>
                        {fullName}
                        {
                            noLink ? 
                            null : 
                            <IconButton edge="end" aria-label="delete">
                                <ExitToAppIcon sx={{ color: textColor }}/>
                            </IconButton>
                        }
                    </h4>
                </Link>
            </Paper>
    )

            {/* <ListItem
                secondaryAction={
                    <Link href={`/projects/${project.id}`}>
                        <IconButton edge="end" aria-label="delete">
                            <ExitToAppIcon />
                        </IconButton>
                    </Link>
                }
            >
                <ListItemAvatar>
                    <Avatar  sx={{ bgcolor: indigo[300] }}>
                        <AccountTreeIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                primary={project.name}
                secondary={false ? project.id : null}
                />
            </ListItem> */}
        // </div>
    // )
}