const anOcrTextAnnotation = ({description, vertices}) => (
  {
    description: description,
    boundingPoly: {
      vertices: vertices.map(({x,y}) => ({x, y}))
    }
  }
);

const rand = (max = 100) => Math.floor(Math.random() * max);
export const someVertices = () => (
  [{x: rand(), y: rand()}, {x: rand(), y: rand()}, {x: rand(), y: rand()}, {x: rand(), y: rand()}]
);

const defaultTextAnnotation = {
  description: "some text",
  vertices: someVertices()
};

export const anOcrResponse = (textAnnotations = [defaultTextAnnotation]) => (
  {
    responses: [
      {
        textAnnotations: textAnnotations.map((annotation) => anOcrTextAnnotation(annotation))
      }
    ]
  }
);

export const aMoneyElement = (overrides = {}) => {
  const values = {
    id: 1,
    amount: "$2.00",
    polygon: someVertices()
  };

  return {...values, ...overrides};
};
