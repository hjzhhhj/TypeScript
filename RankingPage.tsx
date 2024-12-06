export default function RankingPage(){
    return<div>
        <RankingTypeButton title="단어"/>
        <RankingTypeButton title="짧은 글"active/>
        <RankingTypeButton title="긴 글"/>
        <RankingTypeButton title="전체"/>
        <div style={{clear:"both"}}>
            sodyd
        </div>
    </div>
}

function RankingTypeButton(props:any){
    const title = props.title
    const active = props.active ?? false

    return <div style={{
    width:"200px", 
    height:"50px",
    float: "left",
    backgroundColor: active ? "green" : "lightgreen",
    color: active ? "white" : "black",
    textAlign: "center"
}}>{title}</div>
}