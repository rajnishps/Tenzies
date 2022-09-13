import { MouseEventHandler, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

export default function Die(props: { handleClick: MouseEventHandler<HTMLDivElement> | undefined; isHeld: any; value: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
    return (
        <div
            onClick={props.handleClick}
            style={{ background: props.isHeld ? "#59E391" : "white" }} className="die">
            <h2>{props.value}</h2>
        </div>
    )
}