const form = document.querySelector("#member");
const btnSubmit = document.querySelector("input[type=submit]");


btnSubmit.addEventListener("click",(e)=>{
    if (!isTxt("name")) e.preventDefault();
    if (!isTxt("tel")) e.preventDefault();
    if (!isTxt("comments")) e.preventDefault();

    if (!isEmail("email")) e.preventDefault();

    if (!isCheck("design")) e.preventDefault();
    
})
// console.log(form.querySelectorAll("p"));

function isTxt(el) {
    //지역변수로 - userid영역을 변수지정

    let input = form.querySelector(`[name=${el}]`);
    let txt = input.value;
    console.log(txt);

        //중첩되어있는 p요소가,에러메세지가 있는지 판별하고
        const isErrMsg = input.closest("td").querySelectorAll("p");
        //있으면 제거하고 -> 제거할 필요없이 그대로 두고
        //false만 반환한다
        if (isErrMsg.length > 0) return false;


        //2구간
        //경고문구를 출력해야합니다
        const errMsg = document.createElement("p");
        //p태그를 문서에서 생성합니다
        errMsg.append(`입력항목을 입력하세요`);
        //p태그안에 글자내용이 넣어져있습니다
        input.closest("td").append(errMsg);
        //위에서 만든 p태그를 해당지역변수 input아래에 넣어야하므로
        //td를 찾아서 td맨뒤에 appent로 넣어줍니다

        return false;
}

function isEmail(el){
    let input = form.querySelector(`[name=${el}]`);
    let txt = input.value;

    //중첩되어있는 p요소가,에러메세지가 있는지 판별하고
    const isErrMsg = input.closest("td").querySelectorAll("p");
    //있으면 제거하고 -> 제거할 필요없이 그대로 두고
    //false만 반환한다
    if (isErrMsg.length > 0) return false;


    //2구간
    //경고문구를 출력해야합니다
    const errMsg = document.createElement("p");
    //p태그를 문서에서 생성합니다
    errMsg.append(`@를 포함한 전체 이메일 주소를 입력하세요`);
    //p태그안에 글자내용이 넣어져있습니다
    input.closest("td").append(errMsg);
    //위에서 만든 p태그를 해당지역변수 input아래에 넣어야하므로
    //td를 찾아서 td맨뒤에 appent로 넣어줍니다

    return false;
}

function isCheck(el) {

    let inputs = form.querySelectorAll(`[name=${el}]`);
    let isChecked = false;


    for (let el of inputs) {
        if (el.checked) isChecked = true;
    }       

    if (isChecked) {
        const isErrMsg = inputs[0].closest("td").querySelectorAll("p");

        if (isErrMsg.length > 0) inputs[0].closest("td").querySelector("p").remove();

        return true;
    }
    else{

        
        const isErrMsg = inputs[0].closest("td").querySelectorAll("p");
        if (isErrMsg.length > 0) return;
        const errMsg = document.createElement("p");
        errMsg.append("필수 입력항목을 체크해주세요");
        inputs[0].closest("td").append(errMsg);

        return false;
    }

    

        
    }




