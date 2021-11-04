function copyString(xau, n, kitu){
    let tongChuoi = xau;
    for(let i = 0; i < n -1; i++){
        tongChuoi = tongChuoi + kitu + xau
    }
    return tongChuoi;
}

// Cho 1 mảng các số. 
// Viết function tạo ra 1 mảng mới với các số là số dư
//  tương ứng khi chia các số trong mảng cũ cho 2. 
//  Gợi ý: Để lấy số dư của 1 số cho 2 ta dùng toán tử %. Ví dụ: 5 % 2 = 1 (5 chia 2 dư 1).

    function laydu2(n){
        return n %
    }
 let modulo = (numbers) => numbers.map(number => number % 2);
 function(numbers)

 function soDu(numbers){
     let moduloArray = numbers.map(number => number % 2)
     console.log(moduloArray);
 }
 function solution(numbers){
     const longWords = numbers.filter(number => (number % 2 == 0));
     console.log(longWords);
 }
 function solution2(numbers){
    let result = []
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            result.push(numbers[i]);
        }
    }
    return result;
 }