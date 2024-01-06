import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Figure, ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Pokemon } from "../models/Pokemon_model";
import { getPokemons } from "../controller/getPokemon";

const List = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState("");

  const getAllData = async () => {
    const allPokemons = await getPokemons();
    setPokemons(allPokemons);
  };

  const searchPokemon = pokemons?.slice(0, 50).filter((p) => {
    return p.name.toLowerCase().match(query.toLowerCase());
  });

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <h1>POKEDEX</h1>
      <header>
        <input
          type="text"
          value={query}
          placeholder="Buscar pokemon..."
          onChange={(e) => setQuery(e.target.value.trim())}
        />
      </header>
      <br />
      <div className="content-wrapper">
        <div className="content">
          <div className="row gap-3">
            {searchPokemon?.slice(0, 50).map((value, index) => (
              <Card
                className="mx-auto p-0"
                style={{ width: "18rem" }}
                key={index}
              >
                <Card.Header>
                  <b>Tipo: </b>
                  {value.typeA} - {value.typeB}
                </Card.Header>
                <Card.Img
                  className="d-block mx-auto w-50"
                  width="100"
                  height="100"
                  variant="top"
                  src={value.imggif}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {value.id} - {value.name}
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Figure.Image
                        width={20}
                        height={20}
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/128/1673/1673624.png"
                      />{" "}
                      HP: {value.hp}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={20}
                        height={20}
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/128/11235/11235575.png"
                      />{" "}
                      Ataque: {value.attack}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={20}
                        height={20}
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/128/3587/3587040.png"
                      />{" "}
                      Defensa: {value.defense}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={20}
                        height={20}
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/128/1673/1673624.png"
                      />{" "}
                      Especial ataque: {value.sp_atk}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={20}
                        height={20}
                        alt=""
                        src="https://www.flaticon.es/icono-gratis/fiabilidad_7870573"
                      />{" "}
                      Especial defensa: {value.sp_def}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Figure.Image
                        width={20}
                        height={20}
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/128/252/252590.png"
                      />{" "}
                      Velocidad: {value.speed}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
