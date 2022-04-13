import React from 'react'
import {NavLink} from 'react-router-dom'
const Breadcrumb = () => {
    return (
        <>
        
              <div className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__links">
                        <NavLink to="/"><i className="fa fa-home"></i> Home</NavLink>
                        <span>Shop</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Breadcrumb
