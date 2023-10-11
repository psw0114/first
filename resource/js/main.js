window.addEventListener('load', function() {
  //main
  const main = document.querySelector('.main');
//class="re-re"에 사용되는 변수 '추천상품 리스트'
  let reReArry =[
    { 
      title:'고품격명함',
      description:'고민없이 선택하는 기본 명함',
      sheet:'100매',
      price:'3,000',
    },
    {
      title:'고품격',
      description:'고민없이 선택하는 기본 명함',
      sheet:'100매',
      price:'3,000',
    },
    {
      title:'명함',
      description:'고민없이 선택하는 기본 명함',
      sheet:'100매',
      price:'3,000',
    } 
  ];
  //class="re-new"에 사용되는 변수 '신상품리스트'
  let reNewArry =[
    { 
      title:'명함',
      description:'고민없이 선택하는 기본 명함',
      sheet:'100매',
      price:'3,000',
    },
    {
      title:'명함',
      description:'고민없이 선택하는 기본 명함',
      sheet:'100매',
      price:'3,000',
    },
    {
      title:'명함',
      description:'고민없이 선택하는 기본 명함',
      sheet:'100매',
      price:'3,000',
    } 
  ];

let contentArry= [
  {
    cate:'상품',
    text:'신규상품 런칭 안내',
    date:'2023-09-22'
  },
  {
    cate:'일정',
    text:'9월 추석연휴 배송 안내',
    date:'2023-09-22'
  },
  {
    cate:'이벤트',
    text:'신규상품 샘플 증정',
    date:'2023-09-22'
  },
  {
    cate:'이벤트',
    text:'신규상품 샘플 증정',
    date:'2023-09-22'
  }
];

//midllde배너에서 공지사항 영역
const contentBottom = document.querySelector('.content-bottom');

contentArry.forEach((item,index)=>{
  const contentBlcok = createDiv('content-block hover');
  const cateBlcok = createDiv('cate-block');
  const textBlcok = createDiv('text-block');
  const dateBlcok = createDiv('date-block');

  contentBlcok.appendChild(cateBlcok);
  contentBlcok.appendChild(textBlcok);
  contentBlcok.appendChild(dateBlcok);

  const contentData = contentArry[index];
  contentData.cate = `[${contentData.cate}]`;
  cateBlcok.textContent =contentData.cate;
  textBlcok.textContent =contentData.text;
  dateBlcok.textContent =contentData.date;

  contentBottom.appendChild(contentBlcok);

});



//class="re-bottom" 영역 '추천상품'
const reBottom = document.querySelector('.re-bottom');

reReArry.forEach((item,index)=>{

  const lineBox = createDiv('line-box');
  const lineImg = createDiv('line-img');
  const lineContent = createDiv('line-content content');

  lineBox.appendChild(lineImg);
  lineBox.appendChild(lineContent);

  const contentTitle = createDiv('content-title title');
  const contentDescription = createDiv('content-description');
  const contentPrice = createDiv('content-price total');

  const priceSheet = createDiv('sheet');
  const pricePrice = createDiv('price');

  contentPrice.appendChild(priceSheet);
  contentPrice.appendChild(pricePrice);

  lineContent.appendChild(contentTitle);
  lineContent.appendChild(contentDescription);
  lineContent.appendChild(contentPrice);

  const contentData = reReArry[index];
  contentTitle.textContent = contentData.title;
  contentDescription.textContent = contentData.description;
  priceSheet.textContent = contentData.sheet;
  pricePrice.textContent = contentData.price;

  reBottom.appendChild(lineBox);
});

//class="new-bottom" 영역 '신상품'
const NewBottom = document.querySelector('.new-bottom');
reNewArry.forEach((item,index) =>{
  const lineBox = createDiv('line-box');
  const lineImg = createDiv('line-img');
  const lineContent = createDiv('line-content content');

  lineBox.appendChild(lineImg);
  lineBox.appendChild(lineContent);

  const contentTitle = createDiv('content-title title');
  const contentDescription = createDiv('content-description');
  const contentPrice = createDiv('content-price total');

  const priceSheet = createDiv('sheet');
  const pricePrice = createDiv('price');

  contentPrice.appendChild(priceSheet);
  contentPrice.appendChild(pricePrice);

  lineContent.appendChild(contentTitle);
  lineContent.appendChild(contentDescription);
  lineContent.appendChild(contentPrice);

  const contentData = reNewArry[index];
  contentTitle.textContent = contentData.title;
  contentDescription.textContent = contentData.description;
  priceSheet.textContent = contentData.sheet;
  pricePrice.textContent = contentData.price;

  NewBottom.appendChild(lineBox);
});

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



  //class='review' 영역
  let reviewArry= [
    {
      title:'명함0',
      text:'급하게 당일판으로 주문했는데',
      star:'★★★★★',
      name:'프린트뱅크'
    },
    {
      title:'명함1',
      text:'급하게 당일판으로 주문했는데 다음날 받을 수',
      star:'★★★★★',
      name:'프린트뱅크'
    },
    {
      title:'명함2',
      text:'급하게 당일판으로 주문했는데 다음날 받을 수 있어서 너무 좋았습니다',
      star:'★★★★★',
      name:'프린트뱅크'
    }
  ];

  //class='review' 영역
  const reviewBox = document.querySelector('.review-box');

  reviewArry.forEach((item,index)=>{

    const reviewItem = createDiv('review-item');

    const reviewTop = createDiv('review-top');
    const reviewBottom = createDiv('review-bottom hover');

    reviewItem.appendChild(reviewTop);
    reviewItem.appendChild(reviewBottom);


    const reviewImg = createDiv('review-img');
    const reviewContent = createDiv('review-content');

    
    const contentTitle = createDiv('content-title');
    const contentDescription = createDiv('content-description');
    const contentStar = createDiv('content-star');
  
  
    const star = createDiv('star');
    const name = createDiv('name');
  
    contentStar.appendChild(star);
    contentStar.appendChild(name);
  
    reviewContent.appendChild(contentTitle);
    reviewContent.appendChild(contentDescription);
    reviewContent.appendChild(contentStar);

    reviewBottom.appendChild(reviewImg);
    reviewBottom.appendChild(reviewContent);

    let reviewData = reviewArry[index];

    contentTitle.textContent = reviewData.title;
    contentDescription.textContent = reviewData.text;
    star.textContent = reviewData.star;
    name.textContent = reviewData.name;

    reviewBox.appendChild(reviewItem);

  });
});


