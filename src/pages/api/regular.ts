// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { RegularMenuItem } from 'src/types/regularModel'

const regularMenuItems: RegularMenuItem[] = [
  {
    id: 1,
    price: "3.50",
    rating: 160,
    src: '/burger.png',
    name: 'Chicken Burger',
  },
  {
    id: 2,
    price: "4.20",
    rating: 142,
    src: '/pizza-2.png',
    name: 'Chicken Pizza',
  },
  {
    id: 3,
    price: "5.00",
    rating: 123,
    src: '/fried-chicken.png',
    name: 'Chicken Fry',
  },
  {
    id: 4,
    price: "4.80",
    rating: 112,
    src: '/sandwich.png',
    name: 'Grill Sandwich',
  },
  {
    id: 5,
    price: "3.63",
    rating: 152,
    src: '/taco.png',
    name: 'Taco Traifi',
  },
  {
    id: 6,
    price: "6.50",
    rating: 163,
    src: '/ramen.png',
    name: `Noodle's Ramen`,
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegularMenuItem[]>
) {
  res.status(200).json(regularMenuItems)
}
