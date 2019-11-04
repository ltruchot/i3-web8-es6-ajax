import moment from 'moment';
import { pipe } from 'ramda';

/* console.log(
  moment('121232200923', 'MMhhmmYYYYDD').format('DD/MM/YYYY à HH:mm'),
);

const nbDaysInWeek = 7;
const translateWeek = function (langA, langB, langAText) {
  for (let day = 1; day <= nbDaysInWeek; day++) {
    moment.locale(langA);
    const langIn = moment().isoWeekday(day).format('dddd');
    moment.locale(langB);
    const langOut = moment().isoWeekday(day).format('dddd');
    console.log(`${langIn} is ${langAText} for ${langOut}`);
  }
};
translateWeek('lo', 'en', 'laotian');

// console.log bizarre:
const d = moment().set({
  year: 2019, month: 9, date: 22, hour: 14, minute: 0,
});
console.log(d);


// Affiche combien de jour, il y a dans le mois/année indiqué
const time = moment('02-2020', 'MM-YYYY').daysInMonth();
console.log(time);

// jessica / melanie
 */
/* const temps = moment('1987-02-16 22:02').fromNow();
console.log(temps);

// ferdawss
const a = moment([1991, 10, 13]);
const b = moment();
console.log(`A star was born ${a.from(b)}...`);

// sabrina / jordane
const age = moment('03-Jan-1987').diff('01-Jan-1987', '');
console.log(age);

const toto = moment('10-Jan-1987').subtract(45, 'days');

console.log(toto);


 */
