let questions = document.querySelectorAll('.question');

questions.forEach((question)=>{
    question.addEventListener('click', ()=> {
        let answer = question.nextElementSibling;
        let dropDown = question.querySelector('.arrow-down');
        let allAnswers = document.querySelectorAll('.answer');
        isExpanded = answer.classList.contains('expanded');

        allAnswers.forEach((answer)=> {
            answer.classList.remove('expanded');
            answer.previousElementSibling.querySelector('.arrow-down').classList.remove('active');
            answer.previousElementSibling.classList.remove('bold');
        });

        if (!isExpanded) {
            answer.classList.add('expanded');
            dropDown.classList.add('active');
            question.classList.add('bold');
        }
    });
});