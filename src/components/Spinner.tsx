import React, { CSSProperties, useState } from 'react';
import { ClipLoader } from 'react-spinners';

const Spinner = () => {
      const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
      const [loading, setLoading] = useState(true);
      const [color, setColor] = useState("#3521ce");
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