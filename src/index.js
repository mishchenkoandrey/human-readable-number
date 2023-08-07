module.exports = function toReadable (number) {
  const string = number.toString();
  const arr = string.split('');
  const res = arr
    .map((i, index) => {
      switch (i) {
        case '0':
          return arr.length === 1
            ? 'zero'
            : '';
        case '1':
          if (index === arr.length - 1) {
            return arr[index - 1] === '1'
              ? ''
              : 'one';
          } else if (index === arr.length - 2) {
            switch (arr[arr.length - 1]) {
              case '0':
                return 'ten';
              case '1':
                return 'eleven';
              case '2':
                return 'twelve';
              case '3':
                return 'thirteen';
              case '4':
                return 'fourteen';
              case '5':
                return 'fifteen';
              case '6':
                return 'sixteen';
              case '7':
                return 'seventeen';
              case '8':
                return 'eighteen';
              case '9':
                return 'nineteen';
            }
          } else {
            return 'one hundred ';
          };
        case '2':
          if (index === arr.length - 1) {
            return arr[index - 1] === '1'
              ? ''
              : 'two';
          } else if (index === arr.length - 2) {
            return 'twenty ';
          } else if (index === arr.length - 3) {
            return 'two hundred ';
          };
        case '3':
          if (index === arr.length - 1) {
            return arr[index - 1] === '1'
              ? ''
              : 'three';
          } else if (index === arr.length - 2) {
            return 'thirty ';
          } else if (index === arr.length - 3) {
            return 'three hundred ';
          };
        case '4':
          if (index === arr.length - 1) {
            return arr[index - 1] === '1'
              ? ''
              : 'four';
          } else if (index === arr.length - 2) {
            return 'forty ';
          } else if (index === arr.length - 3) {
            return 'four hundred ';
          };
        case '5':
          if (index === arr.length - 1) {
            return arr[index - 1] === '1'
              ? ''
              : 'five';
          } else if (index === arr.length - 2) {
            return 'fifty ';
          } else if (index === arr.length - 3) {
            return 'five hundred ';
          };
        case '6':
          if (index === arr.length - 1) {
            return arr[index - 1] === '1'
            ? ''
            : 'six';
          } else if (index === arr.length - 2) {
            return 'sixty ';
          } else if (index === arr.length - 3) {
            return 'six hundred ';
          };
        case '7':
          if (index === arr.length - 1) {
            return arr[index - 1] === '1'
            ? ''
            : 'seven';
          } else if (index === arr.length - 2) {
            return 'seventy ';
          } else if (index === arr.length - 3) {
            return 'seven hundred ';
          };
        case '8':
          if (index === arr.length - 1) {
            return arr[index - 1] === '1'
            ? ''
            : 'eight';
          } else if (index === arr.length - 2) {
            return 'eighty ';
          } else if (index === arr.length - 3) {
            return 'eight hundred ';
          };
        case '9':
          if (index === arr.length - 1) {
            return arr[index - 1] === '1'
            ? ''
            : 'nine';
          } else if (index === arr.length - 2) {
            return 'ninety ';
          } else if (index === arr.length - 3) {
            return 'nine hundred ';
          };
      }
    });
  return res.join('').trim();
}
