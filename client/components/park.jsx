import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaRegHeart , FaHeart} from 'react-icons/fa';

// mapStateToProps
const mapStateToProps = state => ({
  fullName: state.park.fullName,
  description: state.park.description,
  weather: state.park.weather,
  images: state.park.images,
  showPark: state.park.showPark,

})

function handleClick(){
  console.log('clicked')
}
const dummy = {
  name:"Arches National Park",
  description: ' fuck yeah brother this park is the absolute shit, you ll forget all about the pandemic and rememeber that even though hella people died that you are living and thats pretty dope',
  weather: "Arches is part of the Colorado Plateau, a \"high desert\" region that experiences wide temperature fluctuations, sometimes over 40 degrees in a single day. The temperate (and most popular) seasons are spring (April-May) and fall (mid-September-October), when daytime highs average 60 to 80 F and lows average 30 to 50 F. Summer temperatures often exceed 100 F, making strenuous exercise difficult. Winters are cold, with highs averaging 30 to 50 F, and lows averaging 0 to 20 F.",
  image: "https://www.nps.gov/common/uploads/structured_data/3C79850F-1DD8-B71B-0BC4A88BA85DE6B0.jpg"
}
// pull out the pieces of state that we want to render for specific park data
//<h2>{this.props.fullName}</h2>
{/* <li id='description'>{this.props.description}</li>
          <li id='weather'>{this.props.weather}</li>
          <img id='image' src={this.props.images}></img> */}



class Park extends Component {
  render() {
    return (
      <div id='Park' className='park'>
      <h2 className='head'>{dummy.name}
          <span className='icon' onClick ={handleClick}> 
            <FaHeart color='red'/>
          </span>
          </h2>
           <p id='description' className='description'>{dummy.description}</p>
          <p id='weather' className='weather'>{dummy.weather}</p>
          <img id='image' className='pic' src={dummy.image}></img>
        </div>
    )
  }
}


export default connect(mapStateToProps, null)(Park);