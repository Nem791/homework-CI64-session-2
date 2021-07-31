class FAQs {
    $container_faq;
    $accordion;
    $panel;
    $paragraph;
    $deleteBtn

    constructor() {
        this.$container_faq = document.createElement('div');
        this.$container_faq.className = 'container-faq';

        this.$accordion = document.createElement('button');
        this.$accordion.className = 'accordion';
        this.$accordion.innerHTML = 'What kind of payment do you support?'
        this.$accordion.addEventListener('click', this.toggle);

        this.$panel = document.createElement('div');
        this.$panel.className = 'panel';

        this.$deleteBtn = document.createElement('button');
        this.$deleteBtn.innerHTML = 'x';
        this.$deleteBtn.className = 'deleteBtn';
        this.$deleteBtn.style.display = 'none';
        this.$deleteBtn.addEventListener('click', this.delete);

        this.$paragraph = document.createElement('p');
        this.$paragraph.innerHTML = 'We support credit card, Paypal and Stripe';
    }

    toggle = () => {
        this.$accordion.classList.toggle("active");
        let toggleBtn = this.$accordion.nextElementSibling;
        let deleteBtn = this.$deleteBtn;
        if (toggleBtn.style.maxHeight) {
            toggleBtn.style.maxHeight = null;
            deleteBtn.style.display = 'none';
        } else {
            toggleBtn.style.maxHeight = toggleBtn.scrollHeight + "px";
            deleteBtn.style.display = 'block';
        }
        // console.log(this.$accordion);
    }

    delete = () => {
        let r = confirm("Are you sure you want to delete this question?");
        if (r == true) {
            this.$container_faq.remove();
        }
    }

    render() {
        this.$panel.appendChild(this.$paragraph);
        this.$panel.appendChild(this.$deleteBtn);
        this.$container_faq.appendChild(this.$accordion);
        this.$container_faq.appendChild(this.$panel);

        return this.$container_faq;
    }
}

const addBtn = document.getElementById('add');
let con = document.getElementsByClassName('container');
const faq = new FAQs();
con[0].appendChild(faq.render());
addBtn.addEventListener('click', () => {
    const faq = new FAQs();
    let question = prompt('Enter your question:');
    let answer = prompt('Enter your answer');
    faq.$accordion.innerText = question;
    faq.$paragraph.innerText = answer;
    con[0].appendChild(faq.render());
    // console.log(faq.$accordion);
})