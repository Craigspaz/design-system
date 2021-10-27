import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconFolderUsers24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M2.5 4.75c0-.69.56-1.25 1.25-1.25h5.672c.331 0 .649.132.883.366l.829.829a2.75 2.75 0 001.944.805h7.172c.69 0 1.25.56 1.25 1.25v9a.75.75 0 001.5 0v-9A2.75 2.75 0 0020.25 4h-7.172a1.25 1.25 0 01-.883-.366l-.829-.829A2.75 2.75 0 009.422 2H3.75A2.75 2.75 0 001 4.75v14.5A2.75 2.75 0 003.75 22h1.5a.75.75 0 000-1.5h-1.5c-.69 0-1.25-.56-1.25-1.25V8.5h16.75a.75.75 0 000-1.5H2.5V4.75z" />
                    <path d="M8.318 17.928A2.783 2.783 0 0110.375 17h4.25c.786 0 1.524.344 2.057.928.53.583.818 1.359.818 2.155v1.167a.75.75 0 11-1.5 0v-1.167c0-.441-.16-.852-.427-1.145a1.284 1.284 0 00-.948-.438h-4.25c-.34 0-.684.148-.948.438A1.705 1.705 0 009 20.083v1.167a.75.75 0 11-1.5 0v-1.167c0-.796.287-1.572.818-2.155z" />
                    <path
                        fillRule="evenodd"
                        d="M12.5 10a3 3 0 100 6 3 3 0 000-6zM11 13a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                        clipRule="evenodd"
                    />
                    <path d="M18.275 17.559a.75.75 0 01.916-.534 3.08 3.08 0 011.667 1.12c.417.549.642 1.221.642 1.912v1.193a.75.75 0 11-1.5 0v-1.192c0-.367-.12-.72-.337-1.007a1.58 1.58 0 00-.854-.576.75.75 0 01-.534-.916zM17.186 10.023a.75.75 0 00-.372 1.454A1.578 1.578 0 0118 13a1.57 1.57 0 01-1.186 1.523.75.75 0 10.372 1.454A3.078 3.078 0 0019.5 13a3.07 3.07 0 00-2.314-2.977z" />
                </g>
            </svg>
        );
    }
);
