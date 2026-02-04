import React from 'react';
import './card.css';

function Card(props) {
    return (
        <div id="adi">
            <img src="https://th.bing.com/th/id/R.fa44f3f978a40ec96a2ed596b9cedae2?rik=7m%2fOe5Xvi1O3Lw&riu=http%3a%2f%2fcdn.images.express.co.uk%2fimg%2fdynamic%2f109%2f590x%2fsecondary%2fPANDA-865718.jpg&ehk=gmSMv4B0GBZpeG0xvhUMQEx54c%2b1KFp1rCk8GOztFpc%3d&risl=&pid=ImgRaw&r=0" alt="Placeholder" height={200} width={200}/>
            <h1>{props.name}</h1>
            {/* <div>
            <button>Row+</button>
            <button>Row-</button>
            <button>col+</button>
            <button>col-</button>
            </div> */}
            
        </div>
    );
}
export default Card;