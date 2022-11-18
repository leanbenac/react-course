import { useState } from 'react'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', ' vegeta']);
    
    console.log(categories);

    const onAddCategory = () => {
        setCategories([...categories, 'Valorant'])
        // setCategories( cat => [...cat, 'valorant'])
    }


    return (
        <>
            {/* {titulo} */}
            <h1>GifExpertApp</h1>

            {/* {input} */}

            <ol>
                {categories.map( category => {
                    return <li key={ category} >{category}</li>
                })}
            </ol>
                <button onClick={ onAddCategory } > Agregar categoria </button>
            {/* {Listado gif} */}
            {/* {gitItem} */}
        </>
    )
}

export default GifExpertApp
