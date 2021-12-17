let form_step_1 = document.querySelector('#form-step-1');
let form_step_2 = document.querySelector('#form-step-2');
let next_button = document.querySelector('#next-button');
let form_control = document.querySelector('#form-control');
let previous_button = document.querySelector('#previous-button');
let step_count = document.querySelector('#step-count');

next_button.addEventListener("click", () => {
    form_step_1.style.transform = "translateX(-200%)";
    form_step_2.style.transform = "translateX(0%)";

    // form_control.innerHTML = `
    // <div class="steps" id="step-count">Step 1/2</div>
    // <div class="arrow previous-arrow" id="previous-button">
    //   <img src="img/red-arrow-small-back.png" />
    //   <span>Previous</span>
    // </div>
    // <div class="arrow next-arrow" id="next-button">
    //     <span>Next</span>
    //     <img src="img/red-arrow-small.png" />
    // </div>
    // `
    
    // form_control.innerHTML = `
    // <div class="steps" id="step-count">Step 2/2</div>
    // <div class="arrow previous-arrow" id="previous-button">
    //   <img src="img/red-arrow-small-back.png" />
    //   <span>Previous</span>
    // </div>
    // <div class="arrow next-arrow" id="next-button">
    //     <span>Next</span>
    //     <img src="img/red-arrow-small.png" />
    // </div>
    // `

    
    step_count.innerText = "Step 2/2";

    // next_button = document.querySelector('#next-button');
    
    

    next_button.setAttribute("onclick", "submitForm()");
    
    // previous_button = document.querySelector('#previous-button');
    previous_button.style.display = "flex";

});


previous_button.addEventListener("click", () => {
    form_step_1.style.transform = "translateX(0%)";
    form_step_2.style.transform = "translateX(200%)";

    previous_button.style.display = "none";

    
    step_count.innerText = "Step 1/2";

    next_button.innerHTML = `
    <span>Next</span>
    <img src="img/red-arrow-small.png" />
    `;

    
});

function submitForm() {
    var test_form = document.querySelector('#form');
    test_form.submit();
}