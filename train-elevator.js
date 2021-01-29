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
        const distance = Math.abs(currentPosition - destination);

        document.querySelector('#command .there').classList.remove('there');
        move(destination, distance);
        this.classList.add('there');
    });
});

const move = (destination, distance) => {
    elevator.style.transform = `translateY(-${100 * (destination-1)}px)`;
    elevator.style.transition = `all ${1.5 * (distance)}s linear`;
}