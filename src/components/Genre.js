const Genre = (props) => {
    return ( 
        props.data.map((item,index) => (
            <div className="genre" key={"genre" + index}>{item}</div>
        ))
     );
}
 
export default Genre;