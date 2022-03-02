import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconMessageCircle16 = forwardRef<SVGSVGElement, IconProps>(
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
                <path
                    fill={color}
                    fillRule="evenodd"
                    d="M8.231 2.5a5.269 5.269 0 11-2.43 9.944 1.18 1.18 0 00-.535-.122 2.432 2.432 0 00-.424.038c-.27.046-.577.13-.879.225-.272.085-.557.186-.834.29.103-.275.203-.557.288-.828.096-.302.18-.612.225-.885.023-.136.04-.283.037-.428a1.193 1.193 0 00-.123-.534 5.269 5.269 0 014.675-7.7zM2.058 14.934l.002-.001.01-.004.037-.017a28.983 28.983 0 01.658-.281 21.485 21.485 0 011.649-.616c.274-.086.506-.147.678-.176.049-.008.086-.012.113-.015a6.768 6.768 0 10-3.028-3.026 1.384 1.384 0 01-.014.119 5.296 5.296 0 01-.176.679c-.172.545-.42 1.17-.618 1.646a31.45 31.45 0 01-.28.65l-.017.036-.004.01v.002a.75.75 0 00.99.994z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }
);