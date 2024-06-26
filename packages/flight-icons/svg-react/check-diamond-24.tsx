import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconCheckDiamond24 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M16.28 8.72a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 01-1.06 0l-2.5-2.5a.75.75 0 111.06-1.06l1.97 1.97 4.97-4.97a.75.75 0 011.06 0z" />
                    <path
                        fillRule="evenodd"
                        d="M1.884 10.056l8.171-8.172a2.75 2.75 0 013.89 0l8.171 8.172a2.75 2.75 0 010 3.889l-8.171 8.171a2.75 2.75 0 01-3.89 0l-8.171-8.171a2.75 2.75 0 010-3.89zm9.232-7.111l-8.172 8.171a1.25 1.25 0 000 1.768l8.172 8.172a1.25 1.25 0 001.768 0l8.171-8.172a1.25 1.25 0 000-1.768l-8.171-8.171a1.25 1.25 0 00-1.768 0z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
