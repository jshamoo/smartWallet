interface Record {
  Date: string,
  Amount: number,
  Description: string,
  Category: string
}

export const trans: Array<Record> = [
  { "Date": "2019-08-20", "Amount": 100.82, "Description": "Water Bill", "Category": "Bill"},
  { "Date": "2019-08-28", "Amount": 137.08, "Description": "Raphl", "Category": "Grocery" },
  { "Date": "2020-01-10", "Amount": 209.97, "Description": "Car Insurance", "Category": "Bill" },
  { "Date": "2019-06-18", "Amount": 58.91, "Description": "Garden", "Category": "Hobby" },
  { "Date": "2020-03-03", "Amount": 53.48, "Description": "Books", "Category": "Hobby"},
  { "Date": "2019-10-29", "Amount": 7.34, "Description": "Clothing", "Category": "Clothing" },
  { "Date": "2019-06-03", "Amount": 288.59, "Description": "Clothing", "Category": "Clothing"},
  { "Date": "2019-04-05", "Amount": 19.85, "Description": "Pizza D'oro", "Category": "Food"},
  { "Date": "2019-05-30", "Amount": 97.45, "Description": "Toaster Oven", "Category": "House" },
  { "Date": "2020-01-14", "Amount": 64.44, "Description": "Shoes", "Category": "Clothing" },
];

export const cate: Array<Object> = [
  {"name": "Grocery", "budget": 1000 },
  { "name": "Hobby", "budget": 2000},
  { "name": "Bill", "budget": 1000}
]
