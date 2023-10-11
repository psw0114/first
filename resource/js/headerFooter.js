  //header
  const TopHeader =()=>{
    //로고 이미지 
    const logo = document.querySelector('.logo');
    const img = new Image();
    img.src =`../resource/images/logo.png`;
    logo.appendChild(img);

    
    //네비 목록 만들기
    let cateArry =['상업인쇄','디지털인쇄','판촉물','실사출력','패키지','부자재'];

    const cateLine = document.querySelector('.cate-line');
    

    cateArry.forEach(item=>{
      const cateDiv = createDiv('navi-cate-item');
      cateDiv.textContent= item;
      cateLine.appendChild(cateDiv);
    });
    //네비 옆에 검색창 만들기
    const productCate = document.querySelector('.product-cate');
    productCate.after()

    //검색창
    const searchBox = document.querySelector('.search-box');
    const clickButton = createFormFactor(0,'submit','searchClick','search-click','');
    const inputBar = createFormFactor(0,'text','searchBar','search-bar','','','','오늘의 상품을 검색하세요');
    
    searchBox.appendChild(inputBar);
    searchBox.appendChild(clickButton);



    //로그인 박스 영역
    const loginPageHello = document.querySelector('.login-page-hello');
    const loginPagePrintbank = document.querySelector('.login-page-printbank');
    
    
    const idBox = createFormFactor(0,'text','','id-box','','','','아이디');
    const pwBox = createFormFactor(0,'password','','pw-box','','','','비밀번호');
    const idCheckBox = createDiv('id-check-box');

    const idCheck = createFormFactor(0,'checkbox','','id-check');
    const idtext = createDiv('id-text');
    const loginButton = createFormFactor(0,'button','','login-button','프린트뱅크 로그인');
  
    idCheckBox.appendChild(idCheck);
    idCheckBox.appendChild(idtext);
    idtext.textContent= '아이디 저장';

    insertAfter(loginPagePrintbank,idBox);
    insertAfter(idBox,pwBox);
    insertAfter(pwBox,idCheckBox);
    insertAfter(idCheckBox,loginButton);

    const memberBox = createDiv('member-box');

    let memberBoxArry =['아이디찾기','비밀번호 찾기','회원가입'];
    let memberBoxName=['idFind','pwFind','membership'];

    const memeberBox = document.querySelector('.memeber-box');

    memberBoxName.forEach((item,index)=>{
      const box = createDiv(`${item}`);
      box.textContent = memberBoxArry[index];
      memeberBox.appendChild(box);
    });


    //로그인창 호버
    var login = document.querySelector('.login');
    var loginBridge = document.querySelector('.login-bridge');
    var loginPage = document.querySelector('.login-page');

    login.addEventListener('mouseenter', function() {
      if (loginBridge && loginPage) {
        loginBridge.style.display = 'block';
        loginPage.style.display = 'block';
      }
    });

    login.addEventListener('mouseleave', function() {
      if (loginBridge && loginPage) {
        loginBridge.style.display = 'none';
        loginPage.style.display = 'none';
      }
    });
  }


  //footer
  const Footer =()=>{
    let footerCateItem =[ 
      {class:'company-info', text:'회사소개'},
      {class:'personal-data', text:'개인정보취급방침'},
      {class:'map', text:'찾아오시는길'},
      {class:'agreement', text:'이용약관'},
      {class:'customer-center', text:'고객센터'},
  ];


    //footer 윗 부분
    const footerTop = document.querySelector('.footer-top');

    const footerLeft = createDiv('footer-left');
    const footerRight = createDiv('footer-right');

    const footerCate = createDiv('footer-cate');

    footerCateItem.forEach((item,index)=>{
      const contentData = footerCateItem[index]
      const footerItemDiv = createDiv(contentData.class);
      footerItemDiv.classList.add('footer-item');
      footerItemDiv.textContent = contentData.text;
      footerCate.appendChild(footerItemDiv);
    });
    footerLeft.appendChild(footerCate)

    footerTop.appendChild(footerLeft);
    footerTop.appendChild(footerRight);

    //footer 밑 부분
    const footerBottom = document.querySelector('.footer-bottom');

    const bottomLeft = createDiv('bottom-left');
    const bottomRight = createDiv('bottom-right');

    const string = createDiv('string');
    const number = createDiv('number');
    const text = createDiv('text');
    string.textContent='프린트뱅크 고객센터';
    number.textContent='02-466-9009';

    const time = createDiv();
    const holiday = createDiv();
    const mail = createDiv();
    time.innerHTML ='평일: 09:00 ~ 20:00 / 점심12:00 ~ 13:00';
    holiday.innerHTML ='토 / 일 / 공휴일 휴무';
    mail.innerHTML ='E-mail : tex@printbank.co.kr';

    text.appendChild(time);
    text.appendChild(holiday);
    text.appendChild(mail);

    bottomLeft.appendChild(string);
    bottomLeft.appendChild(number);
    bottomLeft.appendChild(text);

    footerBottom.appendChild(bottomLeft);

    const printbankTitle = createDiv();
    const address = createDiv();
    const ceo = createDiv();
    const companyId = createDiv();
    printbankTitle.innerHTML ='(주)프린트뱅크';
    address.innerHTML ='본사 : 서울특별시 중구 마른내로 166 신승빌딩4층';
    ceo.innerHTML ='대표이사 : 윤준영, 전서연 &nbsp;  개인정보 관리 책임자 : 김인흠';
    companyId.innerHTML = 
      '사업자등록번호 206-81-9242 &nbsp;&nbsp;&nbsp;  통신판매업신고번호 2021-서울중구-2446 &nbsp;&nbsp;&nbsp;     Copyright ⓒPRINTBANK. All Rights Reserved ';

    bottomRight.appendChild(printbankTitle);
    bottomRight.appendChild(address);
    bottomRight.appendChild(ceo);
    bottomRight.appendChild(companyId);

    footerBottom.appendChild(bottomRight);

  }





