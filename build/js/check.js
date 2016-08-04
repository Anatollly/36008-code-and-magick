var getMessage = function (a, b) {
  var message;
  var sum = 0;
  var length = 0;

  if (typeof a == 'boolean') {
    if (a) {
      message = 'Я попал в ' + b;
    } else {
      message = 'Я никуда не попал';
    }

  } else if (typeof a == 'number') {
    message = 'Я прыгнул на ' + a * 100 + ' сантиметров';

  } else if (a instanceof Array) {
    if (b instanceof Array) {
      for (i = 0; i < a.length; i++) {
        length += a[i] * b[i];
      }
      message = 'Я прошёл ' + length + ' метров';
    } else {
      for (i = 0; i < a.length; i++) {
        sum += a[i];
      }
      message = 'Я прошёл ' + sum + ' шагов';
    }
  }
  return message;
}
