import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const FavFilledIcon = () => (
  <Svg
    width={50}
    height={44}
  viewBox="-10.5 -3.5 26 24"
    id="heart"
  >
    <Path
      fill="#f05542"
      d="M5.301 3.002c-.889-.047-1.759.247-2.404.893-1.29 1.292-1.175 3.49.26 4.926l.515.515L8.332 14l4.659-4.664.515-.515c1.435-1.437 1.55-3.634.26-4.926-1.29-1.292-3.483-1.175-4.918.262l-.516.517-.517-.517C7.098 3.438 6.19 3.049 5.3 3.002z"
    />
  </Svg>
);
export default FavFilledIcon;
