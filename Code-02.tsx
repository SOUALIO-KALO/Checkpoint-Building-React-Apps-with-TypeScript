import React, { Component } from "react";

// Interface pour définir le type des props (vide pour l'instant)
interface CounterProps {}

// Interface pour définir le type du state
interface CounterState {
  count: number; // La propriété "count" est un nombre
}

// Définir le composant de classe avec les types pour props et state
class Counter extends Component<CounterProps, CounterState> {
  // Initialiser le state avec le type défini
  state: CounterState = {
    count: 0,
  };

  // Méthode pour incrémenter le compteur, typée avec void
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Méthode de rendu, typée implicitement par TypeScript
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        {/* Gestionnaire d'événement typé automatiquement grâce à React */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
