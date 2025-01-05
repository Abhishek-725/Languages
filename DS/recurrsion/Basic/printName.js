function print1_5(num,endNum = 100) {
    if (num > endNum)  return ;
    console.log(num);
    print1_5(num + 1,endNum);
}
// print1_5(1,5);

function print5_1(num) {
    if (num <= 0)  return ;
    if(num > 10) return ;
    console.log(num);
    print5_1(num - 1);
}
// print5_1(5);


// back track
function backprint1_Num(num = 1) {
    if (num <= 0) {
        return
    }
    backprint1_Num(num - 1);
    console.log(num);
}
// backprint1_Num(5);

function backprintNum_1(num = 1 , endNum) {
    if (num > endNum) {
        return
    }
    backprintNum_1(num + 1,endNum);
    console.log(num);
}
backprintNum_1(1,5)