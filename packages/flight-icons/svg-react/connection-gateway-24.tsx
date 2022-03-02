import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconConnectionGateway24 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M20.5 1.75a3 3 0 00-2.665 4.378l-2.441 2.184A2.24 2.24 0 0014.25 8h-3A2.25 2.25 0 009 10.25V11H6.405a3.001 3.001 0 00-5.905.75 3 3 0 005.905.75H9v.75a2.25 2.25 0 002.25 2.25h3a2.24 2.24 0 001.144-.312l2.44 2.184a3 3 0 101-1.118l-2.476-2.216c.092-.245.142-.51.142-.788v-3c0-.277-.05-.543-.142-.788l2.477-2.216A3 3 0 1020.5 1.75zm-1.5 3a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM11.25 9.5a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-3zm9.25 7.75a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM2 11.75a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);