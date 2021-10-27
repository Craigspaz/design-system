import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconFileChange16 = forwardRef<SVGSVGElement, IconProps>(
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
                <g fill={color}>
                    <path
                        fillRule="evenodd"
                        d="M3.25 0A2.25 2.25 0 001 2.25v11.5A2.25 2.25 0 003.25 16h9.5A2.25 2.25 0 0015 13.75V5.457c0-.331-.132-.65-.366-.884L10.427.366A1.25 1.25 0 009.543 0H3.25zM2.5 2.25a.75.75 0 01.75-.75H9v3.75c0 .414.336.75.75.75h3.75v7.75a.75.75 0 01-.75.75h-9.5a.75.75 0 01-.75-.75V2.25zm9.94 2.25L10.5 2.56V4.5h1.94zM9.583 9.156z"
                        clipRule="evenodd"
                    />
                    <path d="M5.5 8.595C5.77 8.325 6.23 8 6.876 8c.904 0 1.44.71 1.7 1.017.37.443.464.483.55.483.194 0 .375-.18.458-.344a.75.75 0 011.338.68 2.222 2.222 0 01-.422.57c-.27.269-.73.594-1.374.594-.904 0-1.44-.71-1.7-1.017-.37-.443-.465-.483-.55-.483-.2 0-.367.181-.458.344a.75.75 0 01-1.338-.68c.107-.212.254-.402.422-.57z" />
                </g>
            </svg>
        );
    }
);
