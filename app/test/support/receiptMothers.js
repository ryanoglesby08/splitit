const anOcrTextAnnotation = ({description, vertices}) => (
  {
    description: description,
    boundingPoly: {
      vertices: vertices.map(({x,y}) => ({x, y}))
    }
  }
);

const defaultTextAnnotation = {
  description: "some text",
  vertices: [{x: 23, y: 11}, {x: 77, y: 11}, {x: 77, y: 24}, {x: 23, y: 24}]
};

export const anOcrResponse = (textAnnotations = [defaultTextAnnotation]) => (
  {
    textAnnotations: textAnnotations.map((annotation) => anOcrTextAnnotation(annotation))
  }
);