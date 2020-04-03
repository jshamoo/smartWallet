interface Record {
  id: number;
  Date: string,
  Amount: number,
  Description: string,
  Category: string
}

interface Category {
  id: number;
  name: string,
  budget: number
}


export const trans: Array<Record> = [
  { "id": 1, "Date": "2019-08-28", "Amount": 137.08, "Description": "Raphl", "Category": "Grocery" },
  { "id": 2, "Date": "2019-08-20", "Amount": 100.82, "Description": "Water Bill", "Category": "Bill"},
  { "id": 3, "Date": "2020-01-10", "Amount": 209.97, "Description": "Car Insurance", "Category": ""},
  { "id": 4, "Date": "2019-06-18", "Amount": 58.91, "Description": "Garden", "Category": ""},
  { "id": 5, "Date": "2020-03-03", "Amount": 53.48, "Description": "Books", "Category": "Hobby"},
  { "id": 6, "Date": "2019-10-29", "Amount": 7.34, "Description": "Clothing", "Category": "Clothing" },
  { "id": 7, "Date": "2019-06-03", "Amount": 288.59, "Description": "Clothing", "Category": ""},
  { "id": 8, "Date": "2019-04-05", "Amount": 19.85, "Description": "Pizza D'oro", "Category": "Food"},
  { "id": 9, "Date": "2019-05-30", "Amount": 97.45, "Description": "Toaster Oven", "Category": "" },
  { "id": 10, "Date": "2020-01-14", "Amount": 64.44, "Description": "Shoes", "Category": "" },
];

export const cate: Array<Category> = [
  { "id": 1, "name": "Grocery", "budget": 1000 },
  { "id": 2, "name": "Hobby", "budget": 2000},
  { "id": 3, "name": "Bill", "budget": 1000},
  { "id": 4, "name": "Clothing", "budget": 1000 }
]
