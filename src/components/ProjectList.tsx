// 'use client'

import { ReactElement } from "react";
import type { Project } from '@prisma/client'
import ProjectCard from "./ProjectCard";
import { List, Avatar, Chip, Divider } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { pink } from "@mui/material/colors";

export default function Component({ projects } : { projects: Project[] }): ReactElement {
    if (!projects) {
        return <div>Loading...</div>;
    };
    return(
        <div>
            <div className="flex flex-row flex-wrap justify-start">
                {projects.map((d: any, i: number) => 
                    <ProjectCard key={i} project={d} noLink={false}/>
                )}
            </div>
        </div>
        // <div>
        //     <div className="w-full pb-5 flex justify-end">
        //         <Chip className="" sx={{ bgcolor: pink[500], color: "white" }} label="+ add new"/>
        //     </div>
        //     <Divider />
        //     {/* <Avatar  sx={{ bgcolor: pink[500] }}> */}
        //     {/* </Avatar> */}
        //     <List dense={true}>
        //         {projects.map((d: any, i: number) => 
        //             <ProjectCard key={i} project={d}/>
        //         )}
        //     </List>
        // </div>
    )
}