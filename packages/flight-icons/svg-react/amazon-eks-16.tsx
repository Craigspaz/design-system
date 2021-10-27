import { forwardRef } from 'react';
import { IconProps } from './types';

export const IconAmazonEks16 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M8.088 12.098l3.185-1.81a.178.178 0 01.176 0l2.843 1.615a.172.172 0 010 .3l-6.204 3.524a.178.178 0 01-.176 0L1.088 11.85A.173.173 0 011 11.7V3.947c0-.061.033-.118.088-.15L7.292.274a.176.176 0 01.264.15v3.23a.172.172 0 01-.088.15l-3.186 1.81a.173.173 0 00-.088.149v4.124c0 .062.034.119.088.15l3.63 2.062c.054.03.122.03.176 0z" />
                    <path d="M8.532 3.803l3.186 1.81a.173.173 0 01.088.149v3.62c0 .06.033.118.088.149l2.842 1.615a.176.176 0 00.264-.15V3.947a.173.173 0 00-.088-.15L8.708.274a.176.176 0 00-.264.15v3.23c0 .062.034.119.088.15z" />
                    <path d="M6.381 10.148h.897V8.121l1.837 2.027h1.164L7.997 7.642l2.168-2.195H8.963L7.278 7.146V5.447h-.897v4.701z" />
                </g>
            </svg>
        );
    }
);
