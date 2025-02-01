const logotext = "HH";
const meta = {
    title: "Henry He",
    description: "I’m Henry He, an aspiring web developer living in Seattle",
};

const introdata = {
    title: "I’m Henry He!",
    animated: {
        first: "Check out my portfolio!",
        second: "I make cool websites"
    },
    description: "Welcome to my website!",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "Bio",
    aboutme: "Henry He is an emerging web developer who has completed a Fullstack web developer bootcamp through the University of Washington and Trilogies. He graduated from Western Washington University in 2019 with a BA in Geography and a minor in GIS. Currently he is living in his hometown of Seattle, WA. In his free time, Henry enjoys playing ultimate frisbee, volleyball, going on long walks and hikes, and is an avid gamer.",
};
const worktimeline = [
    {
        jobtitle:"Clinical Lab Coordinator",
        where: "University of Washington Medical Center",
        date: "2024-Present"
    },
    {
        jobtitle: "Anatomic Pathology Lab Technician",
        where: "Harborview Medical Center",
        date: "2024",
    },
    {
        jobtitle: "Mapping Data Technician",
        where: "Cognizant",
        date: "2020 - 2022",
    },
    {
        jobtitle: "Visual Data Analyst",
        where: "HCL Technologies",
        date: "2020",
    },
];

const skills = [{
        name: "Javascript",
        value: 90,
    },
    {
        name: "SQL",
        value: 85,
    },
    {
        name: "Python",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 65,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: <img src="../../images/SmokeSignal-img.png" alt="Smoke-Signal"/>,
        description: "Smoke Signal. An app used to map any nearby fire emergencies in the city of Seattle. This was a group project",
        link: "https://jleebootcamp.github.io/smokesignal/",
    },
    {
        img: <img src="../../images/Readit-img.png" alt="ReadIt"/>,
        description: "ReadIt. An app used to give personal book reviews.",
        link: "https://sleepy-chamber-71078.herokuapp.com/",
    },
    {
        img: <img src="../../images/JATE-img.png" alt="JATE"/>,
        description: "JATE: Just a Text Editor. A simple in-browser text making app.",
        link: "https://sheltered-harbor-22094.herokuapp.com/",
    },
    {
        img: <img src="../images/BasicUI.png" alt="Password-generator"/>,
        description: "Password Generator. An app that randomly creates a password when prompted by the user.",
        link: "https://hghe95.github.io/HW-3/",
    },
    {
        img: <img src="../../images/BookSearchEngine.png" alt="book search enginge"/>,
        description: "Book Search Enging. A MERN project that uses a Google Books API with a RESTful API that has been refactored to be a GraphQL API built with an Apollo Server.",
        link: "https://arcane-cove-36980.herokuapp.com/",
    },
    {
        img: <img src="../../images/SAU.png" alt="sapien-university"/>,
        description: "Sapien University. An online platform for skin care industry professionals and anyone that wants to learn more.",
        link: "https://sau100.herokuapp.com/",
    },

    /*{
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },*/
];

const contactConfig = {
    YOUR_EMAIL: "hghe95@gmail.com",
    YOUR_FONE: "(206) 327-7026",
    description: "Please contact me for business inquiries only",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_f3o0969",
    YOUR_TEMPLATE_ID: "template_is2a65i",
    YOUR_USER_ID: "0BiTA-cuDIK6V_VhI",
};

const socialprofils = {
    github: "https://github.com/hghe95",
    linkedin: "https://www.linkedin.com/in/henry-g-he/"
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};