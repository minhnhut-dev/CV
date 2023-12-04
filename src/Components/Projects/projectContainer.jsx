import reddit from '../../assets/pj_1.jpg'
import tgdd from '../../assets/pj_2.jpg'
import gpt3 from '../../assets/pj_3.jpg'
import calendar from '../../assets/pj_4.jpg'
import portfolio from '../../assets/portfolio-img.png'
import queuingsystem from '../../assets/queuingsystem.jpg'
import insight from '../../assets/insight.jpg'

export const projects = [
    {
        src: portfolio,
        name: 'My Portfolio',
        type: 'My Personal Website ',
        desc: ['Welcome to my personal website!'],
        technology: ['ReactJs', 'React Hook', 'Javascript', 'HTML', 'CSS', 'EmailJs'],
        preview: '#',
        srcCode: 'https://github.com/melkior-nguyen/Portfolio',
        color: '#00ccff'
    },
    {
        src: queuingsystem,
        name: 'Queuing System',
        type: 'Hospital Magagement Website ',
        desc: ['Provides statistics on the number of patient IDs issued through charts',
            'Enables the management of Hospital equipment and services.',
            'Allows for the issuance and tracking of patient identification numbers.',
            'Offers user account management with varying levels of access permissions.'
        ],
        technology: ['TypeScript', 'ReactJs', 'Redux/ReduxToolkit', 'Google Firebase', 'Ant Design', 'React Icon'],
        preview: 'https://melkior-nguyen.github.io/QueuingSystem/',
        srcCode: 'https://github.com/melkior-nguyen/QueuingSystem',
        color: '#ff7506'
    },
    {
        src: insight,
        name: 'Insight',
        type: 'Ticket Sale Website ',
        desc: ['Allow to view ticket sale data in a week-to-week format through charts',
            'Show current ticket sales in real-time, enabling filtering and sorting ticket listings based on various criteria.'
        ],
        technology: ['TypeScript', 'ReactJs', 'Redux/ReduxToolkit', 'Google Firebase', 'Ant Design', 'React Icon'],
        preview: 'https://melkior-nguyen.github.io/InSight/',
        srcCode: 'https://github.com/melkior-nguyen/InSight',
        color: '#4f75ff'
    },
    {
        src: reddit,
        name: 'Mobile Reddit',
        type: 'Social Media',
        desc: ['Intuitive and user-friendly interface.',
            'Edit profile: change name, description, age, avatar, theme',
            'Write and post statuses and articles with different topic tags.'],
        technology: ['ReactJs', 'React hook', 'Javascript', 'HTML', 'CSS'],
        preview: 'https://melkior-nguyen.github.io/reddjt/',
        srcCode: 'https://github.com/melkior-nguyen/reddjt',
        color: '#be0001'
    },
    {
        src: gpt3,
        name: 'Chat-GPT3',
        type: 'Landing Page website',
        desc: ['One-page website design from Figma with accuracy to pixel.',
            'Using ReactJs to split pages and components into files. ',
            'Responsive on mobile- tablet, BEM in Css.',
            'Tools: Angrytools.com, Animista.net, Figma.com'],
        technology: ['ReactJs', 'React Hook', 'Javascript', 'HTML', 'CSS'],
        preview: 'https://melkior-nguyen.github.io/Gpt3-figma/',
        srcCode: 'https://github.com/melkior-nguyen/Gpt3-figma',
        color: '#1a6773'
    },
    {
        src: tgdd,
        name: 'The Gioi Di Dong',
        type: 'Electronic Website',
        desc: ['Online technology product shop',
            'Images slider, Flashsale countdown time, change province (API),  visualize products with color and effects…',
            'Build and use a 12-column grid CSS library for responsive, BEM in CSS.'
        ],
        technology: ['HTML', 'CSS', 'Javascript', "API", 'CSS Library'],
        preview: 'https://melkior-nguyen.github.io/Thegioididong/',
        srcCode: 'https://github.com/melkior-nguyen/Thegioididong',
        color: '#ffd323'
    },
    {
        src: calendar,
        name: 'Modern Calendar',
        type: 'Calendar with To Do',
        desc: ['User-friendly and easy-to-use interface.',
            'Allows users to create events and tasks to be completed on specific dates on the calendar.',
            'includes note-taking feature that allows users to save and store important information on local storage for future reference.',
        ],
        technology: ['Javascript', 'HTML', 'CSS', 'Local Storage'],
        preview: 'https://melkior-nguyen.github.io/calendar-todo/',
        srcCode: 'https://github.com/melkior-nguyen/calendar-todo',
        color: '#151983'
    },

]