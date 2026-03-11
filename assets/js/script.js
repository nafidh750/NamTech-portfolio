$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("FYarSseYLhmiXCOaA");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')   
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

    // Theme Toggle Logic
    const themeBtn = $('#theme-btn');
    themeBtn.click(function() {
        $('body').toggleClass('dark-mode');
        themeBtn.toggleClass('fa-moon fa-sun');
    });

    // Language Toggle Logic
    const langBtn = $('#language-btn');
    let currentLang = 'en';

    const translations = {
        en: {
            home: "Home",
            about: "About",
            skills: "Skills",
            work: "Work",
            experience: "Experience",
            contact: "Contact",
            hero_title_1: "Hi There,",
            hero_title_2: "I'm Nafidh",
            hero_subtitle: "i am into",
            hire_me: "Hire Me",
            about_heading_1: "About",
            about_heading_2: "Me",
            about_name: "I'm Nafidh",
            about_greeting: "Hi there 👋",
            about_role: "Data Scientist & Software Engineer",
            about_desc: "I am a Data Scientist and AI Developer passionate about building intelligent systems that solve real-world problems. My work focuses on Artificial Intelligence, Natural Language Processing (NLP), and Machine Learning to create impactful solutions. I have developed projects including <b>NAV Forecasting</b> for financial analytics, <b>Safe AI</b>, and a <b>Health Monitoring System</b>, applying data-driven approaches to improve decision-making and digital services.",
            email: "email : ",
            place: "place : ",
            resume: "Resume",
            skills_heading: "Skills &",
            skills_subheading: "Abilities",
            prog_lang: "Programming Languages",
            ds_ai: "Data Science & AI",
            web_dev: "Web Development",
            databases: "Databases",
            other_tools: "Other Tools & Technologies",
            languages: "Languages",
            arabic: "Arabic",
            english: "English",
            projects_heading: "Projects",
            nav_title: "NAV Forecasting System",
            nav_desc: "An AI-driven system for predicting Net Asset Value (NAV) trends to support smarter financial investment decisions.",
            view: "View",
            safe_ai_title: "Safe AI",
            safe_ai_desc: "An intelligent AI system designed to enhance security, monitoring, and safety analysis using data-driven insights.",
            health_title: "Health Monitoring System",
            health_desc: "A digital platform that tracks health data and provides early insights for better health management.",
            view_all: "View All",
            experience_heading: "Experience",
            role_swe: "Software Engineer",
            present: "Present",
            role_intern: "Software Developer Intern",
            past: "Past Experience",
            role_coord: "Country Coordinator",
            role_trainer: "Trainer",
            role_rep: "Representative",
            role_cto: "CTO",
            role_vol: "Volunteer Developer",
            role_speaker: "Speaker",
            contact_heading: "Get in",
            contact_subheading: "Touch",
            submit: "Submit",
            footer_text: "Thank you for visiting my personal portfolio website. Connect with me over socials. <br/> <br/> If you want to know me more just ask CY-BOT 🤖",
            quick_links: "quick links",
            contact_info: "contact info",
            developed_by: "Developed",
            name_placeholder: "Name",
            email_placeholder: "Email",
            phone_placeholder: "Phone",
            message_placeholder: "Message"
        },
        ar: {
            home: "الرئيسية",
            about: "عني",
            skills: "المهارات",
            work: "أعمالي",
            experience: "الخبرات",
            contact: "تواصل معي",
            hero_title_1: "مرحباً بكم،",
            hero_title_2: "أنا نافذ",
            hero_subtitle: "مهتم بـ",
            hire_me: "وظفني",
            about_heading_1: "نبذة",
            about_heading_2: "عني",
            about_name: "أنا نافذ",
            about_greeting: "مرحباً 👋",
            about_role: "عالم بيانات ومهندس برمجيات",
            about_desc: "أنا عالم بيانات ومطور ذكاء اصطناعي شغوف ببناء أنظمة ذكية تحل مشاكل العالم الحقيقي. يركز عملي على الذكاء الاصطناعي، ومعالجة اللغات الطبيعية (NLP)، والتعلم الآلي لإنشاء حلول ذات تأثير. لقد طورت مشاريع بما في ذلك <b>نظام التنبؤ NAV</b> للتحليلات المالية، و<b>Safe AI</b>، و<b>نظام مراقبة الصحة</b>، مطبقاً نهجاً يعتمد على البيانات لتحسين صنع القرار والخدمات الرقمية.",
            email: "البريد الإلكتروني : ",
            place: "المكان : ",
            resume: "السيرة الذاتية",
            skills_heading: "المهارات و",
            skills_subheading: "القدرات",
            prog_lang: "لغات البرمجة",
            ds_ai: "علم البيانات والذكاء الاصطناعي",
            web_dev: "تطوير الويب",
            databases: "قواعد البيانات",
            other_tools: "أدوات وتقنيات أخرى",
            languages: "اللغات",
            arabic: "العربية",
            english: "الإنجليزية",
            projects_heading: "المشاريع",
            nav_title: "نظام التنبؤ NAV",
            nav_desc: "نظام يعتمد على الذكاء الاصطناعي لتوقع اتجاهات صافي قيمة الأصول لدعم قرارات الاستثمار المالي.",
            view: "عرض",
            safe_ai_title: "Safe AI",
            safe_ai_desc: "نظام ذكي لتعزيز الأمان والمراقبة وتحليل السلامة باستخدام البيانات.",
            health_title: "نظام مراقبة الصحة",
            health_desc: "منصة رقمية لتتبع البيانات الصحية وتقديم رؤى مبكرة لتحسين إدارة الصحة.",
            view_all: "عرض الكل",
            experience_heading: "الخبرات",
            role_swe: "مهندس برمجيات",
            present: "الحاضر",
            role_intern: "متدرب مطور برمجيات",
            past: "تجربة سابقة",
            role_coord: "منسق قطري",
            role_trainer: "مدرب",
            role_rep: "ممثل",
            role_cto: "الرئيس التقني",
            role_vol: "مطور متطوع",
            role_speaker: "متحدث",
            contact_heading: "تواصل",
            contact_subheading: "معي",
            submit: "إرسال",
            footer_text: "شكراً لزيارة موقعي الشخصي. تواصل معي عبر وسائل التواصل الاجتماعي. <br/> <br/> إذا كنت تريد معرفة المزيد عني فقط اسأل CY-BOT 🤖",
            quick_links: "روابط سريعة",
            contact_info: "معلومات الاتصال",
            developed_by: "تطوير",
            name_placeholder: "الاسم",
            email_placeholder: "البريد الإلكتروني",
            phone_placeholder: "الهاتف",
            message_placeholder: "الرسالة"
        }
    };
    
    function updateLanguage(lang) {
        $('[data-i18n]').each(function() {
            const key = $(this).data('i18n');
            if (translations[lang][key]) {
                 $(this).html(translations[lang][key]);
            }
        });
        
        $('[data-i18n-placeholder]').each(function() {
            const key = $(this).data('i18n-placeholder');
            if (translations[lang][key]) {
                $(this).attr('placeholder', translations[lang][key]);
            }
        });

        if (lang === 'ar') {
            $('body').addClass('lang-ar');
            $('html').attr('dir', 'rtl');
            $('.navbar ul').css('flex-direction', 'row-reverse');
        } else {
            $('body').removeClass('lang-ar');
            $('html').attr('dir', 'ltr');
             $('.navbar ul').css('flex-direction', 'row');
        }
    }

    langBtn.click(function() {
        if (currentLang === 'en') {
            currentLang = 'ar';
            langBtn.text('EN');
            updateLanguage('ar');
        } else {
            currentLang = 'en';
            langBtn.text('AR');
            updateLanguage('en');
        }
    });

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Adam Katani";
            $("#favicon").attr("href", "assets/images/favicon.ico");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Data Science","AI/Machine Learning", "backend development", "web development", "Mobile Application development","Software Engineering" ],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./projects/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectHTML = "";
    projects.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
function loader() {
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut() {
    setInterval(loader, 500);
}
window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Sarufi Bot
  document.addEventListener('DOMContentLoaded', function() {
    // setting global variables
    window.botId = 2450
    
    // create div with id = sarufi-chatbox
    const div = document.createElement("div")
    div.id = "sarufi-chatbox"
    document.body.appendChild(div)

    // create and attach script tag
    const script = document.createElement("script")
    script.crossOrigin = true
    script.type = "module"
    script.src = "https://cdn.jsdelivr.net/gh/flexcodelabs/sarufi-chatbox/example/vanilla-js/script.js"
    document.head.appendChild(script)

    // create and attach css
    const style = document.createElement("link")
    style.crossOrigin = true
    style.rel = "stylesheet"
    style.href = "https://cdn.jsdelivr.net/gh/flexcodelabs/sarufi-chatbox/example/vanilla-js/style.css"
    document.head.appendChild(style)
  });
// End of Sarufi Bot



/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
