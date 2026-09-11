/* =========================================
   PROGRAM DETAILS
========================================= */

const programs = {

    ems: {
        code: "EMS",
        title: "Excellence Model School",
        icon: "fa-school",

        description: `
        <p>
        Excellence Model School is designed to provide students with
        a strong academic foundation and a positive learning environment.
        The program focuses on developing students academically,
        socially and personally.
        </p>

        <p>
        Students are encouraged to understand concepts instead of
        simply memorizing information. Teachers can guide students
        through different subjects while helping them improve their
        communication, problem-solving and critical-thinking abilities.
        </p>

        <p>
        Along with academic learning, the school environment promotes
        discipline, confidence, creativity, teamwork and good character.
        These qualities help students become responsible individuals
        who are prepared for future educational challenges.
        </p>

        <p>
        Excellence Model School aims to create a balanced educational
        experience where students can learn, participate, explore their
        interests and develop the confidence needed to succeed in their
        future studies and professional lives.
        </p>
        `
    },


    eic: {
        code: "EIC",
        title: "Excellence Intermediate College",
        icon: "fa-building-columns",

        description: `
        <p>
        Excellence Intermediate College provides academic education
        and guidance for students at the intermediate level. This stage
        of education plays an important role in preparing students for
        higher education and future career decisions.
        </p>

        <p>
        The program focuses on strengthening subject knowledge while
        helping students develop analytical thinking and effective
        study habits. Students can receive academic guidance to improve
        their performance and prepare for examinations.
        </p>

        <p>
        Special attention is given to concept building, regular revision,
        examination preparation and academic counselling. Students are
        encouraged to identify their strengths and understand the
        educational paths available to them.
        </p>

        <p>
        Excellence Intermediate College aims to help students move
        confidently from intermediate education toward university,
        professional studies and future career opportunities.
        </p>
        `
    },


    ecc: {
        code: "ECC",
        title: "Excellence Coaching Center",
        icon: "fa-book-open-reader",

        description: `
        <p>
        Excellence Coaching Center provides focused academic coaching
        for students who want additional support with their studies and
        examination preparation.
        </p>

        <p>
        The coaching environment emphasizes concept clarification,
        revision, practice and regular preparation. Students can work
        on difficult topics, strengthen weak areas and improve their
        overall academic performance.
        </p>

        <p>
        Practice exercises, revision sessions and examination-oriented
        preparation can help students become more confident when facing
        tests and academic challenges.
        </p>

        <p>
        The objective of Excellence Coaching Center is to provide
        structured learning support so that students can approach their
        examinations with better preparation, confidence and clarity.
        </p>
        `
    },


    eiit: {
        code: "EIIT",
        title: "Excellence Institute of Information Technology",
        icon: "fa-laptop-code",

        description: `
        <p>
        Excellence Institute of Information Technology focuses on
        developing practical digital and information technology skills
        for students and learners interested in modern technology.
        </p>

        <p>
        Technology has become an important part of education and
        professional life. EIIT aims to provide learners with an
        opportunity to develop useful computer and digital skills that
        can support their academic and career goals.
        </p>

        <p>
        Learning can include areas such as computer fundamentals,
        digital tools, programming concepts, web development and other
        technology-related skills depending on the selected course.
        </p>

        <p>
        The institute promotes practical learning and encourages
        students to apply their knowledge through projects and
        activities. The goal is to help learners become more confident
        in using technology in the modern digital world.
        </p>
        `
    },


    eatp: {
        code: "EATP",
        title: "Excellence Aptitude Test Program",
        icon: "fa-pen-to-square",

        description: `
        <p>
        Excellence Aptitude Test Program is designed to help students
        prepare for aptitude-based examinations and admission tests.
        Such tests often evaluate logical reasoning, quantitative
        ability, verbal skills and analytical thinking.
        </p>

        <p>
        The program provides a structured approach to preparation by
        helping students understand different question types and
        develop effective problem-solving strategies.
        </p>

        <p>
        Regular practice is an important part of aptitude preparation.
        Students can work on questions, identify their weak areas,
        improve their speed and become familiar with examination-style
        problems.
        </p>

        <p>
        EATP aims to improve both accuracy and confidence. With
        consistent practice and proper guidance, students can develop
        better time-management skills and approach aptitude tests in a
        more organized way.
        </p>
        `
    },


    aveli: {
        code: "AVELI",
        title: "Anglo Vision English Learning Institute",
        icon: "fa-language",

        description: `
        <p>
        Anglo Vision English Learning Institute focuses on improving
        English language skills for students, professionals and learners
        who want to communicate more confidently.
        </p>

        <p>
        English communication requires a combination of vocabulary,
        grammar, pronunciation, listening, reading, writing and speaking
        skills. AVELI provides a learning environment where students
        can work on these areas step by step.
        </p>

        <p>
        The program encourages practical communication rather than
        learning grammar rules alone. Learners can improve their
        confidence through conversations, activities, written exercises
        and other language-learning practices.
        </p>

        <p>
        AVELI aims to help learners use English more effectively in
        education, professional environments, everyday communication
        and future career opportunities.
        </p>
        `
    },


    eph: {
        code: "EPH",
        title: "Excellence Publication House",
        icon: "fa-book",

        description: `
        <p>
        Excellence Publication House is focused on educational
        publications and learning resources that can support students,
        teachers and educational institutions.
        </p>

        <p>
        Educational material plays an important role in helping learners
        understand concepts, practice important topics and prepare for
        examinations. EPH aims to contribute to this learning process
        through useful and well-organized educational resources.
        </p>

        <p>
        Publications may include academic resources, preparation
        materials, educational guides and other learning content designed
        according to the needs of students and educators.
        </p>

        <p>
        The objective of Excellence Publication House is to support
        meaningful education by making useful learning resources
        available to learners and helping them continue their educational
        journey with better preparation.
        </p>
        `
    }

};


/* =========================================
   OPEN PROGRAM
========================================= */

function openProgram(programName) {

    const program = programs[programName];

    if (!program) {
        return;
    }

    const detailsSection =
        document.getElementById("programDetails");

    const detailsIcon =
        document.getElementById("detailsIcon");

    const detailsCode =
        document.getElementById("detailsCode");

    const detailsTitle =
        document.getElementById("detailsTitle");

    const detailsText =
        document.getElementById("detailsText");


    detailsCode.textContent = program.code;

    detailsTitle.textContent = program.title;

    detailsText.innerHTML = program.description;

    detailsIcon.innerHTML =
        `<i class="fa-solid ${program.icon}"></i>`;


    detailsSection.classList.add("active");


    setTimeout(() => {

        detailsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* =========================================
   CLOSE PROGRAM
========================================= */

function closeProgram() {

    const detailsSection =
        document.getElementById("programDetails");

    detailsSection.classList.remove("active");

}


/* =========================================
   GALLERY IMAGE OPEN
========================================= */

function openImage(element) {

    const image =
        element.querySelector("img");

    const modal =
        document.getElementById("imageModal");

    const largeImage =
        document.getElementById("largeImage");


    largeImage.src = image.src;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE IMAGE
========================================= */

function closeImage() {

    const modal =
        document.getElementById("imageModal");

    modal.classList.remove("active");

    document.body.style.overflow = "auto";
}


/* =========================================
   CLOSE IMAGE BY CLICKING BACKGROUND
========================================= */

document
    .getElementById("imageModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeImage();
        }

    });


/* =========================================
   ESC KEY
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeImage();

        closeProgram();

    }

});


/* =========================================
   CONTACT FORM
========================================= */

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const phone =
            document.getElementById("phone").value;

        const program =
            document.getElementById("program").value;

        const message =
            document.getElementById("message").value;


        const subject =
            encodeURIComponent(
                "New Academy of Excellence Inquiry"
            );


        const body =
            encodeURIComponent(
                `Name: ${name}

Email: ${email}

Phone: ${phone}

Program: ${program}

Message:
${message}`
            );


        window.location.href =
            `mailto:academyofexcellence@gmail.com?subject=${subject}&body=${body}`;

    });