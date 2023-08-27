'use client'

import { ReactElement } from "react";
import type { Deliverable } from '@prisma/client'
import type { ProjectWithDeliverables } from '../lib/typesWithChildren'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { TreeItem, TreeView } from "@mui/lab";
import { Box, Divider } from "@mui/material";


export default function Component({ projects } : { projects: ProjectWithDeliverables[] }): ReactElement {
    if (!projects) {
        return <div>Loading...</div>;
    };
    return(
        <TreeView
            aria-label="project contents navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
            >
                {projects.map((p: ProjectWithDeliverables, i: number) => {
                    const deliverables: Deliverable[] = p.deliverables;
                    return(
                    <TreeItem key={i} nodeId={i.toString()} label={p.name} sx={{padding: "0.2rem"}}>
                        <Box sx={{ flexGrow: 1, borderRadius: '3px', border: '1px solid #f0f0f0', marginTop: '0.4rem', backgroundColor: '#fefefe' }}>
                            <TreeItem nodeId={i.toString() + "-add"} label={"+ add new"} sx={{ color: 'tomato', fontWeight: 'bold' }}/>
                            <Divider />
                            {deliverables.map((d: Deliverable, j: number) => 
                                <TreeItem key={j} nodeId={i.toString() + "-" + j.toString()} label={d.name} />
                            )}
                        </Box>
                    </TreeItem>
                )}
                )}
        </TreeView>
    )
}