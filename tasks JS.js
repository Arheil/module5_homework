	task_0:
	
	function exchange (money) {
	money = prompt('Enter the sum');
	let result = money * 85;
	alert(`You have ${result} rub`);
}
	
	task_1:// Не могу понять почему не срабатывает второй блок if...else
	
	let resault = +prompt();
	
	if(typeof resault === 'number' && resault % 2 === 0) {
			console.log('Число чётное');
		}else{
			console.log('Число нечётное');
		}
	if(typeof resault === isNaN(resault)) {
		console.log('Это значение NaN'); 
	}else if(typeof resault !== 'number') {
		console.log('Упс, кажется, вы ошиблись');
	}
	

	task_2:
	
	function getVal(x) {
		if (typeof x === 'number') {
			console.log('Это число');
		} else if(typeof x === 'string') {
			console.log('Это строка');
		}else if(typeof x === 'boolean') {
			console.log('Это логическое значение');
		}else{
			console.log('Тип Х не определён')
		}
		return x;
	}
	
	
	task_3:
	
	const text = 'Hello'.split("").reverse().join("");
	console.log(text);
	
	
	task_4:
	
	let rand = Math.ceil((Math.random() * 100));
	console.log(rand);
	
	
	task_5:

	let arr = [1,2,3];
	console.log(`Длина массива - ${arr.length}`);
	arr.forEach(function(item, index, array) {
    	console.log(item)
});


	task_6:

	let arr = [2,2,2];

	arr.forEach(function(item, index, array) {
        console.log(arr[item] === item); 
});


	task_7:
		
function getOddAndEvenItems(arr) {  // где косяк не могу понять
		let odd = 0;
		let even = 0;
		let zero = 0;
	
		for (let i = 0; i < arr.length; i++) {
			
			if ( arr[i] % 2 === 0 ) {
				even++;
			}else if ( arr[i] % 2 !== 0 ) {
				odd++;
			}else if ( arr[i] === 0 ) {
				zero++;
			}else if ( typeof arr[i] !== 'number' ) {
				console.log('Error');
			}else{
				console.log('');
			}
	}
		console.log(odd, even, zero);
	}
getOddAndEvenItems([1,2,3,4,5,0])
	

	task_8:

	let myMap = new Map();

	myMap.set('fruit', 'apple');
	myMap.set('color', 'black');
	myMap.set('size', 2);

	for (let item of myMap.keys()) {
		console.log(`ключ - ${item}`);
	}
	for (let val of myMap.values()) {
		console.log(`значение - ${val}`);
	}