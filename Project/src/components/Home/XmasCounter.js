function XmasCounter() {
     let today = new Date();
    let xmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() === 11 && today.getDate() > 25) {
        xmas.setFullYear(xmas.getFullYear() + 1);
    }
    let one_day = 1000 * 60 * 60 * 24;
  return  Math.ceil((xmas.getTime() - today.getTime()) / (one_day)) ;
}
export {XmasCounter};