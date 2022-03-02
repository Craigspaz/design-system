import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconLockOff16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path d="M8 1.5a2.46 2.46 0 00-1.761.75.75.75 0 01-1.074-1.047A3.96 3.96 0 018 0a3.96 3.96 0 012.835 1.203A4.127 4.127 0 0112 4.083v.93a2.25 2.25 0 012 2.237V9.5a.75.75 0 01-1.5 0V7.25a.75.75 0 00-.75-.75H9.5a.75.75 0 010-1.5h1v-.917c0-.69-.268-1.35-.739-1.833A2.46 2.46 0 008 1.5z" />
                    <path
                        fillRule="evenodd"
                        d="M3.958 5.019A2.25 2.25 0 002 7.25v5.5A2.25 2.25 0 004.25 15h7.5c.606 0 1.156-.24 1.56-.629l1.16 1.16a.75.75 0 101.06-1.061l-14-14A.75.75 0 00.47 1.53L3.958 5.02zM4.25 6.5a.75.75 0 00-.75.75v5.5c0 .414.336.75.75.75h7.5a.749.749 0 00.5-.19L5.44 6.5H4.25z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);