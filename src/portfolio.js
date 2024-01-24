/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Faizan Abbasi",
  description:
    "Silver Medalist - A full stack engineer 💻 (React, Ruby on Rails, Django)",
  og: {
    title: "Faizan Abbasi",
    type: "website",
    // url: "http://ashutoshhathidara.com/",
    image:  "./assests/images/profile-image.jpg"
  },
};

//Home Page
const greeting = {
  title: "Faizan",
  logo_name: "Faizan Abbasi",
  // nickname: "Faizan",
  subTitle:
    "Crafting Dynamic Web Experiences with React, Next, Django and ROR 💻",
  resumeLink:
    "https://drive.google.com/file/d/15RZV1a5hjPLRtWmdcs1IaD00QnNIe6uM/view",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/abbasifaizan70",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/abbasifaizan70",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/faizan-abbasi-b88236154/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:abbasi.faizan1997@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/Faizana51216271",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100025535123020&mibextid=2JQ9oc",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Expertise in building engaging user interfaces using React-Redux, NextJs.",
        "⚡ Proficient in developing robust back-end systems with Django, Node and ROR.",
        "⚡ Skilled in integrating diverse technologies to create seamless web experiences.",
        "⚡ Experience in creating responsive and dynamic web applications for diverse client needs.",
        "⚡ Adept at utilizing RESTful APIs and other integration techniques for data management.",
        // "⚡ Ability to work across the full development stack, ensuring smooth end-to-end functionality."
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "RubyOnRails",
          fontAwesomeClassname: "mdi:language-ruby-on-rails",
          style: {
            color: "red",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "skill-icons:bootstrap",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "devicon-plain:django-wordmark",
          style: {
            color: "#092e20",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "bxl:redux",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Node",
          fontAwesomeClassname: "la:node",
          style: {
            color: "#68A063",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in managing cloud storage solutions using AWS S3, ensuring secure and scalable data storage capabilities."
        ,"⚡ Experienced in container management and deployment using AWS Elastic Container Registry (ECR) and EC2 instances for optimal resource utilization."
        ,"⚡ Skilled in automating and streamlining CI/CD pipelines with GitHub Actions, enhancing efficiency in software development processes."
        ,"⚡ Advanced proficiency in using Jenkins for continuous integration, supporting the development lifecycle with automated build and testing."
        ,"⚡ Hands-on experience in orchestrating containerized applications with Kubernetes, facilitating high availability and scalability in production environments."
        ,"⚡ Implemented infrastructure as code using Terraform, enabling consistent and reliable environment provisioning across cloud platforms."
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  // competitiveSites: [
  //   {
  //     siteName: "LeetCode",
  //     iconifyClassname: "simple-icons:leetcode",
  //     style: {
  //       color: "#F79F1B",
  //     },
  //     profileLink: "https://leetcode.com/layman_brother/",
  //   },
  //   {
  //     siteName: "HackerRank",
  //     iconifyClassname: "simple-icons:hackerrank",
  //     style: {
  //       color: "#2EC866",
  //     },
  //     profileLink: "https://www.hackerrank.com/layman_brother",
  //   },
  //   {
  //     siteName: "Codechef",
  //     iconifyClassname: "simple-icons:codechef",
  //     style: {
  //       color: "#5B4638",
  //     },
  //     profileLink: "https://www.codechef.com/users/ashutosh_1919",
  //   },
  //   {
  //     siteName: "Codeforces",
  //     iconifyClassname: "simple-icons:codeforces",
  //     style: {
  //       color: "#1F8ACB",
  //     },
  //     profileLink: "http://codeforces.com/profile/layman_brother",
  //   },
  //   {
  //     siteName: "Hackerearth",
  //     iconifyClassname: "simple-icons:hackerearth",
  //     style: {
  //       color: "#323754",
  //     },
  //     profileLink: "https://www.hackerearth.com/@ashutosh391",
  //   },
  //   {
  //     siteName: "Kaggle",
  //     iconifyClassname: "simple-icons:kaggle",
  //     style: {
  //       color: "#20BEFF",
  //     },
  //     profileLink: "https://www.kaggle.com/laymanbrother",
  //   },
  // ],
};

const degrees = {
  degrees: [
    {
      title: "UIIT PMAS University Rawalpindi, Pakistan",
      subtitle: "Bachelor of Science Software Engineering (Silver Medalist) (CGPA 3.94/4) ",
      logo_path: "pmas.png",
      alt_name: "PMAS",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Gained deep insights of fundamental software engineering courses like DS, Algorithms, DBMS, OS, Advanced Programming, Artificial Intelligence etc.",
        "⚡ I have built course project using C++, Java, React-Native, C#, MySQL, PHP, Python.",
        "⚡ The transparent methodology of providing diversity and building confidence by UIIT has helped to develop me as a person not to forget mentioning the community bonding techniques that talks about growth",
        "⚡ I built my Final Year project in Machine Learning.",
      ],
      website_link: "https://www.uaar.edu.pk/uiit/index.php?dept_id=31",
    },
    {
      title: "Presidential Initiative for Artificial Intelligence and Computing",
      subtitle: "2 years degree in Artificial Intelligence",
      logo_path: "PIAIC.png",
      alt_name: "PMAS",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Learn extensive knowledge in various AI learning algorithms, including supervised, unsupervised, and reinforcement learning.",
        "⚡ Pratically did in implementing machine learning models for data analysis, pattern recognition, and predictive analytics.",
        "⚡ Work with computer vision algorithms for image recognition, object detection, and image generation tasks.",
        "⚡ Learn how to do data cleaning using Data Science techniques.",
      ],
      website_link: "https://www.piaic.org/artificial-inteligence",
    },
    {
      title: "IMCB G-10/4 Islamabad",
      subtitle: "Pre-Engineering",
      logo_path: "imcb.png",
      alt_name: "IMCB",
      duration: "2014 - 2016",
      descriptions: [
        "⚡ I studies pre-engineering from Islamabad Model College For Boys.",
        "⚡ Swiftly conducted sports and other extra-curricular events in college",
        "⚡ My major subject are physics, mathmatics and chemistry",
        "⚡ During my time at college, I was also associated with sports department. As part of it's cricket team as well.",
      ],
      website_link: "https://imcbgten4.org/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Machine Learning",
    //   subtitle: "- Andrew Ng",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/678c02426c7e790ce4b2c902876d5584",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    // {
    //   title: "ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am a results-driven Full Stack Web Developer with a strong foundation in software engineering and a passion for crafting seamless digital experiences. With a proven track record in building and optimizing web applications, I am adept at leveraging a diverse skill set to create robust, user-friendly, and high-performing websites and web-based solutions.I am committed to staying updated with the latest industry trends and technologies, ensuring that my work remains at the forefront of innovation.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer",
          company: "Devsinc",
          company_url: "https://devsinc.com",
          logo_path: "developers_inc_logo.jpg",
          duration: "Nov 2021 - Present",
          location: "Devsinc, Islamabad",
          description:
          `-	Accomplished Full Stack Developer with expertise in React, Next.js, and Redux, proficiently building dynamic and responsive front-end interfaces using Tailwind, Bootstrap, and CSS.\n-	Extensive backend development experience using Django and Ruby on Rails, with a portfolio encompassing over five successful projects developed for client demos and five projects for U.S. clients.\n-	Demonstrated proficiency in integrating third-party services, such as Google Authentication, Stripe, LinkedIn, Google Maps, and more, enhancing the functionality of web applications.\n-	Proven track record of effective project management using industry-standard tools like Trello and Jira, ensuring seamless collaboration.\n-	Hands-on experience with Material UI and various component libraries, contributing to the creation of visually appealing and user-friendly web applications.\n-	Established proficiency in code review processes, maintaining high-quality standards, and utilizing GitHub for version control and collaborative development.\n-	Successfully led and managed a team of five developers, fostering a collaborative environment and ensuring the timely delivery of high-quality software projects.\n-	Seasoned in handling complex challenges, such as signing with Google and implementing intricate functionalities, showcasing problem-solving skills in a dynamic development environment.\n-	Proficient in DevOps practices, including AWS (Amazon Web Services), Dockerization of applications, Jenkins for automation, and CI/CD (Continuous Integration and Continuous Deployment) pipelines.\n-	Utilized GitHub Actions for streamlined deployment and version control, ensuring efficient development workflows.\n-	Consistent use of industry best practices and tools, with a commitment to staying abreast of emerging technologies, ensuring the delivery of cutting-edge solutions to clients.`,
          color: "#0879bf",
        },
        {
          title: "Individual Contractor (Remote)",
          company: "Upwork",
          company_url: "https://www.upwork.com/freelancers/~010e7384bb5c6ba046",
          logo_path: "upwork.png",
          duration: "Nov 2019 - Nov 2021",
          location: "San Francisco, California, United States",
          description:`-	Successfully handled diverse web development projects on Upwork, specializing in React, Bootstrap, Figma to HTML/CSS, Node.js, ROR, and Django.\n-	Proficient in debugging complex database issues, ensuring smooth operations for various applications.\n-	Built and optimized Shopify e-commerce websites, driving sales and enhancing user experiences.\n-	Known for adaptability, meeting tight deadlines, and delivering tailored solutions for clients' specific requirements.\n-	Maintained strong client relationships through transparent communication and regular project updates.\n-	Committed to continuous learning, staying updated with the latest trends to deliver innovative and competitive solutions.`,
          color: "#9b1578",
        },
        {
          title: "Junior Web Developer",
          company: "The Capital Technologies",
          company_url: "https://captech.com.pk/Home.aspx",
          logo_path: "the-capital-technology-logo.png",
          duration: "Apr 2019 - Oct 2019",
          location: "Rehmanabad, Rawalpindi, Pakistan",
          description: `-	Converted HTML, Figma websites to ReactJS websites.\n-	Designing user interactions on web pages using bootstrap, custom CSS & Media Queries.\n-	Ensuring cross-platform optimization for mobile phones and responsiveness of applications.`,
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Front-End Developer Intern",
          company: "Arhamsoft Pvt. Ltd.",
          company_url: "https://www.arhamsoft.com/",
          logo_path: "arhamsoft-logo.webp",
          duration: "Aug 2021 - Oct 2021",
          location: "Lahore, Pakistan",
          description:
          `-	Demonstrated proficiency in front-end development during an internship, utilizing HTML, CSS, and Bootstrap 3, 4, and 5.\n-	Successfully converted over 14 Figma designs into responsive HTML, CSS, and Bootstrap, ensuring mobile-friendly and visually appealing web interfaces.\n-	Collaborated effectively with the design team to translate Figma prototypes into fully functional and aesthetically pleasing web pages, meeting project requirements and design specifications.\n-	Acquired hands-on experience in implementing modern web design principles and best practices, contributing to the enhancement of user experiences and interface usability.\n-	Actively participated in the development of various web projects, showcasing strong problem-solving skills and a keen eye for detail in achieving accurate design representations and seamless functionality.`,            
          color: "#000000",
        },
        {
          title: "Basics Programming Intern",
          company: "Stafona (Pvt.) Ltd",
          company_url: "http://www.stafona.com/",
          logo_path: "Stafone_logo.jpeg",
          duration: "June 2018 - Sept 2018",
          location: "Bahria Phase 4, Islamabad, Pakistan",
          description:
            `-	Demonstrated proficiency in programming concepts such as OOP, data structures.\n-	Learn in using programming languages such as Java, or C++.\n-	Made complete c++ console atm application using OOP concepts.` ,      
          color: "#ee3c26",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Over the years I have used various tech architectures and tools comprising ReactJs, NextJs, Redux, Hooks, Nodejs, ExpressJs, MongoDB, Ruby on Rails, Django, HTML/CSS, C/C++, Python, Solidity, Android Apps in Javas and React Native. I have mixed the blends of different technologies into microservices to solve coupling problems of a particular framework. Having versatility has brought me to the forefront of the industry and I am currently working on projects that will be part of the next major breakthroughs in the industry.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  // data: [
  //   {
  //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
  //     name: "Artificial Intelligence Paper",
  //     createdAt: "2020-03-06T16:26:54Z",
  //     description: "Paper Written on Artificial Intelligence published in xyz ",
  //     url:
  //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
  //   },
  //   {
  //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
  //     name: "Artificial Intelligence Paper",
  //     createdAt: "2020-03-06T16:26:54Z",
  //     description: "Paper Written on Artificial Intelligence published in xyz ",
  //     url:
  //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
  //   },
  //   {
  //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
  //     name: "Artificial Intelligence Paper",
  //     createdAt: "2020-03-06T16:26:54Z",
  //     description: "Paper Written on Artificial Intelligence published in xyz ",
  //     url:
  //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
  //   },
  //   {
  //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
  //     name: "Artificial Intelligence Paper",
  //     createdAt: "2020-03-06T16:26:54Z",
  //     description: "Paper Written on Artificial Intelligence published in xyz ",
  //     url:
  //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
  //   },
  //   {
  //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
  //     name: "Artificial Intelligence Paper",
  //     createdAt: "2020-03-06T16:26:54Z",
  //     description: "Paper Written on Artificial Intelligence published in xyz ",
  //     url:
  //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
  //   },
  // ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact-me.svg",
    description:
      "I am available on almost every social media. And here is the fun part, I'm very responsive, so feel free to reach me out if you want a Freelance work to be done. I will reply within 24 hours. I can help you with Web Development (Both Front-end & Back-End), APIs Integrations, Rest APIs, Bug Fixing, Cloud and Opensource Development.",
    
    },

  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character. Feel free to reach give them a quick read 😉",
    link: "https://medium.com/@abbasi.faizan1997",
    avatar_image_path: "blogs_image.svg",
    blogs: [
      {
        text: "How to setup & use multiple GitHub SSH.",
        date: "27 Oct 2023",
        title: "How to setup & use multiple GitHub SSH.",
        url:
          "https://medium.com/@abbasi.faizan1997/how-to-setup-user-ssh-for-multiple-github-accounts-582f15d027e4",
      },
      {
        text: "In the ever-evolving landscape of web development, React continues to stand at the forefront, empowering developers to create powerful and dynamic user interfaces with ease.",
        date: "26 Oct 2023",
        title: "The Latest in React: A Peek into the Evolving World of Front-End Development",
        url:
          "https://medium.com/@abbasi.faizan1997/the-latest-in-react-a-peek-into-the-evolving-world-of-front-end-development-306774815e07",
      },
      {
        text: "Setting up GitHub SSH on Windows, macOS, and Linux can be crucial for developers and programmers to securely communicate with GitHub servers. Here’s a complete guide on how to set up GitHub SSH on each operating system.",
        date: "27 Oct 2023",
        title: "How to set SSH on window, Mac, Linux.",
        url:
          "https://medium.com/@abbasi.faizan1997/how-to-set-ssh-on-window-mac-linux-42c1228e3112",
      }
    ]
  },

  addressSection: {
    title: "Address",
    subtitle:
      "Dhok Hassu",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
