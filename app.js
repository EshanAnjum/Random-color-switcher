function GenerateRandomColor()
{
    const RandomNumber = Math.floor(Math.random() * 16777215);
    // console.log(RandomNumber);
    const RandomHexCode = "#" + RandomNumber.toString(16);
    textArea_ColorCode.innerHTML = RandomHexCode;

    ChangeWindowColor(RandomHexCode);
    ChangeButtonColor(RandomHexCode);
}


function ChangeWindowColor(HexCode)
{
    document.body.style.backgroundColor = HexCode;
}

function ChangeButtonColor(HexCode)
{
    button.style.backgroundColor = HexCode;
}



document.getElementById("ClickMe").addEventListener("click" , GenerateRandomColor);
const button =document.getElementById("ClickMe")
const textArea_ColorCode = document.getElementById("ColorCode");



GenerateRandomColor();


                                                   // Explanation
/*
-> Function Generate Random colour

Lets first talk about assignment to Random Number : Math.random generates random numbers between 0 and 1.
The large integer value you see being multiplied with it is a constant to generate numbers that correspond to 
hex numbers of colours and then we take its floor that rounds all numbers generated to lower bound integers.

Talking about assignment to RandomHexCode : We convert our random numbers to string (16) , remember that hex
numbers have base 16 hence it converts them to hex numbers with a # with it in the correct format.

The next line with inner html is used to display the colour code on the screen. 
                                          

->Function ChangeButtonColor and ChangeWindowColor both do the task of changing
the colors of button and window respectively by accessing style property of the 
elements.


All this happens when the "event" of click happens on the button , when click
is triggered Generate Random color is called which then calls all the required functions.


You might be wondering why we have called the function forcefully in the last?
The code still works with it but upon refreshing you get a white color , but
calling it once generates a random color even after you refresh your page(try it yourself)
*/


