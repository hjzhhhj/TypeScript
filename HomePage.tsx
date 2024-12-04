import StudentProfile from "./StudentProfile"
import PageButton from "./PageButton"

export default function HomePage() {
    let s2 = { id: "2112", name: "양은서" };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                backgroundColor: "#FFFFFF",
                height: "100vh",
                justifyContent: "center",
                fontSize: "14px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "#BEE7B0",
                    padding: "10px 20px",
                    borderRadius: "30px",
                    color: "#FFFFFF",
                    fontSize: "12px",
                    marginLeft: "-600px",
                }}
            >
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#FFFFFF",
                    }}
                ></div>
                <div>{s2.id}_{s2.name}</div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <PageButton
                    link="https://www.example.com"
                    label="단어"
                    backgroundColor="#36A22E"
                    labelColor="#FFFFFF"
                    fontSize="8px"
                />
                <PageButton
                    link="https://www.example.com"
                    label="짧은 글"
                    backgroundColor="#277021"
                    labelColor="#FFFFFF"
                    fontSize="8px"
                />
                <PageButton
                    link="https://www.example.com"
                    label="긴 글"
                    backgroundColor="#225D1D"
                    labelColor="#FFFFFF"
                    fontSize="8px"
                />
                <PageButton
                    link="https://www.example.com"
                    label="랭킹"
                    backgroundColor="#073B03"
                    labelColor="#FFFFFF"
                    fontSize="8px"
                />
            </div>
        </div>
    );
}
