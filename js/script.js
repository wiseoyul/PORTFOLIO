document.addEventListener("DOMContentLoaded", function () {
    const copyBtn = document.getElementById("copyBtn");
    const emailText = document.getElementById("emailText");

    if (copyBtn && emailText) {
        copyBtn.addEventListener("click", function () {
            // [수정 위치] 복사할 본인의 실제 이메일 주소를 입력하세요
            const targetEmail = emailText.innerText.trim();

            navigator.clipboard.writeText(targetEmail).then(() => {
                alert("이메일 주소 (" + targetEmail + ") 가 클립보드에 복사되었습니다!");
            }).catch(err => {
                console.error("복사 실패:", err);
            });
        });
    }
});

