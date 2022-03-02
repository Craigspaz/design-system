import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconHeadphones24 = forwardRef<SVGSVGElement, IconProps>(
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
                    d="M12 3.5c-2.26 0-4.425.874-6.018 2.424A8.128 8.128 0 003.5 11.75V13h2.75A2.75 2.75 0 019 15.75v3.5A2.75 2.75 0 016.25 22h-1.5A2.75 2.75 0 012 19.25v-7.5a9.628 9.628 0 012.936-6.902A10.132 10.132 0 0112 2c2.646 0 5.187 1.022 7.064 2.848A9.629 9.629 0 0122 11.75v7.5A2.75 2.75 0 0119.25 22h-1.5A2.75 2.75 0 0115 19.25v-3.5A2.75 2.75 0 0117.75 13h2.75v-1.25c0-2.181-.89-4.278-2.482-5.826A8.632 8.632 0 0012 3.5zm8.5 11h-2.75c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V14.5zm-17 0h2.75c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-1.5c-.69 0-1.25-.56-1.25-1.25V14.5z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);