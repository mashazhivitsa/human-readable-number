module.exports = function toReadable (number) {
    
    if (number < 0 || number > 999) {
        return console.log("This number is not supported");
    }

    // 100, 200 ...900

if (number === 100) {
    return 'one hundred';
  }

  if (number === 200) {
    return 'two hundred';
  }

  if (number === 300) {
    return 'three hundred';
  }

  if (number === 400) {
    return 'four hundred';
  }

  if (number === 500) {
    return 'five hundred';
  }
  
  if (number === 600) {
    return 'six hundred';
  }
  
  if (number === 700) {
    return 'seven hundred';
  }

  if (number === 800) {
    return 'eight hundred';
  }

  if (number === 900) {
    return 'nine hundred';
  }

    let registers_count = count_register(number); // 1,2,3

    if (registers_count === 1) {
        // 0 - 9
        return get_first_register(number);
    } else if (registers_count === 2) {
        // 10-99
        return get_second_register(number);
    } else if (registers_count === 3) {
        // 100-999
        return get_third_register(number);
    }
}



// 999 => [9,9,9], 67 => [6,7]
function split_nums(number) {
    return number.toString().split('').map(Number);
}

// 1,2,3
function count_register(number) {
    const splitted_numbers = split_nums(number);
    return splitted_numbers.length;
}

function get_first_register(number) {
    // 0 -9
    let first_nums = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };
    return first_nums[split_nums(number)];
}

let second_nums = {
    2: 'twen',
    3: 'thir', 
    4: 'for', // edge
    5: 'fif',
    6: 'six',
    7: 'seven',
    8: 'eigh',
    9: 'nine'
}

function get_second_register(number) {
    // 10-99
    let say_my_number = '';

    let nums_array;

    if (Array.isArray(number)) {
      nums_array = number;
    } 

    if (Array.isArray(number) === false) {
      nums_array = split_nums(number);
     }

    // [1,5]
    let firstnum = nums_array[0]; // 1
    let secondnum = nums_array[1]; // 5

    if (firstnum === 0) {
        if (secondnum === 0) {
            return '';
        }
        return get_first_register(secondnum);
    }


    else if (firstnum === 1) {
        // 10-19
        // thir-ty case

        switch (secondnum) { // 10, 11, 12, 14 exceptions
            case 0:
              return 'ten';
            case 1:
              return 'eleven';
            case 2:
              return 'twelve';
            case 4:
              return 'fourteen'
          }
    
        // 'fif' + 'teen
        say_my_number += second_nums[secondnum] + 'teen';
        return say_my_number;
    } else {
        // 20, 30, 40 ... 90
        if (firstnum === 2 && secondnum === 0) {
            return 'twenty';
        }
        if (firstnum === 3 && secondnum === 0) {
            return 'thirty';
        }
        if (firstnum === 4 && secondnum === 0) {
            return 'forty';
        }
        if (firstnum === 5 && secondnum === 0) {
            return 'fifty';
        }
        if (firstnum === 6 && secondnum === 0) {
            return 'sixty';
        }
        if (firstnum === 7 && secondnum === 0) {
            return 'seventy';
        }
        if (firstnum === 8 && secondnum === 0) {
            return 'eighty';
        }
        if (firstnum === 9 && secondnum === 0) {
            return 'ninety';
        }


        // 20-99

        // 'twen' + 'ty ' + 'one'
        say_my_num = second_nums[firstnum] + 'ty ' + get_first_register(secondnum);

        return say_my_num;

    } 
}

function get_third_register(number) {

    let nums_array = split_nums(number);
    let firstnum = nums_array[0];
    let second_ending = nums_array.slice(1);

    return get_first_register(firstnum) + ' hundred' + ` ${get_second_register(second_ending)}`;
}

