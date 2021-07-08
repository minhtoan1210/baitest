//Câu 1:
// function daonguoc(str) {
//     let a = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         a += str[i]; 
//     }
//    console.log(a);
// }
// daonguoc("data");

//câu 2:
// function capitali(string)
// {
//     var t  = string.toLowerCase();
//     var str = " ";
//       var b = t.split(" ");
//       for(var i = 0;i<b.length;i++)
//       {
//           var c =b[i].charAt(0).toLocaleUpperCase()+ b[i].slice(1);
//           str+= c+" ";
//       }
//       return str;
// }
// var y = capitali("this is TEST");
// console.log(y);
//câu 3:
// Arra=[1,2,3,3,4,5,4,4,4,5,5];
// function ES66(Arr)
// {
//     var arrFilter = Arr.filter((item, index) => Arr.indexOf(item) === index);
//     return arrFilter;
// }
// var a = ES66(Arra);
// console.log(a);
// age: tuoi,salary:luong,position,cv, complete: false,
//câu 4'
// var listarray =[
//     {
//         id: 1,
//         age:null,
//         salary:null,
//         position:null,
//         complete:false,
//     }
   
// ];
// var flag = true;
// while(flag)
// {
    
//     var input = prompt("Enter your command(New, Delete, Update, Read, Exit)");
//     if(input === "New")
//     {
//         var ten = prompt("Mời Bạn nhập Tên");
//         var tuoi = prompt("Mời Bạn nhập Tuổi");
//         var luong = prompt("Mời Bạn nhập Lương");
//         var cv = prompt("Mời Bạn nhập Chức vụ");
//         var id = listarray.length + 1;
//         var Obj = {id: id, name:ten,age: tuoi,salary:luong,position:cv, complete: false,};
//         listarray.push(Obj);
//         console.log(listarray);
//         for(var i in listarray)
//         {
//             console.log(`${listarray[i].id}. ${listarray[i].name}\n${listarray[i].age}\n${listarray[i].position}\n${listarray[i].salary}\n${listarray[i].complete}`);
           
//         }
//         break;
//     }
//     else if(input === "Update")
//     {
//         var index = prompt("Vị trí Cần Nhập");
//         var ten = prompt("Mời Bạn nhập Tên");
//         var tuoi = prompt("Mời Bạn nhập Tuổi");
//         var luong = prompt("Mời Bạn nhập Lương");
//         var cv = prompt("Mời Bạn nhập Chức vụ");
//         for(var i=0;i<listarray.length;i++)
//         {
//             if(index == listarray[i].id)
//             {
//                 listarray[i].name = ten;
//                 listarray[i].age = tuoi;
//                 listarray[i].salary = luong;
//                 listarray[i].position = cv;
//             }
//         }
//         for(var i in listarray)
//         {
//             console.log(`${listarray[i].id}. ${listarray[i].name}\n${listarray[i].age}\n${listarray[i].position}\n${listarray[i].salary}\n${listarray[i].complete}`);
//         }
//         break;
//     }
//     else if(input === "Read")
//     {
//         var index = prompt("Đọc Nhân Viên");
//         for(var i=0;i<listarray.length;i++)
//         {
//             if(index == listarray[i].id)
//             {
//                 listarray[i].complete = true;
//             }
//         }
//         for(var i in listarray)
//         {
//             console.log(`${listarray[i].id}. ${listarray[i].name}\n${listarray[i].age}\n${listarray[i].position}\n${listarray[i].salary}\n${listarray[i].complete}`);
//         }
//         break;
//     }
//     else if(input === "Delete")
//     {
//         var del = prompt("Xóa phần tử");
//         for(var i=0;i<listarray.length;i++)
//         {
//             if(del == listarray[i].id)
//             {
//                 listarray.splice(i,1);
//             }
//         }
//         for(var i in listarray)
//         {
//             console.log(`${listarray[i].id}. ${listarray[i].name}\n${listarray[i].age}\n${listarray[i].position}\n${listarray[i].salary}\n${listarray[i].complete}`);
//         }
//     }
//     else if(input === "exit")
//     {
//         break;
//     }
// };
// console.log(listarray);
//Câu 5:
function check(str) {
    flag= true;
    var comp = str.split('/');
    console.log(str.split('/'));
    var d = parseInt(comp[0], 10)
    var m = parseInt(comp[1], 10)
    var y = parseInt(comp[2], 10)
    var date = new Date(y,m-1,d);
       if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
            if(m == 2 )
            {   
                 if (((y % 4 == 0) && (y % 100 != 0))||(y % 400 == 0))
                 {
                    if(0<=d && d<=28)
                    {
                        console.log(d+1,m,y);
                       
                    }
                     if(d==29)
                    {
                        console.log(1,m+1,y);
                       
                    }  
                 }
                 else
                 {
                    if(0<=d && d<28)
                    {
                        console.log(d+1,m,y);
                       
                    }
                    else if(0<=d && d<28)
                    {
                        console.log(1,m+1,y);
                       
                    }
                 }
                
            }
            else if(m == 4 ||m==6||m==9 )
            {
                 if(0<=d && d<30)
                {
                    console.log(d+1,m,y);
                    
                }
                else
                {
                    console.log(1,m+1,y);
                }
            }
            else if(m == 1 ||m==3||m==5 ||m==7||m==8||m==10||m==12 )
            {
                 if(0<=d && d<31)
                {
                    console.log(d+1,m,y);
                    
                }
                else
                {
                    console.log(1,m+1,y);
                }
            }
      }
   else
   {
    console.log("Ngày Không Hợp Lệ");
   }
}
 check("30/4/2019");
 check("31/1/2019");
 check("28/2/1004");
 check("27/2/1004");