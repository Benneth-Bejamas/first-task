// import React from "react";
// import SbEditable from "storyblok-react";
// import Teaser from "./elements/teaser";

// const Components = {
//   teaser: Teaser,
// };

// const DynamicComponent = ({ blok }) => {
//   if (typeof Components[blok.component] !== "undefined") {
//     const Component = Components[blok.component];
//     return (
//       <SbEditable content={blok}>
//         <Component blok={blok} />
//       </SbEditable>
//     );
//   }
//   return <div>{blok.component}</div>;
// };

// export default DynamicComponent;
import React from "react";

const dynamicComponent = () => {
  return <div>ok</div>;
};

export default dynamicComponent;
