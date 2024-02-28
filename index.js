const h2=React.createElement('h2',{
    style: {
        fontWeight : 'bold',
    }
},"Learn web development");
const p = React.createElement('p',{},"Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.");

const p1 = React.createElement('p',{},'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from the rest of MDN, and other intermediate to advanced resources that assume a lot of previous knowledge.');

const p2 = React.createElement('p',{},'If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.');

const div=React.createElement('div',{
    style: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '1000vh',
        width: '50vw',
    }
},[h2,p,p1,p2]);

ReactDOM.render(div,document.getElementById('root'));