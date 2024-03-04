const leftСard = document.querySelectorAll('.left-card');

const leftSkin = document.querySelectorAll('.skin');
const leftEyes = document.querySelectorAll('.eye');
const leftMouth = document.querySelectorAll('.mouth');

const rightSkin = document.querySelector('#skin');
const rightEyes = document.querySelector('#eyes');
const rightMouth = document.querySelector('#mouth');



//buttons      
leftСard.forEach ((card, index) => {
    card.addEventListener('click', (e) => {
        const target = e.target

        if (target.classList.contains('next-step')) {
            card.style.display = 'none';
            leftСard[index + 1].style.display = 'block';
            return
        }

        if (target.classList.contains('previous-step')) {
            card.style.display = 'none';
            leftСard[index - 1].style.display = 'block';
        }
    })
});


//showSmile
function showRightSmile (leftSmile, face, rightSmile) {
    leftSmile.forEach (item => {
        item.addEventListener('click', (e) => {
            const target = e.target;
            let source;

            if (target.classList.contains(face)) {
                source = item.getAttribute('src');
                rightSmile.setAttribute('src', `${source}`);
            }
        })
    })
}

showRightSmile(leftSkin, 'skin', rightSkin);
showRightSmile(leftEyes, 'eye', rightEyes);
showRightSmile(leftMouth, 'mouth', rightMouth);
