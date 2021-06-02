import React from 'react'

function  Items (){
    const items=[
        { id:1,
          Name:'Kala'

        },
        {
            id:2,
            Name:'Mathavi'
        }
    ]


 return (
            <React.Fragment>
                {
                    items.map(item => (
                        <React.Fragment key={item.id}>
                            <h1>Name</h1>
                            <p>{item.name}</p>
                        </React.Fragment>
                    ))
                }
            </React.Fragment>
        )
     }
     export default Items;
     
    
