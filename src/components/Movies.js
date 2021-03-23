import Animation from "./Animation";
import Genre from "./Genre"
import Rating from "./Rating"

const Movies = (props) => {
  return (
    <section className="moviecontainer">
      {props.data.map((item, index) => (
        <div className="moviecard" key={index}>
          <div className="content">
            <div className="title">{item.title}</div>
            <Animation />
            <div>{item.year}</div>
            <div>{item.director}</div>
            <div>{item.duration}</div>
            <div>Rating: {item.rate} / 10</div>
            <Rating data={item}/>
            <Genre data={item.genre}/>
          </div>
        </div>
      ))}
      ;
     
    </section>
    
  );
  
};


export default Movies;
