   
const multiply = (num1, num2, num3, num4) => {
  return num1 * num2 + num3 - num4;
};
let resulMultiply = multiply(423192392244132, 3, 9999535993239999, 13201938812);


   function check(){
        var passwd = document.getElementById("password").value;
            if (passwd == `${resulMultiply}`){
            return true;
            } else {
            return false;
           }
    }