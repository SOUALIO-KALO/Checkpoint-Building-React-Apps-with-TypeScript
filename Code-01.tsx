import React from "react";

// Interface pour définir le type des props du composant Greeting
interface GreetingProps {
  name: string; // La prop "name" est une chaîne de caractères
}

// Définir le composant fonctionnel avec React.FC et typer les props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Rendu du composant avec la prop name
  return <div>Hello, {name} !</div>;
};

export default Greeting;
