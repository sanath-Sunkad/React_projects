function displayPopup() {
	alert("Hello! I am an alert box!!");
	let divEle = document.createElement('div');
	divEle.setAttribute('style','display: block;position: fixed;bottom: 23px;right: 15px;z-index: 9; width:350px; height:620px;');
	divEle.setAttribute('id','container-sec');
	let closeBtn = document.createElement('button');
	closeBtn.setAttribute('id','close-btn');
	closeBtn.innerHTML = "Close";
	closeBtn.setAttribute('style','color: white;padding: 19px 20px;border: none;cursor: pointer;width: 100%;opacity: 0.8;background-color: red;border-radius:15px;outline:none');

}
