type ProductData = {
    id: string,
	price: number
}
type ProductsData = {
	bread: ProductData[],
	milk: ProductData[],
	meat: ProductData[],
	coffee: ProductData[],
	tea?: ProductData[]
}

export type Entries = [keyof ProductsData, ProductData[]][];

export const productsData:ProductsData = {
	bread: [
		{
			id: '2490035000010',
			price: 40
		},
		{
			id: '4601347007934',
			price: 35
		},
		{
			id: '4607065714192',
			price: 120
		},
		{
			id: '4601347002212',
			price: 40
		},
		{
			id: '4607001415046',
			price: 220
		},
		{
			id: '4607016455341',
			price: 70
		}
	],
	milk: [
		{
			id: '4607076490177',
			price: 90,
		},
		{
			id: '4600657410960',
			price: 85,
		},
		{
			id: '4602048004109',
			price: 76,
		},
		{
			id: '4607060501445',
			price: 87,
		},
		{
			id: '4600657412117',
			price: 97,
		},
		{
			id: '4620016810354',
			price: 56,
		},
		{
			id: '4600605022207',
			price: 35,
		}
	],
	meat: [{
		id: '2800110010146',
		price: 350,
	},
	{
		id: '4630016230588',
		price: 410,
	},
	{
		id: '4670012880424',
		price: 340,
	},
	{
		id: '4650063861634',
		price: 310,
	},
	{
		id: '4640010204980',
		price: 270,
	},
	{
		id: '4610142390080',
		price: 310,
	},
	{
		id: '4607177072746',
		price: 370,
	},
	],
	coffee: [{
		id: '4607001771555',
		price: 350,
	},
	{
		id: '4620007590951',
		price: 410,
	},
	{
		id: '7610121710622',
		price: 450,
	},
	{
		id: '7613034227775',
		price: 310,
	},
	{
		id: '7613032573867',
		price: 270,
	},
	{
		id: '7613036942683',
		price: 710,
	},
	{
		id: '5760466995764',
		price: 370,
	},
	],
	tea: [{
		id: '4607051158238',
		price: 250,
	},
	{
		id: '4791045000150',
		price: 210,
	},
	{
		id: '9312631150674',
		price: 350,
	},
	{
		id: '4605246008986',
		price: 310,
	},
	{
		id: '4603422004104',
		price: 270,
	},
	{
		id: '8717163842218',
		price: 410,
	},
	{
		id: '7613035251779',
		price: 370,
	},
	],
};
