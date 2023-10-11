window.addEventListener('load', function() {
    const main = document.querySelector('.main');

    const contents_title = createDiv('term');
    contents_title.innerHTML += '<p class="des-title">장바구니 <span class="des-content">장바구니에 담긴상품은 최대 15일까지 보관됩니다.</span></p>'

    const checkbox = createDiv('checkbox');
    const all_check = createFormFactor('0','checkbox','','','전체선택','all-select');
    checkbox.appendChild(all_check);
    checkbox.innerHTML += '<label for ="all-select" style="bold"> 전체선택</label>';

    const descript = createDiv('descript term');
    descript.innerHTML += '상품정보';

    const bucket_wrap = createDiv('bucket-wrap term-120');

    const bucket_list = createDiv('bucket-list');
    for(idx = 0; idx < 10; idx++){
        const bucket_box = createDiv('bucket-box radi');
        bucket_list.appendChild(bucket_box);

        const checkboxEach = createFormFactor('0','checkbox','','checkbox-each');

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
        optionDetail.innerText='옵션상세';
        const optionDelete = createDiv('option-delete')
        optionDelete.innerText='삭제';

        const deliveryType = createSpan('선불택배/묶음배송','delivery-type'); 
        const deliveryData = createSpan('10/5(월) 출고 예정','delivery-data'); 

        productDetail.append(optionDetail,optionDelete,deliveryType,deliveryData);

        topMiddle.append(productTitle,productDescription,productDetail);

        const uploadButton = createDiv('upload-button');
        const memoButton = createDiv('memo-button');
        const priceArea = createDiv('price-area');

        uploadButton.innerText='파일업로드';
        memoButton.innerText='작업메모';
        priceArea.innerText='10,000원';
        topRight.append(uploadButton,memoButton,priceArea);

        boxTop.append(topLeft,topMiddle,topRight);

        const boxBottom = createDiv('box-bottom');
        boxBottom.innerText = '작업메모사항입니다. 오늘배송나가게해주세요~!!!!!!작업메모사항입니다. 오늘배송...';
        boxArea.append(boxTop,boxBottom)
        bucket_box.append(checkboxEach,boxArea);
    }

    const info_box = createDiv('info-box radi');
    info_box.innerHTML+='결제예정금액';

    const detailPriceBox = createDiv('detail-price-box');


    const priceOrder= createDiv('price-order');
    const priceDelivery= createDiv('price-delivery');
    const priceVat= createDiv('price-vat');

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

    detailPriceBox.append(priceOrder,priceDelivery,priceVat);

    const totalPriceBox = createDiv('total-price-box');

    const totalPriceText = createDiv('total-text');
    const totalPriceNumber = createDiv('total-number');
    totalPriceText.innerText = '총 결제금액';
    totalPriceNumber.innerText = '5,000,000원';

    totalPriceBox.append(totalPriceText,totalPriceNumber);

    const payment = createDiv('payment');
    payment.innerText ='선택상품 주문하기';
    const shopping = createDiv('shopping');
    shopping.innerText = '주문 계속하기';

    info_box.append(detailPriceBox,totalPriceBox,payment,shopping);

    bucket_wrap.append(bucket_list, info_box);

    //////////배송지 정보///////////   

    const deliveryInfo = createDiv('delivery-info');
    const deliveryInfoTitle =createDiv('delivery-info-title');
    deliveryInfoTitle.innerHTML='배송지 정보'

  
    //배송 방법(인쇄만해당)역역
    const methodBox =createDiv('method-box box');
    const methodBoxHeade = createDiv('method-box-heade heade');
    methodBoxHeade.innerHTML +='<p>배송방법<br>(인쇄만 해당)</p> ';
    const methodBoxBody = createDiv('method-box-body body');
    methodBox.append(methodBoxHeade,methodBoxBody);

    const radioSelect = createDiv('radio-select');
    methodBoxBody.append(radioSelect);

    for (let i = 0; i < methodType.length; i++) {
        const label = createLabel(null, `radio${i + 1}`, 'radio-css ');
        const radio = createFormFactor('0', 'radio', 'method-radio', '', methodType[i], `radio${i + 1}`);
        const radioText = document.createTextNode(methodType[i]);
        label.append(radio, radioText);
        radioSelect.appendChild(label);
      }
    
    const methodInfoBox = createDiv('method-Info-box');
    methodInfoBox.innerHTML+='<p>-선불 택배인 경우 <span style="color: blue;">제주/도서 산간</span>인 경우 <span style="color: red;">배송료가 추가 정산됩니다</span></p>';
    methodInfoBox.innerHTML+='<p>-배송방법 변경은 인쇄물만 해당됩니다. (자석스티커, 쇼핑백) 실사출력물 제외)</p>';
    methodInfoBox.innerHTML+='<p style="font-weight: bold;">-배송 방법을 변경하더라도 기본배송<span style="color: red;">(실사출력 착불, 쇼핑백 착불</span>,<span style="color: blue;"> 자석스티커 착불</span>)이 우선 적용됩니다.</p>';
    
    methodBoxBody.append(radioSelect,methodInfoBox);

    //보내는 사람 영역
    const consignorBox=createDiv('consignor-box box');
    const consignorBoxHeade = createDiv('consignor-box-heade heade');
    consignorBoxHeade.innerHTML +='<p>보내는사람</p>';
    const consignorBoxBody = createDiv('consignor-box-body body');

    for (let i = 0; i < consignorType.length; i++) {
        const label = createLabel(null, `consignor-radio${i + 1}`, 'radio-css ');
        const radio = createFormFactor('0', 'radio', 'consignor-radio', '', consignorType[i], `consignor-radio${i + 1}`);
        const radioText = document.createTextNode(consignorType[i]);
        label.append(radio, radioText);
        consignorBoxBody.appendChild(label);
      }
    consignorBox.append(consignorBoxHeade,consignorBoxBody);

    //배송지 선택 영역
    const choiceBox=createDiv('choice-box box');
    const choiceBoxHeade = createDiv('choice-box-heade heade');
    choiceBoxHeade.innerHTML +='<p>배송지선택</p>';
    const choiceBoxBody = createDiv('choice-box-body body');

    for (let i = 0; i < choiceType.length; i++) {
        const label = createLabel(null, `choice-radio${i + 1}`, 'radio-css ');
        const radio = createFormFactor('0', 'radio', 'choice-radio', '', choiceType[i], `choice-radio${i + 1}`);
        const radioText = document.createTextNode(choiceType[i]);
        label.append(radio, radioText);
        choiceBoxBody.appendChild(label);
      }
    choiceBox.append(choiceBoxHeade,choiceBoxBody);

    //받는사람 영역역
    const receiverBox=createDiv('receiver-box box');
    const receiverBoxHeade = createDiv('receiver-box-heade heade');
    receiverBoxHeade.innerHTML +='<p>받는사람</p>';
    const receiverBoxBody = createDiv('receiver-box-body body');
    const nameBox = createFormFactor(0,'text','','name-box','박상우');

    const cellNumberBox = createDiv('cell-number-box');
    const cellNumberHeade= createDiv('cell-heade');
    const cellNumberbody= createDiv('cell-body');
    cellNumberHeade.innerHTML+='<p>휴대전화</p>'
    const cellNumber1 = createFormFactor(0,'tel','','cell-number','','','','',4);
    const cellNumber2 = createFormFactor(0,'tel','','cell-number','','','','',4);
    const cellNumber3 = createFormFactor(0,'tel','','cell-number','','','','',4);
    const hyphenText = document.createElement('p');
    hyphenText.innerHTML='&nbsp;-&nbsp;'
    cellNumberbody.append(cellNumber1,cellNumber2,cellNumber3);
    cellNumberBox.append(cellNumberHeade,cellNumberbody);
    
    insertAfter(cellNumber1,hyphenText.cloneNode(true));
    insertAfter(cellNumber2,hyphenText.cloneNode(true));


    const officeNumberBox = createDiv('office-number-box');
    const officeNumberHeade= createDiv('office-heade');
    const officeNumberbody= createDiv('office-body');
    officeNumberHeade.innerHTML+='<p>유선전화</p>'
    const officeNumber1 = createFormFactor(0,'tel','','office-number','','','','',4);
    const officeNumber2 = createFormFactor(0,'tel','','office-number','','','','',4);
    const officeNumber3 = createFormFactor(0,'tel','','office-number','','','','',4);
    officeNumberbody.append(officeNumber1,officeNumber2,officeNumber3);
    officeNumberBox.append(officeNumberHeade,officeNumberbody);
    insertAfter(officeNumber1,hyphenText.cloneNode(true));
    insertAfter(officeNumber2,hyphenText.cloneNode(true));

    receiverBoxBody.append(nameBox,cellNumberBox,officeNumberBox);
    receiverBox.append(receiverBoxHeade,receiverBoxBody);

    //배송 주소 영역
    const addressBox=createDiv('address-box box');
    const addressBoxHeade = createDiv('address-box-heade heade');
    addressBoxHeade.innerHTML +='<p>배송주소</p>';
    const addressBoxBody = createDiv('address-box-body body');
    const div1 =createDiv('div1');
    const div2 =createFormFactor(0,'text','','div2','','','','상세주소');
    const div3 =createDiv('div3');

    
    const saveCheck =createFormFactor(0,'checkbox','address-save','','','address-save');
    const saveCheckText =createLabel(null,'address-save','');
    saveCheckText.innerHTML+='<span style ="color: var( --color-2)";>배송지관리</span> 주소 <span style="color: var( --color-4);">저장시 선택</span>해 주세요.'

    div3.append(saveCheck,saveCheckText);

    const mini1 = createDiv('mini1');
    const mini2 = createDiv('mini2');
    mini2.innerHTML='우편번호 검색'
    const mini3 = createDiv('mini3');
    div1.append(mini1,mini2,mini3);

    addressBoxBody.append(div1,div2,div3);
    addressBox.append(addressBoxHeade,addressBoxBody);

    deliveryInfo.append(deliveryInfoTitle,methodBox,consignorBox,choiceBox,receiverBox,addressBox);


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

    main.append(contents_title, descript, checkbox, bucket_wrap,deliveryInfo,allProduct,promotion);

});