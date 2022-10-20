import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={500}
		height={500}
		id="Layer_1"
		style={{
			enableBackground: 'new 0 0 500 500',
		}}
		xmlSpace="preserve"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<style>
			{
				'.st0{fill:#38595e}.st1{fill:#e3d652}.st2{fill:#f3f0e9;stroke:#38595e;stroke-width:9;stroke-miterlimit:10}'
			}
		</style>
		<title />
		<g id="Layer_2_1_">
			<g id="Layer_1-2">
				<path
					className="st0"
					d="M500 262.8c0 91.8-50.4 176.3-131.1 220H131.1C9.7 417.1-35.6 265.4 30.1 144S247.4-22.8 368.9 42.9C449.6 86.5 500 170.9 500 262.8z"
				/>
				<path
					className="st1"
					d="M250 72.8c49.7 0 90 40.3 90 90v200H160v-200c0-49.8 40.3-90 90-90z"
				/>
				<path
					className="st2"
					d="M400 346v136.8H100V346c0-25.1 17.7-46.8 42.4-51.7l20.1-4 33.3-6.7c35.8-7.1 72.6-7.1 108.4 0l36.2 7.2 17.2 3.5c24.7 4.9 42.4 26.5 42.4 51.7z"
				/>
				<path className="st2" d="M330 362.8v31.4a48.02 48.02 0 0 1 0 58.6v30" />
				<circle className="st2" cx={315} cy={187.8} r={15} />
				<circle className="st2" cx={185} cy={187.8} r={15} />
				<path
					className="st2"
					d="M304.2 283.6c-8-1.6-16.1-2.8-24.2-3.7v-37.1h-60v37.1c-8.1.9-16.2 2.1-24.2 3.7l-25.8 5.2v4c39.2 44.2 106.9 48.2 151.1 8.9 3.2-2.8 6.1-5.8 8.9-8.9v-4l-25.8-5.2z"
				/>
				<path
					className="st2"
					d="M310 142.8v60c0 33.1-26.9 60-60 60s-60-26.9-60-60v-60M320 142.8s-50 0-70-20c-20 20-70 20-70 20"
				/>
				<circle className="st0" cx={275} cy={177.8} r={5} />
				<circle className="st0" cx={225} cy={177.8} r={5} />
				<path
					className="st2"
					d="M270 212.8c0 11-9 20-20 20s-20-9-20-20M170 362.8v31.4a48.02 48.02 0 0 0 0 58.6v30"
				/>
				<path
					className="st1"
					d="M250 375.6c-9.1-9.1-23.8-9.1-32.9 0-9.1 9.1-9.1 23.8 0 32.9l32.9 32.9 32.9-32.9c9.1-9.1 9.1-23.8 0-32.9-9.1-9.1-23.8-9.1-32.9 0z"
				/>
			</g>
		</g>
	</svg>
);

export default SvgComponent;
