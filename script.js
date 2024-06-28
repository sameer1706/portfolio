document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.querySelector('.introduction p');
    const image = document.querySelector('.introduction img');
    const body = document.body;
    const button = document.getElementById('changeTextButton');

    button.addEventListener('click', function() {
        // Change text content of the paragraph
        paragraph.textContent = "I enjoy exploring new technologies and building useful applications.";

        // Toggle class on the image
        image.classList.toggle('bordered');

        // Change background color of the page
        body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
})