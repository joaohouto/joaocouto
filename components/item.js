const Item = ({ title, image, description, date }) => {
    return (
        <div className="item-post">
            <div className="section" id="image" style={{ background: `url('${image}')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
            <div className="section">
                <h2 className="hover">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Item