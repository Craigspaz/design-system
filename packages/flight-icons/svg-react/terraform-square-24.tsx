import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconTerraformSquare24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path d="M5 9.05V4l4.349 2.526v5.05L5 9.052zM9.825 6.82l4.35 2.524v5.052l-4.35-2.526V6.82zM14.651 9.344L19 6.819v5.05l-4.349 2.527V9.344zM9.825 17.474L14.174 20v-5.05l-4.349-2.527v5.051z" />
                    <path
                        fillRule="evenodd"
                        d="M0 3.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C1.52 0 2.08 0 3.2 0h17.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C24 1.52 24 2.08 24 3.2v17.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C22.48 24 21.92 24 20.8 24H3.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C0 22.48 0 21.92 0 20.8V3.2zM3.2 1h17.6c.577 0 .949 0 1.232.024.272.022.372.06.422.085a1 1 0 01.437.437c.025.05.063.15.085.422C23 2.25 23 2.623 23 3.2v17.6c0 .577 0 .949-.024 1.232-.022.272-.06.372-.085.422a1 1 0 01-.437.437c-.05.025-.15.063-.422.085C21.75 23 21.377 23 20.8 23H3.2c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085a1 1 0 01-.437-.437c-.025-.05-.063-.15-.085-.422C1 21.75 1 21.377 1 20.8V3.2c0-.577 0-.949.024-1.232.022-.272.06-.373.085-.422a1 1 0 01.437-.437c.05-.025.15-.063.422-.085C2.25 1 2.623 1 3.2 1z"
                        clipRule="evenodd"
                    />
                </g>
            </svg>
        );
    }
);
