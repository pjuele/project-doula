import { ReactElement } from "react";
import { Element } from "../models/Element";
import Button from '@mui/material/Button';

export default function Component({ data } : { data : Element }): ReactElement {
    const title = data.name || "";
    return(
        <div>
            <Button color="secondary" variant="outlined">{title}</Button>
        </div>
    )
}