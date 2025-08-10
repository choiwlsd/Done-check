// 현재 시각과 날짜를 담은 Date 객체 생성 
// > 나중에 몇 시간 남았는지도 보여주면 좋을듯
const today = new Date();
// Sun Aug 10 2025 23:54:32 GMT+0900 (Korean Standard Time)

function updateDate() {
    // @weekday: 'short' 짧은 요일명으로 작성
    // @year: 'numeric' 연도를 숫자로 표시
    // @month: 'long' 월을 긴 이름으로 표시 (ex.8월)
    // @day: 'numeric' 일을 숫자로 표시
    // @options 한국어 로케일에서 `YYYY년 MM월 DD일` 형태로 출력됨
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'};

    document.getElementById('today-date').textContent =
        today.toLocaleDateString('ko-KR', options);
}

// 이전 날짜
document.getElementById('yesterday').addEventListener('click', () => {
    today.setDate(today.getDate() - 1);
    updateDate();
})

// 다음 날짜
document.getElementById('tomorrow').addEventListener('click', () => {
    today.setDate(today.getDate() + 1);
    updateDate();
})

// 오늘
updateDate();