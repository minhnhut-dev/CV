import reddit from '../../assets/pj_1.jpg'
import tgdd from '../../assets/pj_2.jpg'
import gpt3 from '../../assets/pj_3.jpg'
import calendar from '../../assets/pj_4.jpg'
import insight from '../../assets/insight.jpg'
import web_hainong from "../../assets/web-hainong.png"
import panel from "../../assets/panel.png";
import call_expert from "../../assets/call_expert.png";
import agriID from "../../assets/agriID.png";

export const projects = [
    {
        src: web_hainong,
        name: 'Web hainong',
        type: 'Project ADVN',
        desc: ['Nơi nông dân thảo luận - chia sẻ  kiến thức và kinh nghiệm thực tế  trong sản xuất nông nghiệp. Các câu hỏi khó sẽ được chuyên gia nông nghiệp hàng đầu Việt Nam giải đáp và tư vấn miễn phí'],
        technology: ['ReactJS', 'React Hook', 'SCSS', 'Redux-Saga', 'SSR', 'Bootstrap'],
        preview: 'https://hainong.vn',
        srcCode: '#',
        color: '#00ccff'
    },
    {
        src: panel,
        name: 'Admin panel manage web & app hainong',
        type: 'Project ADVN',
        desc: ['Provides API for Hainong web and app',
            'Manage news listings, agricultural forums, market prices, and diagnose pests and diseases using AI'
        ],
        technology: ['Ruby on rails', 'Jquery', 'Postgresql', 'Bootstrap'],
        preview: '#',
        srcCode: '#',
        color: '#ff7506'
    },
    {
        src: agriID,
        name: 'AgriID ',
        type: 'Project ADVN',
        desc: ['Statistics of data from many sources such as: Hainong website, Hainong app, DMS, CRM',
            'Manage APPs and user statistics, export to excel, display charts.'
        ],
        technology: ['Ruby on rails', 'Jquery', 'Postgresql', 'Bootstrap', 'Apex chart (gantt chart)'],
        preview: '#',
        srcCode: '#',
        color: '#4f75ff'
    },
    {
        src: call_expert,
        name: 'Call expert',
        type: 'Project ADVN',
        desc: ['Intuitive and user-friendly interface.',
            'Edit profile: change name, description, age, avatar, theme',
            'Write and post statuses and articles with different topic tags.'],
        technology: ['ReactJs', 'React hook', 'TypeScript', 'Livekit', 'Ruby on rails'],
        preview: '#',
        srcCode: '#',
        color: '#be0001'
    }

]