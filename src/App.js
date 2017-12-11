import React, { Component } from 'react';
import ClickyThing from './components/ClickyThing';
import Footer from './components/Footer';
import Header from './components/Header';
import Images from './images.json';

class App extends Component {
    state = {
        images: Images,
        clickedImages:  [],
        score: 0,
        topScore: 0,
    }
  //Fisher-Yates shuffle
    shuffleArray = (array) => {
        let i = 0;
        let j = 0;
        let temp = null;
        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i+1))
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
    };

    handleClick = (imgId) => {
        this.shuffleArray(Images);
        document.getElementById("imageBox").classList.remove('shake');        
        console.log(this.state.clickedImages.indexOf(imgId))
        console.log(imgId, typeof(imgId));
        console.log(this.state.clickedImages);
        //if image is in clickedImages array ///
        if(this.state.clickedImages.length > 0 && this.state.clickedImages.indexOf(imgId) > -1) {
            this.setState({
                score: 0,
                clickedImages: []               
            })
            document.getElementById("imageBox").className +=' shake';
        } else if(this.state.score < this.state.topScore) {
             this.state.clickedImages.push(imgId);
             this.setState({
                score: this.state.score + 1,
                clickedImages: this.state.clickedImages
            })  
        } else {
            this.state.clickedImages.push(imgId)
            this.setState({
                topScore: this.state.topScore + 1,
                score: this.state.score + 1,
                clickedImages: this.state.clickedImages     
            })
        }
  }
    render() {
        return (
            <div>
                <Header score={this.state.score} topScore={this.state.topScore}/>
                <ClickyThing handleClick={this.handleClick} images = {this.state.images} clickedImages = {this.state.clickedImages}/>
                <Footer />
            </div>
        )
    }
};

export default App;