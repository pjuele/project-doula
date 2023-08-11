'use client'

import { ReactElement } from "react";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import type { Project } from '@prisma/client'
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Link from "next/link";
import { indigo } from "@mui/material/colors";

export default function Component({ project } : { project: Project }): ReactElement {
    if (!project) {
        return <div>Loading...</div>;
    };
    // const nrDeliverables = project.deliverables.length;
    return(
        <div>
            <ListItem
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
            </ListItem>
        </div>
    )
}