import React from "react";
import pf from "petfinder-client";
import Pet from "./Pet";
import SearchBox from './SearchBox';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
})

class Results extends React.Component {
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
    throw new Error("hello error my old friend")
    return (
      <div className="search">
        <SearchBox />
        {this.state.pets.map(pet => {
            let breed;

            if (Array.isArray(pet.breeds.breed)) {
              breed = pet.breeds.breed.join(', ')
            } else {
              breed = pet.breeds.breed
            }
            return <Pet key={pet.id} animal={pet.animal} name={pet.name} breed={breed} media={pet.media} id={pet.id} location={`${pet.contact.city}, ${pet.contact.state}`} />
        })}
      </div>
    );
  }
}

export default Results;
