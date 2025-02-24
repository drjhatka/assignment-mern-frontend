import  { CSSProperties, useState } from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = () => {
      const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [loading] = useState(true);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [color] = useState("#3521ce");
    return (
        <div>
            <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        </div>
    );
};

export default Spinner;