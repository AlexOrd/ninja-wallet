import React from 'react';

export function Edge({ width = '25px', height = '25px', ...restProps }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.005 512.005"
      width={width}
      height={height}
      {...restProps}
    >
      <path
        d="M19.443 227.392h.288c3.04-24.032 8.64-47.04 16.736-69.088s19.072-42.72 32.896-62.08 29.792-36.128 47.904-50.336 39.424-25.408 63.936-33.6S232.083 0 260.275 0c44.064 0 83.52 10.048 118.432 30.176s62.912 49.056 84.096 86.816c19.84 35.648 29.76 77.792 29.76 126.432v53.76H170.739c.192 21.152 5.28 39.52 15.296 55.072s23.04 27.232 39.04 35.04 34.08 13.248 54.208 16.288 40.416 3.328 60.928.864 40.32-6.912 59.488-13.312c19.168-6.4 35.712-14.432 49.632-24.16v107.84c-17.536 10.496-39.424 19.264-65.632 26.304-26.208 7.04-56 10.688-89.376 10.88-33.376.192-63.488-4.864-90.4-15.168-36.032-13.92-65.728-37.664-89.088-71.2S79.603 356.576 79.219 319.2c-.576-46.144 10.016-85.408 31.744-117.824s52.736-57.984 92.96-76.672c-9.152 11.456-16.576 23.424-22.304 35.904s-10.112 27.712-13.152 45.632h181.632c1.536-14.688.768-28.032-2.304-40.032-3.04-12-7.52-21.696-13.44-29.024s-12.64-13.696-20.16-19.008c-7.52-5.344-15.2-9.248-23.04-11.712-7.808-2.464-14.976-4.448-21.44-5.856s-11.808-2.24-16.032-2.432l-6.272-.352c-25.728.96-50.496 5.184-74.24 12.736s-45.024 17.504-63.904 29.888-35.68 25.792-50.336 40.192-27.872 29.984-39.488 46.752z"
        fill="#2196f3"
      />
    </svg>
  );
}
