'use client'

import { ReactElement } from "react";
import DeliverableTree from "./DeliverableTree";
import type { Deliverable, Project } from '@prisma/client'
// import { Project } from "@/models/Project";

export default function Component({  project, deliverables } : {  project: Project, deliverables: Deliverable[] }): ReactElement {
    const title = project.name || "ProjectName?";
    const items = deliverables || [{name: "DeliverableName?"}];
    return(
        <div>
            <h2>{title}</h2>
            <ul>
                {items.map((d: any, i: number) => 
                    <div key={i}>
                        <DeliverableTree data={d}/>
                    </div>
                )}
            </ul>
        </div>
    )
}