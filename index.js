'use strict';

function renderQuizStart(){
    $('.start-box').show();
    $('.alt-box').addClass('.hidden');

}

function startQuiz(){
     $('.start-box')on('click', '.start-button', event => {
        event.preventDefault();
        $('.start-box').hide();
        $('.question-box').show();
        $('.question-num').text(1);
        $('.question-box').prepend(establishQuestion());
     });
}

function establishQuestion(){
    if (currentQuestion < STORE.length){
        return createQuestionPrompt(currentQuestion);
    }
}

function createQuestionPrompt(questionIndex){
    let questionPromptHtml =
    $(`<form>
        <fieldset>
            <legend class="question-prompt"><span>${STORE[questionIndex].question}</span></legend>
                <ul>
            
                </ul>
        </fieldset>
    </form>`)

    STORE[questionIndex].options.array.forEach(optionIndex, optionValue => { 
        $(`<li>
            <label class="option-label" for="${optionIndex}">
                <input class="option-radio" type="radio" id="${optionIndex}" name="option" value="${optionValue}" required> 
                <span>${optionValue}</span> 
            </label>
        </li>`).appendTo($(questionPromptHtml).find('<ul>'));
    });

    $(questionPromptHtml).find('</fieldset>').append(`<button type="submit" class="submit-button button">SUBMIT</button>`);
    return createQuestionPrompt();
}

function submitAnswer(){
    $('.main-container').on('click', '.submit-button', event => { 
        event.preventDefault();
        $('.question-box').hide();
        $('response-box').show();
        if ($('input:checked').val() === STORE[currentQuestion].correctAnswer){
            correctAnswerResponse();
        }
        else{
            incorrectAnswerResponse();
        }
    })
}

function incrementCurrentQuestion(){
    currentQuestion++;
    $('.question-num').text(currentQuestion++);
}

function generateNextQuestion(){

}



function correctAnswerResponse(){

}

function incorrectAnswerResponse(){
    
}

function endQuizPrompt(){

}

function createQuiz(){
    renderQuizStart();
    startQuiz();
    establishQuestion();
    createQuestionPrompt();
    submitAnswer();
    correctAnswerResponse();
    incorrectAnswerResponse();
    endQuizPrompt();
}

$(createQuiz);