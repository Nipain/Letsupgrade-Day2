function Service(props){

    return (

        <div className="card">
            <div className="card-img">
               <img src={props.image} className="card-image"/>
            </div>
            <h1 className="card-title">{props.title}</h1>
            <h4 className="card-subtitle">{props.subtitle}</h4>
            <p className="card-desc">
                {props.desc}
            </p>
            <p className="btn-parent">
                <button className="card-btn">
                <a href="https://letsupgrade.in/" target="_blank">Read More</a> 
                </button>
            </p>
        </div>

    )


}


export default Service;