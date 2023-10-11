window.addEventListener('load', function() {
  
  //main
  const main = document.querySelector('.main');

  //side
  const cate = document.querySelector('.cate');

  sideCate.forEach((item,index) =>{
    let sideCateData = sideCate[index];
    const cateItem = createDiv(sideCateData.class);
    cateItem.classList.add('item');
    cateItem.textContent=sideCateData.text;
    cate.appendChild(cateItem);
  });

  const sideBottom = document.querySelector('.side-bottom');
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

  //center 영역////////////////////////////////////////////
  loadFAQPage();
 //center 영역////////////////////////////////////////////

  //장바구니 하단 '이런 상품은 어떠세요?' 영역
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

  main.append(allProduct,promotion);



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

  const downloadButton = document.querySelector('.download-button');
  downloadButton.addEventListener('click', function () {
    loadDownloadPage();
  });
  
});





