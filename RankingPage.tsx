export default function RankingPage(props:any) {
    const items = [
        { ranking: 1, studentId: "1101", name: "기태연", tasu: 0 },
        { ranking: 2, studentId: "1102", name: "김효일", tasu: 200 },
        { ranking: 3, studentId: "1101", name: "기태연", tasu: 0 },
        { ranking: 4, studentId: "1102", name: "김효일", tasu: 200 },
        { ranking: 5, studentId: "1101", name: "기태연", tasu: 0 },
        { ranking: 6, studentId: "1102", name: "김효일", tasu: 200 },
        { ranking: 7, studentId: "1101", name: "기태연", tasu: 0 },
        { ranking: 8, studentId: "1102", name: "김효일", tasu: 200 },
        { ranking: 9, studentId: "1101", name: "기태연", tasu: 0 },
        { ranking: 10, studentId: "1102", name: "김효일", tasu: 200 }
    ];

    return (
        <div>
            <RankingTypeButton title="단어" />
            <RankingTypeButton title="짧은 글" active />
            <RankingTypeButton title="긴 글" />
            <RankingTypeButton title="전체" />
            <div style={{ clear: "both" }}>
                {items.map(item => (
                    <RankingItem
                        key={item.ranking}
                        ranking={item.ranking}
                        studentId={item.studentId}
                        name={item.name}
                        tasu={item.tasu}
                    />
                ))}
            </div>
        </div>
    );
}

function RankingItem(props: any) {
    const { ranking, studentId, name, tasu } = props;

    return (
        <div>
            {ranking} {studentId} {name} {tasu}
        </div>
    );
}

function RankingTypeButton(props: any) {
    const { title, ranking, active = false } = props;

    let rankingEmoji;

    if (ranking === 1) {
        rankingEmoji = "🥇"
    }
    else if ( ranking === 2) {
        rankingEmoji = "🥈"
    }
    else if ( ranking === 3 ) {
        rankingEmoji = "🥉"
    }
    else {
        rankingEmoji = ranking
    }

    return (
        <div
            style={{
                width: "200px",
                height: "50px",
                float: "left",
                backgroundColor: active ? "green" : "lightgreen",
                color: active ? "white" : "black",
                textAlign: "center",
            }}
        >
            {title}
        </div>
    );
}

