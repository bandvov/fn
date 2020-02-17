import React from 'react'
import ProductListItems from '../ProductListItems'
import Row from '../Row'
import FilterItems from '../FilterItems'
import SortByPrice from '../SortByPrice'
import SortByRate from '../SortByRate'
import 'materialize-css'

let key = 1

const products = [
    { key: key++, price: 111, description: 'desription', img: 'http://www.onestopenglish.com/pictures/100xAny/6/2/4/11624_OSE_categories_100x100_teacher.jpg' },
    { key: key++, price: 111, description: 'desription', img: 'http://www.onestopenglish.com/pictures/100xAny/6/2/4/11624_OSE_categories_100x100_teacher.jpg' },
    { key: key++, price: 111, description: 'desription', img: 'http://www.onestopenglish.com/pictures/100xAny/6/2/4/11624_OSE_categories_100x100_teacher.jpg' },
    { key: key++, price: 111, description: 'desription', img: 'http://www.onestopenglish.com/pictures/100xAny/6/2/4/11624_OSE_categories_100x100_teacher.jpg' },
    { key: key++, price: 111, description: 'desription', img: 'http://www.onestopenglish.com/pictures/100xAny/6/2/4/11624_OSE_categories_100x100_teacher.jpg' },
    { key: key++, price: 111, description: 'desription', img: 'http://www.onestopenglish.com/pictures/100xAny/6/2/4/11624_OSE_categories_100x100_teacher.jpg' },


]

const App = () => {
    return (
        <div>
            <Row left={<FilterItems />} right={<ProductListItems items={products} />}></Row>
        </div>
    )
}
export default App