// These functions take a function as an argument. 
// Set the type for the parameters

// In all of the functions below type the callback

// This function takes a callback that receives a string. 

function callYouLater<T>(callback: (T:string) => T, time: number) {
	setTimeout(() => {
	  callback('What it be like?')
	}, time)
}



function callMeMaybe<T>(callback: ({}) => T, probability: number) {
	setTimeout(() => {
		if (Math.random() * 100 < probability) {
		  return callback({ success: true, probability })
		}
		callback({ success: false, probability })
	}, 1000)
}

// 


export {
  callYouLater,
  callMeMaybe
}
