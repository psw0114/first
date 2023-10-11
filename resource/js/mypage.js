window.addEventListener('load', function() {
  
  //main
  const main = document.querySelector('.main');

  //mypage 
  const mypage = createDiv('mypage');
  //side
  const side = createDiv('side');
  const sideTop = createDiv('side-top');
  const sideTitle = createDiv('side-title');
  sideTitle.innerHTML='마이페이지'

  const bankInfo = createDiv('bank-info');
  const accountName = createDiv('account-name');
  accountName.innerHTML='프린트뱅크 님';
  const accountNumber = createDiv('account-number');
  accountNumber.innerHTML='전용계좌 (국민) 1234-1234-1234567';

  bankInfo.append(accountName,accountNumber);
  
  
  const cate = createDiv('cate');
  mypageCate.forEach((item,index) =>{
    let sideCateData = mypageCate[index];
    const cateItem = createDiv(sideCateData.class);
    cateItem.classList.add('item');
    cateItem.textContent=sideCateData.text;
    cate.appendChild(cateItem);
    
  });
  sideTop.append(sideTitle,bankInfo,cate);
  
  const sideBottom = createDiv('side-bottom');
  const string = createDiv('string');
  const number = createDiv('number');
  string.textContent='프린트뱅크 고객센터';
  number.textContent='02-466-9009';

  const time = createDiv();
  const holiday = createDiv();
  time.innerHTML ='평일: 09:00 ~ 20:00 / 점심12:00 ~ 13:00';
  holiday.innerHTML ='토 / 일 / 공휴일 휴무';

  sideBottom.appendChild(string);
  sideBottom.appendChild(number);
  const sideText = createDiv('side-text');
  sideText.appendChild(time);
  sideText.appendChild(holiday);
  sideBottom.appendChild(sideText);

  const storeInfoBox = createDiv('store-info');
  const storeInfo = createDiv('info-title');
  const storeText = createDiv();

  const store1 = createSpan('프린트뱅크 캠퍼스','을지 place');
  const store2 = createSpan('프린트뱅크 파주센터','파주 place');

  storeInfo.innerHTML='오프라인 매장안내';
  storeText.innerHTML='매장별 위치/ 연락처를 확인하세요';
  storeInfoBox.appendChild(storeInfo);
  storeInfoBox.appendChild(storeText);
  storeInfoBox.appendChild(store1);
  storeInfoBox.appendChild(store2);
  sideBottom.appendChild(storeInfoBox);

  side.append(sideTop,sideBottom);
  

 //center 영역////////////////////////////////////////////
  const center = createDiv('center');
  center.className = 'center FAQ'

  const centerTop = createDiv('center-top');
  

  const centterCateTitle = createDiv('center-cate');
  centterCateTitle.innerHTML='주문/배송내역';

  let cateIteArry = [
    {name:'파일에러', number:'5'},
    {name:'결제대기', number:'5'},
    {name:'접수대기', number:'5'},
    {name:'접수완료', number:'5'},
    {name:'제작중', number:'5'},
    {name:'제작완료', number:'5'},
    {name:'포장완료', number:'6'},
    {name:'출고완료', number:'87'},
  ]; 
  
  
  const categoryBox = createDiv('category-box');
  cateIteArry.forEach((item,index)=>{
    const cateItem = createDiv('cate-item');
    const cateItemJson = cateIteArry[index];

    const cateNumber = createDiv('cate-number');
    cateNumber.textContent = cateItemJson.number;

    const cateText = createDiv('cate-text');
    cateText.textContent = cateItemJson.name;
    
    cateItem.append(cateNumber,cateText);
  
    categoryBox.append(cateItem);
  });

  const cateButtonBox = createDiv('cate-button-box');



  const orderDateLine = createDiv('order-date-line');
  const dateLeft = createDiv('date-left');
  dateLeft.innerHTML='주문일 &nbsp&nbsp';

  const leftButton1 = createDiv('left-button1 left-button');
  leftButton1.textContent ='오늘';
  const leftButton2 = createDiv('left-button2 left-button');
  leftButton2.textContent ='1개월';
  const leftButton3 = createDiv('left-button3 left-button');
  leftButton3.textContent ='3개월';
  dateLeft.append(leftButton1,leftButton2,leftButton3);

  const dateRight = createDiv('date-right');
  const rightButton1 = createDiv('right-button1');
  rightButton1.innerHTML ='2023.08.22';
  
  const rightButton2 = createDiv('right-button2');
  rightButton2.innerHTML ='2023.09.22';
  dateRight.append(rightButton1,rightButton2);

  const hyphenText = document.createElement('p');
  hyphenText.innerHTML='&nbsp;-&nbsp;';
  insertAfter(rightButton1,hyphenText);
  orderDateLine.append(dateLeft,dateRight);


  const stateLine = createDiv('state-line');
  const stateLineLeft = createDiv('state-line-left');
  const stateLineRight = createDiv('state-line-right');

  stateLineLeft.textContent ='진행상태';
  const stateSelectBox = createFormFactor(1,'state-box');
  stateSelectBox.append(createOption('전체','전체'));
  cateIteArry.forEach((iten,index)=>{
    const cateIteArryJson = cateIteArry[index];
    const option = createOption(cateIteArryJson.name,cateIteArryJson.name);
    stateSelectBox.append(option);
  });

  stateLineLeft.append(stateSelectBox);

  stateLineRight.textContent ='품목';
  const productSelectBox = createFormFactor(1,'product-box');
  productSelectArry.forEach((item,index)=>{
    const option = createOption(item,item);
    productSelectBox.append(option);
  });
  stateLineRight.append(productSelectBox);
  stateLine.append(stateLineLeft,stateLineRight);
  

  const searchLine = createDiv('search-line');

  const searchLineLeft = createDiv('search-line-left');
  searchLineLeft.textContent ='제작물명';

  const searchLineright = createDiv('search-line-right');
  searchLineright.textContent ='주문번호';

  const productName = createFormFactor(0,'text','','product-name');
  searchLineLeft.append(productName);
  
  const orderNumber = createFormFactor(0,'text','','order-number');
  const selectButton = createFormFactor(0,'button','','select-button','조회');
  searchLineright.append(orderNumber,selectButton);
  
  searchLine.append(searchLineLeft,searchLineright);
  cateButtonBox.append(orderDateLine,stateLine,searchLine);
  centerTop.append(centterCateTitle,categoryBox,cateButtonBox);
  




  const centerBottom = createDiv('center-bottom');
  // 글 목록
  for(idx = 0; idx < productDetailArry.length; idx++){
    const productArea = createDiv('product-area radi');
  
     const boxTop = createDiv('box-top');
     const areaTopLeft =createDiv('area-top-left');
     const areaTopRight =createDiv('area-top-right');

     if (productDetailArry[idx]) {
       const productContent = productDetailArry[idx];
       const date = createDiv('product-box-date');
       date.textContent = `${productContent.date}`;
       const product = createDiv('product-box-product');
       product.textContent = `${productContent.product}`;
       const detail = createDiv('product-box-detail');
       detail.textContent = `${productContent.detail}`;
       const price = createDiv('product-box-price');
       price.textContent = `${productContent.price}`;
       areaTopRight.append(date,product,detail,price);
     }
     boxTop.append(areaTopLeft,areaTopRight);

     const boxBottom = createDiv('box-bottom');
     stateButtonArry.forEach((item,index)=>{
       const stateButtonJson = stateButtonArry[index];
       const button = createDiv(stateButtonJson.className);
       button.textContent = stateButtonJson.title;
       boxBottom.append(button);
      });

     productArea.append(boxTop,boxBottom);
     centerBottom.appendChild(productArea);
  };
  
  const pageButtonBox = createDiv('page-button-box');
  const pageNext = createDiv('page-next page-move');
  const pagePrev = createDiv('page-prev page-move');
  const pageNumber = createDiv('page-number');

  
  for(i=1; i<=7; i++){
    const pageItem = createDiv('page-item');
    pageItem.textContent = i;
    pageNumber.append(pageItem);
  }
  
  pageButtonBox.append(pagePrev,pageNumber,pageNext);
  
  center.append(centerTop,centerBottom,pageButtonBox);
  mypage.append(side,center)
  
 //center 영역////////////////////////////////////////////


//  //장바구니 하단 '이런 상품은 어떠세요?' 영역
  const allProduct = createDiv('all-product');  
 const cateList = createDiv('cate-list');
 
 const titleList = createDiv('title-list');
 const orderLine = createDiv('order-line');
 const buttonLine = createDiv('button-line');
 
 titleList.innerText = '이런 상품은 어떠세요?';
 
  //제품 카테고리 버튼
 productArry.forEach(item => {
     const productDiv = createDiv('button'); 
     productDiv.textContent = item;
     buttonLine.appendChild(productDiv);
   });
 // 제품 나열순서(new순, 추천순, 인기순)
 order.forEach((item,index)=>{
     const orderButton = createDiv('order'); 
     orderButton.classList.add(classNames[index]);
     orderButton.textContent = item;
     orderLine.appendChild(orderButton);
 });
 cateList.append(titleList,orderLine,buttonLine);
 
 //class="all-product" 영역에 제품 넣기
 const productBox = createDiv('product-box');
 
 //상품 갯수 만큼 반복해서 삽입
 allProductArry.forEach((item,index)=>{
     const product = createDiv('product');
     const productImg = createDiv('product-img');
     const productContent = createDiv('product-content content');
 
     product.append(productImg,productContent);
 
     //'productBottom'에 넣을 div들 생성해 놓기(제품명,설명,가격)
     const bottomTitle = createDiv('bottom-title title');
     const bottomDescription = createDiv('bottom-description');
     const BottomPrice = createDiv('bottom-price total'); 
 
     const priceSheet = createDiv('sheet');
     const pricePrice = createDiv('price');
 
     // priceSheet와 pricePrice를 clonedBottomPrice에 추가
     BottomPrice.append(priceSheet,pricePrice);
 
     productContent.append(bottomTitle,bottomDescription,BottomPrice);
 
     const contentData = allProductArry[index];
     bottomTitle.textContent = contentData.title;
     bottomDescription.textContent = contentData.description;
     priceSheet.textContent = contentData.sheet;
     pricePrice.textContent = contentData.price;
 
     productBox.appendChild(product);
 });
 allProduct.append(cateList,productBox);
 
 //promotion 영역
  const promotion = createDiv('promotion');
 const promotionBox = createDiv('promotion-box');
 
 const textButton = createDiv('text-button');
 
 const promotionText = createDiv('promotion-text');
 const promotionButton = createDiv('promotion-button hover');
 
 promotionText.innerHTML = '프린트뱅크, <br> 다양한 소식을 한눈에!'
 promotionButton.innerHTML = '전체보기';
 
 const arrow = createDiv('arrow');
 arrow.innerHTML='<i class="fa-solid fa-arrow-right-long"></i>';
 promotionButton.append(arrow);
 
 textButton.append(promotionText,promotionButton);
 
 const newBox = createDiv('new');
 
 const top = createDiv('new-top top');
 const bottom = createDiv('new-bottom bottom');
 const title= createDiv('new-title title');
 const title1= createSpan('NEW','new-title1 title1');
 
 title.appendChild(title1);
 // title.innerText ='이번주 소식';
 
 const text= createDiv('new-text text');
 text.innerHTML = '이번주 신규 소식을 확인해보세요!';
 
 bottom.append(title,text)
 
 newBox.append(top,bottom);
 
 const eventBox = createDiv('event');
 
 const event_top = createDiv('event-top top');
 const event_bottom = createDiv('event-bottom bottom');
 const event_title= createDiv('event-title title');
 const event_title2= createSpan('EVENT','event-title2 title2');
 
 event_title.appendChild(event_title2);
 // title.innerText ='이번주 소식';
 
 const event_text= createDiv('event-text text');
 event_text.innerHTML = '이번주 신규 소식을 확인해보세요!';
 
 event_bottom.append(event_title,event_text)
 
 eventBox.append(event_top,event_bottom);
 
 promotionBox.append(textButton,newBox,eventBox);
 
 promotion.append(promotionBox);
 main.append(mypage,allProduct,promotion);
  



  const FAQButton = document.querySelector('.FAQ-button');
  FAQButton.addEventListener('click', function () {
    loadFAQPage();
  });

  const noticeButton = document.querySelector('.notice-button');
  noticeButton.addEventListener('click', function () {
    loadNoticePage();
  });

  const askButton = document.querySelector('.ask-button');
  askButton.addEventListener('click', function () {
    loadAskPage();
  });

  const leftButtons = document.querySelectorAll('.left-button');
 

  //마이페이지 주문일 1개월,2개월,3개월 스타일 버튼
  leftButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      //버튼 스타일 초기화
      leftButtons.forEach((btn) => (btn.style.backgroundColor = ''));
      leftButtons.forEach((btn) => (btn.style.color = ''));
      leftButtons.forEach((btn) => (btn.style.border = '1px solid var(--color-1)'));
      // 클릭한 버튼 스타일 변경
      e.target.style.backgroundColor = 'var(--color-2)'; 
      e.target.style.color = 'var(--back-1)'; 
      e.target.style.border = 'none';
    });
  });

});





