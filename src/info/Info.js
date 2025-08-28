import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Sabri",
    lastName: "Karoumi",
    initials: "SK", // the example uses first and last, but feel free to use three or more if you like.
    position: "developpeur Full Stack",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        
          
        
        {
            emoji: '🌎',
            text: 'basé en France'
        },
        {
            emoji: "💼",
            text: "diplomé en developpement web Full Stack"
        },
        {
            emoji: "📧",
            text: "skaroumi71@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/sabrikrm?tab=repositories",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/feed/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "",
            icon: "fa fa-id-card",
            label: 'CV'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Bonjour! Moi c'est sabri je suis un developpeur web full stack pret a relever tout type de defi et projet en melangeant passion et professionalisme !!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'Sass'],
            exposedTo: [  'adobe illustrator', 'Python', 'Symphony']
        }
    ,
    hobbies: [
        {
            label: 'Lecture',
            emoji: '📖'
        },
      
        {
            label: 'Cinema',
            emoji: '🎥'
        },
        {
            label: 'Musique',
            emoji: '🎵'
        },
        {
            label: 'Sport',
            emoji: '⚽'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project ArgentBank",
            live: ".", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/sabrikrm/ArgentBank-Frontend-Backend-main", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1,
              tech: ["Redux", "React", "Vite", "MongoDB"] 
        },
        {
            title: "724 Events",
            live: "https://sabrikrm.github.io/Debuggez-une-application-React.JS-main/",
            source: "https://github.com/sabrikrm/Debuggez-une-application-React.JS-main",
            image: mock2,
             tech: ["React", "Debuggage", "Node.js", "cahier de recette", "Sass"] 
        },
        {
            title: "Sophie Bluel",
            live: "https://sabrikrm.github.io/sabri-p8-nina-carducci-master/",
            source: "https://sabrikrm.github.io/sabri-p8-nina-carducci-master/",
            image: mock3,
             tech: ["SEO", "Referencement", "Optimisation", "Accessibilité"] 
        },
        {
            title: "Oh my food",
            live: "https://sabrikrm.github.io/ohmyfood-main-1/",
            source: "https://github.com/sabrikrm/ohmyfood-main-1",
            image: mock4,
             tech: ["Javascript", "Modal", "Node.js","Css"] 
        },
       
    ]
}