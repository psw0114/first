function loadAskPage() {
  const center = document.querySelector('.center');
  center.innerText = "";
  AskShow(center);
}

const AskShow =(center)=>{
 center.className = 'center ask'
 
    const centerTop = createDiv('center-top');
    const centerBottom = createDiv('center-bottom');

    const centterCateTitle = createDiv('center-cate');
    const questionBox = createDiv('question-box');
    
    
    
    const boxTitle = createDiv('box-title');
    const boxText = createDiv('box-text');
    const questionSearchBar = createDiv('question-search-bar');

    const searchBar = createFormFactor(0,'text','','question-search','','','궁금하신 내용을 입력해주세요');
    const questionButton = createFormFactor(0,'submit','','question-button','');

    questionSearchBar.append(searchBar,questionButton);
    questionBox.append(boxTitle,boxText,questionSearchBar);
    
    let FAQData = customerCate[2]; 
    centterCateTitle.textContent = FAQData.cate;
    boxTitle.textContent = FAQData.title;
    boxText.textContent = FAQData.text;

    //FAQ에서 목록 버튼
    let FAQCateButton = ['문의하기','전화상담하기'];
    const cateButtonBox = createDiv('cate-button-box');
    FAQCateButton.forEach(item=>{
      const ButtonItem = createDiv('button-item');
      ButtonItem.textContent = item;
      cateButtonBox.appendChild(ButtonItem);

    });
    centerTop.append(centterCateTitle,questionBox,cateButtonBox);

    // 글 목록
    let questionArry= [
      {
        cate:'배송',
        text:'언제쯤 도착할까요?'
      },
      {
        cate:'주문',
        text:'주문건 배송 송장이 안 보입니다'
      },
      {
        cate:'입금/결제',
        text:'회원가입이 되지 않습니다'
      },
      {
        cate:'입금/결제',
        text:'회원가입이 되지 않습니다'
      },
      {
        cate:'데이터관련',
        text:'각 프로그램별 별색은 어떻게 지정하나요? 혹시 별색으로 작업된 색상은 원색으로 처리를 해야하나요?'
      },
      {
        cate:'입금/결제',
        text:'PDF파일로 접수 시 유의사항은 무엇인가요'
      },
      {
        cate:'입금/결제',
        text:'회원가입이 되지 않습니다'
      },
      {
        cate:'입금/결제',
        text:'회원가입이 되지 않습니다'
      },
      {
        cate:'데이터관련',
        text:'각 프로그램별 별색은 어떻게 지정하나요? 혹시 별색으로 작업된 색상은 원색으로 처리를 해야하나요?'
      },
      {
        cate:'입금/결제',
        text:'PDF파일로 접수 시 유의사항은 무엇인가요'
      }
    ];
    

    const questionWrap = createDiv('question-wrap');
    const moreView = createDiv('more-view');
    moreView.textContent='더보기';
    
    questionArry.forEach((item,index)=>{
      
      const questionBox = createDiv('question-box');
      const questionJson = questionArry[index];
      const A = createDiv('Q');
      const questionCate = createDiv('question-cate');
      const questionText = createDiv('question-text');
      const dropButton = createDiv('drop-button');
      
      A.innerHTML='A';
      questionCate.textContent = `[${questionJson.cate}]`;
      questionText.textContent = questionJson.text;
      dropButton.innerHTML ='▼'

      questionBox.appendChild(A);
      questionBox.appendChild(questionCate);
      questionBox.appendChild(questionText);
      questionBox.appendChild(dropButton);

      questionWrap.appendChild(questionBox);

    });
    centerBottom.append(questionWrap,moreView);

    center.append(centerTop,centerBottom);
//center 종료////////////////////////////////////////////

}