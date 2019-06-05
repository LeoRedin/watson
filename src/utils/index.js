import React, { Fragment } from "react";

export function formatData(data) {
  const dataToReturn = (
    <Fragment>
      <div className="categories">
        <strong>Categoria(s) :</strong> <br />$
        {data.categories.map(category => `${category.label}, `)}
      </div>
      <div className="concepts">
        <strong>Conceito(s) :</strong> <br />
        {data.concepts.map(concept => `${concept.text}, `)}
      </div>
      <div className="entities">
        <strong>Entidade(s) :</strong>
        <br />
        {data.entities.map((entity, i) => (
          <div className="sentiment" key={i}>
            Sentimento: {entity.sentiment.label} sobre {entity.text}
          </div>
        ))}
      </div>
    </Fragment>
  );

  return dataToReturn;
}
