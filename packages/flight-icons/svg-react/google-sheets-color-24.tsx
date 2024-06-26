import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconGoogleSheetsColor24 = forwardRef<SVGSVGElement, IconProps>(
    ({ color = 'currentColor', title, ...props }, svgRef) => {
        const titleId = useMemo(
            () =>
                title
                    ? 'title-' + Math.random().toString(36).substr(2, 9)
                    : undefined,
            [title]
        );
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
                <path fill="#188038" d="M14.266 2l4.984 5h-4.984V2z" />
                <path
                    fill="#34A853"
                    d="M14.266 7V2H6.109c-.75 0-1.359.61-1.359 1.364v17.272c0 .754.608 1.364 1.36 1.364h11.78c.752 0 1.36-.61 1.36-1.364V7h-4.984z"
                />
                <path
                    fill="#FDFFFF"
                    d="M7.469 9.727v6.591h9.062v-6.59H7.47zm3.965 5.455H8.602V13.59h2.832v1.59zm0-2.727H8.602v-1.591h2.832v1.59zm3.964 2.727h-2.832V13.59h2.832v1.59zm0-2.727h-2.832v-1.591h2.832v1.59z"
                />
            </svg>
        );
    }
);
