function displayPopup() {
// document.body = document.createElement('body');
let divEle = document.createElement('div');
divEle.setAttribute('style','display: block;position: fixed;bottom: 23px;right: 15px;z-index: 9; width:350px; height:620px;');
divEle.setAttribute('id','container-sec');
let closeBtn = document.createElement('button');
closeBtn.setAttribute('id','close-btn');
closeBtn.innerHTML = "Close";
closeBtn.setAttribute('style','color: white;padding: 19px 20px;border: none;cursor: pointer;width: 100%;opacity: 0.8;background-color: red;border-radius:15px;outline:none');
closeBtn.setAttribute('onclick','closeChat()');

let buttonEle = document.createElement('input');
buttonEle.setAttribute('id','chat-btn');
buttonEle.setAttribute('type','image');
// buttonEle.setAttribute('value','Chat');
buttonEle.setAttribute('style','outline:none;color: white;padding: 16px 20px;border: none;cursor: pointer;opacity: 0.8;position: fixed;bottom: 23px;right: 28px;width: 250px;height: 330px;display:none');
buttonEle.setAttribute('src',"https://wakaw-live-web-stage.s3.ap-south-1.amazonaws.com/js/JS_widget/Copy+of+icon_gif+(1).gif");
buttonEle.setAttribute('onclick','openChat()');
let iframeEle = document.createElement('iframe');
iframeEle.setAttribute('id', 'popupFrame');
iframeEle.setAttribute('src','');
iframeEle.setAttribute('style','height:550px;width: -webkit-fill-available;border-radius:15px')
divEle.appendChild(iframeEle);
divEle.appendChild(closeBtn);
document.body.appendChild(buttonEle);
document.body.appendChild(divEle);
var frame = document.getElementById('popupFrame');
frame.src ="https://steffii.wakaw.live/d03df49b-7740-47d0-8725-485135e5b918";
};
// })();
function openChat() {
document.getElementById("container-sec").style.display = "block";
document.getElementById('chat-btn').style.display = "none";
}
function closeChat() {
document.getElementById("container-sec").style.display = "none";
document.getElementById('chat-btn').style.display = "block";