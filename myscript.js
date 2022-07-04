var a = prompt("Please enter word", "");

function palindrome(str){
    var len = a.length;
    var i = 0;

    while (i < len/2) {
        var reverse ="";

        for (var i = len-1; i>=0;--i) {
            reverse = reverse + a.charAt(i);
        }

        if (a.toLowerCase() == reverse.toLowerCase()) {
            alert("YES");
            a = prompt("Please enter word", "");
            len=a.length;
            i=0;
        }

        else {
            alert("NO");
            a = prompt("Please enter word", "");
            len=a.length;
            i=0;
        }

    }
}
var b = palindrome(a);
