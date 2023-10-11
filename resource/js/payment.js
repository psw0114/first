window.addEventListener('load', function() {
  const main = document.querySelector('.main');
  
  const contents_title = createDiv('term');
  contents_title.innerHTML += '<p class="des-title">주문/결제 <span class="des-content">미수금이 있는 경우 기존 미수금 부터 결제 됩니다.</span></p>'
  
  
  
  const descript = createDiv('descript term');
  descript.innerHTML += '결제대기 3건';
  
  const bucket_wrap = createDiv('bucket-wrap term-120');
  
  const bucket_list = createDiv('bucket-list');
  for(idx = 0; idx < 10; idx++){
      const bucket_box = createDiv('bucket-box radi');
      bucket_list.appendChild(bucket_box);
  
      const boxArea = createDiv('box-area');
      const boxTop = createDiv('box-top');
  
      const topLeft = createDiv('top-left');
      const topMiddle = createDiv('top-middle');
      const topRight = createDiv('top-right');
      
      const productTitle = createDiv('product-title');
      const productDescription = createDiv('product-description');
      const productDetail = createDiv('product-detail');
      
      productTitle.innerText='가나다라_명함1';
   
      let textDescription = ['사각재단 스티커','배경없음','강접 아트지90g 유광코팅','ㅠㅠ'];
      const descriptionText = createDiv('description-text');
      descriptionText.innerHTML = textDescription;
      productDescription.appendChild(descriptionText);
  
      const optionDetail = createDiv('option-detail')
      optionDetail.innerText='주문상세';
      const optionDelete = createDiv('option-delete')
      optionDelete.innerText='삭제';
  
      const deliveryType = createSpan('선불택배/묶음배송','delivery-type'); 
      const deliveryData = createSpan('10/5(월) 출고 예정','delivery-data'); 
  
      productDetail.append(optionDetail,optionDelete,deliveryType,deliveryData);
  
      topMiddle.append(productTitle,productDescription,productDetail);
  
     
      const priceArea = createDiv('price-area');
  
      priceArea.innerText='10,000원';
      topRight.append(priceArea);
  
      boxTop.append(topLeft,topMiddle,topRight);
  
      boxArea.append(boxTop)
      bucket_box.append(boxArea);
  }
  
  const info_box = createDiv('info-box radi');
  info_box.innerHTML+='결제정보';
  
  const detailPriceBox = createDiv('detail-price-box');
  
  const priceUnpaid = createDiv('price-unpaid');
  const priceOrder= createDiv('price-order');
  const priceDelivery= createDiv('price-delivery');
  const priceVat= createDiv('price-vat');
  
  const unpaidLeft = createDiv('unpaid-left');
  const unpaidRight = createDiv('unpaid-right');
  unpaidLeft.innerText = '전체 미수금';
  unpaidRight.innerText = '40,000원';
  priceUnpaid.append(unpaidLeft,unpaidRight);

  const orderLeft =createDiv('order-left');
  const orderRight=createDiv('order-right');
  orderLeft.innerText = '주문금액';
  orderRight.innerText = '10,000원';
  priceOrder.append(orderLeft,orderRight);
  
  
  const deliveryLeft =createDiv('delivery-left');
  const deliveryRight=createDiv('delivery-right');
  deliveryLeft.innerText = '배송비';
  deliveryRight.innerText = '5,000원';
  priceDelivery.append(deliveryLeft,deliveryRight);
  
  const vatLeft =createDiv('vat-left');
  const vatRight=createDiv('vat-right');
  vatLeft.innerText = '부가세(vat)';
  vatRight.innerText = '5,500원';
  priceVat.append(vatLeft,vatRight);
  
  detailPriceBox.append(priceUnpaid,priceOrder,priceDelivery,priceVat);
  
  const totalPriceBox = createDiv('total-price-box');
  
  const totalPriceText = createDiv('total-text');
  const totalPriceNumber = createDiv('total-number');
  totalPriceText.innerText = '총 결제금액';
  totalPriceNumber.innerText = '5,000,000원';
  
  totalPriceBox.append(totalPriceText,totalPriceNumber);
  
  
  const paymentOption = createDiv('payment-option');
  paymentOption.innerText = '결제방법';
  
  const cardBox = createDiv('card-box');
  const cashBox = createDiv('cash-box');
  
  const cardPayment = createFormFactor('0','radio','payment-button','radio');
  const cashPayment = createFormFactor('0','radio','payment-button','radio');
  
  cardBox.append(cardPayment);
  cardBox.innerHTML+= '<span> 카드결제</span>';
  cashBox.append(cashPayment);
  cashBox.innerHTML+= '<span> 전용계좌 입금</span>';
  paymentOption.append(cardBox,cashBox);
  
  const agree =createDiv('agree');
  const agreeCheck = createFormFactor('0','checkbox','agree-check');
  const agreeText = createSpan('주문내역 확인 및 이용약관 동의');
  const agreeTextArrow = createDiv('agree-arrow');
  agreeTextArrow.innerHTML= '<i class="fa-solid fa-chevron-up"></i>';
  const font13 = createSpan('└전자금융거래 이용약관','font13');
  font13.innerHTML +='&nbsp;&nbsp;<span class= "agree-show">약관보기</span>';
  agree.append(agreeCheck,agreeText,agreeTextArrow,font13);
  
  const payment = createDiv('payment');
  payment.innerText ='5,000,000원 결제하기';
  
  info_box.append(detailPriceBox,totalPriceBox,paymentOption,agree,payment);
  bucket_wrap.append(bucket_list, info_box);

  //안내사항
  const guide = createDiv('guide');
  const guideTitle = createDiv('guide-title');
  guideTitle.innerText='안내사항';

  const guideTextBox = createDiv('guide-text-box');
  guideTextArry.forEach(item=>{
    const guideText = createDiv('guride-text');
    guideText.textContent = `-${item.title}`;
    guideTextBox.appendChild(guideText);
  });

  guide.append(guideTitle,guideTextBox);

  
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
  
  main.append(contents_title, descript, bucket_wrap,guide,allProduct,promotion);
  
  });