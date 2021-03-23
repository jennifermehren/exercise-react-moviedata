import animation from '../animation_500_kmjg8050.gif';

const Animation = (props) => {

    let myAnimation = <div className="animation" style={{visibility: 'hidden'}}> <img className="animation" style={{width:"50px"}} src={animation} alt="animation"></img></div>;


    return ( 
        myAnimation
     );
}
 
export default Animation;