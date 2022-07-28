import { forwardRef, useMemo } from 'react';
import { IconProps } from './types';

export const IconSnyk24 = forwardRef<SVGSVGElement, IconProps>(
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
                    <path
                        fillRule="evenodd"
                        d="M16.11 9.49c.239 2.176.309 3.663.187 3.977-.108.28-.535.877-.896 1.355l.523 4.875L12 22.535 8.992 20.36l.328-3.057c-.178-.673-.222-1.407-.232-1.76l-.486 4.535-.52-.376.522-4.87c-.362-.48-.795-1.084-.904-1.366-.121-.315-.051-1.801.187-3.978l.003-.033-.762-2.07v-.041c0-.903 1.159-3.32 1.844-4.604l.334-.628.708 4.982.426.704.105-.036c.36-.122.902-.268 1.45-.268.579 0 1.161.168 1.457.269l.106.035.425-.704.708-4.982.334.627c.686 1.286 1.845 3.702 1.845 4.605v.042l-.763 2.07.004.032zm.158-2.206c-.042-.594-.655-2.017-1.24-3.216l-.144 1.011c.021.166.269 1.979 1.056 3.094l.328-.89zm-2.072 4.096c.062-.069.592-.674-.116-.674-.64 0-1.101.52-1.223.674h1.34zm-.645.705a.15.15 0 00.147-.13.153.153 0 00-.043-.13l.003-.002.003-.003h-.43v.022c0 .31.25.563.558.563a.561.561 0 00.56-.563v-.022h-.426c.08.051.127.145.113.245a.247.247 0 01-.279.213.247.247 0 01-.206-.193zm-.964 6.574a1.317 1.317 0 01-.258-.132.478.478 0 01-.33.096.48.48 0 01-.33-.097 1.306 1.306 0 01-.258.133c.141.163.336.245.588.245.252 0 .446-.082.588-.245zM9.97 12.085a.151.151 0 00.103-.259.024.024 0 00.004-.003.044.044 0 01.003-.003h-.43v.022c0 .31.25.563.558.563.309 0 .56-.252.56-.563v-.022h-.426a.25.25 0 01-.166.457.247.247 0 01-.206-.192zm-.052-1.38c-.708 0-.179.606-.116.675h1.339c-.123-.154-.583-.674-1.223-.674zm-.94-6.637C8.395 5.267 7.78 6.69 7.739 7.284l.336.911c.73-1.014 1.001-2.62 1.06-3.03L8.98 4.068zm.572 11.305c0 .051.003 1.265.317 2.133.254.7.82.775 1.053.775.6 0 .844-.55.855-.573v-.28l-.004-.002s.01-.235-.023-.313c-.06-.14-.191-.107-.293.074a.09.09 0 00-.006.014.105.105 0 01-.005.011c-.287-.208-.578-.469-.578-.668 0-.184.228-.506.237-.519l-.155-2.942-.987 1.135-.63.186c-.404-.532-.771-1.053-.845-1.223-.052-.245.038-1.852.241-3.687l.016-.143-.109-.296c.3-.345.566-.785.793-1.312l.672 1.112.482-.208c.007-.004.73-.31 1.414-.31H12v-.374h-.003c-.77 0-1.548.334-1.562.34l-.185.08-.68-1.127-.1-.699-.189.54c-.272.777-.613 1.386-1.014 1.809l-.06.063.158.428-.006.056c-.143 1.29-.33 3.474-.226 3.84l.004.012c.117.304.898 1.34 1.362 1.92l.052.065v.083zm1.297 3.373c.065.591.715.81 1.16.81.438 0 1.08-.219 1.143-.81l-.072.002c-.051 0-.102-.003-.151-.008-.199.386-.56.51-.928.51-.369 0-.732-.123-.93-.51a1.434 1.434 0 01-.149.009c-.02 0-.038-.002-.057-.003h-.016zm3.6-3.456l.052-.065c.16-.198.355-.45.55-.709l-1.012-.298-.987-1.135-.155 2.942c.01.014.237.335.237.518 0 .2-.292.46-.58.67a.158.158 0 01-.003-.012l-.007-.014c-.101-.181-.232-.214-.292-.075-.034.08-.023.314-.023.314l-.005.003v.268c.017.037.264.584.856.584.232 0 .799-.076 1.052-.775.314-.868.318-2.082.318-2.133v-.083z"
                        clipRule="evenodd"
                    />
                    <path d="M11.995 7.121c-.513 0-1.015.115-1.391.23l-.233-.385-.155-1.094c.554-.038 1.152-.06 1.792-.06.688 0 1.774.058 1.774.058l-.155 1.096-.234.386a4.922 4.922 0 00-1.398-.23zM17.241 7.345c0-.267-.08-.626-.208-1.03.992.216 1.525.42 1.525.42v11.057l-2.244 1.622-.487-4.54c.45-.606.725-1.034.816-1.272.186-.48.019-2.481-.157-4.099l.755-2.05v-.108zM7.354 13.602c-.185-.48-.018-2.481.158-4.099l-.755-2.05v-.108c0-.266.08-.625.207-1.028-.992.216-1.525.418-1.525.418v11.058l2.253 1.628.486-4.537c-.453-.61-.732-1.043-.824-1.282z" />
                </g>
            </svg>
        );
    }
);