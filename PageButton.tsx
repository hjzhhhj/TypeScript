export default function PageButton(props:any){
    return <button style={{ 
            width: "150px", 
            height: "150px",
            backgroundColor: props.backgroundColor,
            fontSize:"32px",
            borderRadius:"6px",
            border:"0px",
            margin:"20px"
        }}>
        <a style={{ textDecoration: "none", color:props.labelColor }} href={props.link}>{props.label}</a>
    </button>

}