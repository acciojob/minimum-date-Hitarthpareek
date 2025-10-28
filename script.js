function checkMin(dates,i,minDate){
	const date1= dates[i]
	const date2= minDate
	const yearOf1 = Number(date1.substr(0,4))
	const yearOf2 = Number(date2.substr(0,4))
	const monthOf1 = Number(date1.substr(5,2))
	const monthOf2 = Number(date2.substr(5,2))
	const dateOf1 = Number(date1.substr(8,2))
	const dateOf2 = Number(date2.substr(8,2))

	if(yearOf1 < yearOf2){
		return true
	}
	else if(yearOf1 > yearOf2){
		return false
	}
	else{
		if(monthOf1<monthOf2) return true
		else if(monthOf1 > monthOf2) return false
		else{
			if(dateOf1 < date2) return true
			else if(dateOf1 > dateOf2) return false
			else return true
		}
	}
}

function minDate(dates) {
  //write you code here
	let minDate = dates[0];
	for(let i=1;i<dates.length;i++){
		if(checkMin(dates,i,minDate)) minDate=dates[i];
	}
	return minDate;
}

// Do not change the code

var dates = [
  "2023/03/01",
  "2023/03/02",
  "2023/03/03",
  "2023/03/04",
  "2023/03/05",
  "2023/03/06",
  "2023/03/07",
  "2023/03/08",
  "2023/03/09",
  "2023/03/10",
  "2023/03/11",
  "2023/03/12",
  "2023/03/13",
  "2023/03/14",
  "2023/03/15",
  "2023/03/16",
  "2023/03/17",
  "2023/03/18",
  "2023/03/19",
  "2023/03/20",
  "2023/03/21",
  "2023/03/22",
  "2023/03/23",
  "2023/03/24",
  "2023/03/25",
  "2023/03/26",
  "2023/03/27",
  "2023/03/28",
  "2023/03/29",
  "2023/03/30",
];
 
alert(minDate(dates));
