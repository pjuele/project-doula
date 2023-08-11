'use client'

import { ReactElement } from "react";
import DeliverableTree from "./DeliverableTree";
import { AppDefaults } from "../models/types";
import { Project } from "@/models/Project";

export default function Component({ appDefaults, project } : { appDefaults: AppDefaults, project: Project }): ReactElement {
    const title = project.name || "ProjectName?";
    const items = project.deliverables || [{name: "DeliverableName?"}];
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