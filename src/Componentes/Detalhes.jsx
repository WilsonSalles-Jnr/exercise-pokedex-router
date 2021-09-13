import React from 'react';

class Detalhes extends React.Component {
  render() { 
    // const {detalhes} = this.props;
    const {match:{params:{id}}, detalhes}=this.props
    const getPokemon = detalhes.find((cur)=> cur.name === id)
    const {name,type,averageWeight:{value},sumary,foundAt} = getPokemon;
    return <div>
      <p>Name: {name}</p>
      <p>Type: {type}</p>
      <p>Average Weight: {value}</p>
      <p>Sumary: {sumary}</p>
      {foundAt.map((cur)=> <img src={cur.map}/>)}
    </div>;
  }
}
 
export default Detalhes;