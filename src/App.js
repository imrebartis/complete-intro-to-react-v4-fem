import React from "react";
import ReactDOM from "react-dom";
import pf from "petfinder-client";
// import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET

})

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pets: []
    }
  }
  componentDidMount() {
    petfinder.pet.find({output: "full", location: "Seattle, WA"})
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet
          } else {
            pets = [data.petfinder.pets.pet]
          }
        } else {
          pets = []
        }

        this.setState({
          pets
        })

      })
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <pre>
        // dump all the state to the page, i.e. see all the data from the API
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
