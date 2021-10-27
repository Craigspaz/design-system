import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconGoogle16 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <path
                    fill={color}
                    d="M10.84 4.82a3.837 3.837 0 00-2.7-1.05c-1.837 0-3.397 1.233-3.953 2.891a4.17 4.17 0 000 2.68h.003c.558 1.657 2.115 2.889 3.952 2.889.948 0 1.761-.241 2.392-.667v-.002a3.239 3.239 0 001.407-2.127H8.14V6.74h6.64c.082.468.121.946.121 1.422 0 2.129-.765 3.929-2.096 5.148l.001.001C11.64 14.38 10.038 15 8.14 15a7.044 7.044 0 01-6.29-3.855 6.97 6.97 0 010-6.287A7.042 7.042 0 018.139 1a6.786 6.786 0 014.71 1.821L10.84 4.82z"
                />
            </svg>
        );
    }
);
