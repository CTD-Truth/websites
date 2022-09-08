



var giveWPCustomization = function() {

     console.log("GiveWP 1127a");
     let el = document.getElementById('give-amount');
     console.log(el);
     el.value = '';
     el.placeholder = 'Enter amt';

     // let defaultButton = document.querySelector('.give-btn-level-custom');
     // console.log(defaultButton);

     let totalArea = document.querySelector('.give-total-wrap');
     console.log(totalArea);

     // give-recurring-donors-choice
     let donorsChoiceArea = document.querySelector('.give-recurring-donors-choice');

     // var btn = document.createElement("BUTTON");   // Create a <button> element
     // btn.innerHTML = "CLICK ME";                   // Insert text
     // donorsChoiceArea.appendChild(totalArea);               // Append <button> to <body>


     var htmlString = '<div class="mydiv "><div class="mydivinside">Text</div></div>',

     // here we create a <div> element:
     div = document.createElement('div'),

     // we retrieve the element after which the new
     // element should be inserted:
     div1 = document.querySelector('.give-recurring-donors-choice');

     // assign the supplied HTML string to the innerHTML of the
     // created element:
     div.innerHTML = totalArea;

     // and use parentNode.insertBefore to insert the desired element
     // (the first argument) before the element identified in the
     // second argument, which is the nextSibling of the found
     // 'div1' element:
     //div1.parentNode.insertBefore(div.firstChild, div1.nextSibling);

     //form = document.querySelector('#give-form-4442-1');
     // form = document.querySelector('#give-donation-level-button-wrap');
     // form.appendChild(totalArea);

     paymentBtn = document.querySelector('#give-donation-level-button-wrap');
     paymentBtn.appendChild(totalArea);

}

giveWPCustomization();
