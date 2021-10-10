const table = document.getElementById('contacts-table');
const slideCont = document.getElementById("post-info-cont");
const slideCard = document.getElementsByClassName("post-info-cont");
const slideCloser = document.getElementsByClassName("slide-closer");
const reqForm = document.getElementById("req-form");
const reqFormUrl = document.getElementById("req-form").action;
const modal = document.getElementById('adv-search-form-modal');
const modalForm = document.getElementById('adv-search-form-cont');
const modalCloser = document.getElementById('modal-closer');
const formResultsLoader = document.getElementById('modal-preloader');
const failureBoxCont = document.getElementById('box-cont-failure');
const successBoxCont = document.getElementById('box-cont');
let postUrl;

if(slideCont !== null){
	window.onresize = () => {
		if(window.innerWidth >= 1210 && slideCont.style.width !== '0px' && slideCont.style.width !== ''){
			slideCont.style.width = '50%';
			slideCont.style.borderLeft = '1px solid #888';
		}else if(window.innerWidth > 870 && window.innerWidth <= 1210 && slideCont.style.width !== '0px' && slideCont.style.width !== ''){
			slideCont.style.width = '70%';
			slideCont.style.borderLeft = '1px solid #888';
		}else if(window.innerWidth > 675 &&window.innerWidth <= 870 && slideCont.style.width !== '0px' && slideCont.style.width !== ''){
			slideCont.style.width = '90%';
			slideCont.style.borderLeft = '1px solid #888';
		}else if(window.innerWidth <= 675 && slideCont.style.width !== '0px' && slideCont.style.width !== ''){
			slideCont.style.width = '100%';
			slideCont.style.borderLeft = '1px solid #888';
		}
	}
}

function slideRevealer(){
	if(slideCont.style.width === '0px' || slideCont.style.width === ''){
		if(window.innerWidth >= 1210){
			slideCont.style.width = '50%';
			slideCont.style.borderLeft = '1px solid #888';
		}else if(window.innerWidth > 870 && window.innerWidth <= 1210){
			slideCont.style.width = '70%';
			slideCont.style.borderLeft = '1px solid #888';
		}else if(window.innerWidth > 675 && window.innerWidth <= 870){
			slideCont.style.width = '90%';
			slideCont.style.borderLeft = '1px solid #888';
		}else if(window.innerWidth <= 675){
			slideCont.style.width = '100%';
			slideCont.style.borderLeft = '1px solid #888';
		}
	}
}

function slideTerminator(){
	for(let i = 0; i < slideCloser.length; i++){
		slideCloser[i].onclick = () => {
			  if(slideCont.style.width !== '0px' || slideCont.style.width !== ''){
				slideCont.style.width = '0';
				slideCont.style.borderLeft = '0';
			}
		}
	}
}

slideTerminator();

function slideDisplayer(){	
	
	for(let i = 1; i < table.rows.length; i++){
		
		table.rows[i].onclick = function(event){
			let tableId = this.id;
			
			for(let j = 0; j < slideCard.length; j++){
				
				slideCard[j].style.display = 'none';
				
				let cardId = slideCard[j].children[1].children[1].children[0].children[0].children[0].id;
				
				if(event.target === this.cells[0].children[0]){
					if(slideCont.style.width === '0px' || slideCont.style.width === ''){
						return null;
					}
				}
				
				if(event.target === this.cells[7].children[0].children[0]){
					if(slideCont.style.width === '0px' || slideCont.style.width === ''){
						modal.style.display = 'flex';
						modalForm.style.display = "flex";
						postUrl = `${ reqFormUrl}${ this.id }/`;
						return null;
					}
				}
				
				if(tableId === cardId){
					slideCard[j].style.display = 'flex';
					slideRevealer();
				}else{
					slideCard[j].style.display = 'none';
				}	
				
			}
		}
	}
}

slideDisplayer();

let mainCheckBox = document.getElementById('main-checkbox');
let subCheckBox = document.getElementsByClassName('sub-checkBox');

mainCheckBox.onclick = function(){
	for(let i = 0; i < subCheckBox.length; i++){
		let tableRow = subCheckBox[i].parentElement.parentElement;
		if(this.checked && window.getComputedStyle(tableRow, null).display !== 'none'){
			subCheckBox[i].checked = true;
		}else{
			subCheckBox[i].checked = false;
		}
	}
}

let deleteAllBtn = document.getElementById('deleteAll-cont');

//Click functionality for the deleting of all messages when checked checkboxes
deleteAllBtn.onclick = () => {
	let deletedBulk = [];
	//Array of messages
	let subCheckBoxArr = Array.from(subCheckBox);
	
	//Map functionality for the deleting of messages
	subCheckBoxArr.map((checkBox) => {
		let tableRow = checkBox.parentElement.parentElement;
		
		if(checkBox.checked){
			deletedBulk.push(tableRow.id);
		}
		
	});
	
	if(deletedBulk.length > 0){
		modalForm.style.display = "flex";
		modal.style.display = 'flex';
		postUrl = `${ reqFormUrl}${ deletedBulk }/`;
	}
}

modalCloser.onclick = () => {
	modal.classList.add('smooth-out');
	successBoxCont.classList.add('slideUp');
	failureBoxCont.classList.add('slideUp');
	
	setTimeout(() => {
		document.body.style.overflow = 'auto';
		document.documentElement.style.overflow = 'auto';
		modal.style.display = 'none';
		modal.classList.remove('smooth-out');
		successBoxCont.classList.remove('slideUp');
		failureBoxCont.classList.remove('slideUp');
		successBoxCont.style.display = "none";
		failureBoxCont.style.display = "none";
		formResultsLoader.style.display = "none";
	},300);
}

const formResultsLoaderFunc = (showOrHide, formResult) => {
	
	modalForm.style.display = "none";
	formResultsLoader.style.display = showOrHide;

	if(formResult){
		formResult.style.display = "flex";
	}
	
}

const subBtn = document.getElementById('sub-btn');
const reqMsg = document.getElementById('request-message');

const msgValidator = () => {
	const reqMsgVal = reqMsg.value.trim();
	let errMsg = reqMsg.nextElementSibling;
	
	if(reqMsgVal.length === 0 || reqMsgVal === '' || reqMsg === null || reqMsg === undefined){
		errMsg.style.display = 'flex';
		errMsg.innerHTML = 'Required';
		reqMsg.classList.add('redBox');
		return false;
	}else{
		errMsg.style.display = 'none';
		errMsg.innerHTML = '';
		reqMsg.classList.remove('redBox');
		return reqMsgVal;
	}
}

reqMsg.oninput = () => {
	msgValidator();
}

function getCookie(name) {
  if (!document.cookie) {
    return null;
  }

  const xsrfCookies = document.cookie.split(';')
    .map(c => c.trim())
    .filter(c => c.startsWith(name + '='));

  if (xsrfCookies.length === 0) {
    return null;
  }
  return decodeURIComponent(xsrfCookies[0].split('=')[1]);
}

const csrfToken = getCookie('csrftoken');

subBtn.onclick = (event) => {
	event.preventDefault();
	msgValidator();
	
	if(!msgValidator()){
		return msgValidator();
		
	}else{
		
		const userInput = {
		  request_message: msgValidator()
		}
		
		fetch(postUrl,{ 
			method: 'POST',
			credentials: 'same-origin',
			headers:{
				"Content-Type": "application/json",
				"Accept": "application/json",
				'X-CSRFTOKEN': csrfToken
			},
			body: JSON.stringify(userInput)
		}, formResultsLoaderFunc("flex")).then((response) => {
			
			if(response.ok){
				formResultsLoaderFunc("none", successBoxCont)
				console.log(response);
				return;
			}
			
			throw new Error('Response Failed');
		}).catch((err) => {
			formResultsLoaderFunc("none", failureBoxCont)
			console.log(err);
		})
		
		reqForm.reset();
	}
	
}