let form = document.querySelector('form');

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let first = parseInt(e.target.first.value);
    let second =parseInt(e.target.second.value);
    let result = e.target.result;
    switch(e.submitter.value){
        case("+") : result.value = first + second;
                    break;
        case("-") : result.value = first>second?first - second : second - first;
                    break;
        case("*") : result.value = first * second;
                    break;
        case("/") : result.value = first / second;
                    break;
    }

});