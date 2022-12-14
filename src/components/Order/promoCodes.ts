export type PromoCodes = {
	'new50': (cost:number, isFirst?:boolean) => number,
	'catch200': (cost:number) => number,
	'fresh20': (cost:number) => number,
	'promo'?:()=>number
}

export const promoCodes:PromoCodes = {
	new50: (cost:number, isFirst?:boolean) => {
		if (!isFirst) {
			return 0;
		}
		return Math.floor(cost / 2);
	}, 
	catch200: (cost:number) => {
		if (cost >= 1500) {
			return 200;
		}
		return 0;
	},
	fresh20: (cost:number) =>  {
		const now = new Date();
		const hour = now.getHours();

		if (hour < 12) {
			return Math.floor(cost * 20 / 100);
		}

		return 0;
	}
};