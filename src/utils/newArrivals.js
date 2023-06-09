import whitesneakers from '../../src/assets/images/shop/whiteSneaker.jpg'
import qiyshiq from '../../src/assets/images/featured/qiyshiq.jpg'
import blue from '../../src/assets/images/featured/blue.jpg'
import pink from '../../src/assets/images/featured/pink.jpg'
import watchesImage1 from '../../src/assets/images/watches/1.jpg'
import watchesImage2 from '../../src/assets/images/watches/2.jpg'
import watchesImage3 from '../../src/assets/images/watches/3.jpg'
import watchesImage4 from '../../src/assets/images/watches/4.jpg'
import shoesImage1 from '../../src/assets/images/shoes/bir.jpg'
import shoesImage2 from '../../src/assets/images/shoes/ikki.jpg'
import shoesImage3 from '../../src/assets/images/shoes/uch.jpg'
import shoesImage4 from '../../src/assets/images/shoes/tort.jpg'
import newArrivals1 from '../../src/assets/images/new/1.jpg'
import newArrivals2 from '../../src/assets/images/new/2.jpg'
import newArrivals3 from "../../src/assets/images/new/3.jpg"
import newArrivals4 from '../../src/assets/images/new/4.jpg'
import { useTranslation } from 'react-i18next'


function useProducts() {

    const { t } = useTranslation()

    const products = () => [
        {
            id: '1',
            title: t("new_arrivals.sports_boots"),
            price: 92,
            rating: [1.3, 3.2],
            colors: ['red', 'black', 'blue', 'white'],
            description: t("new_arrivals.mock_desc"),
            quantity: 1,
            liked: false,
            featuredImage: whitesneakers,
            category: 'featuredProducts',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                whitesneakers,
                qiyshiq,
                blue,
                pink,
            ]
        },
        {
            id: '2',
            title: t("new_arrivals.sports_shoes"),
            price: 73,
            rating: [2, 3.5],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: qiyshiq,
            category: 'featuredProducts',
            sizes: ['X', 'S', 'X', 'SS'],
            images: [
                whitesneakers,
                qiyshiq,
                blue,
                pink,
            ]
        },
        {
            id: '3',
            title: t("new_arrivals.sports_bugs"),
            price: 100,
            rating: [3, 3.5],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: blue,
            category: 'featuredProducts',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                whitesneakers,
                qiyshiq,
                blue,
                pink,
            ]
        },
        {
            id: '4',
            title: t("new_arrivals.sports_cap"),
            price: 65,
            rating: [2.5, 3],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: pink,
            category: 'featuredProducts',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                whitesneakers,
                qiyshiq,
                blue,
                pink,
            ]
        },

        {
            id: '5',
            title: t("new_arrivals.sports_boots"),
            price: 92,
            rating: [2.4, 3.2],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: watchesImage1,
            category: 'watches',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                watchesImage1,
                watchesImage2,
                watchesImage3,
                watchesImage4,
            ]
        },
        {
            id: '6',
            title: t("new_arrivals.sports_shoes"),
            price: 73,
            rating: [2, 3.5],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: watchesImage2,
            category: 'watches',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                watchesImage1,
                watchesImage2,
                watchesImage3,
                watchesImage4,
            ]
        },
        {
            id: '7',
            title: t("new_arrivals.sports_bugs"),
            price: 100,
            rating: [3, 3.5],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: watchesImage3,
            category: 'watches',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                watchesImage1,
                watchesImage2,
                watchesImage3,
                watchesImage4,
            ]
        },
        {
            id: '8',
            title: t("new_arrivals.sports_cap"),
            price: 65,
            rating: [2.5, 3],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: watchesImage4,
            category: 'watches',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                watchesImage1,
                watchesImage2,
                watchesImage3,
                watchesImage4,
            ]
        },
        {
            id: '9',
            title: t("new_arrivals.sports_boots"),
            price: 92,
            rating: [1.3, 3.2],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: shoesImage1,
            category: 'sports',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                shoesImage1,
                shoesImage2,
                shoesImage3,
                shoesImage4,
            ]
        },
        {
            id: '10',
            title: t("new_arrivals.sports_shoes"),
            price: 73,
            rating: [2, 3.5],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: shoesImage2,
            category: 'sports',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                shoesImage1,
                shoesImage2,
                shoesImage3,
                shoesImage4,
            ]
        },
        {
            id: '11',
            title: t("new_arrivals.sports_bugs"),
            price: 100,
            rating: [3, 3.5],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: shoesImage3,
            category: 'sports',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                shoesImage1,
                shoesImage2,
                shoesImage3,
                shoesImage4,
            ]
        },
        {
            id: '12',
            title: t("new_arrivals.sports_cap"),
            price: 65,
            rating: [2.5, 3],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: shoesImage4,
            category: 'sports',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                shoesImage1,
                shoesImage2,
                shoesImage3,
                shoesImage4,
            ]
        },
        {
            id: '13',
            title: t("new_arrivals.sports_cap"),
            price: 65,
            rating: [2.5, 3],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: newArrivals1,
            category: 'new-arrivals',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                newArrivals1,
                newArrivals2,
                newArrivals3,
                newArrivals4,
            ]
        },
        {
            id: '14',
            title: t("new_arrivals.sports_cap"),
            price: 65,
            rating: [2.5, 3],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: newArrivals2,
            category: 'new-arrivals',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                newArrivals1,
                newArrivals2,
                newArrivals3,
                newArrivals4,
            ]
        },
        {
            id: '15',
            title: t("new_arrivals.sports_cap"),
            price: 65,
            rating: [2.5, 3],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: newArrivals3,
            category: 'new-arrivals',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                newArrivals1,
                newArrivals2,
                newArrivals3,
                newArrivals4,
            ]
        },
        {
            id: '16',
            title: t("new_arrivals.sports_cap"),
            price: 65,
            rating: [2.5, 3],
            colors: ['red', 'black', 'blue', 'white'],
            description: '',
            quantity: 1,
            liked: false,
            featuredImage: newArrivals4,
            category: 'new-arrivals',
            sizes: ['X', 'S', 'XX', 'SS'],
            images: [
                newArrivals1,
                newArrivals2,
                newArrivals3,
                newArrivals4,
            ]
        },
    ]


    return { products }
}

export default useProducts