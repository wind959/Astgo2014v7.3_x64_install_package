function showTopMessage(str) {	var message = document.getElementById('top_message'); 	if (message) {		document.body.removeChild(message);	} 	message = document.createElement("DIV");	message.id = 'top_message';	message.innerHTML = str;		var header = document.getElementById('header');	if(header){		header.insertAdjacentElement('beforeBegin', message);	}}if(window.HTMLElement){ 	HTMLElement.prototype.insertAdjacentElement=function(where,parsedNode){		switch(where){			case "beforeBegin":				this.parentNode.insertBefore(parsedNode,this);				break;			case "afterBegin":				this.insertBefore(parsedNode,this.firstChild);				break;			case "beforeEnd":				this.appendChild(parsedNode);				break;			case "afterEnd":				if(this.nextSibling)					this.parentNode.insertBefore(parsedNode,this.nextSibling);				else					this.parentNode.appendChild(parsedNode);				break;		}	}}