const headerUserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('.user-name');
const StudentID = document.querySelector('.user-email');
const localSID = document.querySelector('SIDnMail');


const setUserNameInnerHtml = (name) => {
    headerUserNameElement.innerHTML = `${name} <span>님</span>`;
    userNameElement.innerHTML = `${name} <span>님</span>`;
}

if (localStorage.getItem('userName') !== 'null') {
    setUserNameInnerHtml(localStorage.getItem('userName'));
    
} else {
    setUserNameInnerHtml('홍길동');
}

userNameElement.onclick = () => {
    const userName = prompt('이름을 입력해주세요.');
    if (userName == null) {
        userName = '홍길동';
    }
    for (i=0; i<userName.length; i++) {
        var ch = userName.charAt(i);
        if (ch>='0' && ch<='9') {
            confirm("이름에 숫자가 들어갑니다. 다시 입력해주세요.");
            return false;
        }
    }
    localStorage.setItem('userName', userName);

    setUserNameInnerHtml(userName);
};

StudentID.onclick = () => {
    const sID = prompt("학번을 입력해주세요.");
    if (sID.length != 9) {
        confirm("잘못된 학번을 입력하였습니다. 다시 입력해주세요.");
        return false;
    }
    for (i=0; i<sID.length; i++) {
        var ch = sID.charAt(i);
        if (!(ch >= '0' && ch <= '9')) {
            confirm("학번은 숫자로만 입력 가능합니다.");
            return false;
        }
    }

    const regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const eMail = prompt("이메일을 입력해주세요.");
    if (eMail.match(regexp) === null) {
        confirm("이메일 양식에 맞게 입력해주세요.");
        return false;
    }

    const SIDnMail = sID + " , " + eMail;
    localStorage.setItem('SIDnMail', SIDnMail);
    StudentID.innerHTML = SIDnMail;
};