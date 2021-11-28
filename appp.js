// barcha name va statusda a necha marta qatnashgan ekankigini toping
// arr=[
//     {id:'1',name:'Anvar', status:'student'},
//     {id:'2',name:'rasul', status:'mantajor'},
//     {id:'3',name:'Arslon', status:'Barber'},
//     {id:'4',name:'Baxtiyor', status:'tadbirkor'}
// ]
// let count=0;

// for(let i=0; i<arr.length; i++){
//     for (let j = 0; j < arr[i].name.length; j++) {
//         if(arr[i].name[j]=='a' || arr[i].name[j]=='A'){
//             count++;
//         }
//     }
//     for (let k = 0; k < arr[i].status.length; k++) {
//         if(arr[i].status[k]=='a' || arr[i].status[k]=='A'){
//             count++;
//         }
//     }
// }
// console.log(count);





// qaytaruvchanlikni yoqoting
// let arr ='AAAADDFFFGGTAAYOOOLKKKKMH';
// let arr2=Array.from(arr);
// let a=arr2[0];
// let s=1;
// let str='';
// for (let i = 0; i < arr2.length; i++) {
//     if(a===arr2[i+1]){
//         s++;
//     }
//     else{
//         str=str+(arr2[i]+s);
//         s=1;
//         a=arr[i+1];
//     }
// }
// // console.log(str);

// let str2='';
// let b=str;
// let b2=Array.from(b);
// for (let i = 0; i < b2.length; i++) {
//     if(+(b2[i])===1){
//         b2[i]='';
//     }
//     str2=str2+b2[i];
// }
// console.log(str2);



//1) getData([1,3,9,8,6],9); => [[1,3],[1,4]];  array ichidagi  yig'indisi 9 ga 
//teng boladigan ikkita sonning indexlaridan iborat 
//massivlarni chiqazib beruvchi dastur tuzing
// function getData(arr,num){
//     let lastArr=[];
//     let arrEle=[];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             if((arr[i]+arr[j])==num){
//                 arrEle=[i,j];
//                 lastArr.push(arrEle);
//                 arrEle=[];
//             }
//         }
//     }
//     console.log(lastArr);
// }
// getData([1,3,9,8,6],9);







//2)arr1=[1,3] arr2=[2];  ikovini qo'shib sort qilib ichida toqta raqam bolsa
// o'rtadagi sonni chiqarsin juftta busa o'rtadan chapdagi raqmni chiqarsin
//[1,2,3] =>  2 ni chiqarishi kk 
// function findNumber(arr1,arr2){
//     newArr=arr1.concat(arr2);
//     newArr.sort(function(a, b){return a - b});
//     if(newArr.length%2==1){
//         console.log(newArr[(newArr.length-1)/2]);
//     }
//     else{
//         console.log(newArr[(newArr.length)/2-1]);
//     }
// }
// findNumber([1,3],[2,4,5,6,7]); 



// let students = [
//     {
//         id : 1,
//         Name : 'Eldor',
//         MiddleName : 'WebDeveloper',
//         Status : 'Talaba',
//         Year : 1999,
//     },
//     {
//         id : 2,
//         Name : 'Ali',
//         MiddleName : 'Coder',
//         Status : 'Talaba',
//         Year : 2001,
//     },
//     {
//         id : 3,
//         Name : 'Vali',
//         MiddleName : 'AndroidDeveloper',
//         Status : 'Talaba',
//         Year : 2021,
//     },
//     {
//         id : 4,
//         Name : 'Messi',
//         MiddleName : 'IosDeveloper',
//         Status : 'Talaba',
//         Year : 1992,
//     },
// ]

// const onSort_onDelete =(key,value)=>{

//     students.map((res)=>{
//         if(res[key].includes(value) ){
//             console.log(res);
//         }
//     })

// }

// onSort_onDelete('Name','Ali');




//"ABC" va "BCA" berilgan bo'lsa true yani birinchi stringda bor
// harfllar ikkinchida ham bo'lsa aks holda falsechiqishi kk
// let s=0;
// str1="ABC";
// str2="BCA";
// for (let i = 0; i < srt1.length; i++) {
//     if (!(str2.includes(str1[i]))) {
//         s++;
//     }
// }
// if (s>0) {
//     console.log(false)
// }
// else{
//     console.log(true);
// }
