window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
	  try {		  
		navigator.serviceWorker.register('./sw.js');
	  }
	  catch (exception) {
		alert(exception.toString());
	  }
  }
}