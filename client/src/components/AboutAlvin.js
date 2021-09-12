import React from "react";
import AlvinImage from '../assets/AlvinImage.jpg';

function AboutAlvin() {
    return (
        <div>
            <h1>Alvin To </h1> 
            <img src={AlvinImage} width="5%" height="5%" alt="Alvin To" />
            <p> Hello, my name is Alvin To. I am a transfer student. My role in this projet is front end developer.
                I am responsible for the what the user sees on this project.
                I will make sure to work with my team to make our project presentable and usuable.
            </p>
        </div>
    )
}
// class Table extends Component{
//     render(){
//         return (
//             <div>
//                   <h1>Islombek Abdulakhatov cacasc</h1>
//                 <Avatar
//                 className="table_avatar"
//                 src="../components/Islom/Islom.jpg"
//                 />
//             </div>
//         )
//     }
// }

export default AboutAlvin;