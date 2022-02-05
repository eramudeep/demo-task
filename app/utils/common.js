
/**
 *
 * @param {*} itemToCheck
 * @param {*} arrayOfItem
 * @returns {[]}
 * @description will return an array, this function will check the the passed [itemToCheck] params exist in array. if it exist, it will remove it otherwise it will push into it
 */
 export const senitizeAnyArray = (
    itemToCheck,
    arrayOfItem,
    allowOverRide = false,
  ) => {
    let tmpFilters = arrayOfItem;
    if (tmpFilters?.includes(itemToCheck)) {
      //remove
      const index = tmpFilters.indexOf(itemToCheck);
      if (index > -1) {
        tmpFilters.splice(index, 1);
      }
  
      return [...tmpFilters];
    } else {
      if (!allowOverRide) return [...tmpFilters, itemToCheck];
      return [itemToCheck];
    }
  };
  



/**
 * 
 * @param {*} len 
 * @returns {string}
 * @description genrate the random string for given length
 */
export function randomeString(len = 10) {
  var text = '';

  var charset = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (var i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

  return text;
}
