
  /* Creatuon DIV Object 
  @param + className
  @param   click Event CallBack Function 
  @param   mouseOver Event CallBack Function
  @param   mouseOut Event CallBack Function
  @param   objId
  @param   objName
  */  
  const objectInfo = ['class','onClick','onMouseOver','onMouseOut','id','name'];
  

  function createDiv(...param){
    if(param.length >= 1 && param[0] == null) {console.log('ClassName 미지정'); }
    
    const div = document.createElement('div');
    for(let idx= 0; idx<param.length; idx++)div.setAttribute(objectInfo[idx],param[idx]);
    return div;
  }

  /* Creation FormFactor Object
      @param      int  0 input 1 select 2textarea
      ....@param  string  attributes
  */
  const formFactor = [['input','type','name','class','value','id','data-user','placeholder','maxlength'],
                      ['select','class'],
                      ['textarea','class']
                    ];

  function createFormFactor(...param){
    const formFactorElement = document.createElement(formFactor[param[0]][0]);
    for(let idx = 1; idx < param.length; idx++) {

      // id가 공백인 경우 해당  건너뛰기
      if (formFactor[param[0]][idx] === 'id' && param[idx].trim() === '') {
        continue; 
      }
      
      formFactorElement.setAttribute(formFactor[param[0]][idx], param[idx]);
    }
    return formFactorElement;
  }
  function createOption(value,content){
    const option = document.createElement('option');
    option.setAttribute('value',value);
    option.textContent = content;
    return option;
  }


  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function createSpan(content,className,functionName){
    const span = document.createElement('span');
    span.textContent = content;
    span.setAttribute('class',className);
    if(functionName != null)span.setAttribute('onclick',functionName);
    return span;
  }

  function createLabel(content,forName,classname){
    const label = document.createElement('label');
    label.textContent = content;
    label.setAttribute('for',forName);
    label.setAttribute('class',classname);
    return label;
  }
  
  function createSection(parent, title, className) {
    const sectionBox = createDiv(className + ' box');
    const sectionHeader = createDiv(className + '-heade heade');
    const titleLine = title.replace(/ /g,'<br>');
    sectionHeader.innerHTML = `<p>${titleLine}</p>`;
    const sectionBody = createDiv(className + '-body body');
    
    sectionBox.append(sectionHeader, sectionBody);
    parent.append(sectionBox);
  }
  
  

  
//class="all-product"에 사용되는 변수 
let order = ['New순','추천순','인기순'];
let classNames = ['new', 'reco', 'best'];
let productArry = ['명함','스티커','봉투','전단/리플렛','판촉','기획상품','부채']
  
let allProductArry =[
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
  ,
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
  },
  {
    title:'고품격',
    description:'고민없이 선택하는 기본 명함',
    sheet:'100매',
    price:'3,000',
  }
];
  // customer
  let sideCate = [
    {class:'FAQ-button', text:'FAQ'},
    {class:'notice-button', text:'공지사항'},
    {class:'ask-button', text:'1:1 문의하기'},
    {class:'enroll-button', text:'접수안내'},
    {class:'delivery-button', text:'배송안내'},
    {class:'download-button', text:'다운로드'},
  ];
  let mypageCate = [
    {class:'FAQ-button', text:'장바구니'},
    {class:'notice-button', text:'결제/계좌'},
    {class:'ask-button', text:'주문/배송조회'},
    {class:'enroll-button', text:'1:1 문의내역'},
    {class:'delivery-button', text:'접수안내'}
  ];

  let downloadCate = [
    {class:'1-button', text:'스티커 칼선'},
    {class:'2-button', text:'봉투 칼선'},
    {class:'3-button', text:'캘린더 칼선'},
    {class:'4-button', text:'기타 칼선'}
  ];
  //고객센터에서 사용할 함수  
  let customerCate =[
    {cate:'FAQ', title:'문의전 FAQ를 확인해주세요',
    text:'검색창을 이용하시면 쉽고 빠르게 원하는 내용을 찾아보고 문의를 해결할 수 있습니다'},
    {cate:'공지사항', title:'공지사항을 꼭 확인해주세요',
    text:'프린트 뱅크에서 안내드리는 공지사항입니다.'},
    {cate:'1:1 문의하기', title:'문의전 FAQ를 확인해주세요',
    text:'검색창을 이용하시면 쉽고 빠르게 원하는 내용을 찾아보고 문의를 해결할 수 있습니다'}
  ];

  //결제창 안내사항
  let guideTextArry =[
    {title:'가나다라마바사아자차카타파하가나다라마바사아자차카타파하'},
    {title:'가나다라마바사아자차카타파하가나다라마바사아자차카타파하'},
    {title:'가나다라마바사아자차카타파하가나다라마바사아자차카타파하'}
  ]

  let methodType= [
    '선불택배','착불택배','방문(파주)',
    '방문(충무로)','퀵착불(파주출고)',
    '퀵착불(충무로출고)','택배다중발송(엑셀)-후정산'
  ];
  let consignorType= [
    '박상우','프린트뱅크'
  ];
  let choiceType= [
    '기본주소','새로입력','배송지에서 선택',
    '최근배송지(2년이내)'
  ];


  let sectionsArry = [
    { title: '배송방법 (인쇄만해당)', className: 'method-box' },
    { title: '보내는사람', className: 'consignor-box' },
    { title: '배송지선택', className: 'choice-box' },
    { title: '받는사람', className: 'receiver-box' },
    { title: '배송주소', className: 'address-box' }
  ];

  let productSelectArry =['탁상용캘린더1','탁상용캘린더2',
  '탁상용캘린더3','탁상용캘린더4','탁상용캘린더5','탁상용캘린더6',
  '탁상용캘린더7','탁상용캘린더8','탁상용캘린더9','탁상용캘린더10'];

  let stateButtonArry =[
    { title: '주문상세', className: 'detail-button button-box' },
    { title: '배송지 정보', className: 'address-button button-box' },
    { title: '구매확정완료', className: 'confirm -button button-box' },
    { title: '출고완료', className: 'finish-button button-box' } 
  ];

  let productDetailArry =[
    {date:'2023.08.22',product:'가나다라_명함',detail:'사각재단/ 배경없음/ 강접아트지/ 1,000매 1건/ 방문(충무로)ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ',price:'10,000원'},
    {date:'2023.08.22',product:'가나다라_명함',detail:'사각재단/ 배경없음/ 강접아트지/ 1,000매 1건/ 방문(충무로)',price:'10,000원'},
    {date:'2023.08.22',product:'가나다라_명함',detail:'사각재단/ 배경없음/ 강접아트지/ 1,000매 1건/ 방문(충무로)',price:'10,000원'},
    {date:'2023.08.22',product:'가나다라_명함',detail:'사각재단/ 배경없음/ 강접아트지/ 1,000매 1건/ 방문(충무로)',price:'10,000원'},
    {date:'2023.08.22',product:'가나다라_명함',detail:'사각재단/ 배경없음/ 강접아트지/ 1,000매 1건/ 방문(충무로)',price:'10,000원'},
    {date:'2023.08.22',product:'가나다라_명함',detail:'사각재단/ 배경없음/ 강접아트지/ 1,000매 1건/ 방문(충무로)',price:'10,000원'},
    {date:'2023.08.22',product:'가나다라_명함',detail:'사각재단/ 배경없음/ 강접아트지/ 1,000매 1건/ 방문(충무로)',price:'10,000원'},
    {date:'2023.08.22',product:'가나다라_명함',detail:'사각재단/ 배경없음/ 강접아트지/ 1,000매 1건/ 방문(충무로)',price:'10,000원'},
    {date:'2023.08.22',product:'가나다라_명함',detail:'사각재단/ 배경없음/ 강접아트지/ 1,000매 1건/ 방문(충무로)',price:'10,000원'},
    {date:'2023.08.22',product:'가나다라_명함',detail:'사각재단/ 배경없음/ 강접아트지/ 1,000매 1건/ 방문(충무로)',price:'10,000원'}
  ];

