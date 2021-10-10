const table = document.getElementById('contacts-table');
const modal = document.getElementById('adv-search-form-modal');
const modalForm = document.getElementById('adv-search-form-cont');
const modalCloser = document.getElementById('modal-closer');
const requestedMsg = document.getElementById('buyers-message');
const fileSubForm = document.getElementById('file-sub-form');
const formResultsLoader = document.getElementById('modal-preloader');
const failureBoxCont = document.getElementById('box-cont-failure');
const successBoxCont = document.getElementById('box-cont');
let postUrl;
const data = new FormData(fileSubForm);

function modalOpener(){	
	
	for(let i = 1; i < table.rows.length; i++){
		
		table.rows[i].onclick = function(event){
			const userId = this.className;
			requestedMsg.innerHTML = this.cells[0].children[0].innerText.trim();
			modal.style.display = 'flex';
			modalForm.style.display = "flex";
			postUrl = `/file-upload/${ userId  }`;	
		}
	}
}

modalOpener();

const subBtn = document.getElementById('sub-btn');
const requested_files = document.getElementById('request_files');
const dt = new ClipboardEvent('').clipboardData || new DataTransfer();

modalCloser.onclick = () => {
	dt.clearData();
	requested_files.files = dt.files;
	
	for(const key of data.entries()){
		data.delete('file');
		/* console.log(key) */
	}
	
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

const checkForEmptyVal = () => {
	requested_files.files = dt.files;
	if(requested_files.value.trim() == ''){
		alert('Please upload atleast 1 document');
		return false;	
	}else{
		return true;
	}
}

const fileValidator = () => {
	const fileList = requested_files.files;
	let file;
	
	if(fileList.length > 1){
		inputDtFileEqualizer();
	}else{
		
		for (let i = 0; i < fileList.length; i++) {
			file = fileList[i];
			const fileName = file.name;
			const fileSize = file.size;
			const fileType = file.type;
			const docType = 'application/pdf';
			
			if(fileType != docType){
				alert("Sorry only pdf is supported");
				requested_files.files = dt.files;
				return false;
				
			} else if(fileSize > 5000000){
				alert("Files should not exceed the Maximum file size of 5MB");
				requested_files.files = dt.files;
				return false;
				
			}else{
				dt.items.add(file);
				requested_files.files = dt.files;
				/* console.log(requested_files.files); */
				return true;
			}
		}
	}
}

requested_files.onchange = () => {
	if(!fileValidator()){
		return false;
	}
}

function inputDtFileEqualizer() {
  const input = requested_files;
  const { files } = input;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
	dt.items.add(file);
	input.files = dt.files;
  }
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
	checkForEmptyVal();
	
	if(!checkForEmptyVal()){
		return checkForEmptyVal();
		
	}else{
		/* "Content-Type": "multipart/form-data", */
		
		
		for (const files of requested_files.files){
			data.append('file', files);
		}
		
		for(const key of data.entries()){
			console.log(key);
		}
		
		fetch(postUrl,{ 
			'Content-Type': 'multipart/form-data',
			method: 'POST',
			headers:{
				'X-CSRFTOKEN': csrfToken
			},
			body: data
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
	}
	
}