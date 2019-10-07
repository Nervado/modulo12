import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { Container } from './styles';
import { addTech } from "~/store/modules/techs/actions";

export default function TechList() {
  // const [techs, setTechs] = useState([]);

  const [newTech, setNewTech] = useState("");

  /*
  useEffect(() => {
    const techs = localStorage.getItem("techs");
    if (techs) {
      setTechs(JSON.parse(techs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("techs", JSON.stringify(techs));
  }, [techs]);
*/

  const dispatch = useDispatch();
  const techs = useSelector(state => state.techs);

  function handleAddTech() {
    // setTechs([...techs, newTech]);
    dispatch(addTech(newTech));

    setNewTech("");
  }
  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <label htmlFor="tech">Tech</label>
      <input
        id="tech"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button onClick={handleAddTech}>Adicionar</button>
    </form>
  );
}
