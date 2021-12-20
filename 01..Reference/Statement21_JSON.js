// 데이터로서 주고받기 위한 데이터 포맷

// JSON은 기본적으로 문자열
// "" 만 사용해야 한다.
// 마지막 데이터는 ,을 빼준다
const jsonString = `
    {
        "name": "Seongchan An",
        "age" : 30,
        "bloodType": "B",
        "marriage": true
        'status': "resting"
    }
`;

// JSON은 여러주의사항이 있고 또한
// 내부에 함수를 지원하지 않기 때문에 예외처리가 필요하다
try {
    const myJson = JSON.parse(jsonString);

    console.log(myJson.name);
    // JSON 화 stringify
    console.log(JSON.stringify(myJson));
} catch(e) {
    // 싱글쿼트가 문제를 발생시킴
    console.log("JSON에 문제가 있습니다.");
}

