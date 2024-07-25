class PageHandler {
    constructor() {
        this.typeWriterManager();
    }

    typeWriterManager() {
        let dynamicHeader = document.querySelector("#typewriter");
        if (dynamicHeader === null) return;

        let dynamicHeaderText = ["Advancing", "Discovering", "Innovating", "Transforming", "Evolving"];
        let i = 0;
        let currentText = dynamicHeaderText[i];
        let currentWord = dynamicHeaderText[i];
        let isDeleting = false;

        let typeWriter = () => {
            currentWord = dynamicHeaderText[i];

            if (isDeleting) {
                currentText = currentWord.substring(0, currentText.length - 1);
            }

            if (!isDeleting) {
                currentText = currentWord.substring(0, currentText.length + 1);
            }

            dynamicHeader.innerHTML = currentText;

            if (!isDeleting && currentText === currentWord) {
                isDeleting = true;
                setTimeout(typeWriter, 2000);
            } else if (isDeleting && currentText === "") {
                isDeleting = false;
                i++;

                if (i === dynamicHeaderText.length) {
                    i = 0;
                }

                setTimeout(typeWriter, 500);
            } else {
                setTimeout(typeWriter, 150);
            }
        }

        typeWriter();
    }
}

const init = () => {
    new PageHandler();
};

document.addEventListener("astro:page-load", () => init());