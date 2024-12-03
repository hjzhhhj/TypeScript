export default function StudentProfile(props:any){
    return <div style={{
        width: "150px",
        height: "50px",
        backgroundColor: props.Color,
        borderRadius: "30px",
        border: "0px",
        margin: "20px",
        textAlign: "center"
    }}>
        <img />
        <span>{props.student.id}</span>
        <span>{props.student.name}</span>
    </div>
}
