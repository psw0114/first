function loadDownloadPage() {
  const center = document.querySelector('.center');
  const cate = document.querySelector('.cate');
  center.innerText = "";
  cate.innerText = "";
  downloadCateShow(cate);
  downloadShow(center);
}

const downloadCateShow =(cate)=>{
  const sideTitle = document.querySelector('.side-title');
  sideTitle.textContent = '다운로드';

  downloadCate.forEach((item,index) =>{
    let downloadCateData = downloadCate[index];
    const cateItem = createDiv(downloadCateData.class);
    cateItem.classList.add('item');
    cateItem.textContent=downloadCateData.text;
    cate.appendChild(cateItem);
  });


}




const downloadShow =(center)=>{
  
  
  center.className = 'center download'

  const centerTop = createDiv('center-top');
  const centerBottom = createDiv('center-bottom');

  const centterCateTitle = createDiv('center-cate');
  
  centterCateTitle.textContent = '스티커 칼선 다운로드';
 
 
  centerTop.append(centterCateTitle);

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
    const Q = createDiv('Q');
    const questionCate = createDiv('question-cate');
    const questionText = createDiv('question-text');
    const dropButton = createDiv('drop-button');
    
    Q.innerHTML='Q';
    questionCate.textContent = `[${questionJson.cate}]`;
    questionText.textContent = questionJson.text;
    dropButton.innerHTML ='▼'

    questionBox.appendChild(Q);
    questionBox.appendChild(questionCate);
    questionBox.appendChild(questionText);
    questionBox.appendChild(dropButton);

    questionWrap.appendChild(questionBox);

  });
  centerBottom.append(questionWrap,moreView);

  center.append(centerTop,centerBottom);

}