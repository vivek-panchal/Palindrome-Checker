// select relevent DOM Element

const button= document.querySelector("#btn");
const inputText= document.querySelector("#input-text");
const result= document.querySelector("#result");

//Add event listener to the button

button.addEventListener("click", () =>{
    //Get the input text value and trim any whitespaces using inbuild trim method of JavaScript

    const text=inputText.value.trim();

    //Check if the input is empty 
    if(text.length ==0){
        //show an alert if the input filed is empty
        alert("Input cannot be empty");
        return ; // Exit the function if input field is empty
    }
    //Remove any non alphanumeric characters and convert to lowercase

    const cleanText = text.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

    //Check if the cleaned text is a palindrome by comparing the orignal and revrese strings

    const isPalindrome = cleanText === cleanText.split("").reverse("").join("");

    //Crfeate a message based on whether the input is a palindrom or not

    const message =isPalindrome ? `<span>Yes.</span> It's a palindrome!!`: `<span>Nope.</span> Not a palindrome!!`;
    
    // Update the result element with the message
    result.innerHTML=message;
    result.classList.remove("error","success");
    setTimeout(()=> {
        result.classList.add(isPalindrome ? "success": "error");
    },10);

})