const stages = document.querySelectorAll("#command button");
const elevator = document.querySelector("#elevator");

stages.forEach(stage => {
    stage.addEventListener('click', function(e) {
        e.preventDefault();

        if (this.classList.contains("there")) {
            return false;
        }

        const currentPosition = parseInt(document.querySelector('#command .there').innerText);
        const destination = parseInt(this.innerText);
        const distance = currentPosition - destination;

        const controlEffect = setInterval(() => {
            const cur = document.querySelector('#command .there');
            if (parseInt(cur.innerText) === destination) {
                clearInterval(controlEffect);
                return;
            }
            for (let index = 0; index < stages.length; index++) {
                const element = stages[index];
                if (element.classList.contains('there')) {
                    distance < 0 ?
                        stages[index+1].classList.add('there') :
                        stages[index-1].classList.add('there');
                    cur.classList.remove('there');
                    return;
                }
            }
        }, 1500);
        move(destination, Math.abs(distance));
    });
});

const move = (destination, distance) => {
    elevator.style.transform = `translateY(-${100 * (destination-1)}px)`;
    elevator.style.transition = `all ${1.5 * (distance)}s linear`;
}