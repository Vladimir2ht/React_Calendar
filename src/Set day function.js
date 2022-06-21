

let days=[];
	
function Set_day(date) {
	let date_copy = new Date(date)
	date_copy.setMonth(date.getMonth() + 1);
	date_copy = date_copy.getDate(date_copy.setDate(0))
	let start_index;
	let last_index;
	if (date.getDate() - 7 < 1) {
		start_index = 1;
		last_index = 15;
	} else if (date.getDate() + 7 > date_copy) {
		start_index = date_copy - 14;
		last_index = date_copy;
	} else {
		start_index = date.getDate() - 7;
		last_index = date.getDate() + 7;
	}
	days = [];
	for (start_index; start_index <= last_index; start_index++) {
		days.push(start_index);				
	}
	return days
}

export default Set_day;