import Card from "./Card/Card"
import "./Content.css"

// array at index[0] is going to be an about me array with information displayed dynamically, index[1] will be an array of projects to be used by a card component

const contentArray = [
    [{
        heading: 'About Me',
        body: 'an about me',
        image: 'filepath'
    }],
    [{
        projectTitle: 'Who&#39;s That Pokemon?',
        image: 'filepath',
        link: 'a link to the deployed project',
        shortDesc: 'A description to transform and show on hover'
    }],
    [{
        image: 'filpath',
        link: 'multiple link properties with links to a resume, or phone number, github'   
    }]
]

const Content = () => {
    return <div className="content-body">
        <Card contentArray={contentArray[1]} />
    </div>
}

export default Content