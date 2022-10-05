import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export type PromoCodes = {
	'new50': (cost:number) => number,
	'catch200': (cost:number) => number,
	'fresh20': (cost:number) => number
}

// const totalCost = useSelector((state:RootState) => state.totalCost);

export const promoCodes:PromoCodes = {
        new50: (cost:number) => {
            return Math.floor(cost / 2)
        }, 
        catch200: (cost:number) => {
            if (cost >= 1500) {
                return 200
            }
            return 0;
        },
        fresh20: (cost:number) =>  {
            const now = new Date();
            const hour = now.getHours()

            if (hour < 12) {
                return Math.floor(cost * 20 / 100)
            }

            return 0;
        }
}