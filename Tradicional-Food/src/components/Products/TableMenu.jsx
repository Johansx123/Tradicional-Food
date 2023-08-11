import { useFilter } from "../../hooks/useFilter";
import { Menu1 } from "./Menu1";
import { Menu2 } from "./Menu2";

import { Products } from "./Products";
const menu = {
    version: {
        BLACK: Symbol()
    }
}


// eslint-disable-next-line react/prop-types
export function TableMenu({ version ,title, products, filter}) {

    const versionValue = menu.version[version];
    const filterBySuper  = useFilter(products,'category','SuperTradicional')
    const filterByTradicional  = useFilter(products,'category','Tradicional')
    const filterBySoda = useFilter(products,'category', 'soda')

    const productsFiltered = {
        Tradicional: filterByTradicional,
        SuperTradicional: filterBySuper,
        Soda : filterBySoda
    }

    switch (versionValue) {
        case menu.version.BLACK:
            return (
                <Menu2 title={title}>
                 <Products products={productsFiltered[filter]} />
                </Menu2>
            )
        default:
            return (
                <Menu1 >
                    <Products products={productsFiltered[filter]} />
                </Menu1>)
    }
}