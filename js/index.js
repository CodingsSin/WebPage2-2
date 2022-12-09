const headerUserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('.user-name');
//const localUserName = document.querySelector('userName');
const StudentID = document.querySelector('.user-email');
const localSID = document.querySelector('SIDnMail');


const setUserNameInnerHtml = (name) => {
    headerUserNameElement.innerHTML = `${name} <span>님</span>`;
    userNameElement.innerHTML = `${name} <span>님</span>`;
}

if (localStorage.getItem('userName')) {
    setUserNameInnerHtml(localStorage.getItem('userName'));
    
} else {
    setUserNameInnerHtml('홍길동');
}

userNameElement.onclick = () => {
    const userName = prompt('이름을 입력해주세요.');
    localStorage.setItem('userName', userName);

    setUserNameInnerHtml(userName);
    // headerUserNameElement.innerHTML = `${userName} <span>님</span>`;
    // userNameElement.innerHTML = `${userName} <span>님</span>`;
};

StudentID.onclick = () => {
    const sID = prompt("학번을 입력해주세요.");
    // if (!(sID <= 9 && sID >= 0 )) {

    // }s
    const eMail = prompt("이메일을 입력해주세요.");
    const SIDnMail = sID + " , " + eMail;
    localStorage.setItem('SIDnMail', SIDnMail);
    StudentID.innerHTML = SIDnMail;
}