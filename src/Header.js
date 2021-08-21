import Service from './Service';

function Header(){

    const services=[
        {
            title:"Python Programming",
            subtitle:"Backend programming",
            desc:"Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation.",
            image:"https://www.softwaretestinghelp.com/wp-content/qa/uploads/2020/12/Python-Programming.png"
        },
        {
            title:"Django",
            subtitle:"Python Framework",
            desc:"Django is a Python-based free and open-source web framework that follows the model–template–views architectural pattern.",
            image:"https://cdn.educba.com/academy/wp-content/uploads/2019/12/django-framework.jpg"
        },
        {
            title:"HTML",
            subtitle:"Frontend programming",
            desc:"The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.",
            image:"https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg"
        },
        {
            title:"CSS",
            subtitle:"Frontend programming",
            desc:"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
            image:"https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg"
        },
        
        {
            title:"Javascript Programming",
            subtitle:"Frontend programming",
            desc:"JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.",
            image:"https://elevenfifty.org/wp-content/uploads/2018/04/Fotolia_199511791_Subscription_Monthly_M-880x499.jpg"
        },
        
        {
            title:"React",
            subtitle:"Frontend Library",
            desc:"React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.",
            image:"https://miro.medium.com/max/1200/1*yjH3SiDaVWtpBX0g_2q68g.png"
        }
    ]


    return (
        <div>
            <h1 style={{marginLeft:"10%"}}>All Services</h1>
            <div className="container">

                
                {
                    services.map((service,index)=>(

                        <Service key={index} title={service.title} subtitle={service.subtitle} desc={service.desc} image={service.image} />

                    ))
                }
            </div>

        </div>

        
    )

}


export default Header;