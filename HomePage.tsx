import StudentProfile from "./StudentProfile"
import PageButton from "./PageButton"

export default function HomePage(){
    let s2 = {id: "2112", name:"양은서"}
    return <div>
        {/* <StudentProfile id="2112" name="양은서"/>
        <StudentProfile id="2112" name="양은서"/> */}
        <StudentProfile student={{id:2112, name:"양은서"}} Color="#36A22E"/>
        {/* <StudentProfile2 student={s2} /> */}
        <PageButton link="https://www.never.com" label="단어" backgroundColor="#36A22E" labelColor="#FF0000"/>
        <PageButton link="https://www.never.com" label="짧은 글" backgroundColor="#277021" labelColor="#FF0000"/>
        <PageButton link="https://www.never.com" label="긴 글" backgroundColor="#225D1D" labelColor="#FF0000"/>
        <PageButton link="https://www.never.com" label="랭킹" backgroundColor="#073B03" labelColor="#FF0000"/>

    </div>
    
}
