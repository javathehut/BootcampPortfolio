const imgArray = [
	'http://imgur.com/9itd49u.png',
	'http://imgur.com/n19BXfZ.png',
	'http://imgur.com/VBwQmzA.png',
	'http://imgur.com/nawDxVv.png']

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			arrayIndex: 0
		}
		this.changePhoto = this.changePhoto.bind(this);
	}

	changePhoto(num) {
		this.setState({
			arrayIndex: this.state.arrayIndex + num
		})
	}

	render() {

		let arrayIndex = this.state.arrayIndex;
		return (
			<div>
				<h1>Calvin Carousel</h1>
				<div>
					<img src={this.props.imgArray[this.state.arrayIndex]} />
				</div>
				<div>
					<button onClick={()=>{this.changePhoto(-1)}} disabled={arrayIndex == 0 ? "true" : ""} >Previous</button>
					<span>{this.state.arrayIndex + 1} of {this.props.imgArray.length}</span>
					<button onClick={()=>{this.changePhoto(1)}} disabled={arrayIndex == 3 ? "true" : ""} >Next</button>
				</div>
			</div>
		)
	}
}



ReactDOM.render(<App imgArray={imgArray}/>, document.getElementById('app'));