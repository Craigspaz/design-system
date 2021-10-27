import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconCameraOff24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, titleId, ...props }, svgRef) => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden={!title}
                ref={svgRef}
                aria-labelledby={titleId}
                {...props}
            >
                {title ? <title id={titleId}>{title}</title> : null}
                <g fill={color}>
                    <path d="M5 8a1 1 0 000 2h.01a1 1 0 100-2H5z" />
                    <path
                        fillRule="evenodd"
                        d="M2.28 1.22a.75.75 0 00-1.06 1.06l2.615 2.616-.221.01A2.75 2.75 0 001 7.654V19.25A2.75 2.75 0 003.75 22h17.19l.78.78a.75.75 0 101.06-1.06L2.28 1.22zM19.44 20.5l-3.935-3.934a5 5 0 01-7.07-7.07l-3.17-3.17-1.577.079A1.25 1.25 0 002.5 7.653V19.25c0 .69.56 1.25 1.25 1.25h15.69zm-9.945-9.944l4.95 4.949a3.5 3.5 0 01-4.95-4.95z"
                        clipRule="evenodd"
                    />
                    <path d="M9.094 2c-.64 0-1.23.35-1.537.912l-.421.773a.75.75 0 101.317.718l.421-.773a.25.25 0 01.22-.13h5.812a.25.25 0 01.22.13l1.216 2.23a.75.75 0 00.622.39l3.346.158a1.25 1.25 0 011.19 1.249V18.5a.75.75 0 001.5 0V7.657a2.75 2.75 0 00-2.62-2.747l-2.923-.14-1.014-1.858A1.75 1.75 0 0014.906 2H9.094z" />
                    <path d="M12.345 8.698a.75.75 0 01.915-.538 5.007 5.007 0 013.58 3.58.75.75 0 01-1.452.377 3.507 3.507 0 00-2.505-2.505.75.75 0 01-.538-.914z" />
                </g>
            </svg>
        );
    }
);
