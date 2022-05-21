function MenuItem({ image, name, price }) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${ image })`}}> </div>
            <h1> {name} </h1>
            <p> Rp{price}.000 </p>
        </div>

    );
}

export default MenuItem;
