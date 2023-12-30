
let increase = document.querySelector(".increase")
let decrease = document.querySelector(".decrease")
let number = document.querySelector(".number")
let reset = document.querySelector(".reset")
let score = 0;

incfunc = () => {
    score++;
    number.textContent = score;
    if(score>0){
        number.style.color = "green"
    }
    if(score===0)
    {

        number.style.color = "black";
    }

}

increase.addEventListener("click", incfunc)

            
decfunc = () => {
    score--;
    number.textContent = score;
    if(score<0){
        number.style.color = "red"
        
    }
    if(score==0)
    {

        number.style.color = "black";
    }
}

decrease.addEventListener("click", decfunc)

resetfunc = () => {
    score = 0;
    number.textContent = score;

        number.style.color = "black";



}
reset.addEventListener("click", resetfunc);

